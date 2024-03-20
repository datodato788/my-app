import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button title={"See Our Works"} url={"/portfolio"} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </main>
  );
}
