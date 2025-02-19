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
    </div>
  );
}

export default App;
