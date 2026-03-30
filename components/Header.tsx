"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a href="#inicio">
          <h1 className="text-lg md:text-xl font-bold tracking-wider">
            <span className="text-white">ESTOFARIA</span>{" "}
            <span className="text-red-500">QUALIDADE</span>
          </h1>
        </a>
        
        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#quem-somos">Quem somos</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl hover:text-red-500 transition"
        >
          ☰
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 pb-4 flex flex-col gap-4">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
          <a href="#quem-somos" onClick={closeMenu}>Quem somos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>
      )}
    </header>
  );
}