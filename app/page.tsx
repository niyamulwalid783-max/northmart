import Image from "next/image";

export default function Home() {
  {
  const products = [
    {
      name: 'Gaming Earbuds',
      price: '৳1290',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'RGB Light',
      price: '৳850',
      image:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Smart Watch',
      price: '৳2190',
      image:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          North<span className="text-red-500">Mart</span>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#products" className="hover:text-white transition">
            Products
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
          Shop Now
        </button>
      </header>

      <section className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-20">
        <div>
          <p className="text-red-500 font-semibold mb-3">
            Bangladesh Online Store
          </p>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            Buy Trending
            <span className="text-red-500"> Gadgets </span>
            Online
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
            NorthMart is a modern Bangladesh ecommerce platform for gadgets,
            accessories, and trending products with fast delivery and affordable
            pricing.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-bold shadow-xl">
              Explore Products
            </button>

            <button className="border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-2xl font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
            alt="Ecommerce"
            className="rounded-3xl shadow-2xl border border-zinc-800"
          />
        </div>
      </section>

      <section id="products" className="px-6 lg:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-4xl font-black">Trending Products</h3>
            <p className="text-zinc-400 mt-2">
              Best selling products for students and tech lovers.
            </p>
          </div>

          <button className="border border-zinc-700 hover:border-zinc-500 transition px-5 py-2 rounded-xl text-sm">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition duration-300 shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                <p className="text-red-500 text-xl font-bold mb-5">
                  {product.price}
                </p>

                <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-2xl font-semibold shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-20 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-4xl font-black mb-4">
            Start Selling Across Bangladesh
          </h3>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-lg">
            Launch your ecommerce business with modern technology, social media
            marketing, and fast delivery systems.
          </p>

          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-xl">
            Launch Store
          </button>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 lg:px-20 py-8 text-zinc-500 text-sm flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 NorthMart Bangladesh. All rights reserved.</p>
        <p>Built for future ecommerce entrepreneurs.</p>
      </footer>
    </div>
  );
}
}
