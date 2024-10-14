import Image from "next/image";
import styled from "./../styles/servicesTop.module.css"

export const ServicesTop = () => {
  return (
    <div className={`${styled.service} flex flex-col items-center mt-10 pt-12`}>
      <h1 className={styled.hText1}>Services</h1>
      <h1 className={styled.hText2}>Our Services</h1>
      <div className = {styled.linecontainer}>
        <div className={styled.line}></div>
        <Image alt="mustach" src="/assets/mustach.png" height={55} width={55}></Image>
        <div className={styled.line}></div>
      </div>
    </div>
  );
}