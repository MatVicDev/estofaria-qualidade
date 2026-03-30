import Section from "./Section";

export default function About() {
  return (
    <Section id="quem-somos">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem somos
          </h2>

          <p className="text-zinc-400 mb-6">
            Somos especialistas em estofaria automotiva, oferecendo soluções
            completas para reforma e personalização de interiores de veículos.
            Trabalhamos com materiais de alta qualidade e acabamento profissional,
            garantindo conforto, durabilidade e um visual impecável.
          </p>

          <p className="text-zinc-400 mb-8">
            Nosso compromisso é entregar um serviço de excelência, sempre
            respeitando os prazos e atendendo cada cliente de forma personalizada.
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-red-500">+10 anos</h3>
              <p className="text-zinc-400 text-sm">de experiência</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">+500</h3>
              <p className="text-zinc-400 text-sm">carros atendidos</p>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative">
          <img
            src="/fachada.jpg"
            className="rounded-xl object-cover w-full h-[400px]"
          />

          {/* Overlay leve */}
          <div className="absolute inset-0 bg-black/30 rounded-xl" />
        </div>
      </div>
    </Section>
  );
}