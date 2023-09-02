"use client";

import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function SaveTheDate() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 px:12 md:px-24 items-center">
      <div className="w-4/5 flex gap-4 flex-col text-center">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Quando?
        </h1>
        <h2>
          <span className="text-gray-500 font-bold border-b border-1">
            24 de novembro de 2023, às 16:30
          </span>
        </h2>
        <p>
          <span className="text-gray-500">
            Reserve a data e venha fazer parte desse momento único e
            inesquecível em nossas vidas. Será uma honra celebrar junto com
            você!
          </span>
        </p>
      </div>
      <div className="w-4/5">
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
        {/* <Carousel
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
        </Carousel> */}
      </div>
    </div>
  );
}
