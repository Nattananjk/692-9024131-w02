import Link from "next/link";
import Footer from "@/components/footer";
import MyCard from "@/components/mycard";

export default function AssignmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-800 font-sans">
      {/* แถบเมนูด้านบน */}
      <header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg text-sky-600 tracking-tight">My Portfolio</span>
          <div className="flex flex-row gap-2 sm:gap-4 text-sm font-medium">
            <Link href="/" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Home
            </Link>
            <Link href="/bio" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Bio
            </Link>
            <Link href="/assignment" className="px-3 py-1.5 rounded-full bg-sky-500 text-white shadow-sm">
              Assignment
            </Link>
            <Link href="/project" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Project
            </Link>
          </div>
        </nav>
      </header>

      {/* เนื้อหาหน้า Assignment */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-14 space-y-10">
        {/* ส่วนหัวข้อหน้า */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Coursework &amp; Labs
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Assignment</h1>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            พื้นที่สำหรับรวบรวมแบบฝึกหัด ปฏิบัติการ และการบ้านในรายวิชาการพัฒนาเว็บแอปพลิเคชัน
          </p>
        </div>

        {/* รายการงานแต่ละสัปดาห์ด้วย MyCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MyCard
            tag="Week 01 • Setup"
            title="Environment & Next.js Installation"
            description="ติดตั้งเครื่องมือพัฒนา Node.js, pnpm, VS Code และสร้างโครงสร้างโปรเจค Next.js เริ่มต้น"
            href="/"
          />
          <MyCard
            tag="Week 02 • Routing & Components"
            title="Multi-page Portfolio & Custom Components"
            description="สร้างระบบนำทางหลายหน้า (Home, Bio, Assignment, Project) พร้อมแยกส่วนประกอบ Footer และ MyCard"
            href="/bio"
          />
          <MyCard
            tag="Week 03 • UI Library"
            title="Modern UI Design & Component Styling"
            description="ออกแบบส่วนติดต่อผู้ใช้ด้วย Tailwind CSS และศึกษาการใช้งานคอมโพเนนต์มาตรฐาน"
            href="/project"
          />
          <MyCard
            tag="Git & GitHub"
            title="Version Control & Repository Deployment"
            description="จัดการซอร์สโค้ดด้วยคำสั่ง Git และเผยแพร่โปรเจคขึ้นบน GitHub Repository"
            href="https://github.com/Nattananjk/692-9024131-w02"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}git add .