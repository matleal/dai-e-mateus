export default function MainBanner() {
  return (
    <div className="flex w-full h-[83vh]">
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/_MG_9539.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/_MG_9583.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/_MG_9652.jpg"
      />
      <img
        loading="lazy"
        className="hidden md:block aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/_MG_9548.jpg"
      />
    </div>
  );
}
