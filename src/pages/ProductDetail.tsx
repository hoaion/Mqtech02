import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { SafeImage } from '../components/SafeImage';
import SpecTable from '../components/SpecTable';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Settings, 
  FileText, 
  Download,
  Share2,
  MessageCircle,
  Zap,
  CheckCircle2,
  Tag,
  Phone
} from 'lucide-react';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-brand-grey border-b border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                <Link to="/" className="hover:text-brand-blue">Trang Chủ</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to={`/category/${product.category}`} className="hover:text-brand-blue">Máy {product.category === 'cutting' ? 'Cắt' : product.category === 'welding' ? 'Hàn' : 'Khác'}</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-brand-cyan">{product.name}</span>
            </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div
              layoutId={`img-${product.id}`}
              className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 fluent-shadow aspect-video flex items-center justify-center p-8 group"
            >
              <SafeImage 
                src={product.image} 
                className="w-full h-full group-hover:scale-105 transition-transform duration-500" 
                alt={product.name} 
                priority
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-cyan cursor-pointer transition-colors" />
              ))}
            </div>
          </div>

          {/* Product Header & Quick Info */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
                <div className="inline-block bg-brand-cyan/10 text-brand-cyan text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    Industrial Elite Series
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 tracking-tight">{product.name}</h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">{product.tagline}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {product.price && (
                    <div className="flex items-center px-4 py-2 bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl">
                      <Tag className="w-4 h-4 text-brand-cyan mr-2" />
                      <span className="text-2xl font-black text-brand-blue">{product.price}</span>
                    </div>
                  )}
                  <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block leading-none mb-1">Tech Stack</span>
                    <span className="text-sm font-bold text-slate-700">{product.brand_context}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    {product.specs.map((s) => (
                        <div key={s.label}>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</div>
                            <div className="text-sm font-bold text-slate-800">{s.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 space-y-4">
                <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center group active:scale-95">
                    Yêu Cầu Báo Giá Ngay 
                    <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center px-4 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                        <Download className="w-5 h-5 mr-2" />
                        Tải Catalog (PDF)
                    </button>
                    <button className="flex items-center justify-center px-4 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                        <Share2 className="w-5 h-5 mr-2" />
                        Chia Sẻ
                    </button>
                </div>
            </div>

            {/* Quick Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-slate-100">
                <div className="flex items-start">
                    <ShieldCheck className="text-brand-cyan w-6 h-6 mr-3 shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">Bảo Hành 5 Năm</h4>
                        <p className="text-xs text-slate-500 mt-1">Chính sách bảo hành nguồn laser dài hạn nhất thị trường.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Clock className="text-brand-cyan w-6 h-6 mr-3 shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">Lắp Đặt 48h</h4>
                        <p className="text-xs text-slate-500 mt-1">Đội ngũ kỹ thuật hỗ trợ lắp đặt và bàn giao nhanh chóng.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Detailed Specs & Features */}
        <div className="mt-32">
            <div className="border-b border-slate-100 flex space-x-12 mb-12">
                <button className="pb-4 border-b-2 border-brand-cyan font-bold text-brand-blue uppercase text-sm tracking-widest">Đặc Điểm Kỹ Thuật</button>
                <button className="pb-4 border-b-2 border-transparent font-medium text-slate-400 hover:text-brand-blue uppercase text-sm tracking-widest transition-colors">Ứng Dụng Thực Tế</button>
                <button className="pb-4 border-b-2 border-transparent font-medium text-slate-400 hover:text-brand-blue uppercase text-sm tracking-widest transition-colors">Phụ Kiện Đi Kèm</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Text Content */}
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-8">Tính Năng Nổi Bật</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.features.map((feat, i) => (
                                <div key={i} className="flex p-6 bg-slate-50 rounded-2xl border border-white hover:bg-brand-grey transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-4 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-8">Mô Tả Sản Phẩm</h2>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-huge">
                            <p className="mb-6">{product.description}</p>
                            <p>Được thiết kế để tối ưu hóa hiệu suất gia công cơ khí chính xác, hệ thống máy sử dụng các linh kiện nhập khẩu cao cấp từ Đức, Nhật Bản và Đài Loan. Toàn bộ khung máy được ủ nhiệt để loại bỏ ứng suất dư, giúp duy trì độ chính xác trong suốt hơn 20 năm vận hành liên tục.</p>
                        </div>
                    </div>
                </div>

                {/* Technical Table Sidebar */}
                <div className="lg:col-span-1">
                    <SpecTable specs={product.specs} />
                    
                    <Link to="/contact" className="mt-8 w-full group flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-brand-cyan/10 transition-colors">
                            <span className="text-sm font-bold text-slate-700 group-hover:text-brand-cyan">Yêu cầu bảng thông số đầy đủ</span>
                            <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-cyan" />
                    </Link>
                </div>
            </div>
        </div>

        {/* Floating Action Button (Mobile) */}
        <div className="fixed bottom-8 right-8 z-50 md:hidden flex flex-col space-y-4">
             <button className="w-16 h-16 bg-brand-cyan text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-cyan/40">
                <MessageCircle className="w-8 h-8" />
             </button>
             <button className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-blue/40">
                <Phone className="w-8 h-8" />
             </button>
        </div>
      </div>
    </div>
  );
}
