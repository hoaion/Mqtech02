import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', industry: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6 tracking-tighter">Liên Hệ Với <br /><span className="text-brand-cyan">Chuyên Gia</span></h1>
              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-md">
                Chúng tôi cam kết phản hồi các yêu cầu báo giá và tư vấn kỹ thuật trong vòng 2 giờ làm việc.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 mica-bg rounded-[32px] border border-white fluent-shadow">
                <div className="p-3 bg-brand-cyan/10 w-fit rounded-xl mb-6">
                  <Phone className="text-brand-cyan w-6 h-6" />
                </div>
                <h3 className="font-bold text-brand-blue mb-2 uppercase text-[10px] tracking-widest">Hotline 24/7</h3>
                <p className="text-xl font-bold text-slate-800">+84 28 3456 7890</p>
                <p className="text-xs text-slate-400 mt-2">Hỗ trợ khẩn cấp 24/7</p>
              </div>

              <div className="p-8 mica-bg rounded-[32px] border border-white fluent-shadow">
                <div className="p-3 bg-brand-cyan/10 w-fit rounded-xl mb-6">
                  <Mail className="text-brand-cyan w-6 h-6" />
                </div>
                <h3 className="font-bold text-brand-blue mb-2 uppercase text-[10px] tracking-widest">Email Kỹ Thuật</h3>
                <p className="text-lg font-bold text-slate-800 break-all">tech@lasertech.vn</p>
                <p className="text-xs text-slate-400 mt-2">Gửi bản vẽ CAD/DXF</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="mt-1 mr-4 bg-white p-3 rounded-xl fluent-shadow group-hover:bg-brand-cyan/10 transition-colors">
                  <MapPin className="text-slate-400 group-hover:text-brand-cyan w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-tighter">Trụ Sở Chính</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Lô E2a-1, Đường D1, Khu Công Nghệ Cao, Quận 9, TP. Thủ Đức, TP. Hồ Chí Minh.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="mt-1 mr-4 bg-white p-3 rounded-xl fluent-shadow group-hover:bg-brand-cyan/10 transition-colors">
                  <Clock className="text-slate-400 group-hover:text-brand-cyan w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-tighter">Giờ Làm Việc</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Thứ 2 - Thứ 7: 08:00 - 17:30. Nghỉ lễ theo quy định.</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-slate-200 rounded-[32px] overflow-hidden fluent-shadow group border border-white">
                <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none group-hover:bg-brand-blue/0 transition-all" />
                <div className="flex items-center justify-center h-full text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">
                    Google Maps Integration Placeholder
                </div>
                {/* Simulated Overlay */}
                <div className="absolute bottom-4 left-4 mica-dark px-4 py-2 rounded-lg border border-white/10 flex items-center">
                    <Globe className="w-3 h-3 text-brand-cyan mr-2" />
                    <span className="text-white text-[8px] font-bold">10.8441° N, 106.8123° E</span>
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mica-bg border border-white p-10 rounded-[40px] fluent-shadow relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="text-brand-cyan w-6 h-6" />
                <h2 className="text-2xl font-bold text-brand-blue tracking-tight">Gửi Yêu Cầu Tư Vấn</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Họ và Tên *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A" 
                      className="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-300"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Email Liên Hệ *</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@company.vn" 
                      className="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-300"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Lĩnh Vực Kinh Doanh</label>
                  <select 
                    className="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white transition-all text-slate-800"
                    value={formState.industry}
                    onChange={(e) => setFormState({...formState, industry: e.target.value})}
                  >
                    <option value="">Chọn lĩnh vực</option>
                    <option value="quangcao">Gia công quảng cáo</option>
                    <option value="cokhi">Cơ khí chính xác</option>
                    <option value="thangmay">Sản xuất thang máy</option>
                    <option value="oto">Công nghiệp ô tô</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Nội Dung Yêu Cầu</label>
                  <textarea 
                    rows={4}
                    placeholder="Hãy cho chúng tôi biết về vật liệu, độ dày hoặc yêu cầu cụ thể của bạn..." 
                    className="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-300 resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center group ${
                    isSuccess ? 'bg-green-500 text-white' : 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20'
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSuccess ? (
                    'Gửi Thành Công!'
                  ) : (
                    <>
                      Gửi Yêu Cầu
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-[10px] text-slate-400 mt-8 text-center uppercase tracking-widest font-medium">
                Dữ liệu của bạn được bảo mật theo chính sách GDPR & Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
