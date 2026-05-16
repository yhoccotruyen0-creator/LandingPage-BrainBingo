import React from 'react';
import { motion } from 'motion/react';

export const Problem = () => {
  const problems = [
    { emoji: '😴', title: 'Thiếu Động Lực Học Tại Nhà', desc: 'Con chỉ học khi có giáo viên nhắc nhở. Về nhà là quên ngay.' },
    { emoji: '🤷‍♀️', title: 'Khó Theo Dõi Tiến Độ Thực Tế', desc: 'Phụ huynh không biết con có thật sự tiến bộ hay chỉ "biết làm vài bài".' },
    { emoji: '😑', title: 'Học Lặp Đi Lặp Lại Gây Nhàm Chán', desc: 'Làm đi làm lại những dạng bài giống nhau, con nhanh chán nản.' },
    { emoji: '🏃‍♂️', title: 'Không Có Môi Trường Thi Đua', desc: 'Không có bạn bè cùng học, con thiếu động lực để cố gắng hơn.' }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Con Đã Học Nhưng Tại Sao Vẫn Dễ Quên?</h2>
          <p className="text-lg text-on-surface-variant">4 rào cản khiến con không duy trì được tiến bộ sau khi học trên lớp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 border border-outline-variant/30"
            >
              <div className="text-4xl bg-surface-container p-4 rounded-xl">{prob.emoji}</div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">{prob.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
