"use client";

import { Modal, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import saveData from "../services/firebase";

export default function GuestsConfirm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [displayShowsSize, setDisplayShowsSize] = useState(false);

  const form = useForm({
    initialValues: {
      nome: "",
      sexo: "",
      numeroCalcado: "",
      data: Timestamp.fromDate(new Date()),
      confirmado: true,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    saveData("guests", values);
    form.reset();
    setDisplayShowsSize(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="flex flex-col justify-center md:gap-0 py-10 px-12 md:px-24 items-center text-center"
      id="confirm-div"
    >
      <h1
        className="text-gray-500 font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Confirme sua presença
      </h1>

      <div className="mt-5 text-left w-full">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col items-center justify-center flex-wrap gap-4">
            <div className="w-3/5">
              <TextInput
                withAsterisk
                label="Nome Completo"
                placeholder="Nome"
                {...form.getInputProps("nome")}
              ></TextInput>
            </div>
            <div className="flex flex-wrap justify-between w-3/5">
              <div className="w-full md:w-[48%]">
                <Select
                  withAsterisk
                  label="Sexo"
                  placeholder="Selecione"
                  data={[
                    { value: "M", label: "Masculino" },
                    { value: "F", label: "Feminino" },
                  ]}
                  {...form.getInputProps("sexo")}
                  onChange={(event) => {
                    // Set the value of the select
                    form.setFieldValue("sexo", event!);
                    setDisplayShowsSize(event === "F");
                  }}
                ></Select>
              </div>
              <div className="w-full md:w-[48%] mt-4 md:mt-0">
                {displayShowsSize && (
                  <TextInput
                    withAsterisk
                    label="Numero do calçado"
                    placeholder="Numeração para chinelo"
                    {...form.getInputProps("numeroCalcado")}
                  ></TextInput>
                )}
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-primary text-white rounded text-sm p-2 hover:shadow-lg hover:bg-white hover:text-primary hover:border font-bold transition-colors duration-500"
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
