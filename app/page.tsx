export default function Home() {
  const products = [
    { id: 1, name: "Blazer Clásico", price: 54990, category: "Ropa" },
    { id: 2, name: "Vestido Satinado", price: 47990, category: "Ropa" },
    { id: 3, name: "Set Maquillaje Premium", price: 29990, category: "Cosméticos" },
    { id: 4, name: "Perfume Luxury", price: 39990, category: "Cosméticos" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f2] text-neutral-800">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">
            Sindy’s Sale
          </h1>
          <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-black transition">Inicio</a>
            <a href="#" className="hover:text-black transition">Colección</a>
            <a href="#" className="hover:text-black transition">Cosméticos</a>
            <a href="#" className="hover:text-black transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-[#f8f5f2] to-white">
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
          Sofisticación
          <br />
          en Cada Detalle
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
          Moda femenina y cosméticos seleccionados para mujeres que buscan elegancia, presencia y estilo auténtico.
        </p>
        <button className="mt-10 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition text-sm tracking-widest uppercase">
          Descubrir colección
        </button>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="bg-white aspect-square rounded-3xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl transition">
                <span className="text-neutral-400 text-sm">Imagen producto</span>
              </div>

              <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                {product.category}
              </p>
              <h3 className="text-lg font-medium mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-700 mb-4 font-light">
                ${product.price.toLocaleString("es-CL")}
              </p>

              <button className="w-full border border-neutral-800 py-2 rounded-full text-sm tracking-widest uppercase hover:bg-neutral-800 hover:text-white transition">
                Agregar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-10 text-center text-xs tracking-widest uppercase text-neutral-500">
        © {new Date().getFullYear()} Sindy’s Sale — Elegancia Atemporal
      </footer>
    </main>
  );
}
