import { Settings } from 'lucide-react';

interface SpecItem {
  label: string;
  value: string;
}

interface SpecTableProps {
  specs: SpecItem[];
  title?: string;
}

export default function SpecTable({ specs, title = "Thông Số Kỹ Thuật" }: SpecTableProps) {
  return (
    <div className="mica-bg border border-white p-8 rounded-[32px] fluent-shadow overflow-hidden">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-brand-cyan/10 rounded-lg">
          <Settings className="w-5 h-5 text-brand-cyan" />
        </div>
        <h3 className="text-xl font-bold text-brand-blue">{title}</h3>
      </div>
      
      <div className="space-y-0">
        {specs.map((item, idx) => (
          <div 
            key={item.label} 
            className={`flex justify-between items-center py-4 border-b border-slate-100 last:border-0 hover:bg-white/50 transition-colors px-4 rounded-xl -mx-4 ${idx % 2 === 0 ? 'bg-slate-50/50' : ''}`}
          >
            <span className="text-sm font-medium text-slate-500">{item.label}</span>
            <span className="text-sm font-bold text-brand-blue text-right">{item.value}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-t border-slate-100">
        <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span>Industrial Standard Verified</span>
        </div>
      </div>
    </div>
  );
}
