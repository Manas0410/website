const ServiceBanner = () => {
  return (
    <section className="relative w-full h-[600px] servicebanner-shadow bg-gray-100 p-10 rounded-3xl overflow-hidden">
      <main className="flex flex-col gap-10 z-10 relative">
        <h4 className="text-text-color-1 sm:text-5xl font-semibold">
          Web Development
        </h4>
        <p className="text-text-color-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, inventore repudiandae. Necessitatibus nulla sint
          blanditiis veniam mollitia voluptatum possimus velit neque. Eaque,
          ducimus! Voluptatum quas ipsam ducimus sunt accusantium quod
          asperiores dolorem in, expedita corporis! Omnis quibusdam eum eos
          velit nemo sequi obcaecati quos! Molestias hic iusto dicta asperiores.
          Voluptas?
        </p>
        <button className="bg-white p-3 flex gap-3 items-center w-max rounded-lg text-text-color-2 shadow font-semibold">
          Contact for work
          <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        </button>
      </main>
      <aside className="absolute bottom-0 right-0 ">
        <img src="/assets/servicebanner2.jpg" alt="services" />
      </aside>
    </section>
  );
};

export default ServiceBanner;
