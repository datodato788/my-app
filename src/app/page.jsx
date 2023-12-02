import styles from "./page.module.css";
import Image from 'next/image'
import Hero from 'public/Hero.png'

export default function home() {
 return(
  <main className={styles.container}>
<   div className={styles.item}> 
        <h1 className={styles.title}> Better design for your digital products.
        </h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from theglobal tech industry.
        </p>
       <button className={styles.button}>
       See Out Works
       </button>
       </div>
  <div className={styles.item}>
  <Image 
  src={Hero}
  alt="Hero"
  className={styles.img}

  
  />
  </div>
</main>

);
}
    