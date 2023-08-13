"use client";

import axios from "axios";

export default function GiftCard(gift: any) {
  const handleGiftButton = async (e: Event) => {
    e.preventDefault();

    const { data } = await axios.post(
      "/api/createCheckoutSession",
      {
        priceId: gift.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    window.location.assign(data.sessionUrl);
  };

  return (
    <div className="flex flex-col gap-4 p-3 w-[250px] h-auto border rounded shadow-md transform hover:scale-105 transition-transform duration-300">
      <div>
        <img
          className="object-cover w-full h-64 border rounded"
          src={gift.product.images[0]}
        />
      </div>
      <div className="flex flex-col text-left gap-2">
        <h1 className="font-bold ">{gift.product.name}</h1>
        <p className="text-gray-500 text-sm">{gift.product.description}</p>
        <p className="text-gray-500 font-bold">
          R${(gift.unit_amount / 100).toFixed(2)}
        </p>
        <button
          onClick={handleGiftButton}
          className="bg-primary text-white rounded text-sm p-2 hover:shadow-lg hover:bg-white hover:text-primary hover:border font-bold transition-colors duration-500"
        >
          Presentear
        </button>
      </div>
    </div>
  );
}
