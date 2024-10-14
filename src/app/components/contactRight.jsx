import styled from "./../styles/contactRight.module.css";
export const ContactRight = () => {

  return (
    <div className="container w-[40%] flex flex-col items-center py-6 bg-[#151515]/80">
      <h1 className={`${styled.hText}`}>Make An Appointment</h1>
      <p className={`${styled.pText}`}>Barber is a person whose occupation is mainly to cut dress groom</p>

      <div className={styled.input1}>
        <input className={styled.inputIn} type="text" placeholder="Name" />
        <input className={styled.inputIn} type="text" placeholder="Email" />
        <input className={styled.inputIn} type="text" placeholder="Phone" />
        <input className={styled.inputIn} type="text" placeholder="Time" />
        <input className={styled.inputIn} type="text" placeholder="Services" />
        <input className={styled.inputIn} type="text" placeholder="Choose Barber" />
        
      </div>
      <button className={styled.btnAppoinment}> MAKE AN APPOINMENT</button>
    </div>
  );
}