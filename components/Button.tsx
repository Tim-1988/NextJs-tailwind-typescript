import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    
}

const Button = ({type, title, icon}: ButtonProps) => {
  return (
    <button className="bg-green-600 px-8 py-4 text-white transition-all hover:bg-blue-600 flex items-center justify-center gap-3 rounded-full border" type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="text-lg hover:cursor-pointer">{title}</label>
    </button>
  )
}

export default Button