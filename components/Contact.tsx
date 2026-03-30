"use client";

import { useState } from "react";
import Section from "./Section";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function formatPhone(value: string) {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }

  function sanitize(text: string) {
    return text.replace(/<[^>]*>?/gm, "").trim();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleanName = sanitize(name);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);
    const onlyNumbers = phone.replace(/\D/g, "");

    if (!cleanName || !cleanPhone || !cleanMessage) {
      alert("Preencha todos os campos.");
      return;
    }

    if (cleanName.length < 3) {
      alert("Nome muito curto.");
      return;
    }

    if (cleanMessage.length < 10) {
      alert("A descrição deve ter pelo menos 10 caracteres.");
      return;
    }

    if (onlyNumbers.length < 10) {
      alert("Telefone inválido.");
      return;
    }

    const text = `Olá! Vim pelo site e gostaria de um orçamento
    Nome: ${cleanName}
    Telefone: ${cleanPhone}
    
    Serviço solicitado:
    ${cleanMessage}`;

    const url = `https://wa.me/5511000000000?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <Section id="contato">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Entre em contato
          </h2>

          <p className="text-zinc-400 mb-8">
            Solicite um orçamento sem compromisso. Atendemos com rapidez e qualidade.
          </p>

          <div className="space-y-4 text-zinc-300">
            <p className="flex items-center gap-2">
              <Phone size={18} /> (42) 99999-9999
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={18} /> Curitiba - PR
            </p>

            <p className="flex items-center gap-2">
              <Clock size={18} /> Seg a Sex: 08h às 18h
            </p>
          </div>

          <div className="mt-8">
            <p className="text-zinc-400 mb-4">Acompanhe nosso trabalho:</p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/meu_instagram"
                target="_blank"
                className="bg-zinc-800 p-4 rounded-full hover:bg-red-600 hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/5511000000000?text=Olá,%20gostaria%20de%20um%20orçamento!"
            target="_blank"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded transition w-full md:w-auto text-center"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Formulário */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              className="bg-zinc-800 border border-zinc-700 p-3 rounded text-white"
            />

            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              maxLength={20}
              className="bg-zinc-800 border border-zinc-700 p-3 rounded text-white"
            />

            <textarea
              placeholder="Descreva o serviço desejado"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={300}
              className="bg-zinc-800 border border-zinc-700 p-3 rounded text-white h-32"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 p-3 rounded transition"
            >
              Solicitar orçamento
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}