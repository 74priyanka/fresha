import { StyledIntersection } from "./styles";
import { useEffect } from "react";

const Intersection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible");
        }
      });
    });
    const target = document.querySelector("#special");
    observer.observe(target);
  }, []);

  return (
    <StyledIntersection className="intersection">
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box" id="special">
        3
      </div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
    </StyledIntersection>
  );
};

export default Intersection;
