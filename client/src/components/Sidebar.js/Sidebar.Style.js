import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 14.5%;
    height: 60vh;
    margin-left: 2em;
    margin-top: 1em;
    border: 3px  solid #D65D2D;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
  padding: 10px;
  background: ${(props) => (props.active ? 'lightblue' : 'orange')};
  border: 2px solid purple;
  border-radius: 4px;
`;