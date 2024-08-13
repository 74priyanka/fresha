import styled from "styled-components";

export const StyledCategoryScroller = styled.div`
  margin-left: 8%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 10px;

  .scroller__list {
    display: flex;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  .scroller__item {
    padding: 10px 20px;
    color: black;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
  }
  .scroller__item a {
    text-decoration: none;
    color: black;
  }

  .scroller__item.active {
    background-color: #000;
    color: #fff;
    border-radius: 20px;
  }

  .scroller__item.active a {
    color: white;
  }

  .scroller__item:hover {
    background-color: #f7f7f8;
    border-radius: 20px;
  }
  .scroller__item:hover a {
    background-color: #f7f7f8;
    color: black;
    border-radius: 20px;
  }

  /* .scroller__item.active {
    background-color: #000;
    color: #fff;
    border-radius: 20px;
  }

  .scroller__item:hover {
    background-color: #f7f7f8;
    border-radius: 20px;
  } */

  .scroller__button {
    color: #000;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 50%;
    margin: 0 5px;
    background: none;
  }

  .scroller__button:hover {
    background-color: #f7f7f8;
    border-radius: 40px;
  }
`;
