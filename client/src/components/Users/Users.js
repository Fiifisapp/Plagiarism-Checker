import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import {
  UserContainer,
  HeaderText,
  Button,
  TableWrapper,
  THead,
  TBody,
  TH,
  TR,
  TD,
} from "./Users.Style";

const Users = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://6286d96de9494df61b2e3243.mockapi.io/CrudData`).then((response) => {
      setAPIData(response.data);
    });
  }, []);




  return (
    <div>
      <HeaderText>Users</HeaderText>
      <UserContainer className="user-container">
        <Button>add</Button>
      </UserContainer>
        
      <TableWrapper>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>name</TH>
            <TH>email address</TH>
            <TH>edit/delete</TH>
          </TR>
        </THead>
        {APIData.map((data, i) => {
          return (
            <TBody key={i}>
              <TR>
                <TD>{data.id}</TD>
                <TD>{data.name}</TD>
                <TD>{data.email}</TD>
                <TD style={{ gap: "2em", fontSize: "1em" }}>
                  <FiEdit />
                  edit
                  <AiFillDelete />
                  delete
                </TD>
              </TR>
            </TBody>
          );
        })}
      </TableWrapper>
    </div>
  );
};

export default Users;
