import { Link } from "react-router-dom";

export function Card({ image, title, description, serviceId }) {
  return (
    <div className="w-[260px]">
      <Link to={`/services/${serviceId}`}>
        <img
          className="h-[344px] w-full rounded-[27px] shadow-shadowService transform hover:translate-y-[6px] hover:shadow transition"
          src={image}
          alt="image-carrousel"
        />

        <h1 className="my-8 mt-14 h-14 text-[18.7px] w-full text-center font-semibold leading-tight">
          {title}
        </h1>
        <p className="text-[15.69px] text-justify w-[100%] leading-tight tracking-[-1.20px] overflow-hidden">
          {description}
        </p>
      </Link>
    </div>
  );
}
