const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <div className="search-shimmer"></div>
      <div data-testid="shimmer" className="flex flex-wrap justify-center">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-64 h-80 rounded-lg flex flex-col justify-between p-2 m-5 bg-slate-100 shadow-md"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
