"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useRef } from "react";

const telNumber = "+358 45 893-50-05";
const eMail = "notos.oy@gmail.com";
const adress = "Marjaniementie 10 B, 00930, Helsinki"

export default function Home() {


  const refToContact = useRef<HTMLElement>(null)

  const scrollToSection = (element: React.RefObject<HTMLElement>) => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="header">
        <Image
          src={"./images/logo_company.svg"}
          alt="logo"
          width={178}
          height={42}
          priority />
        <nav className="header__nav">
          <ul className="header__nav_item"><a href="#home_top">Home</a></ul>
          <ul className="header__nav_item"><a href="#home_bottom">About</a></ul>
          <ul className="header__nav_item"><a href="#services">Services</a></ul>
          <ul className="header__nav_item"><a href="#contact">Contact</a></ul>
        </nav>
        <button
          className={`button button_primary ${styles.header__button}`}
          onClick={() => scrollToSection(refToContact)}>
          Get a quote
        </button>
      </header>
      <main className={styles.main}>
        <section id="home_top">
          <div className={styles.main__home_top}>
            <div className={styles.main__home_frame}>
              <h1 className={styles.main__home_title}>Quality cleaning for your home</h1>
              <p className={`text text_size_m ${styles.main__home_text}`} ><span style={{color: "red"}}>We need to write some text here:</span> Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
              <div className={styles.main__home_call}>
                <button
                  className={`button button_primary ${styles.main__button}`}
                  onClick={() => scrollToSection(refToContact)}>
                  Get a quote
                </button>
                <div className={styles.call_us_now}>
                  <Image
                    className={styles.call_us_now__img}
                    src={"./images/small_phone.svg"}
                    alt="sp"
                    width={72}
                    height={72} />
                  <div className={styles.call_us_now__frame}>
                    <p className={styles.call_us_now__text}>CALL US NOW</p>
                    <p className={styles.call_us_now__number}>{telNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className={styles.main__home_top_img}
              src={"./images/big_cleaner_woman_top.svg"}
              alt="bcwt"
              width={720}
              height={734}
              priority />
          </div>
        </section>
        <section className="main__section" id="home_bottom">
          <div className={styles.main__home_bottom}>
            <h3 className={styles.main__home_bottom_title}>How our service works?</h3>
            <p className={`text text_size_m ${styles.main__home_bottom_text}`}><span style={{color: "red"}}>We need to write some text here:</span>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            <div className={styles.main__home_bottom_steps}>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_schedule.svg"}
                  alt="ms"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>1. Schedule online</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}><span style={{color: "red"}}>We need to write some text here:</span>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
              </div>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_paycards.svg"}
                  alt="ms"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>2. Pay online easily</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}><span style={{color: "red"}}>We need to write some text here:</span>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
              </div>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_vacuumcleaner.svg"}
                  alt="ms"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>3. Get your house cleaned</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}><span style={{color: "red"}}>We need to write some text here:</span>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
              </div>
            </div>
            <div className={styles.main__home_bottom_buttons}>
              <button
                className={`button button_primary ${styles.main__button}`}
                onClick={() => scrollToSection(refToContact)}>
                Get a quote
              </button>
              <button className={`button button_secondary ${styles.main__button}`}>Explore services</button>
            </div>
          </div>
        </section>
        <hr className="main__hr" />
        {/* <section className={`main__section ${styles.main__about}`} id="about">
          <h3 className={styles.main__about_title}>Our cleaning services have no comparison</h3>
          <p className={`text text_size_m ${styles.main__about_text}`}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
          <div className={styles.main__about_collection}>
            <div className={styles.main__about_collection_item}>
              <div className={styles.call_us_now}>
                <Image
                  className={styles.call_us_now__img}
                  src="./images/small_heart.svg"
                  alt="sh"
                  width={72}
                  height={72} />
                <div className={styles.call_us_now__frame}>
                  <p className={styles.call_us_now__text}>CLIENTS</p>
                  <p className={styles.call_us_now__number}>30+</p>
                </div>
              </div>
            </div>
            <div className={styles.main__about_collection_item}>
              <div className={styles.call_us_now}>
                <Image
                  className={styles.call_us_now__img}
                  src="./images/small_done.svg"
                  alt="sd"
                  width={72}
                  height={72} />
                <div className={styles.call_us_now__frame}>
                  <p className={styles.call_us_now__text}>JOBS DONE</p>
                  <p className={styles.call_us_now__number}>1000+</p>
                </div>
              </div>
            </div>
            <div className={styles.main__about_collection_item}>
              <div className={styles.call_us_now}>
                <Image
                  className={styles.call_us_now__img}
                  src="./images/small_employee.svg"
                  alt="se"
                  width={72}
                  height={72} />
                <div className={styles.call_us_now__frame}>
                  <p className={styles.call_us_now__text}>EMPLOYEES</p>
                  <p className={styles.call_us_now__number}>3+</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={styles.main__about_video}
            src={"./images/video.png"}
            alt="video"
            width={1012}
            height={570} />
        </section> */}
        <hr className="main__hr" />
        <section className="main__section" id="services">
          <div className={styles.main__services_heading}>
            <h3 className={styles.main__services_heading_title}>Take a look at our professional services</h3>
            <button className={`button button_secondary ${styles.main__button}`}>Explore services</button>
          </div>
          <div className={styles.main__services_cards}>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_house.svg"}
                alt="mh"
                width={220}
                height={190}
              />
              <h5 className={styles.main__services_card_title}>House cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}><span style={{color: "red"}}>We could to write some text here:</span> Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_office.svg"}
                alt="mo"
                width={220}
                height={224}
              />
              <h5 className={styles.main__services_card_title}>Office cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}><span style={{color: "red"}}>We could to write some text here:</span> Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_industrial.svg"}
                alt="mi"
                width={250}
                height={220}
              />
              <h5 className={styles.main__services_card_title}>Industrial cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}><span style={{color: "red"}}>We could to write some text here:</span> Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
          <div className={styles.main__services_covid}>
            <Image
              className={styles.main__services_covid_img}
              src={"./images/big_cleaner_woman_center.svg"}
              alt="bcwc"
              width={518}
              height={676}
              priority
            />
            <div className={styles.main__services_covid_content}>
              <p className={styles.main__services_covid_title_mini}>COVID-19 SANITIZATION</p>
              <h3 className={styles.main__services_covid_title}
                style={{ color: "white" }}
              >
                We follow guidelines to keep you safe from the COVID-19 virus
              </h3>
              <p className={`text text_size_m ${styles.main__services_covid_text}`}
                style={{ color: "white" }}
              >
                <span style={{color: "red"}}>We could to write some text here:</span> Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
              </p>
              <div className={styles.main__services_covid_call}>
                <button
                  className={`button button_primary ${styles.main__button}`}
                  onClick={() => scrollToSection(refToContact)}>
                  Get a quote
                </button>
                <div className={styles.call_us_now}>
                  <Image
                    className={styles.call_us_now__img}
                    src={"./images/small_phone.svg"}
                    alt="sp"
                    width={72}
                    height={72} />
                  <div className={styles.call_us_now__frame}>
                    <p className={styles.call_us_now__text} style={{ color: "white" }}>CALL US NOW</p>
                    <p className={styles.call_us_now__number} style={{ color: "white" }}>{telNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main__services_description}>
            <Image
              src={"./images/big_house.svg"}
              alt="bh"
              width={640}
              height={680}
            />
            <div className={styles.main__services_description_content}>
              <h3 className={styles.main__services_description_title}>We cover all areas of your home or office</h3>
              <p className={`text text_size_s ${styles.main__services_description_text}`}>
              <span style={{color: "red"}}>We could to write some text here:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className={styles.main__services_areas}>
                <ul className={styles.main__services_areas_list}>
                  <li>Bathrooms</li>
                  <li>Kitchens</li>
                  <li>Living Rooms</li>
                  <li>Carpets</li>
                  <li>Bedrooms</li>
                  <li>Offices</li>
                  <li>Businesses</li>
                  <li>Windows</li>
                </ul>
              </div>
              <button
                className={`button button_primary ${styles.main__button}`}
                onClick={() => scrollToSection(refToContact)}>
                Get a quote
              </button>
            </div>
          </div>
          <div className={styles.main__services_differencies}>
            <div className={styles.main__services_differencies_content}>
              <h3 className={styles.main__services_differencies_title}>What makes us different?</h3>
              <p className={`text text_size_s ${styles.main__services_differencies_text}`}><span style={{color: "red"}}>We could to write some text here:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <p className={`text text_size_s ${styles.main__services_differencies_text}`}>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque laudantiu sed ut.</p>
              <ul className={styles.main__services_differencies_pluses}>
                <li>
                  <h2>10<span className="span_color_blue">+</span></h2>
                  <p className={styles.p__differencies_pluses}>Years</p>
                </li>
                <li>
                  <h2>30<span className="span_color_blue">+</span></h2>
                  <p className={styles.p__differencies_pluses}>Clients</p>
                </li>
                <li>
                  <h2>1000<span className="span_color_blue">+</span></h2>
                  <p className={styles.p__differencies_pluses}>Jobs done</p>
                </li>
              </ul>
              <button
                className={`button button_primary ${styles.main__button}`}
                onClick={() => scrollToSection(refToContact)}>
                Get a quote
              </button>
            </div>
            <Image
              src={"./images/big_cleaner_man.svg"}
              alt="bcm"
              width={686}
              height={589}
            />
          </div>
        </section>
        <section
          className={`main__section container ${styles.main__section_contact}`}
          id="contact"
          ref={refToContact}
        >
          <div className={styles.main__contact_content}>
            <h3 className={styles.main__contact_title}>Request a free cleaning quote today</h3>
            <p className={`text text_size_m ${styles.main__contact_text}`}><span style={{color: "red"}}>We could to write some text here:</span> In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <div className={styles.call_us_now} style={{ marginLeft: 0 }}>
              <Image
                className={styles.call_us_now__img}
                src={"./images/small_phone.svg"}
                alt="sp"
                width={72}
                height={72} />
              <div className={styles.call_us_now__frame}>
                <p className={styles.call_us_now__text}>CALL US NOW</p>
                <p className={styles.call_us_now__number}>{telNumber}</p>
              </div>
            </div>
            <hr className={styles.contact__hr} />
            <h4 className={styles.main__contact_title}>Not convinced yet?</h4>
            <p className={`text text_size_m ${styles.main__contact_text}`}><span style={{color: "red"}}>We could to write some text here:</span> Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
          </div>
          <form action="/" className={styles.orderForm}>
            <div className={styles.orderForm__group}>
              <label htmlFor="name" className={styles.orderForm__label}>Full name</label>
              <input type="text" name="name" id="name" className={styles.orderForm__input} />
            </div>
            <div className={styles.orderForm__group}>
              <label htmlFor="address" className={styles.orderForm__label}>Address</label>
              <input type="text" name="address" id="address" className={styles.orderForm__input} />
            </div>
            <div className={styles.orderForm__group}>
              <label htmlFor="service" className={styles.orderForm__label}>Requested service</label>
              <input type="text" name="service" id="service" className={styles.orderForm__input} />
            </div>
            <div className={styles.orderForm__group}>
              <label htmlFor="phone" className={styles.orderForm__label}>Phone number</label>
              <input type="tel" name="phone" id="phone" className={styles.orderForm__input} />
            </div>
            <div className={styles.orderForm__group}>
              <label htmlFor="email" className={styles.orderForm__label}>Email</label>
              <input type="email" name="email" id="email" className={styles.orderForm__input} />
            </div>
            <div className={styles.orderForm__group}>
              <label htmlFor="date" className={styles.orderForm__label}>Day of service</label>
              <input
                type="date"
                name="date"
                id="date"
                className={styles.orderForm__input}
              />
            </div>
            <div className={`${styles.orderForm__group} ${styles.orderForm__textarea}`}>
              <label htmlFor="note" className={styles.orderForm__label}>Add a note</label>
              <textarea
                name="note"
                id="note"
                maxLength={200}
                className={`${styles.orderForm__input} ${styles.orderForm__textarea}`}
              />
            </div>
            <button type="submit" className={`button button_primary ${styles.main__button}`}>Submit message</button>
          </form>
        </section>
      </main>
      <footer className={`footer`}>
        <div className={`container ${styles.footer__container} ${styles.footer__container_top}`}>
          <div className={styles.container__block}>
            <h4 className={styles.container__block__title}>
              Quality cleaning for your home
            </h4>
            <p className={`text text_size_s`}><span style={{color: "red"}}>We could to write some text here:</span> Just try once and you will see it.</p>
          </div>
          <div className={styles.container__block}>
            <h6 className={styles.container__block__title}>
              Contact us
            </h6>
            <p className={`text text_size_s`}>{adress}</p>
            <p className={`text text_size_s`}>{telNumber}</p>
            <p className={`text text_size_s`}>{eMail}</p>
          </div>
          <div className={styles.container__block}>
            <h6 className={styles.container__block__title}>
              Hours
            </h6>
            <p className={`${styles.container__block_adtitle}`}>Monday to Friday</p>
            <p className={`text text_size_s`}>8:00 AM - 9:00 PM</p>
            <p className={`${styles.container__block_adtitle}`}>Saturday & Sunday</p>
            <p className={`text text_size_s`}>9:00 AM - 7:00 PM</p>
          </div>
          <div className={styles.container__block}>
            <h6 className={styles.container__block__title}>
              Get a free estimate
            </h6>
            <p className={styles.call_us_now__number} style={{ color: "#0075FF" }}>{telNumber}</p>
            <p className={`text text_size_s ${styles.container__block_text}`}>Don&apos;t wait, call us now!</p>
            <button
              className={`button button_primary ${styles.main__button}`}
              onClick={() => scrollToSection(refToContact)}>
              Request a quote
            </button>
          </div>
        </div>
        <hr className="main__hr" />
        <div className={`container ${styles.footer__container} ${styles.footer__container_bottom}`}>
          <Image
            src={"./images/logo_company.svg"}
            alt="logo"
            width={178}
            height={42}
            priority />
          <p className={`text text_size_s text_marging_left`}>Designed by <span className="span_color_blue">BRIX Templates</span> - Edited by <span className="span_color_blue">Ivan Bogdanov</span></p>
        </div>
      </footer>
    </>
  );
}
