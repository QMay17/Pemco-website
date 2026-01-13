import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
