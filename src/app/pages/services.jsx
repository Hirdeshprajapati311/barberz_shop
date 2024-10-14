import { ServicesTop } from "../components/servicesTop";
import { serviceData } from "../utils/serviceData";
import {Card} from "../components/card"


export const Services = () => {
  return (
    <>
      <ServicesTop />
      <div className="bg-[#FDF8E9] flex flex-wrap justify-center gap-8">
        {
          serviceData.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          image={service.image}
          description={service.description}
        />
          )
        )}
      </div>
    </>
    
  );
}