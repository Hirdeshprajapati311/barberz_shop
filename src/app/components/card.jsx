import Image from "next/image"
import styled from "./../styles/card.module.css"

export const Card = ({image,title, description}) => {
  return (
    <div className={`${styled.card} mt-2 p-6 mb-[100px] shadow-md text-center w-[250px]`}>
      <div className="flex justify-center mb-4">
        <Image src={image} alt={title}  width={20} height={20}></Image>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className={`${styled.btn1} text-yellow-600 font-semibold border-2 border-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-white`}>Read More</button>
    </div>


  )
}