import React from 'react';
import { ExternalLink, Users, Database, BookOpen, School } from 'lucide-react';

const members = [
  {
    name: "Phạm Huỳnh Tấn Khang",
    mssv: "22520624",
  },
  {
    name: "Huỳnh Ngọc Trang",
    mssv: "22521510",
  },
  {
    name: "Nguyễn Huỳnh Xuân Nghi",
    mssv: "23521004",
  },
  {
    name: "Nguyễn Thị Ngọc Phước",
    mssv: "23521235",
  },
];

export const ProjectInfo: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white px-10 py-8 text-slate-800">

      <header className="mb-10 border-b border-slate-200 pb-6 flex flex-col lg:flex-row gap-8 justify-between items-start">
        {/* CỘT TRÁI: Logo + Tên đề tài + Thông tin môn học */}
        <div className="flex flex-col gap-5">
          
          {/* Hàng 1: Logo và Tên đề tài nằm ngang hàng */}
          <div className="flex items-center gap-5">
            {/* Khung chứa ảnh: w-24 (96px) là kích thước vừa vặn, không quá to/nhỏ */}
            <div className="w-24 h-24 flex-shrink-0 bg-white rounded-lg border border-slate-100 p-1 shadow-sm flex items-center justify-center">
              <img
                src="/img/UIT.logo.jpg" // Lưu ý: sửa dấu \ thành / để chạy đúng trên web
                alt="Logo UIT"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Tên đề tài */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold uppercase text-blue-900 leading-tight">
                Phân tích & Dự đoán <br className="hidden lg:block"/> 
                tỉ lệ Rời bỏ của Khách hàng
              </h1>
              <p className="text-slate-500 font-medium mt-1 text-base">
                Demo trực quan hóa dữ liệu
              </p>
            </div>
          </div>

          <div className="text-sm space-y-1.5 text-slate-700 max-w-2xl">
            <p><strong className="font-semibold text-blue-800">Trường:</strong> ĐH Công nghệ Thông Tin - ĐHQG TPHCM</p>
            <p><strong className="font-semibold text-blue-800">Khoa:</strong> Khoa học và Kỹ Thuật Thông tin</p>
            <p><strong className="font-semibold text-blue-800">Môn học:</strong> Phân tích và Trực quan dữ liệu</p>
          </div>
        </div>

        {/* CỘT PHẢI: Giảng viên hướng dẫn (Giữ nguyên vị trí) */}
        <div className="text-sm lg:text-right mt-2 lg:mt-0 p-4 lg:p-0 bg-blue-50 lg:bg-transparent rounded-md lg:rounded-none w-full lg:w-auto">
          <p className="font-bold text-blue-900 uppercase tracking-wider text-xs mb-1">Giảng viên hướng dẫn</p>
          <p className="text-base font-medium text-slate-800">ThS. Phạm Nguyễn Phúc Toàn</p>
          <p className="text-slate-500 text-sm">toanpnp@uit.edu.vn</p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-10">

          {/* TEAM */}
          <section>
            <h2 className="flex items-center gap-2 font-semibold text-blue-900 mb-4">
                Thành viên nhóm
            </h2>
            <ul className="space-y-3 text-sm">
              {members.map((m) => (
                <li key={m.mssv} className="border-b pb-3 last:border-0">
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-slate-500">
                    MSSV: {m.mssv}
                  </p>
                </li>
              ))}
            </ul>

          </section>

          {/* DATA SOURCE */}
          <section>
            <h2 className="flex items-center gap-2 font-semibold text-blue-900 mb-4">
               Nguồn dữ liệu
            </h2>

            <a
              href="https://www.kaggle.com/datasets/ankitverma2010/ecommerce-customer-churn-analysis-and-prediction"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm hover:text-blue-700"
            >
              <ExternalLink className="w-4 h-4" />
              Ecommerce Customer Churn Dataset (Kaggle)
            </a>

            <a
              href="https://drive.google.com/drive/folders/1i-zzRxvK-1owNeOid11qEo3-IFR4emZm?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm hover:text-blue-700"
            >
              <ExternalLink className="w-4 h-4" />
              Dataset đã xử lý (Google Drive)
            </a>
          </section>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <section>
            <h2 className="flex items-center gap-2 font-semibold text-blue-900 mb-4">
              Tổng quan đồ án
            </h2>

            <div className="text-sm leading-7 text-justify space-y-4">
              <p>
                Đồ án tập trung vào việc <strong>phân tích và trực quan hóa hành vi
                rời bỏ của khách hàng (Customer Churn)</strong> trong lĩnh vực thương mại điện tử.
              </p>

              <p>
                Mục tiêu của hệ thống là hỗ trợ người dùng nhanh chóng khám phá
                các đặc trưng hành vi giữa nhóm khách hàng rời bỏ và nhóm trung thành.
              </p>

              <ul className="list-disc pl-5">
                <li>Khám phá mẫu hình churn</li>
                <li>So sánh hành vi khách hàng</li>
                <li>Tạo biểu đồ tương tác từ dữ liệu CSV</li>
              </ul>

              <p>
                Các biểu đồ và câu chuyện dữ liệu được xây dựng thông qua
                nền tảng Flourish nhằm tăng khả năng kể chuyện bằng dữ liệu.
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};
