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
        <ul className="space-y-4 px-6">
          {[
            "Confirme sua presença, se caso não puder comparecer, <span className='font-bold'> avise!</span>",
            "Por favor, não levem pessoas que não foram convidadas;",
            "Não chegue atrasado!",
            "Lembre-se: branco é a cor da noiva;",
            "Verde oliva é a cor das madrinhas;",
            "Marsala é a cor das mães;",
            "Seu celular é bem-vindo, tire muitas fotos, mas cuidado para não atrapalhar o fotografo;",
            "E não menos importante, divirta-se muito com a gente nessa data tão importante",
          ].map((text, index) => (
            <li key={index} className="flex md:items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center mr-1">
                <svg
                  className="w-5 h-5 text-primary"
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
              </div>
              <span
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: text }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
