import styled from "styled-components";

export const Title = styled.h1`
  color: #000;

  margin: 0 auto;

  text-align: center;

  width: 400px;
`;

export const TitleSub = styled.h6`
  color: #000;

  margin: 0 auto;

  text-align: center;
`;

export const Container = styled.div`
  background: #f1f1f1;
  width: 100%;
  padding: 15px;
`;

export const ContextCenter = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  padding: 15px;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 6px 12px;
  margin-bottom: 0;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;

  ${props =>
    props.primary &&
    `
      background: #4682b4;
      color: white;
    `}

  &:hover {
    background: #4169e1;
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  /* width: 300px; */
  margin: 0 auto;

  .react-datepicker__input-container {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  article a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid #4682b4;
    background: none;
    margin-top: 10px;
    color: #4682b4;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }
  article a:hover {
    background: #4682b4;
    color: #fff;
  }
`;
