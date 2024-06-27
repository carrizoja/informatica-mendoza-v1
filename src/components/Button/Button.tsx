import React from 'react'

interface ButtonProps {
    text: string;
    }

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-70 transition-opacity duration-1000">
    {text}
  </button>
  )
}

export default Button