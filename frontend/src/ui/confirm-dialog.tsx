import Button from "../components/button";
import CancelButton from "../components/cancel-button";

export default function ConfirmDialog({
  title,
  onConfirm,
  onCancel,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center border backdrop-blur-sm">
      <div className="rounded-[13px] bg-white p-8 shadow">
        <p className="text-xl font-semibold">{title}</p>

        <div className="mx-auto mt-4 w-fit space-x-2">
          <CancelButton text="Cancelar" onClick={onCancel} />
          <Button text="Confirmar" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
}
