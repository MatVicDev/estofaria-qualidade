import Section from "./Section";

export default function Hero() {
  return (
    <Section id="inicio">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative text-center text-white max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Seu carro com acabamento de carro novo
        </h2>

        <p className="text-zinc-300 mb-6">
          Reforma completa de bancos, teto e interior automotivo
        </p>

        <a href="#quem-somos" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded transition">
          Solicitar orçamento
        </a>
      </div>
    </Section>
  );
}