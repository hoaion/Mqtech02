import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Cpu, Scissors, Zap, Type, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Trang Chủ', path: '/' },
    { 
      name: 'Sản Phẩm', 
      path: '/products',
      submenu: [
        { name: 'Máy Cắt Laser', path: '/category/cutting', icon: Scissors },
        { name: 'Máy Hàn Laser', path: '/category/welding', icon: Zap },
        { name: 'Máy Khắc Laser', path: '/category/marking', icon: Type },
        { name: 'Giải Pháp Tự Động', path: '/category/solutions', icon: Cpu },
      ]
    },
    { name: 'Công Nghệ', path: '/technology' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mica-bg fluent-shadow border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-cyan transition-colors duration-300">
              <Zap className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-brand-blue font-bold text-lg leading-none tracking-tight">LASERTECH</span>
              <span className="text-brand-cyan text-[10px] font-medium tracking-widest uppercase">Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group py-4">
                <Link 
                  to={item.path}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    location.pathname === item.path ? 'text-brand-cyan' : 'text-slate-600 hover:text-brand-blue'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4 opacity-50" />}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block transition-all duration-300 transform origin-top">
                    <div className="mica-bg rounded-xl border border-white/40 p-2 fluent-shadow">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center p-3 rounded-lg hover:bg-white/50 transition-colors group/item"
                        >
                          <sub.icon className="w-5 h-5 mr-3 text-slate-400 group-hover/item:text-brand-cyan" />
                          <span className="text-sm font-medium text-slate-700">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium text-slate-600 px-4 py-2 rounded-full hover:bg-white/40 transition-colors">
              <Globe className="w-4 h-4 mr-2" />
              VN
            </button>
            <button className="bg-brand-blue text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20 transition-transform active:scale-95">
              Yêu Cầu Báo Giá
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mica-bg border-b border-white/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 border-b border-white/10"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1 mt-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-3 text-sm text-slate-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <button className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold">
                  Yêu Cầu Báo Giá
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
