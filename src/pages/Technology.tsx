import { motion } from 'motion/react';
import { SafeImage } from '../components/SafeImage';
import { ChevronRight, Zap, Target, Cpu, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    id: 'fiber-vs-co2',
    title: 'Nguyên lý nguồn Laser Fiber & Ưu điểm vượt trội so với Laser CO2',
    description: 'Tại sao Fiber Laser đang dần thay thế hoàn toàn công nghệ CO2 trong ngành gia công kim loại tấm? Phân tích hiệu suất và chi phí vận hành.',
    image: '/assets/images/products/tech-fiber-vs-co2.avif',
    content: 'Fiber Laser sử dụng sợi quang học pha tạp để khuếch đại ánh sáng, tạo ra bước sóng khoảng 1064nm. So với CO2 (10600nm), tia laser Fiber dễ dàng hấp thụ bởi kim loại hơn, mang lại tốc độ cắt nhanh gấp 3-4 lần cho các độ dày mỏng và trung bình.',
    specs: [
      { feature: 'Bước sóng', fiber: '1,064 nm', co2: '10,600 nm' },
      { feature: 'Hiệu suất quang điện', fiber: '35% - 45%', co2: '8% - 10%' },
      { feature: 'Bảo trì gương phản xạ', fiber: 'Không cần', co2: 'Định kỳ' },
      { feature: 'Tốc độ cắt (Thép 1mm)', fiber: '25 m/min', co2: '8 m/min' }
    ]
  },
  {
    id: 'reflective-materials',
    title: 'Kỹ thuật cắt Laser Fiber cho vật liệu phản quang (Nhôm, Đồng)',
    description: 'Cắt đồng đỏ và nhôm đòi hỏi kỹ thuật kiểm soát phản xạ ngược để bảo vệ nguồn laser và đảm bảo mạch cắt mịn đẹp.',
    image: '/assets/images/products/f-cut-v3-basic.avif',
    content: 'Sử dụng đầu cắt Precitec tích hợp cảm biến bảo vệ và nguồn laser chống phản xạ cao (IPG/Raycus Pro). Kỹ thuật cắt bằng khí Nitơ áp suất cao giúp loại bỏ bavia và giữ cho bề mặt vật liệu sáng bóng.',
  },
  {
    id: 'cnc-automation',
    title: 'Ứng dụng Laser Fiber trong dây chuyền tự động hóa CNC 4.0',
    description: 'Tích hợp PLC Mitsubishi và cánh tay Robot công nghiệp vào quy trình cắt laser giúp tối ưu hóa 200% năng suất sản xuất.',
    image: '/assets/images/products/regenerated_image_1777802498855.png',
    content: 'Xu hướng Smart Factory yêu cầu kết nối vạn vật. Hệ thống laser của chúng tôi tích hợp giao thức EtherCAT, hỗ trợ xuất dữ liệu thời gian thực tới hệ thống quản lý MES.',
  }
];

export default function Technology() {
  return (
    <div className="pt-24 min-h-screen bg-brand-grey">
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 px-3 py-1 rounded-full mb-6 font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
            <Cpu className="w-3 h-3" />
            <span>Industrial Tech Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6 tracking-tighter">Công Nghệ Laser Fiber</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Khám phá các tiêu chuẩn kỹ thuật mới nhất và các giải pháp tối ưu hóa sản xuất từ các chuyên gia hàng đầu của LaserTech Solutions.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-blue mb-8 tracking-tight">{ARTICLES[0].title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed italic">{ARTICLES[0].description}</p>
            <div className="mica-bg border border-white rounded-[32px] overflow-hidden fluent-shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold">
                    <th className="px-6 py-4">Đặc tính</th>
                    <th className="px-6 py-4">Fiber Laser</th>
                    <th className="px-6 py-4">CO2 Laser</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {ARTICLES[0].specs.map((spec, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-white/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{spec.feature}</td>
                      <td className="px-6 py-4 text-brand-cyan font-black">{spec.fiber}</td>
                      <td className="px-6 py-4 text-slate-400 font-medium">{spec.co2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <div className="relative">
            <SafeImage 
              src={ARTICLES[0].image} 
              alt={ARTICLES[0].title}
              className="rounded-[40px] h-[500px] fluent-shadow"
            />
            <div className="absolute -bottom-8 -right-8 mica-dark p-8 rounded-2xl border border-white/10 hidden md:block">
                <div className="text-3xl font-black text-brand-cyan">3x Faster</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">High Speed Productivity</div>
            </div>
          </div>
        </div>

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.slice(1).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-cyan/20 transition-all duration-500 fluent-shadow flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <SafeImage 
                  src={article.image} 
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700" 
                  alt={article.title} 
                />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-cyan transition-colors">{article.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">{article.content}</p>
                <div className="mt-auto flex items-center text-brand-blue font-bold group/link">
                  Đọc thêm kỹ thuật
                  <ChevronRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-blue">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Bạn cần tư vấn giải pháp kỹ thuật theo yêu cầu?</h2>
            <p className="text-white/60 text-lg mb-12 font-light">Đội ngũ kỹ sư của chúng tôi sẵn sàng giải đáp mọi thắc mắc về vật liệu, công suất và quy trình sản xuất.</p>
            <Link to="/contact" className="inline-flex items-center px-12 py-5 bg-brand-cyan text-white rounded-2xl font-bold hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/20">
              Liên Hệ Kỹ Thuật Viên
              <ChevronRight className="ml-2 w-6 h-6" />
            </Link>
         </div>
      </section>
    </div>
  );
}
