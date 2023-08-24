"use client";

import GiftCard from "@/app/components/GiftCard";
import { getData } from "@/app/services/firebase";
import { LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default async function Gifts() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const gifts = await getData("gifts");
  setIsLoadingVisible(false);

  return (
    <>
      <LoadingOverlay
        loaderProps={{ size: "md", color: "black", variant: "oval" }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
        visible={isLoadingVisible}
      />

      <div className="flex flex-col gap-6 min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px-12 md:px-24 items-center text-center">
          <h1
            className="text-gray-500 font-bold text-4xl"
            style={{ fontFamily: "brittany" }}
          >
            Lista de presentes
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-11">
            {gifts &&
              gifts.map((gift) => (
                <GiftCard key={gift.id} {...gift}></GiftCard>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
