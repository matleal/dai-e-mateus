"use client";

export default function Madrinhas() {
  return (
    <div className="flex flex-col gap-4 py-10 items-center">
      <div className="w-full flex flex-col text-center gap-6">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Manual dos Convidados
        </h1>
        <ul className="space-y-4">
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              Confirme sua presença, se caso não puder comparecer,
              <span className="font-bold"> avise!</span>
            </span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              Por favor, não levem pessoas que não foram convidadas;
            </span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">Não chegue atrasado!</span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              Lembre-se: branco é a cor da noiva;
            </span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              E verde oliva e a cor das madrinhas;
            </span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              Seu celular é bem-vindo, tire muitas fotos, mas cuidado para não
              atrapalhar o fotografo;
            </span>
          </li>
          <li className="flex items-center justify-center ">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-500">
              E não menos importante, divirta-se muito com a gente nessa data
              tão importante
            </span>
          </li>
        </ul>
      </div>
      {/* <div className="flex flex-col text-center gap-6">
        <Image
          mx="auto"
          radius="md"
          width={600}
          height={300}
          src="/assets/madrinhas-img.jpg"
        ></Image>
      </div> */}
    </div>
  );
}
