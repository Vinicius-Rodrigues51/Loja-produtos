import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} anime-left`}>
      <Head title="Ranek | Contato" description="Pagina de contato Ranek" />
      <img src={foto}></img>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>vinicius.dev@gmail.com</li>
          <li>(51) 98615-0534</li>
          <li>Rua Gomes de andradas 674</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
