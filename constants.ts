import { AppData, TranslationDictionary } from './types';

export const TRANSLATIONS: { vi: TranslationDictionary; en: TranslationDictionary } = {
  vi: {
    nav: {
      home: 'Trang Chủ',
      products: 'Sản Phẩm',
      contact: 'Liên Hệ',
      askAI: 'Hỏi AI',
    },
    hero: {
      title_prefix: 'Giải Pháp Hóa Chất',
      title_highlight: 'Từ Tài Nguyên Việt',
      cta_products: 'Xem Sản Phẩm',
      cta_contact: 'Liên Hệ Ngay',
      hotline_title: 'Hotline Tư Vấn Trực Tiếp',
      rep_title: 'Đại diện kinh doanh',
    },
    home: {
      about_title: 'Về Chúng Tôi',
      factory_scale: 'Quy Mô Nhà Máy',
      factory_desc_prefix: 'Thành lập từ năm',
      factory_desc_capacity: 'với công suất',
      cooperation: 'Hợp Tác Phát Triển',
      view_all_products: 'Xem toàn bộ danh mục sản phẩm',
    },
    products: {
      title: 'Danh Mục Sản Phẩm',
      subtitle: 'Các sản phẩm nhựa thông biến tính và tinh dầu chất lượng cao.',
      search_placeholder: 'Tìm kiếm sản phẩm...',
      all_categories: 'Tất cả',
      no_results: 'Không tìm thấy sản phẩm phù hợp.',
      view_detail: 'Xem Chi Tiết & Thông Số',
    },
    detail: {
      applications: 'Ứng Dụng',
      properties: 'Đặc Tính',
      packaging: 'Quy cách đóng gói',
      packaging_label: 'Quy cách đóng gói:',
      specifications: 'Thông Số Kỹ Thuật (Specifications)',
      close: 'Đóng',
      contact_sales: 'Liên Hệ Mua Hàng',
    },
    contact: {
      title: 'Liên Hệ Với Chúng Tôi',
      subtitle: 'Hợp tác cùng phát triển - Vươn tầm quốc tế',
      info_title: 'Thông Tin Liên Hệ',
      factory_address: 'Địa chỉ nhà máy:',
      contact_person: 'Người liên hệ:',
      tax_id: 'Mã số thuế:',
      phone: 'Điện thoại:',
      fax: 'Fax:',
      form_title: 'Gửi Thông Tin Liên Hệ',
      form_name: 'Họ và tên',
      form_email: 'Email',
      form_phone: 'Số điện thoại',
      form_message: 'Nội dung cần tư vấn',
      form_submit: 'Gửi Liên Hệ',
      form_success: 'Cảm ơn Quý khách đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!',
    },
    chat: {
      header: 'Hỗ Trợ Trực Tuyến',
      placeholder: 'Nhập câu hỏi...',
      disclaimer: 'AI có thể mắc lỗi. Vui lòng kiểm tra lại thông tin quan trọng.',
      welcome: 'Xin chào! Tôi là trợ lý ảo của Tùng Việt Chemical. Tôi có thể giúp gì cho bạn về các sản phẩm nhựa thông và hóa chất?',
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
      privacy: 'Chính Sách Bảo Mật',
      terms: 'Điều Khoản Dịch Vụ',
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      contact: 'Contact',
      askAI: 'Ask AI',
    },
    hero: {
      title_prefix: 'Chemical Solutions',
      title_highlight: 'From Vietnamese Resources',
      cta_products: 'View Products',
      cta_contact: 'Contact Now',
      hotline_title: 'Direct Consultation Hotline',
      rep_title: 'Sales Representative',
    },
    home: {
      about_title: 'About Us',
      factory_scale: 'Factory Scale',
      factory_desc_prefix: 'Established in',
      factory_desc_capacity: 'with a capacity of',
      cooperation: 'Cooperation & Development',
      view_all_products: 'View full product catalog',
    },
    products: {
      title: 'Product Catalog',
      subtitle: 'High-quality modified rosin resins and essential oils.',
      search_placeholder: 'Search products...',
      all_categories: 'All',
      no_results: 'No matching products found.',
      view_detail: 'View Details & Specs',
    },
    detail: {
      applications: 'Applications',
      properties: 'Properties',
      packaging: 'Packaging',
      packaging_label: 'Packaging:',
      specifications: 'Specifications',
      close: 'Close',
      contact_sales: 'Contact Sales',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Cooperate to develop - Reach international standards',
      info_title: 'Contact Information',
      factory_address: 'Factory Address:',
      contact_person: 'Contact Person:',
      tax_id: 'Tax ID:',
      phone: 'Phone:',
      fax: 'Fax:',
      form_title: 'Send Contact Info',
      form_name: 'Full Name',
      form_email: 'Email',
      form_phone: 'Phone Number',
      form_message: 'Message / Inquiry',
      form_submit: 'Send Message',
      form_success: 'Thank you for contacting us. We will respond as soon as possible!',
    },
    chat: {
      header: 'Online Support',
      placeholder: 'Type your question...',
      disclaimer: 'AI may make mistakes. Please verify important information.',
      welcome: 'Hello! I am the AI assistant of Tung Viet Chemical. How can I help you with our rosin products and chemicals?',
    },
    footer: {
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
    }
  },
};

export const LEGAL_CONTENT = {
    vi: {
        privacy: `
            <h3 class="text-xl font-bold mb-4">1. Thu thập thông tin</h3>
            <p class="mb-4">Chúng tôi thu thập thông tin cá nhân mà bạn cung cấp trực tiếp cho chúng tôi khi bạn điền vào form liên hệ, bao gồm tên, địa chỉ email, số điện thoại và nội dung tin nhắn.</p>
            
            <h3 class="text-xl font-bold mb-4">2. Sử dụng thông tin</h3>
            <p class="mb-4">Thông tin của bạn được sử dụng để:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Phản hồi các yêu cầu, thắc mắc về sản phẩm và dịch vụ.</li>
                <li>Gửi thông tin báo giá và tư vấn kỹ thuật.</li>
                <li>Cải thiện chất lượng dịch vụ khách hàng.</li>
            </ul>

            <h3 class="text-xl font-bold mb-4">3. Bảo mật thông tin</h3>
            <p class="mb-4">Chúng tôi cam kết bảo mật thông tin cá nhân của bạn. Chúng tôi không bán, trao đổi, hoặc chuyển giao thông tin của bạn cho bên thứ ba trừ khi có sự đồng ý của bạn hoặc theo yêu cầu của pháp luật.</p>

            <h3 class="text-xl font-bold mb-4">4. Cookie</h3>
            <p class="mb-4">Website này sử dụng Local Storage để lưu trữ tùy chọn ngôn ngữ của bạn nhằm mang lại trải nghiệm tốt hơn. Chúng tôi không sử dụng cookie để theo dõi hành vi người dùng cho mục đích quảng cáo.</p>
        `,
        terms: `
            <h3 class="text-xl font-bold mb-4">1. Chấp nhận các điều khoản</h3>
            <p class="mb-4">Bằng việc truy cập và sử dụng website của Công Ty Cổ Phần Hóa Phẩm Tùng Việt, bạn đồng ý tuân thủ các điều khoản và điều kiện này.</p>

            <h3 class="text-xl font-bold mb-4">2. Thông tin sản phẩm</h3>
            <p class="mb-4">Mọi thông tin về thông số kỹ thuật, đặc tính và ứng dụng của sản phẩm trên website chỉ mang tính chất tham khảo. Người sử dụng nên liên hệ trực tiếp để được tư vấn kỹ thuật chính xác nhất cho từng ứng dụng cụ thể. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng thông tin trên website mà không qua tư vấn.</p>

            <h3 class="text-xl font-bold mb-4">3. Sở hữu trí tuệ</h3>
            <p class="mb-4">Tất cả nội dung, hình ảnh, logo và tài liệu trên website này là tài sản của Công Ty Cổ Phần Hóa Phẩm Tùng Việt. Nghiêm cấm mọi hành vi sao chép, sửa đổi hoặc phân phối mà không có sự cho phép bằng văn bản.</p>

            <h3 class="text-xl font-bold mb-4">4. Thay đổi điều khoản</h3>
            <p class="mb-4">Chúng tôi có quyền thay đổi, chỉnh sửa các điều khoản này bất cứ lúc nào mà không cần báo trước. Việc bạn tiếp tục sử dụng website sau khi có các thay đổi đồng nghĩa với việc bạn chấp nhận các thay đổi đó.</p>
        `
    },
    en: {
        privacy: `
            <h3 class="text-xl font-bold mb-4">1. Information Collection</h3>
            <p class="mb-4">We collect personal information that you provide directly to us when you fill out the contact form, including your name, email address, phone number, and message content.</p>
            
            <h3 class="text-xl font-bold mb-4">2. Use of Information</h3>
            <p class="mb-4">Your information is used to:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Respond to inquiries regarding products and services.</li>
                <li>Send quotations and technical consultations.</li>
                <li>Improve customer service quality.</li>
            </ul>

            <h3 class="text-xl font-bold mb-4">3. Information Security</h3>
            <p class="mb-4">We are committed to protecting your personal information. We do not sell, trade, or transfer your information to third parties unless we have your consent or are required by law.</p>

            <h3 class="text-xl font-bold mb-4">4. Cookies</h3>
            <p class="mb-4">This website uses Local Storage to save your language preference to provide a better experience. We do not use cookies to track user behavior for advertising purposes.</p>
        `,
        terms: `
            <h3 class="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
            <p class="mb-4">By accessing and using the website of Tung Viet Chemical Joint Stock Company, you agree to comply with these terms and conditions.</p>

            <h3 class="text-xl font-bold mb-4">2. Product Information</h3>
            <p class="mb-4">All information regarding technical specifications, properties, and applications of products on the website is for reference only. Users should contact us directly for the most accurate technical advice for specific applications. We are not liable for any damages arising from the use of information on the website without consultation.</p>

            <h3 class="text-xl font-bold mb-4">3. Intellectual Property</h3>
            <p class="mb-4">All content, images, logos, and materials on this website are the property of Tung Viet Chemical Joint Stock Company. Any copying, modification, or distribution without written permission is strictly prohibited.</p>

            <h3 class="text-xl font-bold mb-4">4. Changes to Terms</h3>
            <p class="mb-4">We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of such changes.</p>
        `
    }
}

export const COMPANY_DATA_VI: AppData = {
  "company_info": {
    "name": "Công Ty Cổ Phần Hóa Phẩm Tùng Việt",
    "established": "2007",
    "factory_established": "2011",
    "capacity": "20.000 tấn sản phẩm/năm",
    "description": "Chuyên sản xuất hóa chất, chế biến nhựa thông chuyên sâu từ nguyên liệu thô trong nước. Cam kết sản phẩm giá tốt, chất lượng ổn định.",
    "contact": {
      "contact_person": "Lê Thị Minh Thư",
      "address": "Đường số 7, Khu Công Nghiệp Nhơn Trạch II-Nhơn Phú, Thị Trấn Hiệp Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai.",
      "tax_id": "3602483670",
      "phone": "84. 28. 3862 0025",
      "fax": "84. 28. 3862 0027",
      "hotlines": [
        { "number": "0907 776 779", "email": "sales@tungviet.com" },
        { "number": "0902 422 457", "email": "info@tungviet.com" }
      ],
      "website": "www.tungviet.com"
    },
    "cooperation_areas": [
      "Ý tưởng về sản xuất hóa chất",
      "Nghiên cứu và triển khai ứng dụng",
      "Các sản phẩm sử dụng nguyên liệu từ Việt Nam"
    ]
  },
  "products": [
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "PHENAL RESIN",
      "description": "Chất rắn màu vàng sáng, trong suốt, biến tính từ nhựa thông để tăng khả năng kết dính.",
      "properties": [
        "Hòa tan trong dung môi vòng thơm, ester, ketone, sản phẩm dầu mỏ",
        "Màu sáng, chống ngả vàng, kháng nhiệt"
      ],
      "applications": [
        "Mực in (thay thế damar gum)",
        "Keo dán (tương thích EVA, SBS, SIS, SBR, CR, NR)"
      ],
      "packaging": "25kg/bao hai lớp nhựa - giấy; 40 bao/pallet. Hạn sử dụng 02 năm.",
      "specifications": [
        {
          "code": "HR911",
          "appearance": "Transparent granular solid",
          "softening_point_c": "95 - 105",
          "acid_value_mg_koh_g": "8 - 16",
          "color_gardner": "3 - 4",
          "solubility_toluene": "Compatible, clear"
        },
        {
          "code": "HR911H",
          "appearance": "Transparent granular solid",
          "softening_point_c": "95 - 105",
          "acid_value_mg_koh_g": "8 - 16",
          "color_gardner": "2 - 3",
          "solubility_toluene": "Compatible, clear"
        }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN MODIFIED MALEIC RESIN",
      "description": "Chất rắn màu vàng sáng, trong suốt, thu được từ ester hóa nhựa thông maleic và alcohol đa chức.",
      "properties": [
        "Tan trong ester, dung môi không alcohol, turpentine oil",
        "Không tan trong alcohol, tan một phần trong dầu mỏ",
        "Màu sáng, chống vàng, chống nhiệt, bám dính tốt"
      ],
      "applications": [
        "Tăng độ cứng, độ bóng trong sơn polyester, sơn nitrocellulose, sơn PU, dầu bóng",
        "Sản xuất sơn phenolic",
        "Sơn giao thông nhiệt dẻo"
      ],
      "specifications": [
        { "code": "M1103", "softening_point_c": "110 - 117", "acid_value": "15 - 22", "color_gardner": "2 - 3" },
        { "code": "M1204", "softening_point_c": "117 - 125", "acid_value": "22 - 30", "color_gardner": "2 - 3" },
        { "code": "M120A", "softening_point_c": "118 - 125", "acid_value": "22 - 30", "color_gardner": "3 - 4+" },
        { "code": "M1304", "softening_point_c": "125 - 135", "acid_value": "22 - 30", "color_gardner": "3 - 4" },
        { "code": "M1306", "softening_point_c": "125 - 135", "acid_value": "22 - 30", "color_gardner": "5 - 6" },
        { "code": "M13035", "softening_point_c": "125 - 135", "acid_value": "22 - 30", "color_gardner": "4 - 5" },
        { "code": "M13035A", "softening_point_c": "127 - 135", "acid_value": "22 - 30", "color_gardner": "3 - 4+" },
        { "code": "M135H", "softening_point_c": "132 - 142", "acid_value": "25 - 35", "color_gardner": "4 - 5" },
        { "code": "M140", "softening_point_c": "135 - 145", "acid_value": "32 - 42", "color_gardner": "4 - 6" },
        { "code": "M140P", "softening_point_c": "135 - 145", "acid_value": "38 - 48", "color_gardner": "4 - 6" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN MODIFIED MALEIC RESIN SOLUTION",
      "description": "Dung dịch của Maleic Resin (M1306 hoặc M13035) hàm lượng rắn 65-70% trong dung môi.",
      "properties": [
        "Tỉ trọng: 1.03-1.05 g/mL",
        "Dung môi: Toluene, Xylene hoặc Butyl acetate"
      ],
      "applications": [
        "Tăng độ cứng, độ bóng trong sơn polyester, sơn NC, sơn PU, dầu bóng",
        "Sản xuất các loại sơn phenolic"
      ],
      "packaging": "Phuy sắt 200 kg/phuy",
      "specifications": [
        { "code": "SD1306-S65", "solvent": "Toluene", "non_volatile_percent": "64-66", "viscosity_sec": "30-45", "color_gardner": "6-8", "acid_value": "15-22" },
        { "code": "SD1306-X65", "solvent": "Xylene", "non_volatile_percent": "64-66", "viscosity_sec": "30-45", "color_gardner": "6-8", "acid_value": "15-22" },
        { "code": "SD1306-B65", "solvent": "Butyl acetate", "non_volatile_percent": "64-66", "viscosity_sec": "30-45", "color_gardner": "6-8", "acid_value": "15-22" },
        { "code": "M13035-S70", "solvent": "Toluene", "non_volatile_percent": "69-71", "viscosity_sec": "35-50", "color_gardner": "5-7", "acid_value": "15-22" },
        { "code": "M13035-X70", "solvent": "Xylene", "non_volatile_percent": "69-71", "viscosity_sec": "35-50", "color_gardner": "5-7", "acid_value": "15-22" },
        { "code": "M13035-B70", "solvent": "Butyl acetate", "non_volatile_percent": "69-71", "viscosity_sec": "35-50", "color_gardner": "5-7", "acid_value": "15-22" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN ESTER GLYCEROL",
      "description": "Chất rắn màu vàng sáng, trong suốt, thu được từ quá trình ester hóa glycerine và nhựa thông.",
      "properties": [
        "Tan trong ester, turpentine oil, dung môi không phân cực",
        "Màu sáng, chống vàng, chống nhiệt, độ dính cao"
      ],
      "applications": [
        "Sơn vạch kẻ đường, keo dán ép, keo nhiệt dẻo, sơn nhiệt dẻo",
        "Mực in, cao su"
      ],
      "specifications": [
        { "code": "G90", "softening_point_c": "85 - 95", "acid_value": "10 - 20", "color_gardner": "3 - 5" },
        { "code": "G90A", "softening_point_c": "87 - 95", "acid_value": "3 - 10", "color_gardner": "3 - 5" },
        { "code": "G100", "softening_point_c": "93 - 100", "acid_value": "10 - 20", "color_gardner": "3 - 5" },
        { "code": "G100A", "softening_point_c": "92 - 100", "acid_value": "3 - 10", "color_gardner": "3 - 5" },
        { "code": "G100M", "softening_point_c": "97 - 103", "acid_value": "10 - 20", "color_gardner": "3 - 5" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN ESTER PENTAERYTHRITOL",
      "description": "Chất rắn màu vàng sáng, trong suốt, thu được từ quá trình ester hóa nhựa thông và pentaerythritol.",
      "properties": [
        "Tan trong ester, turpentine oil, dung môi alcol",
        "Màu sáng, chống vàng, chống nhiệt, độ dính cao"
      ],
      "applications": [
        "Sơn, mực in, keo dán",
        "Tương thích với nhựa NC, alkyd, EVA, cao su SIS, SBS, CR"
      ],
      "packaging": "25kg/bao; 40 bao/pallet",
      "specifications": [
        { "code": "P95A", "softening_point_c": "90 - 98", "acid_value": "8 - 16", "color_gardner": "3 - 4" },
        { "code": "P100", "softening_point_c": "97 - 105", "acid_value": "20 - 30", "color_gardner": "3 - 4" },
        { "code": "P100A", "softening_point_c": "98 - 103", "acid_value": "8 - 16", "color_gardner": "3 - 4" },
        { "code": "P105NP", "softening_point_c": "100 - 108", "acid_value": "20 - 30", "color_gardner": "3 - 4" },
        { "code": "P105", "softening_point_c": "101 - 109", "acid_value": "20 - 30", "color_gardner": "3 - 4" },
        { "code": "P105A", "softening_point_c": "101 - 109", "acid_value": "8 - 16", "color_gardner": "3 - 4" },
        { "code": "P110", "softening_point_c": "105 - 114", "acid_value": "20 - 30", "color_gardner": "3 - 4" },
        { "code": "P110A", "softening_point_c": "105 - 114", "acid_value": "8 - 16", "color_gardner": "3 - 4" },
        { "code": "P120", "softening_point_c": "115 - 124", "acid_value": "15 - 25", "color_gardner": "3 - 4+" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN RESIN FOR ROAD MARKING PAINT",
      "description": "Nhựa Sơn Giao Thông Nhiệt Dẻo. Chất rắn vàng sáng, chống mài mòn, khô nhanh.",
      "properties": [
        "Chống áp lực tốt, chống mài mòn, chống lắng, khô nhanh",
        "Tương hợp tốt với nhựa dầu mỏ và EVA"
      ],
      "applications": [
        "Sơn giao thông nhiệt dẻo"
      ],
      "specifications": [
        { "code": "RM95", "softening_point_c": "91 - 99", "acid_value_max": "18", "color_gardner": "4 - 5" },
        { "code": "RM100", "softening_point_c": "98 - 103", "acid_value_max": "10", "color_gardner": "3 - 4" },
        { "code": "RM100A", "softening_point_c": "98 - 107", "acid_value_max": "10", "color_gardner": "4 - 5" },
        { "code": "RM105", "softening_point_c": "100 - 107", "acid_value_max": "10", "color_gardner": "3 - 4" },
        { "code": "RM115", "softening_point_c": "112 - 118", "acid_value_max": "18", "color_gardner": "3 - 4" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN PAPER RESIN",
      "description": "Chất rắn màu vàng, trong suốt, dùng cho keo giấy.",
      "applications": ["Sản xuất keo (keo màng nhựa, keo giấy), mực in"],
      "specifications": [
        { "code": "RP100", "softening_point_c": "100-110", "acid_value": "205-250", "color_gardner": "5-7" },
        { "code": "RP120", "softening_point_c": "115-125", "acid_value": "225-275", "color_gardner": "5-7" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN MALEATE",
      "description": "Cộng hợp nhựa thông với maleic anhydrid/fumaric acid.",
      "applications": ["Keo giấy, mực in, tổng hợp sản phẩm khác"],
      "specifications": [
        { "code": "M110M", "softening_point_c": "105-115", "acid_value": "210-260", "color_gardner": "6-8" },
        { "code": "M125M", "softening_point_c": "120-130", "acid_value": "225-275", "color_gardner": "6-8" },
        { "code": "M110L", "softening_point_c": "105-115", "acid_value": "125-145", "color_gardner": "5-7" },
        { "code": "M120L", "softening_point_c": "115-125", "acid_value": "130-150", "color_gardner": "5-7" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN FUMARATE",
      "description": "Cộng hợp nhựa thông với fumaric acid/maleic anhydrid.",
      "applications": ["Keo giấy, mực in"],
      "specifications": [
        { "code": "F110", "softening_point_c": "105-115", "acid_value": "225-275", "color_gardner": "10 max" },
        { "code": "F125", "softening_point_c": "120-130", "acid_value": "170-250", "color_gardner": "8 max" }
      ]
    },
    {
      "category": "NHỰA THÔNG BIẾN TÍNH",
      "product_name": "ROSIN MODIFIED SOLUTION - RS130",
      "description": "Dung dịch Nhựa Thông Biến Tính Giảm Độ Acid.",
      "applications": ["Sơn tàu biển (chống hà)"],
      "specifications": [
        { "code": "RS130-T60", "solvent": "Toluene", "non_volatile_percent": "59-63", "acid_value": "120-130" },
        { "code": "RS130-X60", "solvent": "Xylene", "non_volatile_percent": "59-63", "acid_value": "120-130" },
        { "code": "RS130-T70", "solvent": "Toluene", "non_volatile_percent": "69-73", "acid_value": "120-130" },
        { "code": "RS130-X70", "solvent": "Xylene", "non_volatile_percent": "69-73", "acid_value": "120-130" }
      ]
    },
    {
      "category": "NHỰA THÔNG & TINH DẦU",
      "product_name": "GUM ROSIN (NHỰA THÔNG)",
      "description": "Nhựa thông sống chưng cất. Nguồn gốc tự nhiên.",
      "applications": ["Keo hot melt, keo PSA, mực in, sơn, cao su"],
      "specifications": [
        { "code": "Rosin-TVN", "type": "Pinus caribaea", "softening_point_c": "77", "acid_value": "156-170" },
        { "code": "Rosin-TVJ", "type": "Pinus merkusii", "softening_point_c": "80", "acid_value": "180-195" },
        { "code": "Rosin-TVA", "type": "Pinus latteri", "softening_point_c": "78", "acid_value": "175-190" },
        { "code": "Rosin-TVB", "type": "Pinus elliottii", "softening_point_c": "77", "acid_value": "160-175" },
        { "code": "Rosin-TVK", "type": "Pinus kesiya", "softening_point_c": "76", "acid_value": "165-180" },
        { "code": "Rosin-TVM", "type": "Pinus massoniana", "softening_point_c": "75", "acid_value": "160-175" }
      ]
    },
    {
      "category": "NHỰA THÔNG & TINH DẦU",
      "product_name": "REFINED ROSIN",
      "description": "Nhựa thông tinh chế, màu sáng, khử màu và ổn định.",
      "applications": ["Keo dán dung môi, PSA, keo nóng chảy"],
      "specifications": [
        { "code": "RR-02", "color_gardner": "2", "softening_point_min": "75", "acid_value_min": "160" },
        { "code": "RR-03", "color_gardner": "3", "softening_point_min": "75", "acid_value_min": "160" }
      ]
    },
    {
      "category": "NHỰA THÔNG & TINH DẦU",
      "product_name": "DISPROPORTIONATED ROSIN",
      "description": "Nhựa thông đã giảm acid abietic, sáng màu, chống oxy hóa.",
      "applications": ["Keo nhũ, keo nhiệt dẻo, mực in, sơn, cao su tổng hợp"],
      "specifications": [
        { "code": "DPR-201", "color_gardner": "2", "acid_value_min": "150", "dehydroabietic_acid_min": "52%" },
        { "code": "DPR-210", "color_gardner": "2", "acid_value_min": "150", "dehydroabietic_acid_min": "45%" },
        { "code": "DPR-501", "color_gardner": "5", "acid_value_min": "150", "dehydroabietic_acid_min": "55%" },
        { "code": "DPR-505", "color_gardner": "5", "acid_value_min": "150", "dehydroabietic_acid_min": "52%" },
        { "code": "DPR-510", "color_gardner": "5", "acid_value_min": "150", "dehydroabietic_acid_min": "45%" }
      ]
    },
    {
      "category": "NHỰA THÔNG & TINH DẦU",
      "product_name": "GUM TURPENTINE OIL (DẦU THÔNG)",
      "description": "Chất lỏng không màu/vàng nhẹ, chưng cất từ nhựa thông.",
      "applications": ["Sản xuất dược liệu, dung môi công nghiệp"],
      "specifications": [
        { "code": "GTO-80", "alpha_pinene_min": "80%", "acid_value_max": "2.0" },
        { "code": "GTO-CN", "description": "Dầu thông công nghiệp", "acid_value_max": "2.0" }
      ]
    },
    {
      "category": "NHỰA THÔNG & TINH DẦU",
      "product_name": "PINE OIL",
      "description": "Chế phẩm từ tinh dầu thông, mùi thơm dễ chịu.",
      "applications": ["Chất tẩy rửa, khử trùng, tạo mùi sơn"],
      "specifications": [
        { "code": "PO50", "alcohol_content_min": "50%", "distillation_range": "170-225" },
        { "code": "PO65", "alcohol_content_min": "65%", "distillation_range": "175-225" },
        { "code": "PO85", "alcohol_content_min": "85%", "distillation_range": "190-225" }
      ]
    }
  ]
};

export const COMPANY_DATA_EN: AppData = {
  "company_info": {
    "name": "Tung Viet Chemical Joint Stock Company",
    "established": "2007",
    "factory_established": "2011",
    "capacity": "20,000 tons/year",
    "description": "Specializing in chemical production and deep processing of gum rosin using domestic raw materials. Committed to good prices and stable quality.",
    "contact": {
      "contact_person": "Ms. Le Thi Minh Thu",
      "address": "Street No. 7, Nhon Trach II - Nhon Phu Industrial Park, Hiep Phuoc Town, Nhon Trach District, Dong Nai Province.",
      "tax_id": "3602483670",
      "phone": "84. 28. 3862 0025",
      "fax": "84. 28. 3862 0027",
      "hotlines": [
        { "number": "0907 776 779", "email": "sales@tungviet.com" },
        { "number": "0902 422 457", "email": "info@tungviet.com" }
      ],
      "website": "www.tungviet.com"
    },
    "cooperation_areas": [
      "Ideas for chemical production",
      "Research and application deployment",
      "Products using Vietnamese raw materials"
    ]
  },
  "products": [
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "PHENAL RESIN",
      "description": "Light yellow transparent solid, modified from gum rosin to increase adhesion.",
      "properties": [
        "Soluble in aromatic solvents, esters, ketones, petroleum products",
        "Light color, anti-yellowing, heat resistant"
      ],
      "applications": [
        "Printing ink (replacing damar gum)",
        "Adhesives (compatible with EVA, SBS, SIS, SBR, CR, NR)"
      ],
      "packaging": "25kg/bag (2 layers: plastic - paper); 40 bags/pallet. Shelf life 2 years.",
      "specifications": COMPANY_DATA_VI.products[0].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN MODIFIED MALEIC RESIN",
      "description": "Light yellow transparent solid obtained from esterification of maleic rosin and polyhydric alcohol.",
      "properties": [
        "Soluble in esters, non-alcoholic solvents, turpentine oil",
        "Insoluble in alcohol, partially soluble in petroleum",
        "Light color, yellowing resistance, heat resistance, good adhesion"
      ],
      "applications": [
        "Increase hardness and gloss in polyester paint, nitrocellulose paint, PU paint, varnish",
        "Production of phenolic paints",
        "Thermoplastic road marking paint"
      ],
      "specifications": COMPANY_DATA_VI.products[1].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN MODIFIED MALEIC RESIN SOLUTION",
      "description": "Solution of Maleic Resin (M1306 or M13035) with 65-70% solid content in solvent.",
      "properties": [
        "Density: 1.03-1.05 g/mL",
        "Solvent: Toluene, Xylene or Butyl acetate"
      ],
      "applications": [
        "Increase hardness and gloss in polyester paint, NC paint, PU paint, varnish",
        "Production of phenolic paints"
      ],
      "packaging": "Steel drum 200 kg/drum",
      "specifications": COMPANY_DATA_VI.products[2].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN ESTER GLYCEROL",
      "description": "Light yellow transparent solid obtained from esterification of glycerine and gum rosin.",
      "properties": [
        "Soluble in esters, turpentine oil, non-polar solvents",
        "Light color, yellowing resistance, heat resistance, high tack"
      ],
      "applications": [
        "Road marking paint, adhesives, hot melt adhesives, thermoplastic paint",
        "Printing ink, rubber"
      ],
      "specifications": COMPANY_DATA_VI.products[3].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN ESTER PENTAERYTHRITOL",
      "description": "Light yellow transparent solid obtained from esterification of gum rosin and pentaerythritol.",
      "properties": [
        "Soluble in esters, turpentine oil, alcohol solvents",
        "Light color, yellowing resistance, heat resistance, high tack"
      ],
      "applications": [
        "Paint, printing ink, adhesives",
        "Compatible with NC resin, alkyd, EVA, SIS, SBS, CR rubber"
      ],
      "packaging": "25kg/bag; 40 bags/pallet",
      "specifications": COMPANY_DATA_VI.products[4].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN RESIN FOR ROAD MARKING PAINT",
      "description": "Thermoplastic Road Marking Paint Resin. Light yellow solid, abrasion resistant, fast drying.",
      "properties": [
        "Good pressure resistance, abrasion resistance, anti-settling, fast drying",
        "Good compatibility with petroleum resins and EVA"
      ],
      "applications": [
        "Thermoplastic road marking paint"
      ],
      "specifications": COMPANY_DATA_VI.products[5].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN PAPER RESIN",
      "description": "Yellow transparent solid, used for paper sizing.",
      "applications": ["Production of glue (plastic film glue, paper glue), printing ink"],
      "specifications": COMPANY_DATA_VI.products[6].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN MALEATE",
      "description": "Adduct of rosin with maleic anhydride/fumaric acid.",
      "applications": ["Paper size, printing ink, other synthesis"],
      "specifications": COMPANY_DATA_VI.products[7].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN FUMARATE",
      "description": "Adduct of rosin with fumaric acid/maleic anhydride.",
      "applications": ["Paper size, printing ink"],
      "specifications": COMPANY_DATA_VI.products[8].specifications
    },
    {
      "category": "MODIFIED ROSIN RESIN",
      "product_name": "ROSIN MODIFIED SOLUTION - RS130",
      "description": "Modified Rosin Solution Reduced Acid Value.",
      "applications": ["Marine paint (antifouling)"],
      "specifications": COMPANY_DATA_VI.products[9].specifications
    },
    {
      "category": "GUM ROSIN & ESSENTIAL OILS",
      "product_name": "GUM ROSIN",
      "description": "Distilled natural gum rosin. Natural origin.",
      "applications": ["Hot melt adhesive, PSA, printing ink, paint, rubber"],
      "specifications": COMPANY_DATA_VI.products[10].specifications
    },
    {
      "category": "GUM ROSIN & ESSENTIAL OILS",
      "product_name": "REFINED ROSIN",
      "description": "Refined rosin, light color, decolorized and stabilized.",
      "applications": ["Solvent adhesive, PSA, hot melt adhesive"],
      "specifications": COMPANY_DATA_VI.products[11].specifications
    },
    {
      "category": "GUM ROSIN & ESSENTIAL OILS",
      "product_name": "DISPROPORTIONATED ROSIN",
      "description": "Rosin with reduced abietic acid, light color, oxidation resistant.",
      "applications": ["Emulsion adhesive, thermoplastic adhesive, printing ink, paint, synthetic rubber"],
      "specifications": COMPANY_DATA_VI.products[12].specifications
    },
    {
      "category": "GUM ROSIN & ESSENTIAL OILS",
      "product_name": "GUM TURPENTINE OIL",
      "description": "Colorless/light yellow liquid, distilled from pine resin.",
      "applications": ["Pharmaceutical production, industrial solvent"],
      "specifications": [
        { "code": "GTO-80", "alpha_pinene_min": "80%", "acid_value_max": "2.0" },
        { "code": "GTO-CN", "description": "Industrial Turpentine Oil", "acid_value_max": "2.0" }
      ]
    },
    {
      "category": "GUM ROSIN & ESSENTIAL OILS",
      "product_name": "PINE OIL",
      "description": "Product from pine essential oil, pleasant scent.",
      "applications": ["Detergents, disinfectants, paint fragrance"],
      "specifications": COMPANY_DATA_VI.products[14].specifications
    }
  ]
};