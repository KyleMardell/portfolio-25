import styles from "./page.module.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Projects />
    </main>
  );
}
