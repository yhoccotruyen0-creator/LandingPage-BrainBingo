import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
  const rows = [
    { label: 'Nội dung bài học', normal: 'Cố định, ai cũng giống ai', super: 'Cá nhân hóa theo năng lực' },
    { label: 'Động lực học', normal: 'Bố mẹ nhắc nhở/ép buộc', super: 'Tự giác vì được Game hóa' },
    { label: 'Kiểm tra kết quả', normal: 'Chờ giáo viên chấm điểm', super: 'Chấm điểm & Sửa lỗi tức thì' },
    { label: 'Môi trường thi đua', normal: 'Chỉ trong phạm vi lớp học', super: 'Bảng xếp hạng Toàn quốc' },
    { label: 'Theo dõi từ phụ huynh', normal: 'Phải hỏi giáo viên/Tự dò bài', super: 'Báo cáo real-time qua App' }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green">Sự Khác Biệt Giữa Luyện Tập Thường Và Superbrain App</h2>
        </div>

        <div className="overflow-x-auto rounded-3xl shadow-xl border border-outline-variant/30">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-6 text-xl font-bold text-on-surface border-b border-outline-variant/30 w-1/3">Tính Năng</th>
                <th className="p-6 text-xl font-bold text-on-surface-variant border-b border-outline-variant/30 bg-surface-variant/10 w-1/3 text-center">Luyện Tập Thông Thường</th>
                <th className="p-6 text-xl font-bold text-forest-green border-b border-forest-green bg-primary-container/5 w-1/3 text-center">Hệ Thống Của Chúng Tôi</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-6 font-bold text-on-surface border-b border-outline-variant/10">{row.label}</td>
                  <td className="p-6 text-on-surface-variant border-b border-outline-variant/10 bg-surface-variant/5 text-center">{row.normal}</td>
                  <td className="p-6 font-bold text-forest-green border-b border-outline-variant/10 bg-primary-container/5 text-center">{row.super}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
