import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/123"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Image"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nemo illum sit aliquid nostrum. Enim omnis cumque temporibus, quis
            vitae voluptatum mollitia dolorum cum quaerat! Nemo earum tempora
            laboriosam, et officiis dolorum nihil. Dolorum, quasi nostrum!
            Deleniti architecto porro repellendus asperiores quae unde, repellat
            obcaecati officiis et architecto autem debitis itaque expedita
            officia unde sequi distinctio eum dolorem nisi, illo laboriosam!
            pariatur porro asperiores, eos veritatis.
          </p>
        </div>
      </Link>
      <Link href={"/blog/skjhasdkj"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Image"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nemo illum sit aliquid nostrum. Enim omnis cumque temporibus, quis
            vitae voluptatum mollitia dolorum cum quaerat! Nemo earum tempora
            laboriosam, et officiis dolorum nihil. Dolorum, quasi nostrum!
            Deleniti architecto porro repellendus asperiores quae unde, repellat
            obcaecati officiis et architecto autem debitis itaque expedita
            officia unde sequi distinctio eum dolorem nisi, illo laboriosam!
            pariatur porro asperiores, eos veritatis.
          </p>
        </div>
      </Link>
      <Link href={"/blog/213289619"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Image"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nemo illum sit aliquid nostrum. Enim omnis cumque temporibus, quis
            vitae voluptatum mollitia dolorum cum quaerat! Nemo earum tempora
            laboriosam, et officiis dolorum nihil. Dolorum, quasi nostrum!
            Deleniti architecto porro repellendus asperiores quae unde, repellat
            obcaecati officiis et architecto autem debitis itaque expedita
            officia unde sequi distinctio eum dolorem nisi, illo laboriosam!
            pariatur porro asperiores, eos veritatis.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;