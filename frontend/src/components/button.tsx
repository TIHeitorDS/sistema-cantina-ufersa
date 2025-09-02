export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-orange font-lato rounded-[13px] px-2.5 py-2 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
