// src/components/admin/ItemCard.tsx
export default function ItemCard({ item }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={item.image} alt={item.name} className="h-20 mx-auto" />
      <p className="text-center font-bold">{item.name}</p>
      <p className="text-center text-sm">R$ {item.price}</p>
      <div className="flex justify-around mt-2">
        <button className="text-blue-600">Editar</button>
        <button className="text-red-600">Excluir</button>
      </div>
    </div>
  );
}
