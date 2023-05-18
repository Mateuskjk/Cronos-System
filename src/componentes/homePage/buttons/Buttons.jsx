import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import styles from "../../styles.module.css";
//import FormScreen from "../../forms/forms";

function ButtonsNav() {
  const [cardContent, setCardContent] = useState("");

  const criarCartao = () => {
    // Criar o elemento de cartão
    const cartao = document.createElement("div");
    cartao.className = "cartao"; // Adicione uma classe para estilização no CSS

    // Criar o conteúdo do cartão
    const titulo = document.createElement("h4");
    titulo.textContent = cardContent;
    const conteudo = document.createElement("p");
    conteudo.textContent = cardContent;

    // Adicionar o conteúdo ao cartão
    cartao.appendChild(titulo);
    cartao.appendChild(conteudo);

    // Adicionar o cartão ao documento
    const container = document.querySelector("componentes"); // Altere esta linha
    container.appendChild(cartao);
  };

  const handleInputChange = (event) => {
    setCardContent(event.target.value);
  };

  return (
    <>
      <nav className={styles.nav}>
      <label>
          <h5>Buscar</h5>
        </label>

        <input
          type="text"
          className={styles.searchBar}
          placeholder="Buscar Atividade"
          onChange={handleInputChange}
        />
        <CiSearch className={styles.icon} />

        <button className={styles.Btn} onClick={criarCartao}>
          <p>+ Criar Atividade</p>
        </button>

        <a href="" className={styles.link}>
          <div className={styles.filterIcon}>
            <FiFilter />
          </div>
          <p>Filtros</p>
        </a>

        <button className={styles.login}>
          <h5>_Mateuskjkjk</h5>
          <div className={styles.userIcon}>
            <BiUser />
          </div>
        </button>
      </nav>
      {/* <div className="componentes">
        <FormScreen />
      </div> */}
    </>
  );
}

export default ButtonsNav;

