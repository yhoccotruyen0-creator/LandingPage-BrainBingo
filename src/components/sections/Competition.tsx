import React from 'react';
import { Flame, Trophy, Medal, Users, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';

export const Competition = () => {
  const leaderboard = [
    { rank: '#1', name: 'Minh Khang', lvl: 'Level 12', score: '15,420', initial: 'M', color: 'bg-primary-fixed-dim', active: true },
    { rank: '#2', name: 'An Nhiên', lvl: 'Level 11', score: '14,890', initial: 'A', color: 'bg-secondary-fixed-dim' },
    { rank: '#3', name: 'Tuấn Kiệt', lvl: 'Level 11', score: '14,200', initial: 'T', color: 'bg-tertiary-fixed-dim' },
    { rank: '#42', name: 'Bé Của Bạn', lvl: 'Level 5', score: '5,200', initial: 'B', color: 'bg-forest-green', user: true },
  ];

  return (
    <section id="leaderboard" className="py-12 md:py-20 px-4 md:px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Sân Chơi Thi Đấu - Nơi Con Tỏa Sáng</h2>
          <p className="text-lg text-on-surface-variant">Không chỉ là luyện tập, mà là hành trình chinh phục đỉnh cao</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureBlock icon={<Flame className="text-vibrant-orange" />} title="Thử Thách Nhanh Mỗi Ngày" desc="Giải mã 10 phép tính trong 60 giây để giành điểm Bonus." />
            <FeatureBlock icon={<Trophy className="text-primary-container" />} title="Bảng Xếp Hạng Đa Chiều" desc="Xếp hạng theo Cấp độ (Level), theo Cơ sở học, và Toàn quốc." />
            <FeatureBlock icon={<Medal className="text-vibrant-orange" />} title="Giải Đấu Cuối Tuần/Tháng" desc="Sự kiện đặc biệt mở vào cuối tuần với phần thưởng vinh danh hấp dẫn." />
            <FeatureBlock icon={<Users className="text-primary-container" />} title="Thi Đấu Nhóm (Clan/Team)" desc="Các cơ sở thi đua với nhau, tạo tinh thần đồng đội." />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-xl"
          >
            <h4 className="text-xl font-bold text-center mb-8 text-forest-green">Top Bảng Xếp Hạng Tuần</h4>
            <div className="space-y-4">
              {leaderboard.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className={`
                    flex items-center gap-4 p-4 rounded-xl border-l-4 transition-all hover:translate-x-1
                    ${item.user ? 'bg-primary-container/10 border-primary-container shadow-sm' : 
                      item.active ? 'bg-white border-vibrant-orange shadow-md' : 'bg-white border-outline-variant'}
                  `}>
                    <div className={`font-bold w-6 ${item.active ? 'text-vibrant-orange' : 'text-outline/60'}`}>{item.rank}</div>
                    <div className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {item.initial}
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold ${item.user ? 'text-forest-green' : 'text-on-surface'}`}>{item.name}</div>
                      <div className="text-xs text-on-surface-variant font-medium">{item.lvl}</div>
                    </div>
                    <div className="font-bold text-forest-green">{item.score}</div>
                  </div>
                  {idx === 2 && (
                    <div className="flex justify-center py-2 text-outline-variant">
                      <MoreVertical className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureBlock = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all">
    <div className="inline-flex items-center justify-center p-3 bg-surface-container rounded-xl mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-on-surface mb-2">{title}</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
  </div>
);
