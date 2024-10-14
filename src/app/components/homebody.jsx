
import styled from "./../styles/homebody.module.css"

export const HomeBody = () => {
  return (
    <div className={styled.container}>
      <span className={`${styled.spanText} `}>Our Hairstyle Enhances Your Smile!!</span>
      <h1 className={styled.hText}>Our barbershop is the territory created purely for males who
        appreciate premium quality, time and flawless look.</h1>
      <button className={styled.btnAppoinment}> MAKE AN APPOINMENT</button>
    </div>
  );
}