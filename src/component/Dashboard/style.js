import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0px 0px;
    background-color: #fff;
    z-index: 1000;
    font-size: 12px;
    border-bottom: 1px solid #f7f7f8;
  }
  .service-title {
    display: flex;
    border-bottom: 1px solid #f7f7f8;
    align-items: flex-start;
    padding: 24px;
  }
`;
