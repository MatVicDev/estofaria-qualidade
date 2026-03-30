import Section from "./Section";
import { Car, Armchair, Wrench, Sparkles } from "lucide-react";

const services = [
  {
    title: "Estofamento Completo",
    description:
      "Renovação total do interior do veículo com materiais premium",
    icon: Car,
  },
  {
    title: "Bancos em Couro",
    description:
      "Revestimento em couro com costuras personalizadas",
    icon: Armchair,
  },
  {
    title: "Reparos e Restauração",
    description:
      "Conserto de rasgos, desgastes e recuperação de estofados",
    icon: Wrench,
  },
  {
    title: "Customização",
    description:
      "Projetos exclusivos com cores e acabamentos únicos",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <Section id="servicos">
      <div className="max-w-6xl w-full">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Serviços
          </h2>
          <p className="text-zinc-400 mt-4">
            Soluções completas para transformar o interior do seu veículo
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-zinc-900/80 backdrop-blur border border-zinc-800 p-6 rounded-xl hover:border-red-600 hover:shadow-red-600/20 hover:shadow-lg hover:scale-105 transition duration-300"
              >
                {/* Ícone */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-600/20 text-red-500 mb-4 group-hover:bg-red-600 group-hover:text-white transition">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}