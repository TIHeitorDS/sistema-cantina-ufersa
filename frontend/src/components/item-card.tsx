export default function ItemCard({
  addItemToCart,
}: {
  addItemToCart: () => void;
}) {
  return (
    <div className="bg-[#fff] w-fit shadow rounded-[23px] py-[15px]">
      <div>
        <img
          src="/hot-dog.png"
          alt="imagem do cachorro-quente"
          className="w-24 h-24 mx-auto"
        />
      </div>

      <div className="flex flex-col justify-between items-start mt-4 px-3">
        <div>
          <p>Cachorro-quente</p>
        </div>

        <div className="flex justify-between items-center w-full mt-2">
          <p className="font-lato text-gray">R$ 8,00</p>

          <button
            type="button"
            className="bg-orange flex justify-center items-center w-7 h-7 rounded-[10px]"
            onClick={addItemToCart}
          >
            <img src="/plus.svg" alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
