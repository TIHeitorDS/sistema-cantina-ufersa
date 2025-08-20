import checkIcon from "../assets/check.svg";

export default function SucessPopup({ text }: { text: string }) {
  return (
    <div className="absolute inset-x-0 inset-y-20 flex items-end justify-center">
      <div className="font-lato animate-show-popup pointer-events-none flex items-center justify-start gap-2.5 rounded-lg bg-[#B2D8B2] px-2.5 py-2 text-center">
        <figure className="flex h-9.75 w-9.75 items-center justify-center rounded-lg bg-[#E8F5E9] px-2 py-1.5">
          <img src={checkIcon} alt="ícone de verificação" />
        </figure>

        {text}
      </div>
    </div>
  );
}
