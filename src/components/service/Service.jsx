import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { Card } from "./Card";
import cambioClimatico from "/cambio-climatico.jpg";
import manos from "/manos.jpg";
import niños from "/niños.jpg";
import reunion from "/reunion.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const servicesData = [
  {
    image: cambioClimatico,
    title: "Adaptación y mitigación del cambio climático",
    description:
      "Medición de la huella de carbono y huella hídrica de las empresas y los negocios. Así como el diseño de medidas de control de emisiones y de mitigación.",
    id: 1,
  },
  {
    image: manos,
    title: "Operación de proyectos de cooperación internacional",
    description:
      "Evaluación del desempeño ambiental y social de las empresas, diseño y acompañamiento en la implementación de estrategias de sostenibilidad económica, ambiental y social.",
    id: 2,
  },
  {
    image: niños,
    title: "Gestión ambiental y social de proyectos productivos",
    description: `Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrodescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios.`,
    id: 3,
  },
  {
    image: reunion,
    title: "Desarrollo de políticas públicas",
    description:
      "Diseño de políticas y regulaciones sectoriales (mineras, energéticas, de hidrocarburos, agrícolas, forestales, de transporte, urbanas, entre otras) dirigidas a promover la sostenibilidad ambiental y social.",
    id: 4,
  },
];

export function Service() {
  const settings = {
    className: " slider variable-width",
    dots: true,
    dotsClass: "slick-dots",
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "-100px",
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          centerPadding: "-30px",
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "30px",
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 599,
        settings: {
          centerPadding: "80px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "45px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: "25px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="pt-32 transition duration-500 ease-in-out">
      <h1 className="text-6xl text-center lg:text-start md:text-7xl font-semibold lg:ml-20 mb-16 lg:mb-12">
        Servicios
      </h1>
      <Slider className="pb-6" {...settings}>
        {servicesData.map((service, i) => (
          <Card
            key={i}
            image={service.image}
            title={service.title}
            description={service.description}
            serviceId={service.id}
          />
        ))}
      </Slider>
    </div>
  );
}
