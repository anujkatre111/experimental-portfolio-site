// Crafts/Button.tsx
type ButtonProps = {
    label: string
  }
  
  const Button = ({ label }: ButtonProps) => {
    return (
      <button className="px-4 py-2 rounded bg-black text-white">
        {label}
      </button>
    )
  }
  
  export default Button