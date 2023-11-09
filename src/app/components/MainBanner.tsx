export default function MainBanner() {
  return (
    <div className="flex w-full h-[83vh]">
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-one.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-two.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-three.jpg"
      />
      <img
        loading="lazy"
        className="hidden md:block aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-four.jpg"
      />
    </div>
  );
}
