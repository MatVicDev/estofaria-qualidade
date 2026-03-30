import Section from "./Section";

const portfolio = [
  {
    before: "/bancos_traseiro.jpg",
    after: "/bancos_traseiro.jpg",
  },
  {
    before: "/bancos_traseiro.jpg",
    after: "/bancos_traseiro.jpg",
  },
  {
    before: "/bancos_traseiro.jpg",
    after: "/bancos_traseiro.jpg",
  },
  {
    before: "/bancos_traseiro.jpg",
    after: "/bancos_traseiro.jpg",
  },
];

const gallery = [
  "/bancos_traseiro.jpg",
  "/bancos_traseiro.jpg",
  "/bancos_traseiro.jpg",
];

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="max-w-6xl w-full">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Trabalhos
          </h2>
          <p className="text-zinc-400 mt-4">
            Veja a transformação dos veículos atendidos
          </p>
        </div>

        {/* 🔥 Antes / Depois (destaque) */}
        <div className="grid gap-10 md:grid-cols-2 mb-16">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:scale-105 hover:shadow-red-600/20 hover:shadow-lg transition duration-300"
            >
              <div className="grid grid-cols-2">
                {/* Antes */}
                <div className="relative">
                  <img
                    src={item.before}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    ANTES
                  </span>
                </div>

                {/* Depois */}
                <div className="relative">
                  <img
                    src={item.after}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    DEPOIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🖼️ Galeria de resultados */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-zinc-800"
            >
              <img
                src={img}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}