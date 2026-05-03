export interface Product {
  id: string;
  category: 'cutting' | 'welding' | 'marking' | 'solutions';
  name: string;
  tagline: string;
  description: string;
  image: string;
  price?: string;
  brand_context: string; // e.g. Raycus / IPG / CypCut
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const PRODUCTS: Product[] = [
  // CUTTING MACHINES
  {
    id: 'f-cut-v3-basic',
    category: 'cutting',
    name: 'F-CUT V3 Elite 3000W',
    tagline: 'Tiêu chuẩn vàng cho xưởng quảng cáo và cơ khí vừa.',
    description: 'Sử dụng nguồn Raycus công suất 3kW, hệ thống điều khiển CypCut thân thiện. Tốc độ cắt thép 10mm đạt 3.5m/phút.',
    image: '/assets/images/products/f-cut-v3-basic.avif',
    price: '750,000,000đ',
    brand_context: 'Raycus / CypCut',
    specs: [
      { label: 'Công suất Laser', value: '3000W' },
      { label: 'Nguồn phát', value: 'Raycus Fiber' },
      { label: 'Đầu cắt', value: 'Raytools Auto-focus' },
      { label: 'Khổ làm việc', value: '3000x1500mm' }
    ],
    features: ['Tiết kiệm điện năng 30%', 'Hệ khung máy ủ nhiệt 600 độ', 'Cảm biến va chạm đa điểm']
  },
  {
    id: 'f-cut-pro-12kw',
    category: 'cutting',
    name: 'PRO-CUT G3 Ultra 12000W',
    tagline: 'Sức mạnh cắt thép tấm siêu dày với nguồn IPG.',
    description: 'Thiết bị chuyên dụng cho ngành đóng tàu và kết cấu thép nặng. Khả năng cắt thép carbon lên đến 40mm.',
    image: '/assets/images/products/regenerated_image_1777802129868.png',
    price: '2,450,000,000đ',
    brand_context: 'IPG Germany / CypCut',
    specs: [
      { label: 'Công suất Laser', value: '12000W' },
      { label: 'Nguồn phát', value: 'IPG Photonics' },
      { label: 'Đầu cắt', value: 'Precitec ProCutter' },
      { label: 'Khổ làm việc', value: '6000x2500mm' }
    ],
    features: ['Hệ thống bàn đổi phôi tự động', 'Hút bụi phân vùng thông minh', 'Cắt bằng khí nén áp suất cao']
  },

  // WELDING MACHINES
  {
    id: 'f-weld-nano-1500',
    category: 'welding',
    name: 'W-NANO 1500W Smart',
    tagline: 'Hàn siêu nhanh, không cần thợ tay nghề cao.',
    description: 'Thiết kế nhỏ gọn tương đương một chiếc xe đẩy. Tích hợp màn hình cảm ứng điều khiển thông số hàn tự động.',
    image: '/assets/images/products/f-weld-nano-1500.avif',
    price: '115,000,000đ',
    brand_context: 'MaxPhotonics / Qilin',
    specs: [
      { label: 'Công suất', value: '1500W' },
      { label: 'Tốc độ hàn', value: '0-120mm/s' },
      { label: 'Độ rộng mối hàn', value: '0.2-5mm' },
      { label: 'Trọng lượng súng', value: '0.75kg' }
    ],
    features: ['Tích hợp 6 chế độ hàn', 'Làm mát bằng nước tuần hoàn', 'Bộ cấp dây tự động đi kèm']
  },

  // MARKING MACHINES
  {
    id: 'f-mark-uv-5',
    category: 'marking',
    name: 'MARK-UV Cold Light 5W',
    tagline: 'Khắc trên nhựa và pha lê với công nghệ tia laser lạnh.',
    description: 'Không gây biến dạng nhiệt trên bề mặt vật liệu nhựa, gỗ mỏng, thủy tinh. Lý tưởng cho ngành dược phẩm và mỹ phẩm.',
    image: '/assets/images/products/f-mark-uv-5.avif',
    price: '185,000,000đ',
    brand_context: 'JPT / EzCad 3',
    specs: [
      { label: 'Bước sóng', value: '355nm' },
      { label: 'Công suất', value: '5W' },
      { label: 'Độ sâu khắc', value: '<0.2mm' },
      { label: 'Vùng khắc', value: '150x150mm' }
    ],
    features: ['Chùm tia laser siêu mịn', 'Khắc được mã vạch siêu nhỏ', 'Hệ thống Camera định vị phôi']
  },

  // SOLUTIONS
  {
    id: 'f-sol-robot-cell',
    category: 'solutions',
    name: 'Auto-Cell Robot Welding V1',
    tagline: 'Tự động hóa hoàn toàn dây chuyền hàn với Robot Fanuc.',
    description: 'Tích hợp cánh tay Robot 6 trục và nguồn laser công suất cao cho năng suất 24/7 không cần người vận hành.',
    image: '/assets/images/products/f-sol-robot-cell.avif',
    price: 'Liên hệ tư vấn',
    brand_context: 'Fanuc / IPG / Mitsubishi PLC',
    specs: [
      { label: 'Điều khiển', value: 'Mitsubishi iQ-F' },
      { label: 'Robot', value: 'Fanuc M-20iD' },
      { label: 'Số trục', value: '6 Axis + TurnTable' },
      { label: 'Giao thức', value: 'EtherNet/IP' }
    ],
    features: ['Phần mềm mô phỏng Offline', 'Hệ thống cảm biến an toàn quang học', 'Tích hợp AI kiểm tra mối hàn']
  },
  {
    id: 'f-cut-pipe-200',
    category: 'cutting',
    name: 'Máy Cắt Laser Fiber Chuyên Cắt Ống P-200',
    tagline: 'Gia công ống tròn, vuông, elip với độ chính xác tuyệt đối.',
    description: 'Hệ thống gắp phôi tự động kết hợp đầu cắt quay 360 độ. Giải pháp tối ưu cho nội thất và kết cấu giàn giáo.',
    brand_context: 'Raycus / CypTube',
    image: '/assets/images/products/f-cut-pipe-200.avif',
    price: '1,250,000,000đ',
    specs: [
      { label: 'Công suất', value: '3000W' },
      { label: 'Đường kính ống', value: '20mm - 220mm' },
      { label: 'Chiều dài ống', value: '6000mm' },
      { label: 'Tốc độ quay', value: '120r/min' }
    ],
    features: ['Hệ thống mâm cặp hơi khí nén', 'Hỗ trợ cắt vát chéo 45 độ', 'Phần mềm TubesT tối ưu vật tư']
  },
  {
    id: 'f-weld-robot-arm',
    category: 'welding',
    name: 'Hệ Thống Hàn Laser Robot 2000W',
    tagline: 'Phục vụ sản xuất hàng loạt với độ ổn định vết hàn 99.9%.',
    description: 'Tích hợp nguồn laser công suất cao vào cánh tay Robot công nghiệp (ABB/Fanuc). Vết hàn ngấu sâu và cực kỳ thẩm mỹ.',
    brand_context: 'IPG / Yaskawa',
    image: '/assets/images/products/f-weld-robot-arm.avif',
    price: 'Liên hệ',
    specs: [
      { label: 'Công suất', value: '2000W' },
      { label: 'Robot', value: 'Yaskawa AR1440' },
      { label: 'Tầm với', value: '1440mm' },
      { label: 'Chế độ', value: 'Liên tục / Xung' }
    ],
    features: ['Theo dõi đường hàn thời gian thực', 'Đầu hàn súng lắc (Wobble) thông minh', 'Lập trình kéo-thả trực quan']
  },
  {
    id: 'f-mark-mopa-100',
    category: 'marking',
    name: 'Máy Khắc Laser MOPA 100W High-Speed',
    tagline: 'Khắc deep-engraving và khắc màu đen trên nhôm.',
    description: 'Nguồn laser MOPA công suất lớn cho phép khắc sâu trên khuôn kim loại và đánh mác serial tốc độ cực cao.',
    brand_context: 'JPT M7 / EzCad',
    image: '/assets/images/products/f-mark-mopa-100.avif',
    price: '145,000,000đ',
    specs: [
      { label: 'Công suất', value: '100W' },
      { label: 'Tần số', value: '1-4000kHz' },
      { label: 'Tốc độ quét', value: '15,000mm/s' },
      { label: 'Vùng khắc', value: '300x300mm' }
    ],
    features: ['Khắc màu trên Inox (Color Marking)', 'Đầu quét Galvo 3D tự động lấy nét', 'Tích hợp trục xoay khắc nhẫn/vòng']
  }
];

export const CATEGORIES = [
  { id: 'cutting', name: 'Cắt Laser', icon: 'Scissors', description: 'Máy cắt kim loại tấm và ống chuyên nghiệp công suất thực 3kW-30kW.' },
  { id: 'welding', name: 'Hàn Laser', icon: 'Zap', description: 'Công nghệ hàn Laser cầm tay và Robot ổn định, ngấu sâu.' },
  { id: 'marking', name: 'Khắc Laser', icon: 'Type', description: 'Khắc Fiber/UV/MOPA tốc độ cao trên mọi vật liệu.' },
  { id: 'solutions', name: 'Giải Pháp Tự Động', icon: 'Cpu', description: 'Tích hợp PLC Mitsubishi/Siemens và cánh tay Robot công nghiệp.' }
];
