// CategoryScroller.jsx
import React from "react";
import { StyledCategoryScroller } from "./style";
import { servicesData } from "../../data"; // Adjust the path as needed

const CategoryScroller = ({ activeCategory }) => {
  // Extract category names from servicesData
  const categories = servicesData.map((service) => service.categoryName);

  return (
    <StyledCategoryScroller>
      <ul className="scroller__list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`scroller__item ${
              activeCategory === category ? "active" : ""
            } ${category}`}
            id={category}
          >
            <a href={`#${category}`}>{category}</a>
          </li>
        ))}
      </ul>
      <button className="scroller__button">&lt;</button>
      <button className="scroller__button">&gt;</button>
    </StyledCategoryScroller>
  );
};

export default CategoryScroller;
