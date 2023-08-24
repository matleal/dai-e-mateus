import Head from "next/head";
import Convidados from "./components/Convidados";
import Cronometro from "./components/Cronometro";
import GuestsConfirm from "./components/GuestsConfirm";
import Localizacao from "./components/Localizacao";
import Madrinhas from "./components/Madrinhas";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";
import Padrinhos from "./components/Padrinhos";
import SaveTheDate from "./components/SaveTheDate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dai e Ted</title>
      </Head>
      <Navbar></Navbar>
      <div className="flex flex-col gap-6 min-h-screen">
        <MainBanner></MainBanner>
        {/* <Historia></Historia> */}
        {/* <Divider></Divider> */}
        <SaveTheDate></SaveTheDate>
        <Localizacao></Localizacao>
        <Convidados></Convidados>
        <Madrinhas></Madrinhas>
        <Padrinhos></Padrinhos>
        <GuestsConfirm></GuestsConfirm>
        <Cronometro></Cronometro>
      </div>
    </>
  );
}

function Divider() {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="w-1/2 h-0.5 bg-primary"></div>
    </div>
  );
}
