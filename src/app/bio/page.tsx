import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function BioPage() {
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
            <Link href="/bio" className="px-3 py-1.5 rounded-full bg-sky-500 text-white shadow-sm">
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

      {/* การ์ดข้อมูลหน้า Bio */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-sky-100/60 border border-slate-100 p-8 text-center flex flex-col items-center space-y-5">
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 shadow-md">
            <Image
              src="/images/mao.jpg"
              alt="Mao"
              width={200}
              height={200}
              className="rounded-full object-cover w-[200px] h-[200px] bg-white"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Bio</h1>
            <h2 className="text-2xl font-bold text-sky-600 pt-1">
              ณัฐนันท์ พันธุเดช
            </h2>
            <p className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 font-medium text-sm">
              Hello World
            </p>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed">
            นักศึกษาสาขาวิชาเทคโนโลยีสารสนเทศ คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}