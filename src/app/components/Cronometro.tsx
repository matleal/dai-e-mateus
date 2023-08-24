"use client";
import { useEffect, useState } from "react";

export default function Cronometro() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("11/24/2023 16:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex text-white flex-col items-center py-8 w-ful h-auto bg-primary bg-opacity-90">
        <h1 className=" text-4xl" style={{ fontFamily: "brittany" }}>
          Falta pouco!
        </h1>
        <div className=" rounded-lg shadow-xl p-4 flex items-center justify-center mt-6">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div className="w-full md:w-auto px-3 mb-4 md:mb-0">
              <span className="text-4xl leading-none" id="days">
                {days}
              </span>
              <span className="block text-lg uppercase tracking-wide">
                Dias
              </span>
            </div>
            <div className="w-full md:w-auto px-3 mb-4 md:mb-0">
              <span className="text-4xl leading-none" id="hours">
                {hours}
              </span>
              <span className="block text-lg uppercase tracking-wide">
                Horas
              </span>
            </div>
            <div className="w-full md:w-auto px-3 mb-4 md:mb-0">
              <span className="text-4xl leading-none" id="minutes">
                {minutes}
              </span>
              <span className="block text-lg uppercase tracking-wide">
                Minutos
              </span>
            </div>
            <div className="w-full md:w-auto px-3 mb-4 md:mb-0">
              <span className="text-4xl leading-none" id="seconds">
                {seconds}
              </span>
              <span className="block text-lg uppercase tracking-wide">
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
