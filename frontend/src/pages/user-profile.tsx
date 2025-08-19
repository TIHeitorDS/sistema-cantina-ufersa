import { useUser } from "../shared/hooks/useUser";
import { useState } from "react";
import AppLayout from "../ui/app-layout";
import UserBtn from "../components/user-btn";
import saveIcon from "../assets/save.svg";
import editIcon from "../assets/user-edit.svg";
import profileIcon from "../assets/profile.svg";

export default function UserProfile() {
  const { user, setUser } = useUser();
  const [nameValue, setNameValue] = useState<string | undefined>(user?.nome);
  const [phoneValue, setPhoneValue] = useState<string | undefined>(
    user?.telefone,
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(user !== null);

  const handleSave = () => {
    setUser({ ...user, nome: nameValue, telefone: phoneValue });
    setIsDisabled(true);
  };

  const handleEdit = () => {
    setIsDisabled(false);
  };

  return (
    <AppLayout title="Meu perfil">
      <div className="flex h-full flex-col items-center justify-center">
        <figure>
          <img src={profileIcon} alt="ícone de perfil" />
        </figure>

        <form className="mt-4.5 w-full space-y-2.5 px-3.5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            className="font-lato focus:ring-orange w-full rounded-[13px] border border-[#f9f9f9] p-2.5 transition-all duration-300 outline-none focus:ring-1 focus:outline-none disabled:opacity-50"
            autoComplete="off"
            value={nameValue || ""}
            onChange={(e) => setNameValue(e.target.value)}
            disabled={isDisabled}
            required
          />

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Seu número de telefone"
            className="font-lato focus:ring-orange w-full rounded-[13px] border border-[#f9f9f9] p-2.5 transition-all duration-300 outline-none focus:ring-1 focus:outline-none disabled:opacity-50"
            autoComplete="off"
            value={phoneValue || ""}
            onChange={(e) => setPhoneValue(e.target.value)}
            disabled={isDisabled}
            required
          />

          <UserBtn
            text={isDisabled ? "Editar" : "Salvar"}
            icon={isDisabled ? editIcon : saveIcon}
            handleClick={isDisabled ? handleEdit : handleSave}
          />
        </form>
      </div>
    </AppLayout>
  );
}
