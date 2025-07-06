export default function Header() {
  return (
    <div className="bg-blue flex flex-col items-center justify-center pt-10 pb-4 rounded-b-4xl gap-4 px-5">
      <p className="text-white text-3xl">Cantina - UFERSA</p>

      <div className="relative w-full">
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <img src="/search.svg" alt="Buscar" className="w-6 h-6" />
        </span>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Pesquise por um produto"
          className="bg-white rounded-[13px] pl-10 pr-4 py-2 min-w-full font-lato outline-none focus:ring-2 focus:ring-orange focus:outline-none transition-all duration-300"
          autoComplete="off"
        />
      </div>
    </div>
  );
}
