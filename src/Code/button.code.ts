// code/button.code.ts
export const buttonCode = `
const Button = ({ label }) => {
  return (
    <button className="px-4 py-2 rounded bg-black text-white">
      {label}
    </button>
  )
}

export default Button
`