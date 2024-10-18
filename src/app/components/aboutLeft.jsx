import styled from "./../styles/aboutLeft.module.css"
import Image from "next/image";

export const AboutLeft = () => {
  return (
    <div className={`${styled.container}  p-4 flex flex-col items-center md:w-full w-[50%]`}>
      <h1 className={styled.hText}>
        INTRODUCTION
      </h1>

      <span className={styled.spanText}>
      BARBERZ..The Barbershop
      Since 1990
      </span>
      <Image className="mt-5 " alt="barberz mustach" width={80} height={80} src="/assets/barberz.png"></Image>

      {/* eslint-disable react/no-unescaped-entities */}
      <p className={styled.pText}>
      Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys's hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
      </p>
      <button className={styled.btnAppoinment}>MORE ABOUT US</button>
    </div>
  );
}