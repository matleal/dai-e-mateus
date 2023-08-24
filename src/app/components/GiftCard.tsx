"use client";

import { LoadingOverlay, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconAt } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";

export default function GiftCard(gift: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const createCheckoutUrl = async (values: typeof form.values) => {
    setIsLoadingVisible(true);

    await axios
      .post("/api/mercado-pago/reference", {
        productId: gift.id,
        productName: gift.name,
        productPrice: gift.price,
        payerName: values.name,
        payerEmail: values.email,
      })
      .then((response) => {
        window.location.href = response.data;
      });

    setIsLoadingVisible(false);
  };

  return (
    <>
      <LoadingOverlay
        loaderProps={{ size: "md", color: "black", variant: "oval" }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
        visible={isLoadingVisible}
      />

      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit(createCheckoutUrl)}>
          <div className="flex flex-wrap flex-col gap-3">
            <div>
              <h1 className="font-bold text-md">Presenteando {gift.name}</h1>
              <p className="text-gray-500 text-xs">
                Deixe seu nome e email para sabermos quem comprou esse
                presentão!
              </p>
            </div>
            <div>
              <TextInput
                placeholder="Seu nome ou apelido"
                label="Nome"
                withAsterisk
                {...form.getInputProps("name")}
              />
              <TextInput
                placeholder="Seu email"
                label="Email"
                withAsterisk
                icon={<IconAt size="0.8rem" />}
                {...form.getInputProps("email")}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded text-sm p-2 hover:shadow-lg hover:bg-white hover:text-primary hover:border font-bold transition-colors duration-500 mt-1"
            >
              Ir para o pagamento
            </button>
          </div>
        </form>
      </Modal>

      <div className="flex flex-col gap-4 p-3 w-[250px] h-auto border rounded shadow-md transform hover:scale-105 transition-transform duration-300">
        <div>
          <img
            className="object-cover w-full h-64 border rounded"
            src={gift.imageUrl}
          />
        </div>
        <div className="flex flex-col justify-between text-left gap-2 h-full">
          <div className="flex-grow">
            <h1 className="font-bold ">{gift.name}</h1>
            <p className="text-gray-500 text-xs mt-2">{gift.description}</p>
            <p className="text-gray-500 font-bold mt-2">R${gift.price}</p>
          </div>
          {gift.giver ? (
            <div className="text-primary text-sm text-center">
              <span className="font-bold">{gift.giver}</span> já comprou esse
              presentão aqui! Obrigado
              <span className="text-red-500"> &#x2764;</span>
            </div>
          ) : (
            <button
              onClick={open}
              className="bg-primary text-white rounded text-sm p-2 hover:shadow-lg hover:bg-white hover:text-primary hover:border font-bold transition-colors duration-500"
            >
              Presentear
            </button>
          )}
        </div>
      </div>
    </>
  );
}
