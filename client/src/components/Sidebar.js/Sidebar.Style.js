import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 14.5%;
  height: 75vh;
  margin-left: 2em;
  margin-top: 2em;
  border: 3px solid #d65d2d;
  display: flex;
  flex-direction: column;
`;




export const Button = styled.button`
  width: 100%;
  height: 10vh;
  font-size: 1.3em;
  font-weight: bold;
  background-color: white;
  color: #d65d2d;
  border: none;

  &:hover {
    background-color: #d65d2d;
    color: white;
    cursor: pointer;
  }
`;
