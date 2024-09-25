const TechOverlay = () => {
  // const numberRef1 = useRef<HTMLDivElement>(null);
  // const count1 = useNumberAnimation(7, 10, numberRef1, 0.3);
  return (
    <div className="w-3/4 h-1/2 border-2  z-10  tech-overlay absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 right-1/2 bottom-0 max-sm:translate-x-1/2 ">
      <div className="flex justify-around items-center h-full w-full">
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-white font-thin sm:text-6xl lg:text-8xl text-3xl">
            20+
          </p>
          <p className="text-white font-thin text-sm text-center sm:text-left">
            Modern technology
          </p>
        </div>
        <span className="w-[1px] h-1/2 bg-white" />
        <div className="flex flex-col  sm:items-start items-center">
          <p className="text-white font-thin sm:text-6xl lg:text-8xl text-3xl ">
            100+
          </p>
          <p className="text-white font-thin text-sm sm:ml-4 text-center sm:text-left">
            Succesful projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechOverlay;
