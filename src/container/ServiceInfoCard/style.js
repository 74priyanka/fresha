import styled from "styled-components";

export const StyledServiceInfoCard = styled.div`
  // Combined styling for the category section and service info cards

  margin-left: 10%;
  display: flex;
  flex-direction: column;
  .styled-service-infoCard {
    margin-top: 14%;
  }
  .service-info-category {
    margin-bottom: 32px;
  }

  .category-name {
    margin-bottom: 16px;
    font-size: 1.5em;
    font-weight: bold;
    display: flex;
  }

  .service-info-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 88%;
    margin-bottom: 16px;
    .service-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h3 {
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }

    .service-time,
    .service-description {
      margin: 1px 0;
      font-size: 1%.2;
    }
    .service-description {
      text-align: left;
    }

    .service-time {
      color: gray;
    }

    .service-description {
      color: gray;
    }

    .service-price {
      font-weight: bold;
    }
    .add-button {
      background: #f7f7f8;
      border: none;
      border-radius: 10px;
      color: black;

      font-size: 1.5em;

      right: 16px; // Margin from the right
    }

    .add-button:hover {
      background-color: gray;
    }
  }

  .service-info-card:hover {
    background-color: #f7f7f8;
  }

  /* Mobile (Portrait) */
  @media (max-width: 320px) {
    .styled-service-infoCard {
      margin-top: 72%;
    }
  }

  @media (min-width: 321px) and (max-width: 375px) {
    .styled-service-infoCard {
      margin-top: 60%;
    }
  }
  @media (min-width: 376px) and (max-width: 424px) {
    .styled-service-infoCard {
      margin-top: 50%;
    }
  }
  @media (min-width: 425px) and (max-width: 667px) {
    .styled-service-infoCard {
      margin-top: 46%;
    }
  }
  @media (min-width: 668px) and (max-width: 768px) {
    .styled-service-infoCard {
      margin-top: 30%;
    }
  }
  /* Mobile (Landscape) and Small Tablets */
  @media (min-width: 769px) and (max-width: 1024px) {
    .styled-service-infoCard {
      margin-top: 22%;
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    .styled-service-infoCard {
      margin-top: 20%;
    }
  }

  /*   
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 24%;
    .service-info-card {
      width: 88%;
    }
  }

  
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin-top: 16%;
    .service-info-card {
      width: 88%;
    }
  }

  @media (min-width: 1441px) {
    margin-top: 12%;
    .service-info-card {
      width: 64%;
    }
  } */
`;
