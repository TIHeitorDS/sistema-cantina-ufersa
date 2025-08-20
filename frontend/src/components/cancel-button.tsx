export default function CancelButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      className="border border-orange font-lato rounded-[13px] px-2.5 py-2 text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
