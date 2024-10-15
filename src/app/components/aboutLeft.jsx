import styled from "./../styles/aboutLeft.module.css"
import Image from "next/image";

export const AboutLeft = () => {
  return (
    <div className={`${styled.container} p-4 flex flex-col items-center w-[50%]`}>
      <h1 className={styled.hText}>
        INTRODUCTION
      </h1>

      <span className={styled.spanText}>
      BARBERZ..The Barbershop
      Since 1990
      </span>
      <Image className="mt-5" alt="barberz mustach" width={80} height={80} src="/assets/barberz.png"></Image>

      <p className={styled.pText}>
      Barber is a person whose occupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
      </p>
      <button className={styled.btnAppoinment}>MORE ABOUT US</button>
    </div>
  );
}