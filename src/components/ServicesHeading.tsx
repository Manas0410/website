import { services } from "../constants";

const ServicesHeading = () => {
  return (
    <div
      className="flex justify-around mb-12 px-2  top-[15vh]  "
      style={{ position: "sticky" }}
    >
      {services.map((service, i) => (
        <div key={i} className="cursor-pointer">
          <a
            className="text-center text-text-color-4"
            href={`#${service.href}`}
          >
            {service.heading}
          </a>
          <hr className="h-[4px] mt-2 bg-[#f6f7f8]" />
        </div>
      ))}
    </div>
  );
};

export default ServicesHeading;
