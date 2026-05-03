import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ChevronRight, ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

export default function Category() {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = PRODUCTS.filter(p => p.category === categoryId);

  if (!category) return <div className="pt-32 text-center">Category not found</div>;

  return (
    <div className="pt-24 min-h-screen bg-brand-grey">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Link to="/" className="hover:text-brand-blue">Trang Chủ</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-brand-cyan">{category.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 tracking-tight">{category.name}</h1>
            <p className="text-slate-500 max-w-2xl">{category.description} Công nghệ Fiber Laser mới nhất giúp tối ưu năng suất và chi phí vận hành cho doanh nghiệp của bạn.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Grid */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-cyan/30 transition-all duration-500 fluent-shadow flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage 
                    src={product.image} 
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700" 
                    alt={product.name} 
                  />
                  <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Mới Nhất</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-cyan transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">{product.tagline}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.specs.slice(0, 2).map((s) => (
                          <div key={s.label}>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</div>
                              <div className="text-xs font-bold text-slate-800">{s.value}</div>
                          </div>
                      ))}
                  </div>

                  {product.price && (
                    <div className="mb-6 flex items-center justify-between">
                      <div className="text-[10px] font-black text-brand-cyan uppercase tracking-tighter bg-brand-cyan/5 px-2 py-0.5 rounded">Niêm Yết</div>
                      <div className="text-xl font-black text-brand-blue">{product.price}</div>
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <Link to={`/product/${product.id}`} className="text-brand-blue font-bold text-sm flex items-center group/btn hover:text-brand-cyan transition-colors">
                          Xem Chi Tiết
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{product.brand_context}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="bg-white rounded-2xl p-16 text-center border-2 border-dashed border-slate-100">
              <p className="text-slate-400">Đang cập nhật thêm sản phẩm cho danh mục này.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
