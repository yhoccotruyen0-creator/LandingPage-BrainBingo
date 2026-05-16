import React from 'react';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export const SocialProof = () => {
  const metrics = [
    { icon: <Users className="w-8 h-8" />, val: '50,000+', label: 'Học viên đang luyện tập' },
    { icon: <Clock className="w-8 h-8" />, val: '15 Phút', label: 'Thời gian trung bình mỗi ngày' },
    { icon: <TrendingUp className="w-8 h-8" />, val: '95%', label: 'Thấy con tiến bộ sau 1 tháng' },
    { icon: <Star className="w-8 h-8" />, val: '4.8/5', label: 'Đánh giá trên App Stores' }
  ];

  const testimonials = [
    {
      stars: 5,
      text: '"Từ ngày dùng app, tối nào ăn cơm xong cu cậu cũng tự động lấy iPad ra \'làm nhiệm vụ\' để đua top với các bạn. Mẹ không cần hò hét như xưa nữa. Cảm thấy thật sự nhẹ nhõm."',
      author: 'Mẹ Thu Phương',
      child: 'Phụ huynh bé Bo (7 tuổi)',
      initial: 'M'
    },
    {
      stars: 5,
      text: '"Mình thích nhất cái dashboard cho phụ huynh. Đi làm thỉnh thoảng thấy điện thoại \'ting\' báo con vừa hoàn thành bài tập, thấy vui lắm. Mình biết chính xác con đang yếu phần nào để nhờ thầy cô hỗ trợ thêm."',
      author: 'Ba Hoàng Dũng',
      child: 'Phụ huynh bé Na (9 tuổi)',
      initial: 'B',
      featured: true
    },
    {
      stars: 4.5,
      text: '"Bé nhà mình trước đây rất sợ học Toán. Nhưng giao diện app như chơi game, có âm thanh vui nhộn nên bé không thấy áp lực. Giờ tính toán nhanh nhạy hẳn lên, cô giáo cũng khen."',
      author: 'Chị Lan Anh',
      child: 'Phụ huynh bé Tít (6 tuổi)',
      initial: 'L'
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Hàng Ngàn Phụ Huynh Đã Yên Tâm Về Việc Học Của Con</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="text-center p-8 bg-surface-container-low rounded-3xl border border-outline-variant/20 shadow-sm">
              <div className="text-vibrant-orange mb-4 flex justify-center">{m.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-forest-green mb-1">{m.val}</div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`
                bg-white p-8 rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col h-full relative
                ${t.featured ? 'ring-2 ring-vibrant-orange/50' : ''}
              `}
            >
              {t.featured && (
                <div className="absolute -top-4 -right-4 bg-vibrant-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Được yêu thích
                </div>
              )}
              <div className="flex gap-1 text-vibrant-orange mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(t.stars) ? 'fill-current' : 'text-outline-variant'}`} />
                ))}
              </div>
              <p className="text-on-surface-variant italic leading-relaxed mb-8 flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-forest-green font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-on-surface">{t.author}</div>
                  <div className="text-xs text-on-surface-variant font-medium">{t.child}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
