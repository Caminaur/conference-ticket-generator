import styles from "./App.module.css";
import MainForm from "./Components/MainForm";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.lines}> </div>
      <MainForm></MainForm>
      <img className={styles.circle} src="/images/pattern-circle.svg" />
      <div className={styles.pattern_1} />
      <img
        className={styles.pattern_2}
        src="/images/pattern-squiggly-line-top.svg"
      />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {" Frontend Mentor"}
        </a>
        . Coded by
        <a href="https://github.com/Caminaur/Testimonials-grid-section">
          {" Julian Caminaur."}
        </a>
      </div>
    </div>
  );
}

export default App;
