import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const Layout = ({cartLength}) => {
  return (
    <div>
      <Header cartLength={cartLength}/>
      <Container maxWidth={'xl'}>
        <Outlet />
      </Container>
    </div>
  );
};


