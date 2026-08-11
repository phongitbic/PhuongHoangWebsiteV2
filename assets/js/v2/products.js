/**
 * products.js — Mock data for product catalog
 * Used by product listing pages and product detail page.
 * No backend required; all data is static sample data.
 */

var productData = {
  categories: {
    industrial: {
      id: 'industrial',
      name: {
        vi: 'Thiết bị an toàn điện Công nghiệp',
        en: 'Industrial Electrical Safety Equipment',
        zh: '工业电气安全设备'
      },
      icon: '',
      description: {
        vi: 'Giải pháp bảo vệ điện toàn diện cho nhà máy, xí nghiệp và khu công nghiệp.',
        en: 'Comprehensive electrical protection solutions for factories and industrial zones.',
        zh: '为工厂和工业区提供全面的电气保护解决方案。'
      }
    },
    domestic: {
      id: 'domestic',
      name: {
        vi: 'Thiết bị an toàn điện Dân dụng',
        en: 'Domestic Electrical Safety Equipment',
        zh: '民用电气安全设备'
      },
      icon: '',
      description: {
        vi: 'Thiết bị bảo vệ điện thông minh cho hộ gia đình và chung cư.',
        en: 'Smart electrical protection devices for homes and apartments.',
        zh: '适用于家庭和公寓的智能电气保护设备。'
      }
    },
    surge: {
      id: 'surge',
      name: {
        vi: 'Thiết bị chống sốc điện cách ly',
        en: 'Surge Protection and Isolation Devices',
        zh: '电涌防护与隔离设备'
      },
      icon: '',
      description: {
        vi: 'Bảo vệ thiết bị điện khỏi xung điện áp và sốc điện nguy hiểm.',
        en: 'Protect electrical equipment from voltage surges and dangerous electric shocks.',
        zh: '保护电气设备免受电压浪涌和危险电击。'
      }
    },
    arc: {
      id: 'arc',
      name: {
        vi: 'Thiết bị dập tia hồ quang điện',
        en: 'Arc Suppression Devices',
        zh: '电弧抑制设备'
      },
      icon: '',
      description: {
        vi: 'Phát hiện và dập tắt hồ quang điện trong thời gian thực, ngăn ngừa cháy nổ.',
        en: 'Real-time arc fault detection and suppression to prevent fire hazards.',
        zh: '实时检测和抑制电弧故障，防止火灾危险。'
      }
    }
  },

  products: [
    // ===== INDUSTRIAL =====
    {
      id: 'ind-001',
      category: 'industrial',
      sku: 'KHKT-SD4R',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh 380V',
        en: '380V Smart Electrical Safety Device',
        zh: '380V智能电气安全设备'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện 3 pha thông minh cho hệ thống công nghiệp, tích hợp giám sát từ xa và bảo vệ đa lớp.',
        en: 'Smart 3-phase electrical protection device for industrial systems, with remote monitoring and multi-layer protection.',
        zh: '用于工业系统的智能三相电气保护设备，带远程监控和多层保护。'
      },
      description: {
        vi: 'Thiết bị an toàn điện thông minh 380V dòng KHKT-SD4R là giải pháp bảo vệ điện 3 pha toàn diện cho các nhà máy, xí nghiệp và khu công nghiệp. Tích hợp công nghệ giám sát thông minh, bảo vệ quá tải, ngắn mạch, quá áp, thấp áp và chống rò điện. Hỗ trợ kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh, giúp quản lý vận hành hệ thống điện hiệu quả và an toàn.',
        en: 'The KHKT-SD4R series 380V smart electrical safety device is a comprehensive 3-phase protection solution for factories and industrial zones. It integrates smart monitoring technology, overload protection, short-circuit protection, overvoltage/undervoltage protection, and leakage protection. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'KHKT-SD4R系列380V智能电气安全设备是工厂和工业区的全面三相保护解决方案。集成智能监控技术、过载保护、短路保护、过压/欠压保护和漏电保护。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '380V AC 3 pha' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61439' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP54' },
        { label: { vi: 'Nhiệt độ hoạt động', en: 'Operating Temp', zh: '工作温度' }, value: '-5°C ~ 55°C' }
      ],
      mainImage: 'assets/images/products/125_11zon.webp',
      galleryImages: [
        'assets/images/products/250_11zon.webp',
        'assets/images/products/400_11zon.webp',
        'assets/images/products/630_11zon.webp',
        'assets/images/products/800A_11zon.webp',
      ],
      specsImage: 'assets/images/products/125_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      // All features (shared across models)
      allFeatures: [
        { icon: '', title: { vi: 'Vi xử lý ARM 32-bit', en: '32-bit ARM Processor', zh: '32位ARM微处理器' }, desc: { vi: 'Sử dụng vi xử lý ARM 32-bit hiệu năng cao, xử lý tín hiệu và điều khiển thông minh theo thời gian thực.', en: 'High-performance 32-bit ARM processor for real-time signal processing and intelligent control.', zh: '采用高性能32位ARM微处理器，实时进行信号处理和智能控制。' } },
        { icon: '', title: { vi: 'Màn hình LCD trực quan', en: 'Intuitive LCD Display', zh: '液晶显示' }, desc: { vi: 'Màn hình LCD hiển thị trực quan, giao diện người dùng thân thiện và thao tác đơn giản.', en: 'Intuitive LCD display with a user-friendly interface and simple operation.', zh: '液晶显示，人机界面友好，操作简便。' } },
        { icon: '', title: { vi: 'Bảo vệ dòng dư', en: 'Residual Current Protection', zh: '剩余电流保护' }, desc: { vi: 'Bảo vệ dòng dư và dòng rò, hỗ trợ cài đặt các mức bảo vệ trực tuyến và tích hợp chức năng tự động đóng lại.', en: 'Residual and leakage current protection with online adjustable protection levels and automatic reclose function.', zh: '剩余电流（漏电）保护，剩余电流档位可在线整定，具有重合闸功能。' } },
        { icon: '', title: { vi: 'Giám sát dòng dư thông minh', en: 'Smart Residual Current Monitoring', zh: '剩余电流智能监测' }, desc: { vi: 'Giám sát dòng dư theo thời gian thực và tự động điều chỉnh mức bảo vệ, đảm bảo độ tin cậy khi vận hành.', en: 'Real-time monitoring of residual current with automatic adjustment of protection levels for reliable operation.', zh: '实时监测跟踪线路剩余电流，自动调节档位，保证产品的投运率和可靠性。' } },
        { icon: '', title: { vi: 'Bảo vệ 3 cấp', en: 'Three-Stage Protection', zh: '三段保护' }, desc: { vi: 'Bảo vệ trễ dài, trễ ngắn và tức thời; sử dụng cơ cấu ngắt điện tử, không phụ thuộc vào điện áp nguồn.', en: 'Long-time, short-time, and instantaneous protection with electronic tripping independent of power supply voltage.', zh: '长延时、短延时和瞬时三段保护，采用电子式脱扣，与电源电压无关。' } },
        { icon: '', title: { vi: 'Bảo vệ ngắn mạch', en: 'Short Circuit Protection', zh: '短路保护' }, desc: { vi: 'Khả năng ngắt dòng cao, đảm bảo độ tin cậy khi bảo vệ ngắn mạch đường dây.', en: 'High breaking capacity ensures reliable short-circuit protection.', zh: '具有高分断能力，保证线路短路保护的可靠性。' } },
        { icon: '', title: { vi: 'Bảo vệ quá áp, thấp áp và mất pha', en: 'Overvoltage, Undervoltage & Phase Loss Protection', zh: '过压、欠压及缺相保护' }, desc: { vi: 'Tự động bảo vệ hệ thống khi xảy ra quá áp, thấp áp hoặc mất pha.', en: 'Automatic system protection against overvoltage, undervoltage, and phase loss.', zh: '过压保护，欠压保护，缺相保护。' } },
        { icon: '', title: { vi: 'Hiển thị thông số thời gian thực', en: 'Real-Time Parameter Display', zh: '实时参数显示' }, desc: { vi: 'Hiển thị theo thời gian thực dòng dư đường dây, điện áp nguồn ba pha và dòng tải.', en: 'Real-time display of residual current, three-phase power voltage, and load current.', zh: '线路剩余电流、三相电源电压、负荷电流实时显示。' } },
        { icon: '', title: { vi: 'Cài đặt thông số trực tuyến', en: 'Online Parameter Configuration', zh: '在线参数设置' }, desc: { vi: 'Các chức năng bảo vệ và thông số có thể được cài đặt, điều chỉnh và sửa đổi trực tuyến.', en: 'Protection functions and parameters can be configured, adjusted, and modified online.', zh: '保护功能及参数可在线设置修改。' } },
        { icon: '', title: { vi: 'Quản lý lịch sử sự cố', en: 'Fault Event Management', zh: '故障记录管理' }, desc: { vi: 'Nhận diện, hiển thị, lưu trữ, tra cứu và xóa lịch sử các loại sự cố ngắt điện.', en: 'Identifies, displays, stores, queries, and deletes records of various trip events.', zh: '跳闸类型识别、显示，并可存储、查询、删除。' } },
        { icon: '', title: { vi: 'Giám sát từ xa', en: 'Remote Monitor', zh: '远程监控' }, desc: { vi: 'Giám sát và điều khiển từ xa qua điện thoại di động, kết nối 4G.', en: 'Remote monitoring and control via mobile phone, 4G connectivity.', zh: '通过手机远程监控和控制，4G连接。' } },
        { icon: '', title: { vi: 'Đo lường điện chính xác', en: 'Accurate Electrical Measurement', zh: '电气测量' }, desc: { vi: 'Đo và kiểm tra dòng điện, điện áp và dòng dư với độ chính xác cao.', en: 'Measures and detects current, voltage, and residual current with high accuracy.', zh: '具有测量功能，电流、电压、剩余电流检测。测量精度（常规型 0.8-2In10%）。' } }
      ],
      // Available features per model (by index into allFeatures, 0-based)
      modelFeatures: {
        'khkt-125': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'khkt-250': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'khkt-400': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'khkt-630': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'khkt-800': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      // Multi-model support
      models: [
        {
          id: 'khkt-125',
          name: 'KHKT-SD4R-125',
          current: '125A',
          overloadRange: '1-125A',
          desc: { vi: 'Phù hợp nhà xưởng nhỏ, trạm bơm, tòa nhà vừa', en: 'Ideal for small workshops, pump stations, medium buildings', zh: '适用于小型车间、泵站、中型建筑' },
          image: 'assets/images/products/125_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị an toàn thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-SD4R-125' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 16 × Rộng 12 × Cao 9 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 125A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,85 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'khkt-250',
          name: 'KHKT-SD4R-250',
          current: '250A',
          overloadRange: '1-250A',
          desc: { vi: 'Phù hợp nhà máy vừa, khu sản xuất', en: 'Ideal for medium factories, production areas', zh: '适用于中型工厂、生产区' },
          image: 'assets/images/products/250_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị an toàn thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-SD4R-250' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 18 × Rộng 13 × Cao 10 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 250A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,10 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'khkt-400',
          name: 'KHKT-SD4R-400',
          current: '400A',
          overloadRange: '1-400A',
          desc: { vi: 'Phù hợp nhà máy lớn, khu công nghiệp', en: 'Ideal for large factories, industrial parks', zh: '适用于大型工厂、工业园区' },
          image: 'assets/images/products/400_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị an toàn thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-SD4R-400' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 20 × Rộng 14 × Cao 11 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 400A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,45 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'khkt-630',
          name: 'KHKT-SD4R-630',
          current: '630A',
          overloadRange: '1-630A',
          desc: { vi: 'Phù hợp nhà máy trọng điểm, trung tâm dữ liệu', en: 'Ideal for key factories, data centers', zh: '适用于重点工厂、数据中心' },
          image: 'assets/images/products/630_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị an toàn thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-SD4R-630' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 22 × Rộng 15 × Cao 12 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 630A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,80 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'khkt-800',
          name: 'KHKT-SD4R-800',
          current: '800A',
          overloadRange: '1-800A',
          desc: { vi: 'Phù hợp nhà máy siêu lớn, khu công nghệ cao', en: 'Ideal for mega factories, high-tech parks', zh: '适用于超大型工厂、高科技园区' },
          image: 'assets/images/products/800A_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị an toàn thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-SD4R-800' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 24 × Rộng 16 × Cao 13 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 800A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '2,20 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Nhà máy / Xí nghiệp', en: 'Factories / Plants', zh: '工厂/企业' }, desc: { vi: 'Bảo vệ hệ thống điện cho nhà máy sản xuất và xí nghiệp công nghiệp.', en: 'Protect electrical systems in manufacturing plants and industrial facilities.', zh: '保护制造工厂和工业设施的电气系统。' } },
        { icon: '', title: { vi: 'Công trình xây dựng', en: 'Construction Sites', zh: '建筑工地' }, desc: { vi: 'Giải pháp an toàn điện cho các công trình xây dựng và hạ tầng.', en: 'Electrical safety solutions for construction sites and infrastructure.', zh: '建筑工地和基础设施的电气安全解决方案。' } },
        { icon: '', title: { vi: 'Trung tâm thương mại', en: 'Shopping Centers', zh: '购物中心' }, desc: { vi: 'Bảo vệ hệ thống điện tập trung cho khu vực thương mại quy mô lớn.', en: 'Centralized electrical protection for large commercial areas.', zh: '大型商业区域的集中电气保护。' } },
        { icon: '', title: { vi: 'Tòa nhà văn phòng', en: 'Office Buildings', zh: '办公大楼' }, desc: { vi: 'An toàn điện cho tòa nhà văn phòng và khu phức hợp thương mại.', en: 'Electrical safety for office buildings and commercial complexes.', zh: '办公大楼和商业综合体的电气安全。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện 3 pha theo thời gian thực.', en: 'MCU system continuously monitors 3-phase electrical parameters in real time.', zh: 'MCU系统持续实时监控三相电气参数。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ tương ứng trong mili giây.', en: 'When anomaly is detected, MCU activates protection within milliseconds.', zh: '检测到异常时，MCU在毫秒内启动保护。' } },
        { step: 3, icon: '', title: { vi: 'Cách ly nguồn sự cố', en: 'Fault Isolation', zh: '故障隔离' }, desc: { vi: 'Hệ thống cách ly nguồn điện sự cố, bảo vệ các thiết bị khác trong hệ thống.', en: 'System isolates the faulty power source, protecting other equipment.', zh: '系统隔离故障电源，保护其他设备。' } },
        { step: 4, icon: '', title: { vi: 'Ngắt nguồn tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn khi cần thiết, đảm bảo an toàn tuyệt đối.', en: 'Automatic power disconnection when necessary for absolute safety.', zh: '必要时自动断开电源，确保绝对安全。' } },
        { step: 5, icon: '', title: { vi: 'Giảm rủi ro vận hành', en: 'Operational Risk Reduced', zh: '降低运营风险' }, desc: { vi: 'Rủi ro sự cố điện được giảm thiểu, hệ thống vận hành an toàn và ổn định.', en: 'Electrical risks minimized, system operates safely and stably.', zh: '电气风险最小化，系统安全稳定运行。' } }
      ]
    },
    {
      id: 'ind-002',
      category: 'surge',
      sku: 'MB-2KW',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản giao thông',
        en: '220V Smart Electrical Safety Device - Commercial Version',
        zh: '220V智能电气安全设备 - 商业版'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện thông minh 220V cho khu vực công nghiệp nhẹ, tích hợp chống giật, chống rò, quá tải và dập hồ quang.',
        en: '220V smart electrical protection device for light industrial areas, with shock protection, leakage protection, overload and arc suppression.',
        zh: '适用于轻工业区域的220V智能电气保护设备，具有触电保护、漏电保护、过载和灭弧功能。'
      },
      description: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản giao thông dòng MB-2KW là giải pháp bảo vệ điện toàn diện cho các khu vực công nghiệp nhẹ và thương mại quy mô nhỏ. Tích hợp công nghệ dập hồ quang 220V tiên tiến, bảo vệ đa lớp chống điện giật, ngắn mạch, quá tải, quá áp, thấp áp, rò điện, ngập nước và chống sét lan truyền. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh.',
        en: 'The MB-2KW 220V smart electrical safety device - Commercial Version is a comprehensive protection solution for light industrial areas and small-scale commercial applications. It integrates advanced 220V arc suppression technology with multi-layer protection against electric shock, short circuit, overload, overvoltage, undervoltage, leakage, water immersion and surge. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'MB-2KW 220V智能电气安全设备 - 商业版是轻工业区域和小型商业应用的全面保护解决方案。集成先进的220V灭弧技术和多层保护，防止触电、短路、过载、过压、欠压、漏电、浸水和浪涌。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '220V AC' },
        { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '2KW (9A)' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Công nghệ', en: 'Technology', zh: '技术' }, value: 'Dập hồ quang 220V / MCU' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61009-1 / IEC 60947-2' },
        { label: { vi: 'Chế độ kết nối', en: 'Connectivity', zh: '连接' }, value: '4G / RS485' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      mainImage: 'assets/images/products/220_11zon.webp',
      galleryImages: [
        'assets/images/products/220_11zon.webp'
      ],
      specsImage: 'assets/images/products/220_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      allFeatures: [
        { icon: '', title: { vi: 'Chống điện giật', en: 'Shock Protection', zh: '触电保护' }, desc: { vi: 'Bảo vệ chống điện giật ngoài ý muốn trong mọi tình huống.', en: 'Protection against accidental electric shock in all situations.', zh: '在所有情况下防止意外触电。' } },
        { icon: '', title: { vi: 'Dập hồ quang', en: 'Arc Suppression', zh: '灭弧' }, desc: { vi: 'Giảm hồ quang khi ngắn mạch dây pha và dây trung tính.', en: 'Reduces arcing during phase and neutral short circuits.', zh: '减少相线和中性线短路时的电弧。' } },
        { icon: '', title: { vi: 'Chống cháy nổ', en: 'Fire Prevention', zh: '防火' }, desc: { vi: 'Phòng chống cháy nổ điện toàn diện.', en: 'Comprehensive electrical fire prevention.', zh: '全面的电气火灾预防。' } },
        { icon: '', title: { vi: 'Che chắn rò điện', en: 'Leakage Shielding', zh: '漏电屏蔽' }, desc: { vi: 'Chức năng che chắn rò điện thông minh.', en: 'Smart leakage current shielding function.', zh: '智能漏电屏蔽功能。' } },
        { icon: '', title: { vi: 'Bảo vệ quá/thấp áp', en: 'Voltage Protection', zh: '电压保护' }, desc: { vi: 'Bảo vệ quá áp và thấp áp tự động.', en: 'Automatic overvoltage and undervoltage protection.', zh: '自动过压和欠压保护。' } },
        { icon: '', title: { vi: 'Chống ngập nước', en: 'Water Immersion', zh: '浸水保护' }, desc: { vi: 'Bảo vệ an toàn khi ngập nước và ẩm ướt.', en: 'Safety protection during water immersion and humidity.', zh: '浸水和潮湿时的安全保护。' } },
        { icon: '', title: { vi: 'Phát hiện dây cũ', en: 'Old Wire Detection', zh: '旧线检测' }, desc: { vi: 'Phát hiện và bảo vệ đường dây cũ hỏng.', en: 'Detects and protects aging/damaged wiring.', zh: '检测和保护老化/损坏的线路。' } },
        { icon: '', title: { vi: 'Cảnh báo sự cố', en: 'Fault Alert', zh: '故障报警' }, desc: { vi: 'Hệ thống cảnh báo sự cố tức thời.', en: 'Instant fault alert system.', zh: '即时故障报警系统。' } },
        { icon: '', title: { vi: 'Bảo vệ quá tải', en: 'Overload Protection', zh: '过载保护' }, desc: { vi: 'Bảo vệ quá tải chính xác cao.', en: 'High-precision overload protection.', zh: '高精度过载保护。' } },
        { icon: '', title: { vi: 'Chống sét', en: 'Surge Protection', zh: '浪涌保护' }, desc: { vi: 'Che chắn và chống sét hiệu quả.', en: 'Effective surge and lightning protection.', zh: '有效的浪涌和雷电保护。' } },
        { icon: '', title: { vi: 'Tự động đóng cắt', en: 'Auto Reclose', zh: '自动重合' }, desc: { vi: 'Chức năng đóng cầu dao tự động.', en: 'Automatic circuit breaker reclose function.', zh: '自动断路器重合功能。' } },
        { icon: '', title: { vi: 'Giám sát từ xa', en: 'Remote Monitor', zh: '远程监控' }, desc: { vi: 'Giám sát và điều khiển từ xa qua điện thoại di động, kết nối 4G.', en: 'Remote monitoring and control via mobile phone, 4G connectivity.', zh: '通过手机远程监控和控制，4G连接。' } }
      ],
      modelFeatures: {
        'mb-2kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      models: [
        {
          id: 'mb-2kw',
          name: 'MB-2KW',
          current: '2KW',
          overloadRange: '1-9A',
          desc: { vi: 'Phù hợp khu vực thương mại nhỏ, văn phòng, xưởng sản xuất quy mô nhỏ', en: 'Ideal for small commercial areas, offices, small-scale production workshops', zh: '适用于小型商业区域、办公室、小规模生产车间' },
          image: 'assets/images/products/220_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V thiết bị thương mại thông minh' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'MB-2KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 13 × Rộng 9,9 × Cao 7,2 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '2KW (9A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,48 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Xưởng sản xuất nhỏ', en: 'Small Production Workshops', zh: '小生产车间' }, desc: { vi: 'Bảo vệ hệ thống điện cho xưởng sản xuất quy mô nhỏ và gia công.', en: 'Protect electrical systems in small-scale production and processing workshops.', zh: '保护小型生产和加工车间的电气系统。' } },
        { icon: '', title: { vi: 'Văn phòng', en: 'Offices', zh: '办公室' }, desc: { vi: 'Giải pháp an toàn điện cho không gian văn phòng làm việc.', en: 'Electrical safety solutions for office workspaces.', zh: '为办公空间提供电气安全解决方案。' } },
        { icon: '', title: { vi: 'Cửa hàng / Tạp hóa', en: 'Shops / Groceries', zh: '商店/杂货店' }, desc: { vi: 'An toàn điện cho các cửa hàng bán lẻ và dịch vụ.', en: 'Electrical safety for retail stores and service shops.', zh: '为零售店和服务店提供电气安全保护。' } },
        { icon: '', title: { vi: 'Cơ sở dịch vụ', en: 'Service Facilities', zh: '服务设施' }, desc: { vi: 'Bảo vệ thiết bị điện trong các cơ sở dịch vụ và sửa chữa.', en: 'Protect electrical equipment in service and repair facilities.', zh: '在服务和维修设施中保护电气设备。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện theo thời gian thực.', en: 'MCU system continuously monitors electrical parameters in real time.', zh: 'MCU系统持续实时监控电气参数。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ tương ứng trong mili giây.', en: 'When anomaly is detected, MCU activates protection within milliseconds.', zh: '检测到异常时，MCU在毫秒内启动保护。' } },
        { step: 3, icon: '', title: { vi: 'Cách ly nguồn điện', en: 'Power Isolation', zh: '电源隔离' }, desc: { vi: 'Hệ thống cách ly nguồn điện sự cố, bảo vệ thiết bị và con người.', en: 'System isolates the faulty power source, protecting equipment and people.', zh: '系统隔离故障电源，保护设备和人员。' } },
        { step: 4, icon: '', title: { vi: 'Ngắt nguồn tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn khi cần thiết, đảm bảo an toàn tuyệt đối.', en: 'Automatic disconnection when necessary for absolute safety.', zh: '必要时自动断开电源，确保绝对安全。' } },
        { step: 5, icon: '', title: { vi: 'An toàn tối đa', en: 'Maximum Safety', zh: '最大安全' }, desc: { vi: 'Nguy cơ sự cố điện được giảm thiểu, không gian vận hành an toàn.', en: 'Electrical risks minimized, operational spaces remain safe.', zh: '电气风险最小化，操作空间保持安全。' } }
      ]
    },
    {
      id: 'ind-003',
      category: 'industrial',
      sku: 'WDMC',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản công nghiệp',
        en: '220V Smart Electrical Safety Device - Industrial Version',
        zh: '220V智能电气安全设备 - 工业版'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện thông minh 220V cho khu vực công nghiệp, tích hợp chống giật, chống rò, quá tải và dập hồ quang.',
        en: '220V smart electrical protection device for industrial areas, with shock protection, leakage protection, overload and arc suppression.',
        zh: '适用于工业区域的220V智能电气保护设备，具有触电保护、漏电保护、过载和灭弧功能。'
      },
      description: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản công nghiệp dòng WDMC là giải pháp bảo vệ điện toàn diện cho các khu vực công nghiệp, nhà máy và xí nghiệp. Tích hợp công nghệ dập hồ quang 220V tiên tiến, bảo vệ đa lớp chống điện giật, ngắn mạch, quá tải, quá áp, thấp áp, rò điện, ngập nước và chống sét lan truyền. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh.',
        en: 'The WDMC series 220V smart electrical safety device - Industrial Version is a comprehensive protection solution for industrial areas, factories and plants. It integrates advanced 220V arc suppression technology with multi-layer protection against electric shock, short circuit, overload, overvoltage, undervoltage, leakage, water immersion and surge. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'WDMC系列220V智能电气安全设备 - 工业版是工业区域、工厂和企业的全面保护解决方案。集成先进的220V灭弧技术和多层保护，防止触电、短路、过载、过压、欠压、漏电、浸水和浪涌。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '220V AC' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Công nghệ', en: 'Technology', zh: '技术' }, value: 'Dập hồ quang 220V / MCU' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61009-1 / IEC 60947-2' },
        { label: { vi: 'Chế độ kết nối', en: 'Connectivity', zh: '连接' }, value: '4G / RS485' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      mainImage: 'assets/images/products/50mh_11zon.webp',
      galleryImages: [
        'assets/images/products/80mh_11zon.webp'
      ],
      specsImage: 'assets/images/products/80mh_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      allFeatures: [
        { icon: '', title: { vi: 'Chống điện giật', en: 'Shock Protection', zh: '触电保护' }, desc: { vi: 'Bảo vệ chống điện giật ngoài ý muốn trong mọi tình huống.', en: 'Protection against accidental electric shock in all situations.', zh: '在所有情况下防止意外触电。' } },
        { icon: '', title: { vi: 'Dập hồ quang', en: 'Arc Suppression', zh: '灭弧' }, desc: { vi: 'Giảm hồ quang khi ngắn mạch dây pha và dây trung tính.', en: 'Reduces arcing during phase and neutral short circuits.', zh: '减少相线和中性线短路时的电弧。' } },
        { icon: '', title: { vi: 'Chống cháy nổ', en: 'Fire Prevention', zh: '防火' }, desc: { vi: 'Phòng chống cháy nổ điện toàn diện.', en: 'Comprehensive electrical fire prevention.', zh: '全面的电气火灾预防。' } },
        { icon: '', title: { vi: 'Che chắn rò điện', en: 'Leakage Shielding', zh: '漏电屏蔽' }, desc: { vi: 'Chức năng che chắn rò điện thông minh.', en: 'Smart leakage current shielding function.', zh: '智能漏电屏蔽功能。' } },
        { icon: '', title: { vi: 'Bảo vệ quá/thấp áp', en: 'Voltage Protection', zh: '电压保护' }, desc: { vi: 'Bảo vệ quá áp và thấp áp tự động.', en: 'Automatic overvoltage and undervoltage protection.', zh: '自动过压和欠压保护。' } },
        { icon: '', title: { vi: 'Chống ngập nước', en: 'Water Immersion', zh: '浸水保护' }, desc: { vi: 'Bảo vệ an toàn khi ngập nước và ẩm ướt.', en: 'Safety protection during water immersion and humidity.', zh: '浸水和潮湿时的安全保护。' } },
        { icon: '', title: { vi: 'Phát hiện dây cũ', en: 'Old Wire Detection', zh: '旧线检测' }, desc: { vi: 'Phát hiện và bảo vệ đường dây cũ hỏng.', en: 'Detects and protects aging/damaged wiring.', zh: '检测和保护老化/损坏的线路。' } },
        { icon: '', title: { vi: 'Cảnh báo sự cố', en: 'Fault Alert', zh: '故障报警' }, desc: { vi: 'Hệ thống cảnh báo sự cố tức thời.', en: 'Instant fault alert system.', zh: '即时故障报警系统。' } },
        { icon: '', title: { vi: 'Bảo vệ quá tải', en: 'Overload Protection', zh: '过载保护' }, desc: { vi: 'Bảo vệ quá tải chính xác cao.', en: 'High-precision overload protection.', zh: '高精度过载保护。' } },
        { icon: '', title: { vi: 'Chống sét', en: 'Surge Protection', zh: '浪涌保护' }, desc: { vi: 'Che chắn và chống sét hiệu quả.', en: 'Effective surge and lightning protection.', zh: '有效的浪涌和雷电保护。' } },
        { icon: '', title: { vi: 'Tự động đóng cắt', en: 'Auto Reclose', zh: '自动重合' }, desc: { vi: 'Chức năng đóng cầu dao tự động.', en: 'Automatic circuit breaker reclose function.', zh: '自动断路器重合功能。' } },
        { icon: '', title: { vi: 'Giám sát từ xa', en: 'Remote Monitor', zh: '远程监控' }, desc: { vi: 'Giám sát và điều khiển từ xa qua điện thoại di động, kết nối 4G.', en: 'Remote monitoring and control via mobile phone, 4G connectivity.', zh: '通过手机远程监控和控制，4G连接。' } }
      ],
      modelFeatures: {
        'wdmc-50kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'wdmc-80kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      models: [
        {
          id: 'wdmc-50kw',
          name: 'WDMC-50KW',
          current: '50KW',
          overloadRange: '1-50KW',
          desc: { vi: 'Phù hợp nhà máy vừa, khu sản xuất công nghiệp', en: 'Ideal for medium factories, industrial production areas', zh: '适用于中型工厂、工业生产区' },
          image: 'assets/images/products/50mh_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V thiết bị công nghiệp thông minh' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMC-50KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 18 × Rộng 13 × Cao 10 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '50KW (227A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,15 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        },
        {
          id: 'wdmc-80kw',
          name: 'WDMC-80KW',
          current: '80KW',
          overloadRange: '1-80KW',
          desc: { vi: 'Phù hợp nhà máy lớn, khu công nghiệp, xí nghiệp', en: 'Ideal for large factories, industrial parks, plants', zh: '适用于大型工厂、工业园区、企业' },
          image: 'assets/images/products/80mh_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V thiết bị công nghiệp thông minh' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMC-80KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 20 × Rộng 14 × Cao 11 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '80KW (363A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,45 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Nhà máy / Xí nghiệp', en: 'Factories / Plants', zh: '工厂/企业' }, desc: { vi: 'Bảo vệ hệ thống điện cho nhà máy sản xuất quy mô vừa và lớn.', en: 'Protect electrical systems in medium to large manufacturing plants.', zh: '保护中大型制造工厂的电气系统。' } },
        { icon: '', title: { vi: 'Công trình xây dựng', en: 'Construction Sites', zh: '建筑工地' }, desc: { vi: 'Giải pháp an toàn điện cho các công trình xây dựng và hạ tầng.', en: 'Electrical safety solutions for construction sites and infrastructure.', zh: '建筑工地和基础设施的电气安全解决方案。' } },
        { icon: '', title: { vi: 'Khu công nghiệp', en: 'Industrial Parks', zh: '工业园区' }, desc: { vi: 'Bảo vệ tập trung cho khu vực sản xuất công nghiệp quy mô lớn.', en: 'Centralized protection for large-scale industrial production areas.', zh: '为大规模工业生产区域提供集中保护。' } },
        { icon: '', title: { vi: 'Cơ sở sản xuất', en: 'Manufacturing Facilities', zh: '生产设施' }, desc: { vi: 'An toàn điện cho các cơ sở sản xuất và chế biến công nghiệp.', en: 'Electrical safety for manufacturing and industrial processing facilities.', zh: '为制造和工业加工设施提供电气安全保护。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện theo thời gian thực.', en: 'MCU system continuously monitors electrical parameters in real time.', zh: 'MCU系统持续实时监控电气参数。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ trong mili giây.', en: 'When anomaly is detected, MCU activates protection within milliseconds.', zh: '检测到异常时，MCU在毫秒内启动保护。' } },
        { step: 3, icon: '', title: { vi: 'Cách ly nguồn sự cố', en: 'Fault Isolation', zh: '故障隔离' }, desc: { vi: 'Hệ thống cách ly nguồn điện sự cố, bảo vệ thiết bị và con người.', en: 'System isolates faulty power source, protecting equipment and people.', zh: '系统隔离故障电源，保护设备和人员。' } },
        { step: 4, icon: '', title: { vi: 'Ngắt nguồn tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn khi cần thiết, đảm bảo an toàn tuyệt đối.', en: 'Automatic disconnection when necessary for absolute safety.', zh: '必要时自动断开电源，确保绝对安全。' } },
        { step: 5, icon: '', title: { vi: 'An toàn tối đa', en: 'Maximum Safety', zh: '最大安全' }, desc: { vi: 'Nguy cơ sự cố điện được giảm thiểu, hệ thống vận hành an toàn.', en: 'Electrical risks minimized, system operates safely.', zh: '电气风险最小化，系统安全运行。' } }
      ]
    },
    {
      id: 'ind-004',
      category: 'industrial',
      sku: 'MC',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh 380V phiên bản công nghiệp',
        en: '380V Smart Electrical Safety Device - Industrial Version',
        zh: '380V智能电气安全设备 - 工业版'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện 3 pha thông minh 380V cho khu vực công nghiệp, tích hợp chống giật, chống rò, quá tải và dập hồ quang.',
        en: '380V smart 3-phase electrical protection device for industrial areas, with shock protection, leakage protection, overload and arc suppression.',
        zh: '适用于工业区域的380V智能三相电气保护设备，具有触电保护、漏电保护、过载和灭弧功能。'
      },
      description: {
        vi: 'Thiết bị an toàn điện thông minh 380V phiên bản công nghiệp dòng MC là giải pháp bảo vệ điện 3 pha toàn diện cho các nhà máy, xí nghiệp và khu công nghiệp. Tích hợp công nghệ dập hồ quang 380V tiên tiến, bảo vệ đa lớp chống điện giật, ngắn mạch, quá tải, quá áp, thấp áp, rò điện, ngập nước và chống sét lan truyền. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh.',
        en: 'The MC series 380V smart electrical safety device - Industrial Version is a comprehensive 3-phase protection solution for factories, plants and industrial parks. It integrates advanced 380V arc suppression technology with multi-layer protection against electric shock, short circuit, overload, overvoltage, undervoltage, leakage, water immersion and surge. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'MC系列380V智能电气安全设备 - 工业版是工厂、企业和工业园区的全面三相保护解决方案。集成先进的380V灭弧技术和多层保护，防止触电、短路、过载、过压、欠压、漏电、浸水和浪涌。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '380V AC 3 pha' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Công nghệ', en: 'Technology', zh: '技术' }, value: 'Dập hồ quang 380V / MCU' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61009-1 / IEC 60947-2' },
        { label: { vi: 'Chế độ kết nối', en: 'Connectivity', zh: '连接' }, value: '4G / RS485' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      mainImage: 'assets/images/products/30kw_11zon.webp',
      galleryImages: [
        'assets/images/products/50kw_11zon.webp',
        'assets/images/products/100kw_11zon.webp',
      ],
      specsImage: 'assets/images/products/630_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      allFeatures: [
        { icon: '', title: { vi: 'Chống điện giật', en: 'Shock Protection', zh: '触电保护' }, desc: { vi: 'Bảo vệ chống điện giật ngoài ý muốn trong mọi tình huống.', en: 'Protection against accidental electric shock in all situations.', zh: '在所有情况下防止意外触电。' } },
        { icon: '', title: { vi: 'Dập hồ quang', en: 'Arc Suppression', zh: '灭弧' }, desc: { vi: 'Giảm hồ quang khi ngắn mạch dây pha và dây trung tính.', en: 'Reduces arcing during phase and neutral short circuits.', zh: '减少相线和中性线短路时的电弧。' } },
        { icon: '', title: { vi: 'Chống cháy nổ', en: 'Fire Prevention', zh: '防火' }, desc: { vi: 'Phòng chống cháy nổ điện toàn diện.', en: 'Comprehensive electrical fire prevention.', zh: '全面的电气火灾预防。' } },
        { icon: '', title: { vi: 'Che chắn rò điện', en: 'Leakage Shielding', zh: '漏电屏蔽' }, desc: { vi: 'Chức năng che chắn rò điện thông minh.', en: 'Smart leakage current shielding function.', zh: '智能漏电屏蔽功能。' } },
        { icon: '', title: { vi: 'Bảo vệ quá/thấp áp', en: 'Voltage Protection', zh: '电压保护' }, desc: { vi: 'Bảo vệ quá áp và thấp áp tự động.', en: 'Automatic overvoltage and undervoltage protection.', zh: '自动过压和欠压保护。' } },
        { icon: '', title: { vi: 'Chống ngập nước', en: 'Water Immersion', zh: '浸水保护' }, desc: { vi: 'Bảo vệ an toàn khi ngập nước và ẩm ướt.', en: 'Safety protection during water immersion and humidity.', zh: '浸水和潮湿时的安全保护。' } },
        { icon: '', title: { vi: 'Phát hiện dây cũ', en: 'Old Wire Detection', zh: '旧线检测' }, desc: { vi: 'Phát hiện và bảo vệ đường dây cũ hỏng.', en: 'Detects and protects aging/damaged wiring.', zh: '检测和保护老化/损坏的线路。' } },
        { icon: '', title: { vi: 'Cảnh báo sự cố', en: 'Fault Alert', zh: '故障报警' }, desc: { vi: 'Hệ thống cảnh báo sự cố tức thời.', en: 'Instant fault alert system.', zh: '即时故障报警系统。' } },
        { icon: '', title: { vi: 'Bảo vệ quá tải', en: 'Overload Protection', zh: '过载保护' }, desc: { vi: 'Bảo vệ quá tải chính xác cao.', en: 'High-precision overload protection.', zh: '高精度过载保护。' } },
        { icon: '', title: { vi: 'Chống sét', en: 'Surge Protection', zh: '浪涌保护' }, desc: { vi: 'Che chắn và chống sét hiệu quả.', en: 'Effective surge and lightning protection.', zh: '有效的浪涌和雷电保护。' } },
        { icon: '', title: { vi: 'Tự động đóng cắt', en: 'Auto Reclose', zh: '自动重合' }, desc: { vi: 'Chức năng đóng cầu dao tự động.', en: 'Automatic circuit breaker reclose function.', zh: '自动断路器重合功能。' } },
        { icon: '', title: { vi: 'Giám sát từ xa', en: 'Remote Monitor', zh: '远程监控' }, desc: { vi: 'Giám sát và điều khiển từ xa qua điện thoại di động, kết nối 4G.', en: 'Remote monitoring and control via mobile phone, 4G connectivity.', zh: '通过手机远程监控和控制，4G连接。' } }
      ],
      modelFeatures: {
        'mc-30kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'mc-50kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'mc-100kw': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      models: [
        {
          id: 'mc-30kw',
          name: 'MC-30KW',
          current: '30KW',
          overloadRange: '1-30KW',
          desc: { vi: 'Phù hợp nhà xưởng vừa và nhỏ, trạm bơm', en: 'Ideal for small to medium workshops, pump stations', zh: '适用于中小型车间、泵站' },
          image: 'assets/images/products/30kw_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị công nghiệp thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'MC-30KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 20 × Rộng 14 × Cao 11 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '30KW (136A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,20 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'mc-50kw',
          name: 'MC-50KW',
          current: '50KW',
          overloadRange: '1-50KW',
          desc: { vi: 'Phù hợp nhà máy vừa, khu sản xuất công nghiệp', en: 'Ideal for medium factories, industrial production areas', zh: '适用于中型工厂、工业生产区' },
          image: 'assets/images/products/50kw_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị công nghiệp thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'MC-50KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 22 × Rộng 15 × Cao 12 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '50KW (227A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '1,55 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        },
        {
          id: 'mc-100kw',
          name: 'MC-100KW',
          current: '100KW',
          overloadRange: '1-100KW',
          desc: { vi: 'Phù hợp nhà máy lớn, khu công nghiệp trọng điểm', en: 'Ideal for large factories, key industrial parks', zh: '适用于大型工厂、重点工业园区' },
          image: 'assets/images/products/100kw_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '380V thiết bị công nghiệp thông minh 3 pha' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'MC-100KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 24 × Rộng 16 × Cao 13 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '380V AC 3 pha' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Ba pha (3P+N)' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '100KW (455A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '2,00 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat công nghiệp' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / RS485' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Nhà máy / Xí nghiệp', en: 'Factories / Plants', zh: '工厂/企业' }, desc: { vi: 'Bảo vệ hệ thống điện cho nhà máy sản xuất quy mô vừa và lớn.', en: 'Protect electrical systems in medium to large manufacturing plants.', zh: '保护中大型制造工厂的电气系统。' } },
        { icon: '', title: { vi: 'Công trình xây dựng', en: 'Construction Sites', zh: '建筑工地' }, desc: { vi: 'Giải pháp an toàn điện cho các công trình xây dựng và hạ tầng.', en: 'Electrical safety solutions for construction sites and infrastructure.', zh: '建筑工地和基础设施的电气安全解决方案。' } },
        { icon: '', title: { vi: 'Khu công nghiệp', en: 'Industrial Parks', zh: '工业园区' }, desc: { vi: 'Bảo vệ tập trung cho khu vực sản xuất công nghiệp quy mô lớn.', en: 'Centralized protection for large-scale industrial production areas.', zh: '为大规模工业生产区域提供集中保护。' } },
        { icon: '', title: { vi: 'Nhà máy chế biến', en: 'Processing Plants', zh: '加工厂' }, desc: { vi: 'An toàn điện cho các nhà máy chế biến và sản xuất nguyên liệu.', en: 'Electrical safety for processing and materials production plants.', zh: '为加工和材料生产厂提供电气安全保护。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện 3 pha theo thời gian thực.', en: 'MCU system continuously monitors 3-phase electrical parameters in real time.', zh: 'MCU系统持续实时监控三相电气参数。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ trong mili giây.', en: 'When anomaly is detected, MCU activates protection within milliseconds.', zh: '检测到异常时，MCU在毫秒内启动保护。' } },
        { step: 3, icon: '', title: { vi: 'Cách ly nguồn sự cố', en: 'Fault Isolation', zh: '故障隔离' }, desc: { vi: 'Hệ thống cách ly nguồn điện sự cố, bảo vệ thiết bị và con người.', en: 'System isolates faulty power source, protecting equipment and people.', zh: '系统隔离故障电源，保护设备和人员。' } },
        { step: 4, icon: '', title: { vi: 'Ngắt nguồn tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn khi cần thiết, đảm bảo an toàn tuyệt đối.', en: 'Automatic disconnection when necessary for absolute safety.', zh: '必要时自动断开电源，确保绝对安全。' } },
        { step: 5, icon: '', title: { vi: 'An toàn tối đa', en: 'Maximum Safety', zh: '最大安全' }, desc: { vi: 'Nguy cơ sự cố điện được giảm thiểu, hệ thống vận hành an toàn.', en: 'Electrical risks minimized, system operates safely.', zh: '电气风险最小化，系统安全运行。' } }
      ]
    },

    {
      id: 'arc-004',
      category: 'surge',
      sku: 'MB-10KW',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản thương mại',
        en: '220V Smart Electrical Safety Device - Commercial Version',
        zh: '220V智能电气安全设备 - 商业版'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện thông minh 220V cho khu vực thương mại, tích hợp chống giật, chống rò, quá tải và dập hồ quang.',
        en: '220V smart electrical protection device for commercial areas, with shock protection, leakage protection, overload and arc suppression.',
        zh: '适用于商业区域的220V智能电气保护设备，具有触电保护、漏电保护、过载和灭弧功能。'
      },
      description: {
        vi: 'Thiết bị an toàn điện thông minh 220V phiên bản thương mại dòng MB-10KW là giải pháp bảo vệ điện toàn diện cho các khu vực thương mại như văn phòng, cửa hàng, nhà hàng và trung tâm thương mại. Tích hợp công nghệ dập hồ quang 220V tiên tiến, bảo vệ đa lớp chống điện giật, ngắn mạch, quá tải, quá áp, thấp áp, rò điện, ngập nước và chống sét lan truyền. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh.',
        en: 'The MB-10KW 220V smart electrical safety device - Commercial Version is a comprehensive protection solution for commercial areas such as offices, shops, restaurants and shopping centers. It integrates advanced 220V arc suppression technology with multi-layer protection against electric shock, short circuit, overload, overvoltage, undervoltage, leakage, water immersion and surge. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'MB-10KW 220V智能电气安全设备 - 商业版是商业区域的全面保护解决方案。集成先进的220V灭弧技术和多层保护，防止触电、短路、过载、过压、欠压、漏电、浸水和浪涌。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '220V AC' },
        { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '10kW (45A)' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Công nghệ', en: 'Technology', zh: '技术' }, value: 'Dập hồ quang 220V / MCU' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61009-1 / IEC 60947-2' },
        { label: { vi: 'Chế độ kết nối', en: 'Connectivity', zh: '连接' }, value: '4G / RS485' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      mainImage: 'assets/images/products/220-thuongmai_11zon.webp',
      galleryImages: [
        'assets/images/products/220-thuongmai_11zon.webp'
      ],
      specsImage: 'assets/images/products/220-thuongmai_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      allFeatures: [
        { icon: '', title: { vi: 'Chống điện giật', en: 'Shock Protection', zh: '触电保护' }, desc: { vi: 'Bảo vệ chống điện giật ngoài ý muốn trong mọi tình huống.', en: 'Protection against accidental electric shock in all situations.', zh: '在所有情况下防止意外触电。' } },
        { icon: '', title: { vi: 'Dập hồ quang', en: 'Arc Suppression', zh: '灭弧' }, desc: { vi: 'Giảm hồ quang khi ngắn mạch dây pha và dây trung tính.', en: 'Reduces arcing during phase and neutral short circuits.', zh: '减少相线和中性线短路时的电弧。' } },
        { icon: '', title: { vi: 'Chống cháy nổ', en: 'Fire Prevention', zh: '防火' }, desc: { vi: 'Phòng chống cháy nổ điện toàn diện.', en: 'Comprehensive electrical fire prevention.', zh: '全面的电气火灾预防。' } },
        { icon: '', title: { vi: 'Bảo vệ quá áp & thấp áp', en: 'Overvoltage & Undervoltage Protection', zh: '过压和欠压保护' }, desc: { vi: 'Bảo vệ tự động khi điện áp vượt ngưỡng hoặc xuống dưới ngưỡng an toàn.', en: 'Automatic protection when voltage exceeds or drops below safe thresholds.', zh: '当电压超过或低于安全阈值时自动保护。' } },
        { icon: '', title: { vi: 'Chống ngập nước', en: 'Water Immersion Protection', zh: '浸水保护' }, desc: { vi: 'Bảo vệ an toàn khi thiết bị bị ngập nước hoặc trong môi trường ẩm ướt.', en: 'Protection when equipment is submerged or in humid environments.', zh: '设备浸水或在潮湿环境中时自动保护。' } },
        { icon: '', title: { vi: 'Phát hiện dây cũ', en: 'Old Wire Detection', zh: '旧线检测' }, desc: { vi: 'Phát hiện và cảnh báo đường dây cũ hỏng, giảm nguy cơ cháy nổ.', en: 'Detects and alerts on aging/damaged wiring to reduce fire risk.', zh: '检测和报警老化/损坏的线路，降低火灾风险。' } },
        { icon: '', title: { vi: 'Giám sát thời gian thực', en: 'Real-time Monitoring', zh: '实时监控' }, desc: { vi: 'Theo dõi công suất, dòng điện và nhiệt độ theo thời gian thực qua ứng dụng.', en: 'Real-time tracking of power, current and temperature via app.', zh: '通过应用实时跟踪功率、电流和温度。' } },
        { icon: '', title: { vi: 'Điều khiển từ xa', en: 'Remote Control', zh: '远程控制' }, desc: { vi: 'Bật/tắt thiết bị từ xa qua điện thoại thông minh, kết nối 4G.', en: 'Remote on/off control via smartphone with 4G connectivity.', zh: '通过智能手机远程开/关控制，4G连接。' } }
      ],
      modelFeatures: {
        'mb-10kw': [0, 1, 2, 3, 4, 5, 6, 7]
      },
      models: [
        {
          id: 'mb-10kw',
          name: 'MB-10KW',
          current: '10kW',
          overloadRange: '1-45A',
          desc: { vi: 'Phù hợp cửa hàng, văn phòng, nhà hàng và trung tâm thương mại', en: 'Ideal for shops, offices, restaurants and shopping centers', zh: '适用于商店、办公室、餐厅和购物中心' },
          image: 'assets/images/products/220-thuongmai_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V thiết bị thương mại thông minh' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'MB-10KW' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 13 × Rộng 9,9 × Cao 7,2 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Công suất định mức', en: 'Rated Power', zh: '额定功率' }, value: '10KW (45A)' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,52 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Cửa hàng / Tạp hóa', en: 'Shop / Grocery', zh: '商店/杂货店' }, desc: { vi: 'An toàn điện cho các cửa hàng bán lẻ và tạp hóa.', en: 'Electrical safety for retail stores and grocery shops.', zh: '为零售店和杂货店提供电气安全保护。' } },
        { icon: '', title: { vi: 'Nhà hàng / Quán ăn', en: 'Restaurant / Eatery', zh: '餐厅/小吃店' }, desc: { vi: 'Bảo vệ thiết bị điện trong môi trường ẩm ướt và nhiệt độ cao.', en: 'Protect electrical equipment in humid and high-temperature environments.', zh: '在潮湿和高温环境中保护电气设备。' } },
        { icon: '', title: { vi: 'Văn phòng / Doanh nghiệp', en: 'Office / Business', zh: '办公室/企业' }, desc: { vi: 'Giải pháp an toàn cho không gian làm việc và văn phòng.', en: 'Safety solutions for workspaces and offices.', zh: '为工作空间和办公室提供安全解决方案。' } },
        { icon: '', title: { vi: 'Trung tâm thương mại', en: 'Shopping Centers', zh: '购物中心' }, desc: { vi: 'Bảo vệ tập trung cho khu vực thương mại và trung tâm mua sắm.', en: 'Centralized protection for commercial areas and shopping centers.', zh: '为商业区域和购物中心提供集中保护。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện theo thời gian thực.', en: 'MCU system continuously monitors electrical parameters in real time.', zh: 'MCU系统持续实时监控电气参数。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ tương ứng trong mili giây.', en: 'When anomaly is detected, MCU activates protection within milliseconds.', zh: '检测到异常时，MCU在毫秒内启动保护。' } },
        { step: 3, icon: '', title: { vi: 'Cách ly nguồn điện', en: 'Power Isolation', zh: '电源隔离' }, desc: { vi: 'Hệ thống cách ly nguồn điện sự cố, bảo vệ thiết bị và con người.', en: 'System isolates the faulty power source, protecting equipment and people.', zh: '系统隔离故障电源，保护设备和人员。' } },
        { step: 4, icon: '', title: { vi: 'Ngắt nguồn tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn khi cần thiết, đảm bảo an toàn tuyệt đối.', en: 'Automatic disconnection when necessary for absolute safety.', zh: '必要时自动断开电源，确保绝对安全。' } },
        { step: 5, icon: '', title: { vi: 'An toàn tối đa', en: 'Maximum Safety', zh: '最大安全' }, desc: { vi: 'Nguy cơ sự cố điện được giảm thiểu, không gian thương mại vận hành an toàn.', en: 'Electrical risks minimized, commercial spaces operate safely.', zh: '电气风险最小化，商业空间安全运行。' } }
      ]
    },
    // ===== DOMESTIC - KHKT-63A =====
    {
      id: 'dom-001',
      category: 'domestic',
      sku: 'KHKT-63A',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị điện an toàn thông minh 220V phiên bản 3 mạch nhánh',
        en: '220V Smart Electrical Safety Device - 3-Branch Version',
        zh: '220V智能电气安全设备 - 3支路版'
      },
      shortDesc: {
        vi: 'Thiết bị bảo vệ điện thông minh 220V 3 mạch nhánh, phiên bản 63A, tích hợp 14 chức năng bảo vệ toàn diện.',
        en: '220V smart electrical protection device with 3 branches, 63A version, integrating 14 comprehensive protection functions.',
        zh: '220V智能电气保护设备，3支路，63A版本，集成14项全面保护功能。'
      },
      description: {
        vi: 'Thiết bị điện an toàn thông minh 220V phiên bản 3 mạch nhánh KHKT-63A là giải pháp bảo vệ điện toàn diện cho hộ gia đình và căn hộ. Với 14 chức năng bảo vệ tích hợp, thiết bị giúp bảo vệ an toàn cho người sử dụng và thiết bị điện trong mọi tình huống. Phiên bản 3 mạch nhánh cho phép điều khiển độc lập 3 khu vực trong nhà. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh.',
        en: 'The KHKT-63A 220V smart electrical safety device - 3-Branch Version is a comprehensive protection solution for homes and apartments. With 14 integrated protection functions, it ensures safety for users and electrical equipment in all situations. The 3-branch version allows independent control of 3 areas in the house. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'KHKT-63A 220V智能电气安全设备 - 3支路版是家庭和公寓的全面保护解决方案。集成14项保护功能，确保用户和电气设备的安全。3支路版本可独立控制房屋的3个区域。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '220V AC' },
        { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '63A' },
        { label: { vi: 'Số mạch nhánh', en: 'Number of Branches', zh: '支路数量' }, value: '3 mạch nhánh' },
        { label: { vi: 'Số chức năng', en: 'Number of Functions', zh: '功能数量' }, value: '14 chức năng' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Công nghệ', en: 'Technology', zh: '技术' }, value: 'MCU vi xử lý thông minh' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61009-1' },
        { label: { vi: 'Chế độ kết nối', en: 'Connectivity', zh: '连接' }, value: '4G / Wi-Fi' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      mainImage: 'assets/images/products/63-3_11zon.webp',
      galleryImages: [
        'assets/images/products/63-3_11zon.webp'
      ],
      specsImage: 'assets/images/products/63-3_11zon.webp',
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      allFeatures: [
        { icon: '', title: { vi: 'Bảo vệ ngắn mạch', en: 'Short-Circuit Protection', zh: '短路保护' }, desc: { vi: 'Tự động ngắt mạch khi phát hiện ngắn mạch, bảo vệ thiết bị và hệ thống điện.', en: 'Automatic circuit disconnection upon short-circuit detection.', zh: '检测到短路时自动断开电路。' } },
        { icon: '', title: { vi: 'Ngăn chặn cháy điện', en: 'Fire Prevention', zh: '防火保护' }, desc: { vi: 'Ngăn ngừa nguy cơ cháy nổ do sự cố điện gây ra.', en: 'Prevents fire risks caused by electrical faults.', zh: '防止电气故障引起的火灾风险。' } },
        { icon: '', title: { vi: 'Che chắn rò điện', en: 'Leakage Shielding', zh: '漏电屏蔽' }, desc: { vi: 'Che chắn dòng rò thông minh, bảo vệ người dùng khỏi điện giật.', en: 'Smart leakage current shielding, protecting users from electric shock.', zh: '智能漏电屏蔽，保护用户免受电击。' } },
        { icon: '', title: { vi: 'Bảo vệ quá áp & thấp áp', en: 'Over/Under Voltage Protection', zh: '过压欠压保护' }, desc: { vi: 'Tự động ngắt khi điện áp vượt ngưỡng hoặc xuống dưới ngưỡng an toàn.', en: 'Automatic disconnect when voltage exceeds or drops below safe thresholds.', zh: '当电压超过或低于安全阈值时自动断开。' } },
        { icon: '', title: { vi: 'Bảo vệ ngập nước & ẩm ướt', en: 'Water Immersion Protection', zh: '浸水潮湿保护' }, desc: { vi: 'Bảo vệ an toàn khi thiết bị bị ngập nước hoặc trong môi trường ẩm ướt.', en: 'Protection when equipment is submerged or in humid environments.', zh: '设备浸水或在潮湿环境中时自动保护。' } },
        { icon: '', title: { vi: 'Bảo vệ đường dây cũ hỏng', en: 'Old Wire Detection', zh: '旧线检测保护' }, desc: { vi: 'Phát hiện và cảnh báo đường dây cũ hỏng, giảm nguy cơ cháy nổ.', en: 'Detects and alerts on aging/damaged wiring to reduce fire risk.', zh: '检测和报警老化/损坏的线路，降低火灾风险。' } },
        { icon: '', title: { vi: 'Cảnh báo sự cố', en: 'Fault Alert', zh: '故障报警' }, desc: { vi: 'Hệ thống cảnh báo sự cố tức thời qua ứng dụng di động.', en: 'Instant fault alert system via mobile app.', zh: '通过手机应用即时故障报警。' } },
        { icon: '', title: { vi: 'Bảo vệ quá tải chính xác', en: 'Precise Overload Protection', zh: '精确过载保护' }, desc: { vi: 'Bảo vệ quá tải với độ chính xác cao, ngắt mạch kịp thời.', en: 'High-precision overload protection with timely circuit disconnection.', zh: '高精度过载保护，及时断开电路。' } },
        { icon: '', title: { vi: 'Che chắn sét đánh', en: 'Lightning Protection', zh: '雷电屏蔽' }, desc: { vi: 'Che chắn và bảo vệ thiết bị khỏi xung điện áp do sét đánh.', en: 'Shields and protects equipment from lightning surge voltages.', zh: '屏蔽和保护设备免受雷电浪涌电压影响。' } },
        { icon: '', title: { vi: 'Đóng cầu tự động', en: 'Auto Reclose', zh: '自动重合' }, desc: { vi: 'Chức năng đóng cầu dao tự động sau khi sự cố được khắc phục.', en: 'Automatic circuit breaker reclose after fault resolution.', zh: '故障解决后自动重合断路器。' } },
        { icon: '', title: { vi: 'Ngắt tự động khi mất điện', en: 'Auto Shutdown on Power Loss', zh: '断电自动关闭' }, desc: { vi: 'Tự động ngắt thiết bị khi mất điện, đảm bảo an toàn khi có điện trở lại.', en: 'Automatic shutdown upon power loss for safety when power returns.', zh: '断电时自动关闭，确保恢复供电时的安全。' } },
        { icon: '', title: { vi: 'Giám sát & điều khiển từ xa', en: 'Remote Monitoring & Control', zh: '远程监控和控制' }, desc: { vi: 'Giám sát và điều khiển thiết bị từ xa qua ứng dụng điện thoại thông minh.', en: 'Remote monitoring and control via smartphone app.', zh: '通过智能手机应用进行远程监控和控制。' } },
        { icon: '', title: { vi: 'Điều khiển đầu ra 3 mạch vòng', en: '3-Branch Output Control', zh: '三路输出控制' }, desc: { vi: 'Điều khiển độc lập 3 khu vực trong nhà, tối ưu hóa quản lý điện năng.', en: 'Independent control of 3 areas in the house for optimized power management.', zh: '独立控制房屋的3个区域，优化用电管理。' } },
        { icon: '', title: { vi: 'Đèn khẩn cấp', en: 'Emergency Light', zh: '应急灯' }, desc: { vi: 'Tích hợp đèn khẩn cấp tự động bật khi mất điện, hỗ trợ di chuyển an toàn.', en: 'Integrated emergency light that automatically activates during power outages.', zh: '集成应急灯，断电时自动激活，确保安全移动。' } }
      ],
      modelFeatures: {
        'khkt-63a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      models: [
        {
          id: 'khkt-63a',
          name: 'KHKT-63A',
          current: '63A',
          overloadRange: '1-63A',
          desc: { vi: 'Phiên bản 3 mạch nhánh, phù hợp hộ gia đình, căn hộ', en: '3-Branch version, ideal for homes and apartments', zh: '3支路版本，适用于家庭和公寓' },
          image: 'assets/images/products/63-3_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V thiết bị 3 mạch nhánh thông minh' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'KHKT-63A' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 15 × Rộng 11 × Cao 8 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '63A' },
            { label: { vi: 'Số mạch nhánh', en: 'Number of Branches', zh: '支路数量' }, value: '3 mạch độc lập' },
            { label: { vi: 'Số chức năng', en: 'Number of Functions', zh: '功能数量' }, value: '14 chức năng' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,58 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G / Wi-Fi' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Hộ gia đình', en: 'Households', zh: '家庭' }, desc: { vi: 'Bảo vệ hệ thống điện toàn diện cho hộ gia đình và căn hộ chung cư.', en: 'Comprehensive electrical protection for households and apartments.', zh: '为家庭和公寓提供全面电气保护。' } },
        { icon: '', title: { vi: 'Căn hộ chung cư', en: 'Apartments', zh: '公寓' }, desc: { vi: 'Giải pháp an toàn điện cho căn hộ chung cư với 3 mạch nhánh độc lập.', en: 'Electrical safety for apartments with 3 independent branches.', zh: '为公寓提供3个独立支路的电气安全解决方案。' } },
        { icon: '', title: { vi: 'Cửa hàng nhỏ', en: 'Small Shops', zh: '小商店' }, desc: { vi: 'Bảo vệ thiết bị điện cho cửa hàng và văn phòng nhỏ.', en: 'Protect electrical equipment in small shops and offices.', zh: '为小商店和小型办公室提供电气设备保护。' } },
        { icon: '', title: { vi: 'Nhà trọ / Phòng cho thuê', en: 'Rental Units', zh: '出租房' }, desc: { vi: 'An toàn điện cho nhà trọ và phòng cho thuê với khả năng quản lý từ xa.', en: 'Electrical safety for rental units with remote management capability.', zh: '为出租房提供电气安全保护和远程管理能力。' } }
      ],
      workingSteps: [
        { step: 1, icon: '', title: { vi: 'Phát hiện sự cố', en: 'Fault Detection', zh: '故障检测' }, desc: { vi: 'Hệ thống MCU liên tục giám sát các thông số điện và phát hiện bất thường.', en: 'MCU system continuously monitors electrical parameters and detects anomalies.', zh: 'MCU系统持续监控电气参数并检测异常。' } },
        { step: 2, icon: '', title: { vi: 'Kích hoạt bảo vệ', en: 'Activate Protection', zh: '启动保护' }, desc: { vi: 'Khi phát hiện bất thường, MCU kích hoạt cơ chế bảo vệ tương ứng.', en: 'When anomaly is detected, MCU activates the corresponding protection mechanism.', zh: '检测到异常时，MCU启动相应的保护机制。' } },
        { step: 3, icon: '', title: { vi: 'Ngắt mạch tự động', en: 'Auto Disconnect', zh: '自动断开' }, desc: { vi: 'Thiết bị tự động ngắt nguồn điện sự cố, đảm bảo an toàn tuyệt đối.', en: 'Device automatically disconnects the faulty power source for absolute safety.', zh: '设备自动断开故障电源，确保绝对安全。' } },
        { step: 4, icon: '', title: { vi: 'Cảnh báo qua ứng dụng', en: 'App Notification', zh: '应用通知' }, desc: { vi: 'Gửi thông báo cảnh báo qua ứng dụng điện thoại thông minh.', en: 'Sends alert notifications via smartphone app.', zh: '通过智能手机应用发送警报通知。' } },
        { step: 5, icon: '', title: { vi: 'An toàn tối đa', en: 'Maximum Safety', zh: '最大安全' }, desc: { vi: 'Nguy cơ sự cố điện được giảm thiểu, gia đình vận hành an toàn.', en: 'Electrical risks minimized, home operates safely.', zh: '电气风险最小化，家庭安全运行。' } }
      ]
    },
    {
      id: 'wdma-series',
      category: 'arc',
      categories: ['arc', 'domestic'],
      sku: 'WDMA',
      brand: 'Phượng Hoàng',
      name: {
        vi: 'Thiết bị an toàn điện thông minh dập hồ quang 220V',
        en: '220V Smart Arc Suppression Safety Device',
        zh: '220V智能灭弧安全电气设备'
      },
      shortDesc: {
        vi: 'Thiết bị chống điện giật, dập hồ quang, chống rò, quá tải, quá áp, ngập nước. Kết nối 4G, giám sát từ xa.',
        en: 'Electric shock protection, arc suppression, leakage, overload, overvoltage, water immersion protection. 4G connectivity, remote monitoring.',
        zh: '触电保护、灭弧、漏电、过载、过压、浸水保护。4G连接，远程监控。'
      },
      description: {
        vi: 'Thiết bị điện an toàn thông minh 220V dòng WDMA là giải pháp bảo vệ điện toàn diện thế hệ mới, tích hợp công nghệ dập hồ quang 220V tiên tiến. Với khả năng bảo vệ đa lớp, thiết bị giúp chống điện giật, ngắn mạch, quá tải, quá áp, thấp áp, rò điện, ngập nước và chống sét lan truyền. Kết nối 4G cho phép giám sát và điều khiển từ xa qua ứng dụng điện thoại thông minh, mang đến sự an tâm tuyệt đối cho người sử dụng.',
        en: 'The WDMA series 220V smart electrical safety device is a new-generation comprehensive electrical protection solution, integrating advanced 220V arc suppression technology. With multi-layer protection, it prevents electric shock, short circuit, overload, overvoltage, undervoltage, leakage, water immersion and surge. 4G connectivity enables remote monitoring and control via smartphone app.',
        zh: 'WDMA系列220V智能电气安全设备是新一代综合电气保护解决方案，集成了先进的220V灭弧技术。通过多层保护，防止触电、短路、过载、过压、欠压、漏电、浸水和浪涌。4G连接可通过智能手机应用进行远程监控和控制。'
      },
      mainImage: 'assets/images/products/32_11zon.webp',
      galleryImages: [
        'assets/images/products/45_11zon.webp',
        'assets/images/products/63_11zon.webp',
        'assets/images/products/100_11zon.webp'
      ],
      specsImage: 'assets/images/products/32_11zon.webp',
      specs: [
        { label: { vi: 'Điện áp định mức', en: 'Rated Voltage', zh: '额定电压' }, value: '220V AC' },
        { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50/60 Hz' },
        { label: { vi: 'Dòng điện', en: 'Current', zh: '电流' }, value: '32A / 45A / 63A / 100A' },
        { label: { vi: 'Tiêu chuẩn', en: 'Standard', zh: '标准' }, value: 'IEC 61008-1' },
        { label: { vi: 'Cấp bảo vệ', en: 'Protection Rating', zh: '防护等级' }, value: 'IP20' }
      ],
      price: 'Liên hệ báo giá',
      status: { vi: 'Còn hàng', en: 'In Stock', zh: '有库存' },
      inStock: true,
      // All features (shared across models)
      allFeatures: [
        { icon: '', title: { vi: 'Chống điện giật', en: 'Shock Protection', zh: '触电保护' }, desc: { vi: 'Bảo vệ chống điện giật ngoài ý muốn trong mọi tình huống.', en: 'Protection against accidental electric shock in all situations.', zh: '在所有情况下防止意外触电。' } },
        { icon: '', title: { vi: 'Dập hồ quang', en: 'Arc Suppression', zh: '灭弧' }, desc: { vi: 'Giảm hồ quang khi ngắn mạch dây pha và dây trung tính.', en: 'Reduces arcing during phase and neutral short circuits.', zh: '减少相线和中性线短路时的电弧。' } },
        { icon: '', title: { vi: 'Chống cháy nổ', en: 'Fire Prevention', zh: '防火' }, desc: { vi: 'Phòng chống cháy nổ điện toàn diện.', en: 'Comprehensive electrical fire prevention.', zh: '全面的电气火灾预防。' } },
        { icon: '', title: { vi: 'Che chắn rò điện', en: 'Leakage Shielding', zh: '漏电屏蔽' }, desc: { vi: 'Chức năng che chắn rò điện thông minh.', en: 'Smart leakage current shielding function.', zh: '智能漏电屏蔽功能。' } },
        { icon: '', title: { vi: 'Bảo vệ quá/thấp áp', en: 'Voltage Protection', zh: '电压保护' }, desc: { vi: 'Bảo vệ quá áp và thấp áp tự động.', en: 'Automatic overvoltage and undervoltage protection.', zh: '自动过压和欠压保护。' } },
        { icon: '', title: { vi: 'Chống ngập nước', en: 'Water Immersion', zh: '浸水保护' }, desc: { vi: 'Bảo vệ an toàn khi ngập nước và ẩm ướt.', en: 'Safety protection during water immersion and humidity.', zh: '浸水和潮湿时的安全保护。' } },
        { icon: '', title: { vi: 'Phát hiện dây cũ', en: 'Old Wire Detection', zh: '旧线检测' }, desc: { vi: 'Phát hiện và bảo vệ đường dây cũ hỏng.', en: 'Detects and protects aging/damaged wiring.', zh: '检测和保护老化/损坏的线路。' } },
        { icon: '', title: { vi: 'Cảnh báo sự cố', en: 'Fault Alert', zh: '故障报警' }, desc: { vi: 'Hệ thống cảnh báo sự cố tức thời.', en: 'Instant fault alert system.', zh: '即时故障报警系统。' } },
        { icon: '', title: { vi: 'Bảo vệ quá tải', en: 'Overload Protection', zh: '过载保护' }, desc: { vi: 'Bảo vệ quá tải chính xác cao.', en: 'High-precision overload protection.', zh: '高精度过载保护。' } },
        { icon: '', title: { vi: 'Chống sét', en: 'Surge Protection', zh: '浪涌保护' }, desc: { vi: 'Che chắn và chống sét hiệu quả.', en: 'Effective surge and lightning protection.', zh: '有效的浪涌和雷电保护。' } },
        { icon: '', title: { vi: 'Tự động đóng cắt', en: 'Auto Reclose', zh: '自动重合' }, desc: { vi: 'Chức năng đóng cầu dao tự động.', en: 'Automatic circuit breaker reclose function.', zh: '自动断路器重合功能。' } },
        { icon: '', title: { vi: 'Giám sát từ xa', en: 'Remote Monitor', zh: '远程监控' }, desc: { vi: 'Giám sát và điều khiển từ xa qua điện thoại di động, kết nối 4G.', en: 'Remote monitoring and control via mobile phone, 4G connectivity.', zh: '通过手机远程监控和控制，4G连接。' } }
      ],
      // Available features per model (by index into allFeatures, 0-based)
      modelFeatures: {
        'wdma-32a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'wdma-45a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'wdma-63a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'wdma-100a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      // Multi-model support
      models: [
        {
          id: 'wdma-32a',
          name: 'WDMA-32A',
          current: '32A',
          overloadRange: '1-32A',
          desc: { vi: 'Phù hợp hộ gia đình, căn hộ nhỏ', en: 'Ideal for homes, small apartments', zh: '适用于家庭、小型公寓' },
          image: 'assets/images/products/32_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V loại dập hồ quang' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMA-32A' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 13 × Rộng 9,9 × Cao 7,2 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 32A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,45 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        },
        {
          id: 'wdma-45a',
          name: 'WDMA-45A',
          current: '45A',
          overloadRange: '1-45A',
          desc: { vi: 'Phù hợp nhà lớn, biệt thự', en: 'Ideal for large homes, villas', zh: '适用于大房子、别墅' },
          image: 'assets/images/products/45_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V loại dập hồ quang' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMA-45A' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 13 × Rộng 9,9 × Cao 7,2 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 45A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,48 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        },
        {
          id: 'wdma-63a',
          name: 'WDMA-63A',
          current: '63A',
          overloadRange: '1-63A',
          desc: { vi: 'Phù hợp văn phòng, cửa hàng, doanh nghiệp nhỏ', en: 'Ideal for offices, shops, small businesses', zh: '适用于办公室、商店、小型企业' },
          image: 'assets/images/products/63_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V loại dập hồ quang' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMA-63A' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 13 × Rộng 9,9 × Cao 7,2 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 63A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,52 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        },
        {
          id: 'wdma-100a',
          name: 'WDMA-100A',
          current: '100A',
          overloadRange: '1-100A',
          desc: { vi: 'Phù hợp nhà xưởng, doanh nghiệp, tòa nhà lớn', en: 'Ideal for factories, businesses, large buildings', zh: '适用于工厂、企业、大型建筑' },
          image: 'assets/images/products/100_11zon.webp',
          specs: [
            { label: { vi: 'Kiểu loại', en: 'Type', zh: '型号' }, value: '220V loại dập hồ quang' },
            { label: { vi: 'Model', en: 'Model', zh: '型号' }, value: 'WDMA-100A' },
            { label: { vi: 'Kích thước', en: 'Dimensions', zh: '尺寸' }, value: 'Dài 15 × Rộng 10,5 × Cao 8,5 cm' },
            { label: { vi: 'Điện áp đầu vào / đầu ra', en: 'Input / Output Voltage', zh: '输入/输出电压' }, value: '220V' },
            { label: { vi: 'Kiểu dây đấu nối', en: 'Wiring Type', zh: '接线方式' }, value: 'Một pha' },
            { label: { vi: 'Dòng điện định mức', en: 'Rated Current', zh: '额定电流' }, value: '1 - 100A' },
            { label: { vi: 'Tần số', en: 'Frequency', zh: '频率' }, value: '50Hz' },
            { label: { vi: 'Trọng lượng', en: 'Weight', zh: '重量' }, value: '0,68 kg' },
            { label: { vi: 'Độ cao sử dụng', en: 'Operating Altitude', zh: '使用海拔' }, value: '0 - 5000m' },
            { label: { vi: 'Cách đấu dây', en: 'Wiring Method', zh: '接线方法' }, value: 'Nối tiếp' },
            { label: { vi: 'Phương thức lắp đặt', en: 'Installation Method', zh: '安装方式' }, value: 'Lắp tủ aptomat nhựa' },
            { label: { vi: 'Chế độ kết nối mạng', en: 'Network Connection', zh: '网络连接方式' }, value: '4G' }
          ]
        }
      ],
      applications: [
        { icon: '', title: { vi: 'Gia đình / Nhà ở', en: 'Home / Residence', zh: '家庭/住宅' }, desc: { vi: 'Bảo vệ toàn diện cho hệ thống điện gia đình.', en: 'Comprehensive protection for home electrical systems.', zh: '为家庭电气系统提供全面保护。' } },
        { icon: '', title: { vi: 'Cửa hàng / Tạp hóa', en: 'Shop / Grocery', zh: '商店/杂货店' }, desc: { vi: 'An toàn điện cho các cửa hàng bán lẻ.', en: 'Electrical safety for retail stores.', zh: '为零售店提供电气安全保护。' } },
        { icon: '', title: { vi: 'Quán ăn / Nhà hàng', en: 'Restaurant / Eatery', zh: '餐厅/小吃店' }, desc: { vi: 'Bảo vệ thiết bị điện trong môi trường ẩm ướt.', en: 'Protect electrical equipment in humid environments.', zh: '在潮湿环境中保护电气设备。' } },
        { icon: '', title: { vi: 'Văn phòng / Doanh nghiệp', en: 'Office / Business', zh: '办公室/企业' }, desc: { vi: 'Giải pháp an toàn cho không gian làm việc.', en: 'Safety solutions for workspaces.', zh: '为工作空间提供安全解决方案。' } },
        { icon: '', title: { vi: 'Trung tâm thương mại', en: 'Shopping Center', zh: '购物中心' }, desc: { vi: 'Bảo vệ tập trung cho khu vực công cộng.', en: 'Centralized protection for public areas.', zh: '为公共区域提供集中保护。' } },
        { icon: '', title: { vi: 'Trường học', en: 'School / Education', zh: '学校/教育机构' }, desc: { vi: 'An toàn điện cho môi trường giáo dục.', en: 'Electrical safety for educational environments.', zh: '为教育环境提供电气安全保护。' } },
        { icon: '', title: { vi: 'Khu vực công cộng', en: 'Public Area', zh: '公共区域' }, desc: { vi: 'Bảo vệ hệ thống điện khu vực đông người.', en: 'Protect electrical systems in crowded areas.', zh: '保护拥挤区域的电气系统。' } },
        { icon: '', title: { vi: 'Cơ sở y tế', en: 'Medical Facility', zh: '医疗机构' }, desc: { vi: 'An toàn tuyệt đối cho thiết bị y tế nhạy cảm.', en: 'Absolute safety for sensitive medical equipment.', zh: '为敏感医疗设备提供绝对安全保护。' } }
      ]
    },
  ],

  // Helper: get products by category (supports both single category and categories array)
  getByCategory: function (categoryId) {
    return this.products.filter(function (p) {
      return p.category === categoryId || (p.categories && p.categories.indexOf(categoryId) >= 0);
    });
  },

  // Helper: get product by id
  getById: function (productId) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) return this.products[i];
    }
    return null;
  },

  // Helper: get related products (same category, excluding current)
  getRelated: function (productId, limit) {
    limit = limit || 4;
    const product = this.getById(productId);
    if (!product) return [];
    return this.getByCategory(product.category).filter(function (p) { return p.id !== productId; }).slice(0, limit);
  },

  // Helper: get category info
  getCategory: function (categoryId) {
    return this.categories[categoryId] || null;
  },

  // Helper: get Google Drive image placeholder
  getPlaceholder: function (text) {
    return 'https://placehold.co/400x400/0a1628/00d4ff?text=' + encodeURIComponent(text);
  },

  // Helper: get current language from translations if available
  getLang: function () {
    if (typeof currentLang !== 'undefined') return currentLang;
    return 'vi';
  },

  // Helper: get localized text
  t: function (obj) {
    const lang = this.getLang();
    return obj[lang] || obj['vi'] || obj['en'] || '';
  },

  // Render product cards onto a container
  renderCards: function (categoryId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const products = this.getByCategory(categoryId);
    const cat = this.getCategory(categoryId);
    let html = '';
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const statusClass = p.inStock ? 'in-stock' : 'out-of-stock';
      const statusText = this.t(p.status);
      const name = this.t(p.name);
      const desc = this.t(p.shortDesc);
      const imgSrc = p.mainImage || this.getPlaceholder(name);
      html += '<a class="product-card" href="product-detail.html?id=' + p.id + '">';
      html += '<div class="product-card-img"><img src="' + imgSrc + '" alt="' + name + '" loading="lazy"></div>';
      html += '<div class="product-card-body">';
      html += '<span class="product-badge ' + statusClass + '">' + statusText + '</span>';
      html += '<h3>' + name + '</h3>';
      html += '<p>' + desc + '</p>';
      html += '<div class="product-card-specs">';
      const specsToShow = p.specs.slice(0, 3);
      for (let j = 0; j < specsToShow.length; j++) {
        html += '<span class="spec-chip">' + specsToShow[j].value + '</span>';
      }
      html += '</div>';
      html += '<span class="product-card-btn">Xem chi tiết →</span>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  },

  // Render related products on detail page
  renderRelated: function (productId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const related = this.getRelated(productId, 4);
    if (related.length === 0) { container.parentElement.style.display = 'none'; return; }
    let html = '';
    for (let i = 0; i < related.length; i++) {
      const p = related[i];
      const name = this.t(p.name);
      const desc = this.t(p.shortDesc);
      const imgSrc = p.mainImage || this.getPlaceholder(name);
      html += '<a class="related-card" href="product-detail.html?id=' + p.id + '">';
      html += '<div class="related-card-img"><img src="' + imgSrc + '" alt="' + name + '" loading="lazy"></div>';
      html += '<div class="related-card-body">';
      html += '<h3>' + name + '</h3>';
      html += '<p>' + desc + '</p>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  },

  // Shopping cart system
  cart: {
    items: [],

    init: function () {
      try {
        const saved = localStorage.getItem('ph_cart');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.every(function (item) {
            return item && typeof item.productId === 'string' && typeof item.quantity === 'number';
          })) {
            this.items = parsed;
          } else {
            console.warn('Invalid cart data structure, resetting cart');
            this.items = [];
          }
        }
      } catch (e) { console.warn('Failed to load cart from localStorage:', e); this.items = []; }
      this.updateBadge();
    },

    add: function (productId, modelName, quantity) {
      quantity = quantity || 1;
      let existing = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].productId === productId && this.items[i].selectedModel === modelName) {
          this.items[i].quantity += quantity;
          existing = true;
          break;
        }
      }
      if (!existing) {
        const product = productData.getById(productId);
        this.items.push({
          productId: productId,
          productName: productData.t(product.name),
          selectedModel: modelName || (product.models && product.models[0] ? product.models[0].name : ''),
          mainImage: product.mainImage || productData.getPlaceholder(productData.t(product.name)),
          quantity: quantity,
          price: product.price || 'Liên hệ báo giá'
        });
      }
      this.save();
      this.updateBadge();
    },

    remove: function (index) {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
        this.save();
        this.updateBadge();
      }
    },

    updateQty: function (index, qty) {
      if (index >= 0 && index < this.items.length) {
        this.items[index].quantity = Math.max(1, Math.min(99, qty));
        this.save();
        this.updateBadge();
      }
    },

    getTotal: function () {
      return this.items.length;
    },

    clear: function () {
      this.items = [];
      this.save();
      this.updateBadge();
    },

    save: function () {
      try {
        if (!Array.isArray(this.items)) { console.warn('Invalid cart items, resetting'); this.items = []; }
        localStorage.setItem('ph_cart', JSON.stringify(this.items));
      } catch (e) { console.warn('Failed to save cart to localStorage:', e); }
    },

    updateBadge: function () {
      const count = this.getTotal();
      const badge = document.getElementById('cartBadge');
      if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
      }
    },

    showCart: function () {
      const modal = document.getElementById('cartModal');
      if (!modal) return;
      const container = document.getElementById('cartItems');
      if (!container) return;
      if (this.items.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--color-text-secondary);font-size:16px;">Giỏ hàng trống</div>';
      } else {
        let html = '';
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i];
          html += '<div style="display:flex;gap:14px;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.06);align-items:center;">';
          html += '<div style="width:70px;height:70px;border-radius:10px;background:rgba(10,22,40,.5);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><img src="' + item.mainImage + '" alt="' + (item.name || 'Sản phẩm') + '" style="max-width:80%;max-height:80%;object-fit:contain;"></div>';
          html += '<div style="flex:1;min-width:0;"><div style="font-size:14px;font-weight:600;margin-bottom:2px;">' + item.productName + '</div><div style="font-size:12px;color:var(--color-text-secondary);">Model: ' + item.selectedModel + '</div><div style="font-size:12px;color:var(--color-text-secondary);">' + item.price + '</div></div>';
          html += '<div style="display:flex;align-items:center;gap:6px;"><button onclick="productData.cart.updateQty(' + i + ',' + (item.quantity - 1) + ');productData.cart.showCart();" style="width:28px;height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#fff;cursor:pointer;font-size:14px;">−</button><span style="min-width:24px;text-align:center;font-size:14px;">' + item.quantity + '</span><button onclick="productData.cart.updateQty(' + i + ',' + (item.quantity + 1) + ');productData.cart.showCart();" style="width:28px;height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#fff;cursor:pointer;font-size:14px;">+</button></div>';
          html += '<button onclick="productData.cart.remove(' + i + ');productData.cart.showCart();" style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(255,107,53,.15);color:var(--color-warning);cursor:pointer;font-size:14px;">×</button>';
          html += '</div>';
        }
        container.innerHTML = html;
      }
      modal.style.display = 'flex';
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
    },

    showCheckout: function () {
      const modal = document.getElementById('checkoutModal');
      if (!modal) return;
      const body = document.getElementById('checkoutBody');
      if (!body) return;

      let orderHTML = '<div style="margin-bottom:20px;padding:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;">';
      orderHTML += '<h4 style="font-size:14px;font-weight:600;margin-bottom:12px;">Tóm tắt đơn hàng</h4>';
      for (let i = 0; i < productData.cart.items.length; i++) {
        const item = productData.cart.items[i];
        orderHTML += '<div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06);align-items:center;">';
        orderHTML += '<div style="width:48px;height:48px;border-radius:8px;background:rgba(10,22,40,.5);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><img src="' + item.mainImage + '" alt="' + (item.name || 'Sản phẩm') + '" style="max-width:80%;max-height:80%;object-fit:contain;"></div>';
        orderHTML += '<div style="flex:1;"><div style="font-size:13px;font-weight:600;">' + item.productName + '</div><div style="font-size:11px;color:var(--color-text-secondary);">Model: ' + item.selectedModel + ' | SL: ' + item.quantity + '</div></div>';
        orderHTML += '<div style="font-size:12px;color:var(--color-text-secondary);">' + item.price + '</div></div>';
      }
      orderHTML += '</div>';

      orderHTML += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">';
      orderHTML += '<div style="grid-column:1/-1;"><label style="font-size:13px;color:var(--color-text-secondary);display:block;margin-bottom:4px;">Họ và tên <span style="color:var(--color-warning);">*</span></label><input id="cf_name" type="text" placeholder="Nguyễn Văn A" style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:14px;font-family:inherit;"></div>';
      orderHTML += '<div><label style="font-size:13px;color:var(--color-text-secondary);display:block;margin-bottom:4px;">Số điện thoại <span style="color:var(--color-warning);">*</span></label><input id="cf_phone" type="tel" placeholder="09xx xxx xxx" style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:14px;font-family:inherit;"></div>';
      orderHTML += '<div><label style="font-size:13px;color:var(--color-text-secondary);display:block;margin-bottom:4px;">Email</label><input id="cf_email" type="email" placeholder="email@example.com" style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:14px;font-family:inherit;"></div>';
      orderHTML += '<div style="grid-column:1/-1;"><label style="font-size:13px;color:var(--color-text-secondary);display:block;margin-bottom:4px;">Địa chỉ</label><input id="cf_address" type="text" placeholder="Số nhà, đường, tỉnh/thành phố" style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:14px;font-family:inherit;"></div>';
      orderHTML += '<div style="grid-column:1/-1;"><label style="font-size:13px;color:var(--color-text-secondary);display:block;margin-bottom:4px;">Ghi chú</label><textarea id="cf_note" placeholder="Yêu cầu thêm về sản phẩm..." style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:14px;font-family:inherit;resize:vertical;min-height:80px;"></textarea></div>';
      orderHTML += '</div>';
      orderHTML += '<button onclick="productData.cart.submitCheckout()" style="width:100%;padding:14px;border:none;border-radius:999px;background:linear-gradient(135deg,var(--color-accent),#0099cc);color:var(--color-bg-primary);font-weight:700;font-size:15px;cursor:pointer;font-family:inherit;box-shadow:var(--shadow-glow);">Gửi yêu cầu báo giá</button>';

      body.innerHTML = orderHTML;
      var chkModal = document.getElementById('checkoutModal');
      if (chkModal) { chkModal.style.display = 'flex'; chkModal.style.opacity = '1'; chkModal.style.visibility = 'visible'; }
    },

    submitCheckout: function () {
      const name = document.getElementById('cf_name')?.value?.trim();
      const phone = document.getElementById('cf_phone')?.value?.trim();
      if (!name || !phone) {
        alert('Vui lòng nhập họ tên và số điện thoại.');
        return;
      }
      var chkModal2 = document.getElementById('checkoutModal');
      if (chkModal2) chkModal2.style.display = 'none';
      // Order saved to localStorage for reference
      try {
        const orders = JSON.parse(localStorage.getItem('ph_checkout_orders') || '[]');
        orders.unshift({
          id: 'DH' + Date.now().toString(36).toUpperCase(),
          date: new Date().toISOString(),
          items: this.items.map(function (item) {
            return { productId: item.productId, productName: item.productName, selectedModel: item.selectedModel, mainImage: item.mainImage, quantity: item.quantity, price: item.price };
          }),
          customer: {
            name: document.getElementById('cf_name')?.value?.trim() || '',
            phone: document.getElementById('cf_phone')?.value?.trim() || '',
            email: document.getElementById('cf_email')?.value?.trim() || '',
            address: document.getElementById('cf_address')?.value?.trim() || ''
          }
        });
        // Keep only last 50 orders
        if (orders.length > 50) orders.length = 50;
        localStorage.setItem('ph_checkout_orders', JSON.stringify(orders));
      } catch (e) {
        console.warn('Failed to save checkout order to localStorage:', e);
      }

      var cfmModal = document.getElementById('confirmModal');
      if (cfmModal) { cfmModal.style.display = 'flex'; cfmModal.style.opacity = '1'; cfmModal.style.visibility = 'visible'; }
      productData.cart.clear();
    }
  }
};

// Attach to global namespace (created by phong.js)
if (window.PhuongHoang) {
  window.PhuongHoang.productData = productData;
}
