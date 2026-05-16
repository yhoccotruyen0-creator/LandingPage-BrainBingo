import React from 'react';
import { motion } from 'motion/react';
import { Route, Calendar, Gamepad2, Trophy, LineChart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Features = () => {
  const features = [
    {
      icon: <Route className="w-6 h-6" />,
      title: 'Lộ Trình Cá Nhân Hóa (AI Adaptive)',
      desc: 'Hệ thống tự động đánh giá năng lực qua bài test đầu vào và điều chỉnh độ khó của bài tập theo mức độ tiếp thu của từng học viên.',
      result: 'Kết quả: Trẻ không bị quá sức, không thấy nhàm chán.',
      mockup: 'Giao diện lộ trình học tập với các node bài học'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Luyện Tập Đều Đặn (Daily Habit)',
      desc: 'Thiết kế bài học siêu ngắn (Micro-learning) chỉ 15 phút. Chuỗi ngày học liên tục (Streak) thưởng điểm thưởng khi duy trì.',
      result: 'Kết quả: Hình thành thói quen tự giác mỗi ngày.',
      mockup: 'Calendar view với các ngọn lửa Streak',
      reverse: true
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: 'Game Hóa Học Tập (Gamification)',
      desc: 'Giao diện tương tác sinh động, âm thanh khích lệ. Hệ thống huy hiệu, điểm kinh nghiệm (EXP) và lên cấp (Level up).',
      result: 'Kết quả: Biến áp lực học tập thành niềm vui "chơi mà học".',
      mockup: 'Animation nhận huy hiệu / Lên level 5'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Thi Đấu Thực Tế (Live Competition)',
      desc: 'Bảng xếp hạng cập nhật theo thời gian thực (Real-time). Các giải đấu tuần/tháng/quý tạo sân chơi cọ xát với hàng ngàn học viên toàn quốc.',
      result: 'Kết quả: Kích thích sự cạnh tranh lành mạnh, khát khao chiến thắng.',
      mockup: 'Bảng xếp hạng Live có avatar nhảy bậc',
      reverse: true
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Báo Cáo Chi Tiết Cho Phụ Huynh',
      desc: 'Ứng dụng riêng cho phụ huynh (Parent App/Dashboard). Thông báo ngay khi con hoàn thành bài. Thống kê điểm mạnh, điểm yếu và phân tích sự tiến bộ.',
      result: 'Kết quả: Bố mẹ bận rộn vẫn nắm rõ tình hình học của con.',
      mockup: 'Biểu đồ Radar tiến bộ trên mobile app'
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Giải Pháp Toàn Diện Từ Superbrain</h2>
          <p className="text-lg text-on-surface-variant">Biến việc học thành niềm vui mỗi ngày</p>
        </div>

        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center",
              feature.reverse ? "md:flex-row-reverse" : ""
            )}
          >
            <motion.div 
              initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn("space-y-6", feature.reverse ? "md:order-2" : "md:order-1")}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-container/10 rounded-xl text-primary-container">
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-forest-green">{feature.title}</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">{feature.desc}</p>
              <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-vibrant-orange shadow-sm">
                <p className="font-bold text-forest-green">{feature.result}</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn(
                "bg-surface-container rounded-3xl h-[300px] md:h-[400px] flex items-center justify-center border border-outline-variant/30 shadow-inner overflow-hidden relative",
                feature.reverse ? "md:order-1" : "md:order-2"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
              <span className="text-on-surface-variant font-bold text-center px-8 relative z-10">
                Mockup: {feature.mockup}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
