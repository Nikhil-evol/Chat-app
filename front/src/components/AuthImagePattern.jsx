const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-start justify-center bg-base-200 p-12 mt-5">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60 mb-8">{subtitle}</p>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-primary/10 ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;