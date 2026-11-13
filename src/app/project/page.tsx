import Link from "next/link";
import Footer from "@/components/footer";

export default function ProjectPage() {
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
            <Link href="/assignment" className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition">
              Assignment
            </Link>
            <Link href="/project" className="px-3 py-1.5 rounded-full bg-sky-500 text-white shadow-sm">
              Project
            </Link>
          </div>
        </nav>
      </header>

      {/* เนื้อหาหน้า Project */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl shadow-sky-100/60 border border-slate-100 p-10 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Showcase
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Project</h1>
          <p className="text-slate-500 text-base">
            พื้นที่สำหรับรวบรวมผลงานและโปรเจคที่พัฒนา
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}