import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export function Project({ image, name, description, projectId }) {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ maxDeviceWidth: 1024 });

  const handleClick = () => {
    if (isDesktop) {
      navigate(`/projects`);
    }
  };
  return (
    <div onClick={handleClick}>
      <Link to={`/projects/${projectId}`}>
        <img
          className="w-[130px] h-[130px] md:w-[170px] md:h-[170px] bg-contain hover:translate-y-2 hover:shadow object-cover transition-all lg:cursor-pointer lg:grayscale lg:hover:grayscale-0 rounded-[30px] shadow-shadowPartner mx-auto"
          src={image}
          alt="partner-image"
        />
        <h1 className="text-center text-lg md:text-3xl lg:text-sm md:h-[60px] lg:cursor-pointer font-semibold my-8 lg:mt-6">
          {name}
        </h1>
      </Link>
      <p className="text-xl lg:hidden text-justify -tracking-wider mx-6 md:w-3/4 md:mx-auto">
        {description}
      </p>
    </div>
  );
}
