"use client";

import Navbar from "@/app/components/Navbar";
import { deleteData, getData } from "@/app/services/firebase";
import { ActionIcon, Paper, Space, Table } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export default async function Page() {
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleDeleteButton = async (id: string) => {
    setLoadingDelete(true);
    await deleteData("guests", id);
    setLoadingDelete(false);
    window.location.reload();
  };

  const guests = await getData("guests");
  const tableRows = guests
    ?.filter((guest: any) => guest.nome)
    .sort((a: any, b: any) => (a.data.toDate() > b.data.toDate() ? -1 : 1))
    .map((guest: any, index: number) => (
      <tr key={guest.id}>
        <td className="px-6 py-4 whitespace-nowrap">{index}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {guest.nome}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{guest.sexo}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              guest.confirmado
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {guest.confirmado ? "Confirmado" : "Não confirmado"}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {guest.numeroCalcado}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {guest.data.toDate().toLocaleDateString("pt-BR")}
        </td>
        <td>
          <ActionIcon
            loading={loadingDelete}
            onClick={() => handleDeleteButton(guest.id)}
          >
            <IconTrash size="1.125rem"></IconTrash>
          </ActionIcon>
        </td>
      </tr>
    ));

  const totalGuests = guests?.filter((guest: any) => guest.nome).length;

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center gap-6 flex-col md:gap-0 py-10 px-12 md:px-24 items-center text-center">
        <h1
          className="font-bold text-4xl text-gray-500"
          style={{ fontFamily: "brittany" }}
        >
          Lista de confirmados
        </h1>

        <Space h="md"></Space>

        <h1>Numero total de convidadaos: {totalGuests}</h1>

        <Paper shadow="xs" p="md">
          <Table>
            <thead>
              <tr>
                <th>-</th>
                <th>
                  <div className="flex items-center">Nome</div>
                </th>
                <th>Sexo</th>
                <th>Confirmado</th>
                <th>Numero do calçado</th>
                <th>Data de confirmação</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Paper>
      </div>
    </>
  );
}
