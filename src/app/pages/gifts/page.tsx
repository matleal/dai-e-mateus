import GiftCard from "@/app/components/GiftCard";
import Navbar from "../../components/Navbar";

async function getData() {
  const url =
    process.env.VERCEL_ENV === "development"
      ? "http://localhost:3000"
      : "https://dai-e-mateus.vercel.app";

  const res = await fetch(`${url}/api/gifts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Gifts() {
  // const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const gifts = await getData();
  // setIsLoadingVisible(false);

  return (
    <>
      {/* <LoadingOverlay
        loaderProps={{ size: "md", color: "black", variant: "oval" }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
        visible={isLoadingVisible}
      /> */}
      <div className="flex flex-col gap-6 min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px-12 md:px-24 items-center text-center">
          <h1
            className="text-gray-500 font-bold text-4xl"
            style={{ fontFamily: "brittany" }}
          >
            Lista de presentes
          </h1>

          <p className="text-center md:w-2/4 mt-4">
            <span className="text-gray-500">
              <span className="border-b border-1">
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
