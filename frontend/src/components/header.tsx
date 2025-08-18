import { useLocation } from "react-router";

export default function Header({ text }: { text: string }) {
  let location = useLocation();

  return (
    <div className="pt-10 pb-4 rounded-b-4xl gap-4 space-y-5 px-5">
      <p className="text-3xl text-blue font-extrabold">{text}</p>

      {location.pathname === "/" && (
        <div className="relative w-full">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img src="/search.svg" alt="Buscar" className="w-6 h-6" />
          </span>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Pesquise por um produto"
            className="rounded-[13px] pl-10 pr-4 py-2 border border-[#f9f9f9] min-w-full font-lato outline-none focus:ring-1 focus:ring-orange focus:outline-none transition-all duration-300"
            autoComplete="off"
          />
        </div>
      )}
    </div>
  );
}
