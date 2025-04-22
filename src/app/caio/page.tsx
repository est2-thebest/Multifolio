import CardItem from "@/components/caio/Card";
import Image from "next/image";

export default function Caio() {
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center" id="content-frame">
        <div
          className="h-96 p-5 w-full col-span-2 rounded-2xl border-2 border-slate-900"
          id="text-area"
        >
          <h1 className="text-2xl mb-5 font-bold">
            As melhores soluções em tecnologia para sua empresa
          </h1>
          <p className=" text-xl text-justify">
            Lorem ipsum dolor sit amet. Est accusantium aspernatur id iure
            veritatis ut voluptatem consequatur sed voluptas omnis sed delectus
            error rem nobis fugit hic repellendus dolor. Ut nemo nihil non
            accusantium distinctio ut ducimus consequatur nam consectetur
            aspernatur aut nihil excepturi. Ut reiciendis magnam est nostrum
            odit et corporis adipisci. Est iure maxime aut voluptatem illo ut
            perspiciatis quas qui optio quia qui quia quaerat sit voluptates
            temporibus hic molestias optio.{" "}
          </p>
        </div>
        <div className="h-96 p-5 flex flex-col items-center justify-center col-span-1 rounded-2xl ">
          <Image
            className="rounded-2xl"
            src="https://picsum.photos/seed/person/300"
            width={350}
            height={350}
            alt="Caio de Paula Brito"
          />
        </div>

        <CardItem
          res={150}
          description="Lorem ipsum"
          cardTitle="Árvore"
          imgSrc="https://picsum.photos/150"
        />
        <CardItem
          res={150}
          description="Lorem ipsum"
          cardTitle="Árvore"
          imgSrc="https://picsum.photos/150"
        />
        <CardItem
          res={150}
          description="Lorem ipsum"
          cardTitle="Árvore"
          imgSrc="https://picsum.photos/150"
        />
      </div>
    </div>
  );
}
