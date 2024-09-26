type ServiceBannerProps = {
  heading: string;
  description: string;
  imgSrc: string;
};

const ServiceBanner = ({
  heading,
  description,
  imgSrc,
}: ServiceBannerProps) => {
  return (
    <section className="relative w-full h-[600px] servicebanner-shadow bg-gray-100 p-10 rounded-3xl overflow-hidden">
      <main className="flex flex-col sm:gap-10 gap-2 z-10 relative max-w-[500px]">
        <h4 className="text-text-color-1 sm:text-5xl font-semibold">
          {heading}
        </h4>
        <p className="text-text-color-3 sm:text-sm text-[12.5px]">
          {description}
        </p>
        <a
          href="#contact"
          className="bg-white p-3 flex gap-3 items-center w-max rounded-lg text-text-color-2 shadow font-semibold"
        >
          Contact for work
          <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        </a>
      </main>
      <aside className="absolute bottom-8 right-8 service-img-size">
        <img src={imgSrc} alt="services" />
      </aside>
    </section>
  );
};

export default ServiceBanner;
