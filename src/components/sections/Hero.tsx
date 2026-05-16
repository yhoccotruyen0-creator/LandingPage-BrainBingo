import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export const Hero = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-forest-green leading-tight">
            15 PHÚT MỖI NGÀY - Con Tự Giác Học — Phụ Huynh Yên Tâm Theo Dõi
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-medium">
            Lộ trình cá nhân hóa từng cấp độ — Luyện tập mọi lúc mọi nơi — Thi đấu cùng hàng ngàn học viên — Phụ huynh theo dõi tiến độ real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-vibrant-orange text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              🎁 NHẬN TƯ VẤN + TRẢI NGHIỆM 7 NGÀY MIỄN PHÍ
            </button>
            <button 
              onClick={onOpenDemo}
              className="border-2 border-forest-green text-forest-green px-6 py-4 rounded-xl font-bold text-base hover:bg-surface-container-low transition-all"
            >
              📱 Xem Demo Phần Mềm (30 giây)
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          onClick={onOpenDemo}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbbKssss-Fg8dNUmn2WeokhuMJJW1NmhU5EJQdM64yY2qP27Pxr6hZRPSVrNSe8xwbsgeaHyZX3aiei4VOGZJq_x34h3JHGOc9zb3SxEiqi0bAfdpSg1_Dco4eGX0TiG6qBb0K2soZ6tPHetbTZf6BaGGbLUNs7cdX0n7CTOn013Mrffq4EtBp9KKvr33k4XoHgYUp9KCuUlth2Xk7S1f2RP8JA-SJixZ3AEgBCRjY1vrDIJSZXXk7_RWXbwnxUOXdiDvkuUxdOKgt')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-moss/60 to-transparent flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary-fixed opacity-20 rounded-full blur-3xl z-0 pointer-events-none" />
    </section>
  );
};
