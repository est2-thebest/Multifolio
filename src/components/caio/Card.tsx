import Image from "next/image";
import { FC, JSX } from "react";

interface CardProps {
  imgSrc: string;
  res: number;
  cardTitle: string;
  description: string;
}

const CardItem: FC<CardProps> = (props): JSX.Element => {
  return (
    <div className="border-2 border-slate-800 my-5 rounded-xl text-center flex flex-col items-center w-72 h-min-96">
      <Image
        className="my-5"
        src={props.imgSrc}
        width={props.res}
        height={props.res}
        alt="Logo"
      />
      <h1 className="font-bold text-2xl mb-3">{props.cardTitle}</h1>
      <p className="m-2">{props.description}</p>
    </div>
  );
};

export default CardItem;
