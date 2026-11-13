import Link from "next/link";

interface MyCardProps {
  title?: string;
  description?: string;
  tag?: string;
  href?: string;
}

export default function MyCard({
  title = "My Portfolio Project",
  description = "ผลงานการพัฒนาเว็บไซต์ด้วย Next.js และ Tailwind CSS",
  tag = "Web Development",
  href,
}: MyCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-sky-100/60 border border-slate-100 p-6 text-left flex flex-col justify-between space-y-4 hover:-translate-y-1 hover:shadow-xl transition duration-200">
      <div className="space-y-3">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold">
          {tag}
        </span>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      {href && (
        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            ดูรายละเอียด &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}