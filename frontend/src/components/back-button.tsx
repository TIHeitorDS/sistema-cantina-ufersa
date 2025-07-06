import { useNavigate } from "react-router";
import chevronLeft from "../assets/chevron-left.svg";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2 flex justify-between items-center gap-2 bg-white rounded-lg shadow border border-[#f2f2f2] w-full"
    >
      <div className="bg-orange rounded-[10px] p-2 flex items-center justify-center w-8 h-8">
        <img src={chevronLeft} alt="ícone para voltar à página anterior" />
      </div>

      <span className="font-lato text-[#000000]/25">Voltar</span>
    </button>
  );
}
