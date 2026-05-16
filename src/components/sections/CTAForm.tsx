import React from 'react';
import { Gift, CheckCircle, ArrowRight, Lock, Headphones } from 'lucide-react';

export const CTAForm = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-forest-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhOWY3ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYuMzI2IDE4LjEyNmwtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMgNC4yNDN6bS00LjI0MyAxMi43MjhsNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMgNC4yNDMgNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDMtNC4yNDMtNC4yNDMtNC4yNDMgNC4yNDN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Bắt Đầu Hành Trình Luyện Tập Ngay Hôm Nay!
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Đăng ký ngay để nhận ưu đãi đặc biệt dành cho học viên mới.
          </p>
          
          <div className="bg-deep-moss/20 p-8 rounded-3xl backdrop-blur-md border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-vibrant-orange flex items-center gap-3">
              <Gift className="w-6 h-6" /> QUÀ TẶNG ĐỘC QUYỀN
            </h3>
            <ul className="space-y-6">
              <GiftItem title="Tài khoản trải nghiệm PRO 7 ngày (Miễn phí)" desc="Truy cập đầy đủ tính năng luyện tập và thi đấu." />
              <GiftItem title="Bài Test Năng Lực Toán Trí Tuệ Đầu Vào" desc="Phân tích điểm mạnh, điểm yếu và cá nhân hóa lộ trình." />
              <GiftItem title="Buổi Tư Vấn Lộ Trình Học 1-1 (Qua Zoom)" desc="Với chuyên gia giáo dục của Superbrain." />
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-forest-green mb-8 text-center">Đăng Ký Nhận Tư Vấn</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="block text-sm font-bold text-on-surface">Họ và tên Phụ huynh *</label>
              <input 
                className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-forest-green outline-none transition-all placeholder:text-outline/60" 
                placeholder="Nhập họ tên của bạn" 
                type="text" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-bold text-on-surface">Số điện thoại *</label>
                <input 
                  className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-forest-green outline-none transition-all" 
                  placeholder="Nhập SĐT để nhận tư vấn" 
                  type="tel" 
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-on-surface">Email</label>
                <input 
                  className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-forest-green outline-none transition-all" 
                  placeholder="Nhập email (không bắt buộc)" 
                  type="email" 
                />
              </div>
            </div>

            <button className="w-full bg-vibrant-orange text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center justify-center gap-3">
              ĐĂNG KÝ NHẬN QUÀ NGAY <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="text-center pt-8 border-t border-outline-variant/20 flex justify-center items-center gap-6 text-on-surface-variant font-bold text-xs">
              <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Bảo mật thông tin</div>
              <div className="flex items-center gap-2"><Headphones className="w-4 h-4" /> Tư vấn miễn phí</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const GiftItem = ({ title, desc }: { title: string, desc: string }) => (
  <li className="flex items-start gap-4 group">
    <CheckCircle className="w-6 h-6 text-primary-fixed mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
    <div>
      <strong className="block text-base font-bold mb-1">{title}</strong>
      <span className="text-sm opacity-80 leading-relaxed">{desc}</span>
    </div>
  </li>
);
