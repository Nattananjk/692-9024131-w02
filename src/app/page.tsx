import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-800 font-sans">
      {/* แถบเมนูด้านบน */}
      <header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg text-sky-600 tracking-tight">My Portfolio</span>
          <div className="flex flex-row gap-2 sm:gap-4 text-sm font-medium">
            <Link href="/" className="px-3 py-1.5 rounded-full bg-sky-500 text-white shadow-sm">
              Home
            </Link>
            <Link href="/bio" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Bio
            </Link>
            <Link href="/assignment" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Assignment
            </Link>
            <Link href="/project" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Project
            </Link>
          </div>
        </nav>
      </header>

      {/* เนื้อหาหลักหน้าแรก */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl shadow-sky-100/60 border border-slate-100 p-10 text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Welcome to My Website
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ยินดีต้อนรับสู่เว็บไซต์ของฉัน
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            เว็บไซต์สำหรับรวบรวมข้อมูลส่วนตัว ผลงาน และแบบฝึกหัดรายวิชาเทคโนโลยีสารสนเทศ
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/bio"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-md shadow-sky-200 transition"
            >
              ดูหน้า Bio ของฉัน &rarr;
            </Link>
            <Link
              href="/project"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition"
            >
              ดูโปรเจค
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}