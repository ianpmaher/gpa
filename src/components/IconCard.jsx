const IconCard = ({ variant, description, children, className }) => {
  const baseStyle =
    "flex flex-col flex-wrap items-center justify-center transition-all duration-200 ease-out object-contain";
  const variantStyle = {
    container: "rounded-md bg-dracula-blue text-paper-text dark:bg-dev-teal dark:text-black shadow-xl p-2 ",
    darkColors:
      "bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
    lightColors:
      " bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
    text: "text-md md:text-2xl mx-auto my-0 hover:text-dracula-sub dark:hover:text-dracula-orange",
    secondary:
      " bg-slate-100 p-0 shadow-sm hover:shadow-2xl w-24 h-24 md:h-32 md:w-28 transition-all duration-500 mr-4",
  };

  return <div className={`${baseStyle} ${variantStyle[variant]} ${className}`}>{children}</div>;
};

export default IconCard;

// hover:transform hover:scale-125 transition-all duration-300 ease-in-out
