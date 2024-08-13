import React, { useEffect } from "react";
import { StyledServiceInfoCard } from "./style";
import { servicesData } from "../../data"; // Adjust the path as needed

const ServiceInfoCard = ({ onCategoryView }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onCategoryView(entry.target.id);
          }
        });
      },
      { threshold: 1.0 }
    );

    // Select all category sections
    const categorySections = document.querySelectorAll(
      ".service-info-category"
    );
    categorySections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      categorySections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [onCategoryView]);

  return (
    <StyledServiceInfoCard>
      <div className="styled-service-infoCard">
        {servicesData.map((category, index) => (
          <div
            key={index}
            className="service-info-category"
            id={category.categoryName}
          >
            <h2 className="category-name">{category.categoryName}</h2>
            <div className="service-list">
              {category.items.map((service, index) => (
                <div key={index} className="service-info-card">
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p className="service-time">{service.time}</p>
                    <p className="service-description">{service.description}</p>
                    <p className="service-price">{service.price}</p>
                  </div>
                  <div className="service-info-button">
                    <button className="add-button">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledServiceInfoCard>
  );
};

export default ServiceInfoCard;
