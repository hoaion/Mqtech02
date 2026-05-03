import { Zap, Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-cyan rounded-md flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">LASERTECH</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 opacity-70">
              Đơn vị tiên phong trong giải pháp cắt, hàn và tự động hóa Laser công nghiệp tại Việt Nam. Cam kết công nghệ 4.0 và dịch vụ kỹ thuật vượt trội.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-cyan transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-cyan transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-cyan transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Sản Phẩm</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/cutting" className="hover:text-brand-cyan transition-colors">Máy Cắt Laser Fiber</Link></li>
              <li><Link to="/category/welding" className="hover:text-brand-cyan transition-colors">Máy Hàn Laser Cầm Tay</Link></li>
              <li><Link to="/category/marking" className="hover:text-brand-cyan transition-colors">Máy Khắc Laser MOPA</Link></li>
              <li><Link to="/category/solutions" className="hover:text-brand-cyan transition-colors">Giải Pháp Tự Động Hóa</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Tài Nguyên</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Tài Liệu Kỹ Thuật</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Bài Viết Công Nghệ</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Chính Sách Bảo Hành</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Câu Hỏi Thường Gặp</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Liên Hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-cyan shrink-0" />
                <span>Khu Công Nghệ Cao, Quận 9, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-cyan shrink-0" />
                <span>+84 28 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-cyan shrink-0" />
                <span>info@lasertech-solutions.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-xs opacity-50 uppercase tracking-tighter font-medium">
          <p>© 2024 LaserTech Solutions Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
