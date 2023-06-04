import Button from "../Common/Button";
import styles from "./Header.module.css";

const Header = ({ isLoged }) => {
  if (isLoged) {
    return <h1>Usuário logado</h1>;
  }
  return (
    <nav>
      <div className={styles.container}>
        <a
          href="https://www.instagram.com/luan_calais/"
          target="_blank"
          rel="noreferrer"
          title="Luan Calais Instagram"
          alt="Luan Calais Instagram"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luan-s-calais-186104217/"
          target="_blank"
          rel="noreferrer"
          title="Luan Calais Linkedin"
          alt="Luan Calais Linkedin"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        <Button
          label="Sign in"
          color="var(--light-color)"
          background="var(--light-slim-green)"
        />
      </div>
    </nav>
  );
};

export default Header;
