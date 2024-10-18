
import styled from "./../styles/contactLeft.module.css";
import Image from "next/image";

export const ContactLeft = () => {
  return (
    <div className={`${styled.container} p-6 flex flex-col relative left-[60px] top-[140px] items-start`}>
      <h1 className={styled.hText1}>Contact</h1>
      <h1 className={styled.hText2}>Get In Touch</h1>
      <div className = {styled.linecontainer}>
        <div className={styled.line}></div>
        <Image alt="mustach" src="/assets/mustach.png" height={55} width={55}></Image>
        <div className={styled.line}></div>
      </div>
      <p className={`${styled.pText} text-white`}>Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci. </p>
    </div>
  );
}