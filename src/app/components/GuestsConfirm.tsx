"use client";

import { Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import saveData from "../services/firebase";

export default function GuestsConfirm() {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    initialValues: {
      nome: "",
      data: Timestamp.fromDate(new Date()),
      confirmado: true,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    saveData("guests", values);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px:12 md:px-24 items-center text-center">
      <h1
        className="text-gray-500 font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Confirme sua presença
      </h1>

      <div className="mt-3 text-left">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex items-center flex-wrap gap-4">
            <div className="w-96">
              <TextInput
                width={500}
                withAsterisk
                label="Nome Completo"
                placeholder="Nome"
                {...form.getInputProps("nome")}
              ></TextInput>
            </div>
            <div className="pt-6">
              <button
                type="submit"
                className="rounded-md bg-primary text-white text-bold py-1.5 px-2"
              >
                Confirmar minha presença
              </button>
            </div>
          </div>
        </form>
      </div>

      <Modal opened={modalOpen} onClose={closeModal} size="sm">
        <div className="text-center">
          <p>Sua presença foi confirmada!</p>
        </div>
      </Modal>
    </div>
  );
}
