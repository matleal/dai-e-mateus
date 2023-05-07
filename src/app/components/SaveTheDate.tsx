"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function SaveTheDate() {
  return (
    <div className="flex flex-wrap justify-between gap-6 md:gap-0 py-10 px:12 md:px-24 items-center">
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Save the Date!
        </h1>
        <h2>
          <span className="text-gray-500 font-bold border-b border-1">
            24 de novembro de 2023
          </span>
        </h2>
        <p>
          <span className="text-gray-500">
            Prepare-se para uma surpresa emocionante! Apesar de termos marcado
            em cima da hora, decidimos comemorar um momento especial juntos,
            nosso casamento. Reserve a data para participar de um dos momentos
            mais especias da nossa vida!
          </span>
        </p>
        <div className="flex justify-center">
          <AddToCalendarButton
            label="Adicionar ao calendário"
            name="Casamento - Dai e Mateus"
            options={["Google", "Outlook.com", "Apple", "Microsoft365"]}
            location="Curitiba"
            startDate="2023-11-24"
            endDate="2023-11-24"
            startTime="17:15"
            endTime="23:00"
            timeZone="America/Sao_Paulo"
            size="3"
          ></AddToCalendarButton>
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <Carousel
          slideSize="70%"
          height="100%"
          align="center"
          slideGap="lg"
          controlSize={23}
          dragFree
          className="w-full"
          loop
        >
          <Carousel.Slide>
            <Image
              height={394}
              radius="md"
              alt="Pedido de casamento foto"
              src="/assets/_MG_9652.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height={394}
              radius="md"
              alt="Pedido de casamento foto"
              src="/assets/_MG_9538.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height={394}
              radius="md"
              alt="Pedido de casamento foto"
              src="/assets/_MG_9539.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height={394}
              radius="md"
              alt="Pedido de casamento foto"
              src="/assets/_MG_9548.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height={394}
              radius="md"
              alt="Pedido de casamento foto"
              src="/assets/_MG_9583.jpg"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}
