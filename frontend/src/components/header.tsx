export default function Header({ text }: { text: string }) {
  return (
    <div className="gap-4 space-y-5 rounded-b-4xl px-5 pt-10 pb-4">
      <p className="text-blue text-3xl font-extrabold">{text}</p>
    </div>
  );
}
