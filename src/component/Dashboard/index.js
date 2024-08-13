import React, { useState } from "react";
import { useEffect } from "react";
import { StyledDashboard } from "./style";
import CategoryScroller from "../../container/CategoryScroller";
import ServiceInfoCard from "../../container/ServiceInfoCard";

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryView = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <StyledDashboard className="styled-dashboard">
      <div className="fixed">
        <h1 className="service-title">Select Services</h1>
        <CategoryScroller activeCategory={activeCategory} />
      </div>

      <ServiceInfoCard onCategoryView={handleCategoryView} />
    </StyledDashboard>
  );
};

export default Dashboard;
