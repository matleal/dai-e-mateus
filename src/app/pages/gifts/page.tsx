import GiftCard from "@/app/components/GiftCard";
import { getData } from "@/app/services/firebase";
import Navbar from "../../components/Navbar";

export default async function Gifts() {
  const gifts = await getData("gifts");

  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen">
        <Navbar></Navbar>
        <div className="flex justify-center gap-6 flex-col md:gap-0 py-10 px-12 md:px-24 items-center text-center">
          <h1
            className="font-bold text-4xl text-gray-500"
            style={{ fontFamily: "brittany" }}
          >
            Lista de presentes
          </h1>

          <p className="text-center md:w-2/4 mt-4">
            <span className="text-gray-500">
              <span className="border-1 border-b">
                Nos ajude a montar nosso novo lar!
              </span>{" "}
              <br />
              Por nossa plataforma você pode pagar no cartão de crédito, mas se
              desejar utilizar o pix ou você mesmo comprar o presente em uma
              loja da sua escolha, entre em contato conosco pelo whatsapp.
            </span>
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-11">
            {gifts &&
              gifts.map((gift: any) => (
                <GiftCard key={gift.id} {...gift}></GiftCard>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
