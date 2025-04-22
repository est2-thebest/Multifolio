import Link from "next/link";

export default function Home() {
  return (
    <div className="p-0 m-0 h-dvh w-dvw flex flex-rowa screen-container">
      <Link
        className="bg-slate-950 text-slate-400 section hover:rounded-2xl hover:bg-slate-900 hover:text-slate-200"
        href="/caio"
      >
        <div>
          <p>Caio</p>
        </div>
      </Link>

      <Link
        className="bg-purple-950 text-purple-400 section hover:rounded-2xl hover:bg-purple-900 hover:text-purple-200"
        href="/eduarda"
      >
        <div>
          <p>Eduarda</p>
        </div>
      </Link>

      <Link
        className="bg-blue-950 text-blue-400 hover:rounded-2xl section hover:text-blue-200 hover:bg-blue-900"
        href="/luiz"
      >
        <div>
          <p>Luiz</p>
        </div>
      </Link>

      <Link
        className="bg-green-950 text-green-400 section hover:rounded-2xl hover:text-green-200 hover:bg-green-900"
        href="/gabriela"
      >
        <div>
          <p>Gabriela</p>
        </div>
      </Link>
    </div>
  );
}
