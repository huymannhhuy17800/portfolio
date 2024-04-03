import React from "react";
import styles from './Hero.module.css'

export const Hero = () => {
    return ( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Huy</h1>
            <h2 className={styles.role}>React Developer</h2>
            <h3 className={styles.description}>I'm currently  working at FPT software, my goal is to become
            full-stack developer. This web was created while I'm learning React </h3>
        </div>
            <img/>      
    </section>
    )
};