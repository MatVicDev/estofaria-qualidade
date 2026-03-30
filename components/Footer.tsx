export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-lg">
            Estofaria Qualidade
          </h2>
          <p className="text-sm">
            Estofaria automotiva com acabamento profissional
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:text-white transition">
            Início
          </a>
          <a href="#servicos" className="hover:text-white transition">
            Serviços
          </a>
          <a href="#portfolio" className="hover:text-white transition">
            Portfólio
          </a>
          <a href="#contato" className="hover:text-white transition">
            Contato
          </a>
        </div>

        {/* Crédito (VOCÊ) */}
        <div className="text-sm text-center md:text-right">
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/MatVicDev"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Matheus Victor
            </a>
          </p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="text-center text-xs text-zinc-500 pb-4">
        © {new Date().getFullYear()} Estofaria Qualidade. Todos os direitos reservados.
      </div>
    </footer>
  );
}