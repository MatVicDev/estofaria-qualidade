import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511000000000"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp size={24}/>
    </a>
  );
}