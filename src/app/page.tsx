import Cronometro from "./components/Cronometro";
import Navbar from "./components/Navbar";
import SaveTheDate from "./components/SaveTheDate";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 min-h-screen">
      <Navbar></Navbar>
      <SaveTheDate></SaveTheDate>
      <Cronometro></Cronometro>
    </div>
  );
}
