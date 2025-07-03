import minus from "../assets/minus.svg";

export default function MyItemCart() {
  return (
    <div className="bg-[#ffffff] flex justify-between items-center px-4.5 py-3.75 rounded-lg">
      <img src="/hot-dog.png" alt="" />

      <div>
        <p className="text-2xl">Item</p>

        <div className="flex items-center justify-between mt-2 gap-4">
          <span className="font-lato">R$8,00</span>

          <button
            type="button"
            className="bg-orange rounded-[10px] w-7 h-7 flex items-center justify-center"
          >
            <img src={minus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
