import React from "react";
import Link from "next/link";
import Header from "./Header";

const Layout = props => {
  return (
    <>
      <Header />

      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
      </nav>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
