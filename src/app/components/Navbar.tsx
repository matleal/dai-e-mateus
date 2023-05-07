export default function Navbar() {
  return (
    <nav className="flex items-center justify-center bg-white px-10 py-6 border-b border-2 border-grey-300">
      <div className="flex items-center">
        <span
          className="text-gray-500 font-bold text-lg"
          style={{ fontFamily: "brittany" }}
        >
          Daillayne e Mateus
        </span>
      </div>
      {/* <ul className="flex items-center">
        <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200">Save the date</a>
        </li>
        <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200">Contador</a>
        </li>
      </ul> */}
    </nav>
  );
}
