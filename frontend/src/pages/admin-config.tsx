import Bolt from "../assets/bolt.svg";
import ClientReq from "../components/client-req";
import { Link } from "react-router";

export default function AdminConfig() {
  return (
    <>
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold flex items-center justify-between">
        <p className="grow">Lista de pedidos</p>

        <Link to="/admin/add-item">
          <img src={Bolt} alt="" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 px-9.25">
        <ClientReq />
        <ClientReq />
        <ClientReq />
        <ClientReq />
      </div>
    </>
  );
}
