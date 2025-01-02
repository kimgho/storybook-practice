interface ButtonProps2 {
  size: string;
  backgroundColor: string;
  label: string;
  onClick: () => void;
}

export const Button2 = ({
  size = "w-auto h-auto",
  backgroundColor = "blue-500",
  label,
  ...props
}: ButtonProps2) => {
  return (
    <button
      type="button"
      className={`bg-${backgroundColor} text-xl ${size} text-white`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button2;
