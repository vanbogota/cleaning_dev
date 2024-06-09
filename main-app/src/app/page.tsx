import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <header>
        <Image 
        src="/images/logo_company.svg" 
        alt="logo"
        width={178}
        height={42}
        priority/>
      <nav>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Pages</ul>
        <ul>Contact</ul>
      </nav>
            
      <button className={`${styles.button_head} button_primary`}>Get a free quote</button>
      
    </header>
    <main className={styles.main}>
      <section id="home">
        <div className={styles.home_top}>
          <div className={styles.home_frame}>
          <h1 className={styles.text_header}>Quality cleaning for your home</h1>
          <p className={styles.text_main}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          <div className={styles.home_call}>
            <button className={`${styles.button_home} button_primary`}>Get a free quote</button>
            <Image
            src="/images/small_phone.svg"
            alt="sp"
            width={72}
            height={72}/>
            <div>
              <p>Call us now</p>
              <h1>(414) 567 - 2109</h1>
            </div>
          </div>
          </div>
        <Image
        src="/images/big_cleaner_woman_top.svg"
        alt="bcwt"
        width={720}
        height={734}
        priority/>
        </div>
        <div className={styles.home_bottom}>

        </div>
      </section>      
      <section id="about"></section>
      <section id="services"></section>
      <section id="pages"></section>
      <section id="contact"></section>
    </main>
    <footer></footer>
    </>
  );
}
