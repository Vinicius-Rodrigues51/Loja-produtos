import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setError("Erro");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  if (loading) return <div className={styles.loader}>{""}</div>;
  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} anime-left`}>
      <Head title="Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src}></img>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
