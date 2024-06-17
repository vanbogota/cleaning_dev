import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <header className="header">
        <Image 
        src="/images/logo_company.svg" 
        alt="logo"
        width={178}
        height={42}
        priority/>
      <nav className="header__nav">
        <ul className="header__nav_item">Home</ul>
        <ul className="header__nav_item">About</ul>
        <ul className="header__nav_item">Services</ul>
        <ul className="header__nav_item">Pages</ul>
        <ul className="header__nav_item">Contact</ul>
      </nav>            
      <button className={`button button_primary ${styles.header__button}`}>Get a free quote</button>      
    </header>
    <main className={styles.main}>
      <section className="main__section" id="home">
        <div className={styles.main__home_top}>
          <div className={styles.main__home_frame}>
            <h1 className={styles.main__home_text_header}>Quality cleaning for your home</h1>
            <p className={styles.main__home_text}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <div className={styles.main__home_call}>
              <button className={`button button_primary ${styles.home__button}`}>Get a free quote</button>
              <Image
              className={styles.main__home_call_img}
              src="/images/small_phone.svg"
              alt="sp"
              width={72}
              height={72}/>
              <div>
                <p>Call us now</p>
                <h4>(414) 567 - 2109</h4>
              </div>
            </div>
          </div>
          <Image
          className={styles.main__home_top_img}
          src="/images/big_cleaner_woman_top.svg"
          alt="bcwt"
          width={720}
          height={734}
          priority/>
        </div>
        <div className={styles.main__home_bottom}>
          <h2>How our service works?</h2>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
          <div className={styles.main__home_bottom_steps}></div>
        </div>
      </section>      
      <section className="main__section" id="about"></section>
      <section className="main__section" id="services"></section>
      <section className="main__section" id="pages"></section>
      <section className="main__section" id="contact"></section>
    </main>
    <footer></footer>
    </>
  );
}
