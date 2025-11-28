import { AppData } from './types';

export const COMPANY_DATA: AppData = {
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