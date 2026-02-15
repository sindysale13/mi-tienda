export default function Home() {
  const products = [
    { id: 1, name: "Polera Básica", price: 14990 },
    { id: 2, name: "Polerón Oversize", price: 29990 },
    { id: 3, name: "Chaqueta Urbana", price: 45990 },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Mi Marca de Vestimenta
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  ${product.price.toLocaleString("es-CL")}
                </p>
              </div>

              <button className="bg-black text-white py-2 rounded-xl hover:opacity-80 transition">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
