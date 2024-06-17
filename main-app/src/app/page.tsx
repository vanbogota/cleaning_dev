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
        <ul className="header__nav_item"><a href="#home">Home</a></ul>
        <ul className="header__nav_item"><a href="#about">About</a></ul>
        <ul className="header__nav_item"><a href="#services">Services</a></ul>
        <ul className="header__nav_item"><a href="#pages">Pages</a></ul>
        <ul className="header__nav_item"><a href="#contact">Contact</a></ul>
      </nav>            
      <button className={`button button_primary ${styles.header__button}`}>Get a quote</button>      
    </header>
    <main className={styles.main}>
      <section id="home">
        <div className={styles.main__home_top}>
          <div className={styles.main__home_frame}>
            <h1 className={styles.main__home_text_header}>Quality cleaning for your home</h1>
            <p className={`text_content ${styles.main__home_text}`}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <div className={styles.main__home_call}>
              <button className={`button button_primary ${styles.main__button}`}>Get a quote</button>              
              <Image
              className={styles.main__home_call_img}                
              src="/images/small_phone.svg"
              alt="sp"
              width={72}
              height={72}/>
              <div className={styles.main__home_call_frame}>
                <p className={styles.main__home_call_text}>CALL US NOW</p>
                <h3 className={styles.main__home_call_number}>(414) 567 - 2109</h3>
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
      </section>
      <section className="main__section">
        <div className={styles.main__home_bottom}>
          <h2 className={styles.main__home_bottom_text_header}>How our service works?</h2>
          <p className={`text_content ${styles.main__home_bottom_text}`}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
          <div className={styles.main__home_bottom_steps}>
            <div className={styles.main__home_bottom_step}>
              <Image
              className={styles.main__home_bottom_step_img}
              src={"/images/main_schedule.svg"}
              alt="ms"
              width={240}
              height={240}              
              />
              <h3 className={styles.main__home_bottom_step_text_header}>1. Schedule online</h3>
              <p className={`text_content ${styles.main__home_bottom_step_text}`}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className={styles.main__home_bottom_step}>
              <Image
              className={styles.main__home_bottom_step_img}
              src={"/images/main_paycards.svg"}
              alt="ms"
              width={240}
              height={240}              
              />
              <h3 className={styles.main__home_bottom_step_text_header}>2. Pay online easily</h3>
              <p className={`text_content ${styles.main__home_bottom_step_text}`}>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </div>
            <div className={styles.main__home_bottom_step}>
              <Image
              className={styles.main__home_bottom_step_img}
              src={"/images/main_vacuumcleaner.svg"}
              alt="ms"
              width={240}
              height={240}              
              />
              <h3 className={styles.main__home_bottom_step_text_header}>3. Get your house cleaned</h3>
              <p className={`text_content ${styles.main__home_bottom_step_text}`}>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </div>
          </div>
          <div className={styles.main__home_bottom_buttons}>
            <button className={`button button_primary ${styles.main__button}`}>Get a quote</button>
            <button className={`button button_secondary ${styles.main__button}`}>Explore services</button>
          </div>
        </div>
      </section>
      <hr className="main__hr"/>      
      <section className="main__section" id="about"></section>
      <section className="main__section" id="services"></section>
      <section className="main__section" id="pages"></section>
      <section className="main__section" id="contact"></section>
    </main>
    <footer></footer>
    </>
  );
}
