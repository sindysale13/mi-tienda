"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] text-neutral-800">
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          
          {/* Nombre de la página */}
          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">
            Sindy’s Sale
          </h1>

          {/* Menú */}
          <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-black transition">Inicio</Link>
            <Link href="/ropa" className="hover:text-black transition">Ropa</Link>
            <Link href="/cosmeticos" className="hover:text-black transition">Cosméticos</Link>
            <Link href="/carrito" className="hover:text-black transition">Carrito</Link>
            <Link href="/registro" className="hover:text-black transition font-semibold">
              Registrarse
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-[#f8f5f2] to-white">
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
          Bienvenida a
          <br />
          Sindy’s Sale
        </h2>

        <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
          Encuentra las mejores prendas y cosméticos en un solo lugar.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link href="/ropa">
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition text-sm tracking-widest uppercase">
              Ver Ropa
            </button>
          </Link>

          <Link href="/cosmeticos">
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition text-sm tracking-widest uppercase">
              Ver Cosméticos
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-10 text-center text-xs tracking-widest uppercase text-neutral-500">
        © {new Date().getFullYear()} Sindy’s Sale — Elegancia Atemporal
      </footer>
    </main>
  );
}
