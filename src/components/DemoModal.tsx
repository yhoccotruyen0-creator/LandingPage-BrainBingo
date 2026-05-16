import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Info, TrendingUp, Trophy, Home, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-moss/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full h-full md:h-auto md:max-h-[90vh] max-w-6xl bg-surface md:rounded-3xl shadow-[0_32px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row relative overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-surface-container-high/80 hover:bg-white text-on-surface hover:text-error transition-all shadow-lg backdrop-blur-xl"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full h-[50vh] md:h-auto md:w-2/3 bg-deep-moss relative group overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVIZtZzZCinZ8EAPaAR9kHMEyI000pr5PHheOxqJN2w4YooEQmuuOJIlmwGqqDa9TXYKa4EHWzjj7r7cZ--aQ-mmZ-q5kxsSUtfZfCPTlXEjiBAxEHGCT-NZ3-oIDVC9HP0Wn_PLFiREcYdNtjwblJwJspbuGACLQTY0s5Qyw5NYwEG9XVOUWIgLo50owUNNxnAzRcJFLtJ2kNpWAZwEhidOlmxGekd-T8CZItyIRGokNCtGuUVDx2LHGragCFr8z3OA5_fje9e8-1')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-moss via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-vibrant-orange rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group/play">
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </button>
              </div>

              <div className="absolute bottom-10 left-0 right-0 px-10 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border-l-[6px] border-vibrant-orange"
                >
                  <p className="text-xl font-bold text-forest-green">"Chỉ 15 phút mỗi ngày..."</p>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  className="h-full bg-vibrant-orange" 
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white p-8 md:p-12 flex flex-col overflow-y-auto">
              <div className="mb-10">
                <span className="inline-block py-1.5 px-4 bg-surface-container-high rounded-full text-xs font-bold text-forest-green mb-4">
                  Demo Trực Quan
                </span>
                <h2 className="text-3xl font-bold text-on-surface mb-4">
                  Khám phá <br/><span className="text-forest-green">Superbrain</span>
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Xem cách phương pháp rèn luyện tư duy của chúng tôi hoạt động qua 30 giây tóm tắt.
                </p>
              </div>

              <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[15px] before:w-[2px] before:bg-outline-variant/20">
                <TimelineStep 
                  active 
                  time="0:00 - 0:05" 
                  title="Chỉ 15 phút mỗi ngày" 
                  desc="Thói quen học tập nhẹ nhàng, hiệu quả cao." 
                  icon={<Info className="w-4 h-4" />}
                />
                <TimelineStep 
                  time="0:06 - 0:10" 
                  title="Lộ trình cá nhân hóa" 
                  desc="AI điều chỉnh độ khó theo năng lực thực tế." 
                  icon={<TrendingUp className="w-4 h-4" />}
                />
                <TimelineStep 
                  time="0:11 - 0:18" 
                  title="Thi đấu cùng bạn bè" 
                  desc="Kích thích tinh thần phấn đấu lành mạnh." 
                  icon={<Trophy className="w-4 h-4" />}
                />
                <TimelineStep 
                  time="0:19 - 0:25" 
                  title="Theo dõi tiến độ" 
                  desc="Báo cáo chi tiết cho phụ huynh real-time." 
                  icon={<Home className="w-4 h-4" />}
                />
              </div>

              <div className="mt-auto pt-10">
                <button className="w-full bg-vibrant-orange text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group">
                  TRẢI NGHIỆM MIỄN PHÍ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TimelineStep = ({ active, time, title, desc, icon }: { active?: boolean, time: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className={cn("relative pl-12 group transition-opacity", !active && "opacity-40 hover:opacity-100")}>
    <div className={cn(
      "absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md z-10 ring-4 ring-white transition-transform group-hover:scale-110",
      active ? "bg-vibrant-orange" : "bg-outline-variant/40"
    )}>
      {icon}
    </div>
    <div className={cn("text-[10px] font-bold tracking-widest uppercase mb-1", active ? "text-vibrant-orange" : "text-outline")}>
      {time}
    </div>
    <h3 className="font-bold text-on-surface text-base mb-1">{title}</h3>
    <p className="text-xs text-on-surface-variant leading-normal">{desc}</p>
  </div>
);
