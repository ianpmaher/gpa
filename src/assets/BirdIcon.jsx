const BirdIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {/* Bird's body */}
      <path d="M32 10 C25 15, 15 20, 10 35 C20 35, 35 30, 40 50 C50 40, 60 30, 55 20 C50 10, 40 10, 32 10 Z" fill="#e0e0e0" />
      
      {/* Bird's wing */}
      <path d="M30 25 C35 28, 40 30, 35 40 C30 35, 28 30, 30 25 Z" fill="#bdbdbd" />
      
      {/* Bird's beak */}
      <path d="M55 20 L60 23 L55 26 Z" fill="#ffcc00" />
      
      {/* Bird's eye */}
      <circle cx="45" cy="18" r="2" fill="black" />
    </svg>
  );
};

export default BirdIcon;
