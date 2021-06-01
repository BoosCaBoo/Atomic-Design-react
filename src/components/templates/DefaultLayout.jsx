import { Header } from "../atoms/layout/Header";
import styled from "styled-components";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
