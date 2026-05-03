import { motion } from 'motion/react';
import { ChevronRight, Play, Server, ShieldCheck, Activity, Target } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent z-10" />
          <SafeImage 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Fiber Laser Industrial"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-6 font-mono text-[10px] text-brand-cyan tracking-widest uppercase">
              <Activity className="w-3 h-3" />
              <span>Next Gen Fiber Laser Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              Định Nghĩa Lại <br />
              <span className="text-brand-cyan">Độ Chính Xác</span> Laser
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
              Giải pháp cắt, hàn và khắc Fiber Laser công suất cao tích hợp hệ sinh thái tự động hóa thông minh. Đạt hiệu năng tối ưu cho mọi dây chuyền sản xuất.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-brand-cyan text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-cyan/90 transition-all flex items-center group">
                Khám Phá Giải Pháp
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center">
                <Play className="mr-3 w-5 h-5 fill-current" />
                Xem Video Vận Hành
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Grid */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:flex space-x-8">
            <div className="mica-dark p-6 rounded-2xl w-48 text-white border-l-4 border-brand-cyan">
                <div className="text-3xl font-bold mb-1">30kW</div>
                <div className="text-[10px] font-medium opacity-60 uppercase tracking-widest">Max Power</div>
            </div>
            <div className="mica-dark p-6 rounded-2xl w-48 text-white border-l-4 border-brand-cyan">
                <div className="text-3xl font-bold mb-1">&lt;0.01mm</div>
                <div className="text-[10px] font-medium opacity-60 uppercase tracking-widest">Precision</div>
            </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-4 tracking-tight">Danh Mục Giải Pháp</h2>
              <p className="text-slate-500 max-w-xl">Hệ thống máy móc được thiết kế cho tính đa dụng và hiệu quả kinh tế cao nhất.</p>
            </div>
            <Link to="/products" className="text-brand-blue font-bold flex items-center hover:text-brand-cyan transition-colors">
              Xem tất cả sản phẩm <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/category/${cat.id}`} className="block h-full mica-bg p-8 rounded-2xl border border-white hover:bg-white transition-all duration-500 fluent-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">{cat.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{cat.description}</p>
                  <div className="flex items-center text-brand-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Khám Phá <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machine Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-cyan/5 rounded-[40px] blur-2xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 fluent-shadow"
              >
                <SafeImage 
                  src={PRODUCTS[0].image} 
                  alt={PRODUCTS[0].name}
                  className="w-full h-[500px]"
                />
              </motion.div>
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -right-6 mica-dark p-8 rounded-2xl border border-white/10 hidden md:block">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand-cyan/20 rounded-xl">
                        <ShieldCheck className="text-brand-cyan w-8 h-8" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Bảo Hành 5 Năm</div>
                        <div className="text-white/50 text-xs uppercase tracking-widest font-medium">Technical Support 24/7</div>
                    </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-brand-cyan font-mono text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Featured Product</div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 leading-tight tracking-tight">
                Hệ Thống Cắt Laser Fiber Công Suất Thực 6000W
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Máy cắt Fiber Laser model F-CUT 6000 được định hình là tiêu chuẩn mới cho phân khúc công nghiệp nặng. Với độ chính xác cấp độ micron và độ bền khung máy đúc nguyên khối.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Đầu cắt Precitec lấy nét tự động thông minh',
                  'Hệ thống điều khiển chuyên dụng cho laser công suất cao',
                  'Tiết kiệm 40% điện năng so với máy CO2 truyền thống',
                  'Tích hợp tính năng AI Camera giám sát phôi'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700">
                    <div className="mt-1 mr-3 w-5 h-5 bg-brand-cyan/10 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/product/${PRODUCTS[0].id}`} className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20">
                Xem Chi Tiết Máy
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                    <div className="text-4xl font-black text-brand-blue opacity-20 italic">500+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dự Án Đã Triển Khai</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-brand-blue opacity-20 italic">24/7</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Hỗ Trợ Kỹ Thuật</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-brand-blue opacity-20 italic">99%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Khách Hàng Hài Lòng</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-brand-blue opacity-20 italic">Top 1</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Giải Pháp Laser VN</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
