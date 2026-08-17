/**
 * news.js: News system loader & renderer with pagination
 * Loads from news-data.json, supports vi/en/zh with real-time switching
 * Pagination: 7 articles per page (1 featured + 6 grid)
 */
var newsArticles = [];
var newsCategories = {};
let currentNewsCat = 'all';
let currentPage = 1;
const ITEMS_PER_PAGE = 7;

/* Featured anchors (category=all only): each anchor id is pinned as the
   featured article of the page with the same number: page 1 -> news-001,
   page 2 -> news-007, page 3 -> news-013. The anchor is lifted to the head
   of its own page; every other article keeps its existing date-desc order,
   so nothing is lost, duplicated, or reordered relative to its peers. */
var NEWS_FEATURED_ANCHORS = ['news-001', 'news-007', 'news-013'];

/**
 * Read page & category from URL search params and apply them.
 * Called once on DOMContentLoaded before the first renderNews().
 */
function readUrlParams() {
  var params = new URLSearchParams(window.location.search);
  var pageParam = params.get('page');
  var catParam = params.get('category');

  // --- Page ---
  if (pageParam) {
    var p = parseInt(pageParam, 10);
    if (!isNaN(p) && p > 0) {
      currentPage = p;
    }
  }

  // --- Category ---
  if (catParam) {
    var validCats = ['all', 'electrical-knowledge', 'electrical-safety', 'tech', 'guide',
      'industrial-solutions', 'smart-monitor', 'maintenance', 'applications', 'trends'];
    if (validCats.indexOf(catParam) !== -1) {
      currentNewsCat = catParam;
    }
  }

  // Clamp page to valid range (articles may not be loaded yet; clamping happens after load)
  // Sync filter button UI so the active category pill matches
  syncFilterButtons();
}

/**
 * Sync browser URL to current page & category without creating a new
 * history entry.  Uses replaceState so the Back button returns to the
 * correct page without cluttering history with every pagination click.
 */
function updateUrl() {
  var params = new URLSearchParams();
  if (currentPage > 1) params.set('page', currentPage);
  if (currentNewsCat !== 'all') params.set('category', currentNewsCat);
  var qs = params.toString();
  var url = window.location.pathname + (qs ? '?' + qs : '');
  history.replaceState(null, '', url);
}

/**
 * Update the active class + aria-pressed on filter buttons to match currentNewsCat.
 * Useful when restoring state from URL on page load.
 */
function syncFilterButtons() {
  var buttons = document.querySelectorAll('.news-filter-btn');
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var onclick = btn.getAttribute('onclick') || '';
    var match = onclick.match(/filterNews\('([^']+)'/);
    if (match) {
      if (match[1] === currentNewsCat) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
  }
}

/**
 * Save scroll state before navigating to a detail article.
 * Called from the delegated click handler on .read-more / .news-card-link.
 */
function saveScrollState(articleId) {
  try {
    sessionStorage.setItem('newsScrollRestore', JSON.stringify({
      articleId: articleId,
      scrollY: window.scrollY
    }));
  } catch (e) { /* quota exceeded or unavailable: silently ignore */ }
}

/**
 * If sessionStorage contains scroll-restore data, find the article card
 * and scroll it into view.  Only fires when returning via Back/Forward so
 * direct URL access is unaffected.  Clears the key after one successful
 * scroll so subsequent renders (language switch, pagination) won't re-trigger.
 */
function restoreScrollPosition() {
  var raw;
  try { raw = sessionStorage.getItem('newsScrollRestore'); } catch (e) { return; }
  if (!raw) return;

  // Only restore on back/forward navigation: skip direct URL access, refresh, etc.
  var navEntries = performance.getEntriesByType('navigation');
  if (navEntries.length > 0 && navEntries[0].type !== 'back_forward') {
    sessionStorage.removeItem('newsScrollRestore');
    return;
  }

  sessionStorage.removeItem('newsScrollRestore');

  var state;
  try { state = JSON.parse(raw); } catch (e) { return; }
  if (!state || !state.articleId) return;

  var el = document.getElementById('news-card-' + state.articleId);
  if (!el) return;

  // Single rAF lets the browser finish layout before we measure/scroll,
  // avoiding flicker from scrolling before the DOM has settled.
  requestAnimationFrame(function () {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/**
 * Set up a delegated click listener on the document that intercepts
 * clicks on "Đọc tiếp" / "Read article" links.  Saves the article ID
 * and current scroll position to sessionStorage so restoreScrollPosition()
 * can act on it when the user returns via Back button.
 */
function initScrollRestore() {
  document.addEventListener('click', function (e) {
    // Only plain left-clicks without modifier keys (ignore Ctrl+Click, middle-click, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    var link = e.target.closest('.read-more, .news-card-link, .featured-img-link, .featured-title-link, .news-card-img-link, .news-card-title-link');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    var match = href.match(/[?&]id=([^&]+)/);
    if (!match) return;

    saveScrollState(match[1]);
  });
}

/**
 * Sort articles newest-first by their localized date ("dd/mm/yyyy" in vi).
 * Stable: articles sharing a date keep their original relative order.
 */
function sortArticlesByDateDesc(list) {
  function parseDate(dateObj) {
    var raw = (dateObj && dateObj.vi) ? dateObj.vi : String(dateObj || '');
    var m = raw.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (!m) return 0;
    return new Date(parseInt(m[3], 10), parseInt(m[2], 10) - 1, parseInt(m[1], 10)).getTime();
  }
  return list.slice().sort(function (a, b) { return parseDate(b.date) - parseDate(a.date); });
}

function loadNewsData(callback) {
  fetch('assets/js/news-data.json')
    .then(function (response) {
      if (!response.ok) {
        console.error('Failed to load news data: HTTP ' + response.status);
        return;
      }
      return response.json();
    })
    .then(function (json) {
      if (!json) return;
      newsArticles = sortArticlesByDateDesc(json.articles || []);
      newsCategories = json.categories || {};
      if (callback) callback();
    })
    .catch(function (err) {
      console.error('Failed to load news data:', err);
    });
}

function tNews(obj) {
  if (!obj) return '';
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'vi';
  return obj[lang] || obj.vi || Object.values(obj)[0] || '';
}

function getPaginationText(key) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'vi';
  if (typeof translations !== 'undefined' && translations[lang] && translations[lang].page_news && translations[lang].page_news.pagination) {
    return translations[lang].page_news.pagination[key] || '';
  }
  // Fallback
  const defaults = {
    vi: { prev: '← Trước', next: 'Tiếp →', noArticles: 'Không có bài viết nào.' },
    en: { prev: '← Previous', next: 'Next →', noArticles: 'No articles found.' },
    zh: { prev: '← 上一页', next: '下一页 →', noArticles: '未找到文章。' }
  };
  return (defaults[lang] || defaults.vi)[key] || '';
}

/* ── Hero stats: real library size computed from loaded data ── */
function renderNewsStats() {
  var elA = document.getElementById('newsStatsArticles');
  var elC = document.getElementById('newsStatsCategories');
  if (elA) elA.textContent = newsArticles ? newsArticles.length : 0;
  if (elC) elC.textContent = newsCategories ? Object.keys(newsCategories).length : 0;
}

/* ── Sidebar "Bài viết mới nhất": up to 3 most recent not on current page.
      Hides the card when the filtered set fits on one page (nothing new to show). ── */
function renderLatestList(filtered, pageArticles) {
  var card = document.getElementById('newsLatestCard');
  var list = document.getElementById('newsLatestList');
  if (!card || !list) return;

  var shown = {};
  for (var i = 0; i < pageArticles.length; i++) shown[pageArticles[i].id] = true;

  var candidates = [];
  for (var j = 0; j < filtered.length; j++) {
    if (!shown[filtered[j].id]) candidates.push(filtered[j]);
    if (candidates.length >= 3) break;
  }

  if (candidates.length === 0) {
    card.style.display = 'none';
    list.innerHTML = '';
    return;
  }
  card.style.display = 'block';

  var html = '';
  for (var k = 0; k < candidates.length; k++) {
    var a = candidates[k];
    html += '<li><a class="latest-link" href="news-detail.html?id=' + a.id + '&page=' + currentPage + '&category=' + currentNewsCat + '"><span class="latest-date">' + tNews(a.date) + '</span>' + tNews(a.title) + '</a></li>';
  }
  list.innerHTML = html;
}

function filterNews(cat, btn) {
  currentNewsCat = cat;
  currentPage = 1;
  document.querySelectorAll('.news-filter-btn').forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  renderNews();
  updateUrl();
}

function buildArticleHTML(article, isFeatured) {
  if (!article) return '';
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'vi';
  const readmore = lang === 'vi' ? 'Đọc bài viết' : lang === 'en' ? 'Read article' : '阅读文章';
  const imgAlt = tNews(article.title);
  const catName = newsCategories[article.category] ? tNews(newsCategories[article.category]) : '';
  const date = tNews(article.date);
  const readTime = tNews(article.readTime);

  if (isFeatured) {
    return '<div class="featured-article" id="news-card-' + article.id + '"><div class="featured-inner"><a class="featured-img-link" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '" aria-label="' + imgAlt + '"><div class="featured-img"><img src="' + (article.featuredImage || article.image) + '" alt="' + imgAlt + '" loading="lazy" width="640" height="400"></div></a><div class="featured-body"><span class="news-tag">' + catName + '</span><div class="news-meta"><span>' + date + '</span><span>' + readTime + '</span></div><a class="featured-title-link" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '"><h2>' + tNews(article.title) + '</h2></a><p>' + tNews(article.excerpt) + '</p><a class="read-more" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '">' + readmore + ' →</a></div></div></div>';
  }
  return '<article class="news-card" id="news-card-' + article.id + '"><a class="news-card-img-link" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '" aria-label="' + imgAlt + '"><div class="news-card-img"><img src="' + article.image + '" alt="' + imgAlt + '" loading="lazy" width="640" height="400"></div></a><div class="news-card-body"><span class="news-tag">' + catName + '</span><div class="news-meta"><span>' + date + '</span><span>' + readTime + '</span></div><a class="news-card-title-link" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '"><h3>' + tNews(article.title) + '</h3></a><p>' + tNews(article.excerpt) + '</p><a class="news-card-link" href="news-detail.html?id=' + article.id + '&page=' + currentPage + '&category=' + currentNewsCat + '">' + readmore + ' →</a></div></article>';
}

function getFilteredArticles() {
  if (!newsArticles || newsArticles.length === 0) return [];
  if (currentNewsCat === 'all') return newsArticles.slice();
  var filtered = [];
  for (var i = 0; i < newsArticles.length; i++) {
    if (newsArticles[i].category === currentNewsCat) filtered.push(newsArticles[i]);
  }
  return filtered;
}

/**
 * Hoist the featured anchors to the head of their pages (category=all).
 * Anchor pages keep ITEMS_PER_PAGE size: anchor + (N-1) regular articles;
 * pages beyond the anchors flow from the remaining list as usual.
 */
function applyFeaturedAnchors(list) {
  if (currentNewsCat !== 'all' || !list || list.length === 0) return list;

  var anchorIdx = {};
  for (var i = 0; i < NEWS_FEATURED_ANCHORS.length; i++) {
    anchorIdx[NEWS_FEATURED_ANCHORS[i]] = i;
  }

  var anchors = [];   // slot i = anchor for page i+1 (may stay undefined)
  var rest = [];
  for (var j = 0; j < list.length; j++) {
    var slot = anchorIdx[list[j].id];
    if (slot === undefined) rest.push(list[j]);
    else anchors[slot] = list[j];
  }

  var hasAnchors = false;
  for (var k = 0; k < anchors.length; k++) {
    if (anchors[k]) { hasAnchors = true; break; }
  }
  if (!hasAnchors) return list;

  var result = [];
  var r = 0;
  for (var page = 0; page < anchors.length; page++) {
    if (anchors[page]) result.push(anchors[page]);
    var room = ITEMS_PER_PAGE - (anchors[page] ? 1 : 0);
    for (var n = 0; n < room && r < rest.length; n++) result.push(rest[r++]);
  }
  while (r < rest.length) result.push(rest[r++]);
  return result;
}

function goToPage(page) {
  currentPage = page;
  renderNews();
  updateUrl();
  // Scroll to news list area, accounting for fixed header height
  var target = document.getElementById('newsFeatured') || document.getElementById('newsGrid');
  if (target) {
    var header = document.querySelector('.site-header');
    var headerHeight = header ? header.offsetHeight : 44;
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

function renderPagination(totalItems) {
  var container = document.getElementById('newsPagination');
  if (!container) return;
  if (totalItems === 0) { container.innerHTML = ''; return; }

  var totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  var prevText = getPaginationText('prev');
  var nextText = getPaginationText('next');
  var prevDisabled = currentPage <= 1;
  var nextDisabled = currentPage >= totalPages;

  var html = '';
  // Previous button
  html += '<button class="pagination-btn pagination-prev" onclick="goToPage(' + (currentPage - 1) + ')"';
  if (prevDisabled) html += ' disabled style="opacity:0.35;cursor:default;pointer-events:none"';
  html += ' data-i18n="page_news.pagination.prev">' + prevText + '</button>';

  // Page number buttons
  for (var p = 1; p <= totalPages; p++) {
    var activeClass = (p === currentPage) ? ' active' : '';
    html += '<button class="pagination-btn pagination-num' + activeClass + '" onclick="goToPage(' + p + ')"';
    if (p === currentPage) html += ' disabled';
    html += '>' + p + '</button>';
  }

  // Next button
  html += '<button class="pagination-btn pagination-next" onclick="goToPage(' + (currentPage + 1) + ')"';
  if (nextDisabled) html += ' disabled style="opacity:0.35;cursor:default;pointer-events:none"';
  html += ' data-i18n="page_news.pagination.next">' + nextText + '</button>';

  container.innerHTML = html;

  // Re-apply translations on the newly created elements
  if (typeof updatePage === 'function') {
    updatePage();
  }
}

function renderNews() {
  if (!newsArticles || newsArticles.length === 0) return;

  var filtered = applyFeaturedAnchors(getFilteredArticles());
  var totalFiltered = filtered.length;

  // Clamp currentPage in case it's out of bounds (e.g. from a stale URL after category switch)
  var totalPages = Math.ceil(totalFiltered / ITEMS_PER_PAGE);
  if (totalPages > 0 && currentPage > totalPages) {
    currentPage = totalPages;
    updateUrl();
  }
  if (currentPage < 1) currentPage = 1;

  // Calculate pagination slice
  var startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  var endIdx = Math.min(startIdx + ITEMS_PER_PAGE, totalFiltered);
  var pageArticles = filtered.slice(startIdx, endIdx);

  // Hero stats + sidebar latest list (language-independent counts, localized content)
  renderNewsStats();
  renderLatestList(filtered, pageArticles);

  var featContainer = document.getElementById('newsFeatured');
  var grid = document.getElementById('newsGrid');

  // Handle empty state
  if (pageArticles.length === 0) {
    if (featContainer) featContainer.style.display = 'none';
    if (grid) {
      var noArticlesText = getPaginationText('noArticles');
      grid.innerHTML = '<div class="news-empty" data-i18n="page_news.pagination.noArticles">' + noArticlesText + '</div>';
    }
    renderPagination(0);
    return;
  }

  // Featured article = first of current page
  var featured = pageArticles[0];

  if (featContainer && featured) {
    featContainer.innerHTML = buildArticleHTML(featured, true);
    featContainer.style.display = 'block';
  }

  if (!grid) { renderPagination(totalFiltered); return; }

  // Grid articles = rest of current page
  var gridItems = pageArticles.length > 1 ? pageArticles.slice(1) : [];

  if (gridItems.length === 0) {
    grid.innerHTML = '';
  } else {
    var html = '';
    for (var i = 0; i < gridItems.length; i++) {
      html += buildArticleHTML(gridItems[i], false);
    }
    grid.innerHTML = html;
  }

  renderPagination(totalFiltered);

  /* ── Inject ItemList JSON-LD for the current page's articles ── */
  (function injectNewsItemList() {
    var oldSchema = document.getElementById('news-itemlist-schema');
    if (oldSchema) oldSchema.remove();
    var siteUrl = 'https://khktphuonghoang.com';
    var items = [];
    for (var i = 0; i < pageArticles.length; i++) {
      items.push({
        '@type': 'ListItem',
        'position': i + 1,
        'url': siteUrl + '/news-detail.html?id=' + (pageArticles[i].id || '')
      });
    }
    var schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': items
    };
    var scriptEl = document.createElement('script');
    scriptEl.type = 'application/ld+json';
    scriptEl.id = 'news-itemlist-schema';
    scriptEl.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptEl);
  })();

  // Re-apply translations
  if (typeof updatePage === 'function') {
    updatePage();
  }
}

function initNews() {
  loadNewsData(function () { renderNews(); });
}

/**
 * Called by setLanguage() in phong.js when user switches language.
 * Re-renders the news listing in the new language while preserving:
 * - current category filter
 * - current page (or nearest valid page if total pages changed)
 */
function refreshNewsLanguage() {
  var filtered = getFilteredArticles();
  var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  renderNews();
}

// Attach to global namespace (created by phong.js)
if (window.PhuongHoang) {
  window.PhuongHoang.newsArticles = newsArticles;
  window.PhuongHoang.newsCategories = newsCategories;
  window.PhuongHoang.currentNewsCat = currentNewsCat;
  window.PhuongHoang.currentPage = currentPage;
  window.PhuongHoang.loadNewsData = loadNewsData;
  window.PhuongHoang.tNews = tNews;
  window.PhuongHoang.filterNews = filterNews;
  window.PhuongHoang.buildArticleHTML = buildArticleHTML;
  window.PhuongHoang.renderNews = renderNews;
  window.PhuongHoang.renderPagination = renderPagination;
  window.PhuongHoang.goToPage = goToPage;
  window.PhuongHoang.initNews = initNews;
  window.PhuongHoang.refreshNewsLanguage = refreshNewsLanguage;
  window.PhuongHoang.renderNewsStats = renderNewsStats;
  window.PhuongHoang.renderLatestList = renderLatestList;
  window.PhuongHoang.readUrlParams = readUrlParams;
  window.PhuongHoang.updateUrl = updateUrl;
  window.PhuongHoang.syncFilterButtons = syncFilterButtons;
  window.PhuongHoang.saveScrollState = saveScrollState;
  window.PhuongHoang.restoreScrollPosition = restoreScrollPosition;
  window.PhuongHoang.initScrollRestore = initScrollRestore;
}
