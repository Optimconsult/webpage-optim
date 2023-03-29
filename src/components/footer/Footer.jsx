import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-between max-w-[1300px] lg:mx-auto mx-6 md:mx-12 py-8 border-t-2 border-black">
      <ul className="flex  gap-4">
        <a
          href="https://www.linkedin.com/company/optim-consult/"
          target="_blank"
          className="text-2xl hover:text-[#0A66C2] transition"
        >
          {<AiOutlineLinkedin />}
        </a>
        <a
          href="https://wa.me/+573213704639"
          target="_blank"
          className="text-xl hover:text-[#25d33c] transition pt-[2.2px]"
        >
          {<BsWhatsapp />}
        </a>
      </ul>
      <ul className="flex gap-14 md:gap-0">
        <h2 className="text-sm font-medium">Optim Consult SAS 2023.</h2>
        <h2 className="text-sm font-medium md:pl-3">
          Todos los derechos reservados
        </h2>
      </ul>
    </footer>
  );
}

export default Footer;
