import Link from "next/link";
import { FC, JSX } from "react";

interface ItmProps {
  page: string;
  title: string;
  themeColor: string;
}
interface NavbBarProps {
  name: string;
  themeColor: string;
}

const NavBar: FC<NavbBarProps> = (props): JSX.Element => {
  const theme = {
    violet: "bg-violet-950",
    slate: "bg-slate-950",
    amber: "bg-amber-950",
    blue: "bg-blue-950",
    green: "bg-green-950",
    chuchu: "bg-indigo-950",
  };
  return (
    <div
      className={`w-full sticky top-0 flex flex-row font-bold justify-between px-5 py-5 content-center ${theme[props.themeColor]}`}
    >
      <div>
        <p className="text-3xl">{props.name}</p>
      </div>
      <div className="justify-evenly flex flex-row px-5">
        <MenuItem page="/" title="Home" themeColor={props.themeColor} />
        <MenuItem page="/" title="Projects" themeColor={props.themeColor} />
        <MenuItem page="/" title="About" themeColor={props.themeColor} />
        <MenuItem page="/" title="Contact Me" themeColor={props.themeColor} />
      </div>
    </div>
  );
};

const MenuItem: FC<ItmProps> = (props): JSX.Element => {
  const theme = {
    violet: `border-r-violet-400 border-b-violet-700 hover:border-violet-700`,
    slate: `border-r-slate-400 border-b-slate-700 hover:border-slate-700`,
    amber: `border-r-amber-400 border-b-amber-700 hover:border-amber-700`,
    blue: `border-r-blue-400 border-b-blue-700 hover:border-blue-700`,
    green: `border-r-green-400 border-b-green-700 hover:border-green-700`,
    chuchu: `border-r-indigo-400 border-b-indigo-700 hover:border-indigo-700`,
  };
  return (
    <>
      <Link
        href={props.page}
        className={`mx-5 px-2 border-4 content-center transition-colors duration-300 ease-in-out ${theme[props.themeColor]}`}
      >
        <p>{props.title}</p>
      </Link>
    </>
  );
};
export default NavBar;
