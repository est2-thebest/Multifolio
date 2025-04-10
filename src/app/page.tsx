import Link from "next/link";

export default function Home() {
  return (
    <div className="p-0 m-0 h-dvh w-dvw flex flex-rowa screen-container">
      <Link
        className="bg-purple-950 text-purple-400 section hover:rounded-2xl hover:bg-purple-400 hover:text-purple-950"
        href="/caio"
      >
        <div>
          <p>Caio</p>
        </div>
      </Link>

      <Link
        className="bg-purple-700 text-purple-400 section hover:rounded-2xl hover:bg-purple-400 hover:text-purple-700"
        href="/eduarda"
      >
        <div>
          <p>Eduarda</p>
        </div>
      </Link>

      <Link
        className="bg-blue-950 text-blue-400 hover:rounded-2xl section hover:text-blue-950 hover:bg-blue-400"
        href="/luiz"
      >
        <div>
          <p>Luiz</p>
        </div>
      </Link>

      <Link
        className="bg-green-700 text-green-400 section hover:rounded-2xl hover:text-green-700 hover:bg-green-400"
        href="/gabriela"
      >
        <div>
          <p>Gabriela</p>
        </div>
      </Link>
    </div>
  );
}
