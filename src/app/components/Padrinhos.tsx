"use client";
import { Image } from "@mantine/core";

export default function Padrinhos() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 py-10 px-8 lg:px-24 items-center">
      <div className="flex md:flex-col text-center gap-6">
        <Image
          mx="auto"
          radius="md"
          width={450}
          height={300}
          src="/assets/padrinhos-img.png"
        ></Image>
      </div>
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Padrinhos
        </h1>
        <p>
          <span className="text-gray-500">
            Para que você fique ainda mais elegante, neste dia gostaríamos que
            usasse uma camisa branca, calça bege, tenis branco e suspensório com
            a gravata verde que lhe entregamos.
          </span>
        </p>
      </div>
    </div>
  );
}
