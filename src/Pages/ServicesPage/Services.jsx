import "./services.css";
import ServicesCard from "./Subfiles/ServicesCard";
import NoticeCard from "./Subfiles/NoticeCard";
import serviceData from "./Subfiles/servicesData";
import noticeBoardData from "./Subfiles/noticeBoardData"
import { useState } from "react";

const Services = () => {



  
  const serviceList = serviceData.map(card =>
    <ServicesCard
    key={card.id}
    imgSrc={card.imgSrc}
    service={card.service}
    details={card.details}
    link={card.link}
    />
    );

  const noticeList = noticeBoardData.map(card =>
    <NoticeCard
    key={card.id}
    title = {card.title}
    description={card.description}
    link={card.link}
    />
    );


    

  return (
    <div className="services-page-container">
      {/* services section */}
      <h2 className="page-heading">Services</h2>
      <div className="card-container">{serviceList}</div>

      {/* notices section */}
      <h2 className="page-heading">Notice Board</h2>
      <div className="card-container">
        {noticeList}
        <div className="notice-card">
          <h2 style={{color:"#A1C4D4"}}>new notice</h2>
          <div className="box">
          <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>

      
      

        

    </div>
  )
}

export default Services
