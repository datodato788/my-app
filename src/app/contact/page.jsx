import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <h1 className={styles.title}>Let's Kepp in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt="contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <from className={styles.from}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} 
          placeholder="message" 
          cols="30" 
          rows="10"
          ></textarea>
          <Button title={"send"} url={"/"} />
        </from>
      </div>
    </div>



  )
}

export default Contact