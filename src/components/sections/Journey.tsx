import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export const Journey = () => {
  const steps = [
    { num: '1', title: 'Tuần 1: Khởi Động', desc: 'Làm quen với app. Hình thành thói quen 15 phút mỗi ngày.' },
    { num: '2', title: 'Tuần 2: Tăng Tốc', desc: 'Bắt đầu vượt qua các mức độ khó. Tham gia bảng xếp hạng nhóm nhỏ.' },
    { num: '3', title: 'Tuần 3: Bứt Phá', desc: 'Tốc độ tính toán nhanh rõ rệt. Tham gia giải đấu cấp trung tâm.', orange: true },
    { num: <Award className="w-6 h-6" />, title: 'Tuần 4: Duy Trì', desc: 'Tự giác học không cần nhắc nhở. Tự tin bước vào kỳ thi Toán Trí Tuệ.', final: true }
  ];

  return (
    <section id="roadmap" className="py-12 md:py-20 px-4 md:px-6 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Hành Trình Chinh Phục Của Con Cùng Superbrain</h2>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden md:block mt-20 mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-outline-variant -translate-y-1/2 opacity-30" />
          <div className="flex justify-between relative z-10 px-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center w-1/4 px-4 text-center group"
              >
                <div className={`
                  w-16 h-16 rounded-full border-4 flex items-center justify-center mb-6 font-bold shadow-lg transition-transform group-hover:scale-110 bg-white
                  ${step.final ? 'bg-vibrant-orange border-vibrant-orange text-white' : 
                    step.orange ? 'border-vibrant-orange text-vibrant-orange' : 'border-forest-green text-forest-green'}
                `}>
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-3">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm z-10 relative bg-white
                  ${step.final ? 'bg-vibrant-orange border-vibrant-orange text-white' : 
                    step.orange ? 'border-vibrant-orange text-vibrant-orange' : 'border-forest-green text-forest-green'}
                `}>
                  {step.num}
                </div>
                {idx !== steps.length - 1 && <div className="w-0.5 h-full bg-outline-variant/30 my-2" />}
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold text-on-surface mb-2">{step.title}</h4>
                <p className="text-on-surface-variant">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
