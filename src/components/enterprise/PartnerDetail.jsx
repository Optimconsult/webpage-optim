export function PartnerDetail({ image, name, description }) {
  return (
    <div>
      <img
        className="w-[130px] h-[130px] md:w-[170px] md:h-[170px] bg-contain bg-center transition-all rounded-[30px] shadow-shadowPartner mx-auto"
        src={image}
        alt="partner-image"
      />
      <h1 className="text-center text-lg md:text-[26px] font-semibold mt-8">
        {name}
      </h1>
      <p className="text-xl text-justify -tracking-wider mx-6 md:w-3/4 pt-8 md:mx-auto">
        {description}
      </p>
    </div>
  );
}
