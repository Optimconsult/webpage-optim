import pictureContact from "/picture-contact.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export function Contact() {
  const contactData = {
    title: "Contáctanos",
    description:
      "Si deseas consultar mayor información sobre nuestros servicios o tienes alguna duda al respecto, no dudes en contactarnos.",
    phoneNumbers: ["3002093734", "3213704639"],
    email: "info@optimconsult.com",
    city: "Bogotá - Colombia",
    address: "Carrera 19 B # 84 - 31 oficina 302",
  };

  return (
    <div
      id="contact"
      className="grid lg:grid-cols-2 gap-6 pt-14 lg:pt-0 lg:px-20 md:w-[60%] lg:w-auto mx-6 md:mx-auto lg:mx-0"
    >
      <div>
        <h2 className="text-5xl md:text-7xl text-center lg:text-start font-semibold leading-[5.2rem]">
          {contactData.title}
        </h2>
        <p className="leading-5 text-justify tracking-tight md:mx-auto lg:mx-0 md:pt-2 lg:w-[88%]">
          {contactData.description}
        </p>
        <div className="flex items-center gap-12 my-10">
          <div className="text-lg bg-zinc-900 p-[9px] rounded-full text-white">
            {<FaPhoneAlt />}
          </div>
          <ul className="text-lg font-medium">
            {contactData.phoneNumbers.map((phoneNumber, i) => (
              <li key={i}>{phoneNumber}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-12">
          <div className="text-xl bg-zinc-900 p-2 rounded-full text-white">
            {<IoIosMail />}
          </div>
          <h2 className="text-lg font-medium">{contactData.email}</h2>
        </div>
        <div className="flex items-center gap-12 my-10">
          <div className="text-xl bg-zinc-900 p-2 rounded-full text-white">
            {<IoLocationOutline />}
          </div>
          <ul className="text-base md:text-lg font-medium">
            <li>{contactData.city}</li>
            <li>{contactData.address}</li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <img
          className="w-[512px] h-[345px] shadow-shadowContact object-cover rounded-[40px]"
          src={pictureContact}
          alt="picture-contact"
        />
      </div>
    </div>
  );
}
