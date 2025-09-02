export default function UserBtn({
  text,
  icon,
  handleClick,
}: {
  text: string;
  icon: string;
  handleClick: () => void;
}) {
  return (
    <button
      type="button"
      className="bg-orange font-lato ml-auto flex gap-2.5 rounded-[13px] p-2.5 text-white"
      onClick={handleClick}
    >
      <img src={icon} alt="ícone de ação" />
      {text}
    </button>
  );
}
