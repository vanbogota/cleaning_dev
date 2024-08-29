"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useRef } from "react";
import Button from "@/components/custom-button";
import * as TextVariables from "@/utils/textVariables";
import NavBar from "@/components/nav-bar";
import OrderForm, { CustomFormData } from "@/components/order-form";
import UnsortedList from "@/components/unsorted-list";

export default function Home() {
  const sections = ['Home', 'About', 'Services', 'Contact'];

  const refToContact = useRef<HTMLElement>(null);

  const refToServices = useRef<HTMLElement>(null);

  const scrollToSection = (element: React.RefObject<HTMLElement>) => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="header">
        <h4>{TextVariables.companyName}</h4>
        <NavBar
          sectionName="header"
          elements={sections}
        />        
        <Button
          onClick={() => scrollToSection(refToContact)}
          className={`button button_primary ${styles.header__button}`}
          label={TextVariables.buttonLabelQuote}
        />
      </header>
      <main className={styles.main}>
        <section className="main__section" id="home">
          <div className={`container ${styles.container_space_between}`}>
            <div className={styles.section__home}>
              <h1 className={styles.main__home_title}>Quality cleaning for your home</h1>
              <p className={`text text_size_m ${styles.main__home_text}`} >{TextVariables.homeSectionText}</p>
              <div className={styles.main__home_call}>
                <Button
                  onClick={() => scrollToSection(refToContact)}
                  className={`button button_primary ${styles.main__button}`}
                  label={TextVariables.buttonLabelQuote}
                />
                <div className={styles.call_us_now}>
                  <Image
                    className={styles.call_us_now__img}
                    src={"./images/small_phone.svg"}
                    alt="sp"
                    width={72}
                    height={72} />
                  <div className={styles.call_us_now__frame}>
                    <p className={styles.call_us_now__text}>CALL US NOW</p>
                    <p className={styles.call_us_now__number}>{TextVariables.telNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image_wrapper} style={{width: "50vw", height: "50.97vw"}}>
              <Image
                className={styles.main__img_home_top}
                src={"./images/big_cleaner_woman_top.svg"}
                alt="bcwt"
                layout="fill"
                objectFit="cover"               
                priority />
            </div>
          </div>
        </section>
        <hr className="main__hr" />
        <section className="main__section" id="about">
          <div className={styles.main__home_bottom}>
            <h3 className={styles.main__home_bottom_title}>How our service works?</h3>
            <p className={`text text_size_m ${styles.about__text_intro}`}>{TextVariables.serviceStepsText}</p>
            <div className={styles.main__home_bottom_steps}>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_schedule.svg"}
                  alt="time schedule"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>1. Schedule online</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}>{TextVariables.scheduleOnline}</p>
              </div>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_vacuumcleaner.svg"}
                  alt="vacuum cleaner"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>2. Get your house cleaned</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}>{TextVariables.getYourHouseCleaned}</p>
              </div>
              <div className={styles.main__home_bottom_step}>
                <Image
                  className={styles.main__home_bottom_step_img}
                  src={"./images/main_paycards.svg"}
                  alt="paycards"
                  width={240}
                  height={240}
                />
                <h4 className={styles.main__home_bottom_step_title}>3. Pay easily</h4>
                <p className={`text text_size_m ${styles.main__home_bottom_step_text}`}>{TextVariables.payEasily}</p>
              </div>
            </div>
            <div className={styles.main__home_bottom_buttons}>
              <Button
                onClick={() => scrollToSection(refToContact)}
                className={`button button_primary ${styles.main__button}`}
                label={TextVariables.buttonLabelQuote}
              />
              <Button
                onClick={() => scrollToSection(refToServices)}
                className={`button button_secondary ${styles.main__button}`}
                label={TextVariables.buttonLabelServices}
              />
            </div>
          </div>
        </section>
        <hr className="main__hr" />
        <section className="main__section" id="services" ref={refToServices}>
          <h3 className={styles.main__services_heading_title}>Take a look at our professional services</h3>
          <div className={styles.main__services_cards}>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_house.svg"}
                alt="house cleaning"
                width={220}
                height={190}
                style={{minHeight: 224}}
              />
              <h5 className={styles.main__services_card_title}>House cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}>{TextVariables.houseCleaning}</p>
            </div>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_office.svg"}
                alt="office cleaning"
                width={220}
                height={224}
                style={{minHeight: 224}}
              />
              <h5 className={styles.main__services_card_title}>Office cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}>{TextVariables.officeCleaning}</p>
            </div>
            <div className={styles.main__services_card}>
              <Image
                className={styles.main__services_card_img}
                src={"./images/main_industrial.svg"}
                alt="airbnb cleaning"
                width={250}
                height={220}
                style={{minHeight: 224}}
              />
              <h5 className={styles.main__services_card_title}>Moving cleaning</h5>
              <p className={`text text_size_m ${styles.main__services_card_text}`}>{TextVariables.movingCleaning}</p>
            </div>
          </div>
          <div className={styles.main__services_covid}>
            <div className={styles.image_wrapper} style={{width: "36vw", height: "47vw"}}>
              <Image
                className={styles.main__services_covid_img}
                src={"./images/big_cleaner_woman_center.svg"}
                alt="bcwc"
                layout="fill"
                objectFit="cover"                
                priority
              />
            </div>
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
                {TextVariables.covidText}
              </p>
              <div className={styles.main__services_covid_call}>
                <Button
                  className={`button button_primary ${styles.main__button}`}
                  onClick={() => scrollToSection(refToContact)}
                  label={TextVariables.buttonLabelQuote}
                />
                <div className={styles.call_us_now}>
                  <Image
                    className={styles.call_us_now__img}
                    src={"./images/small_phone.svg"}
                    alt="sp"
                    width={72}
                    height={72} />
                  <div className={styles.call_us_now__frame}>
                    <p className={styles.call_us_now__text} style={{ color: "white" }}>CALL US NOW</p>
                    <p className={styles.call_us_now__number} style={{ color: "white" }}>{TextVariables.telNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main__services_description}>
            <div className={styles.image_wrapper} style={{width: "44.4vw", height: "47.18vw"}}>
              <Image
                src={"./images/big_house.svg"}
                alt="bh"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.main__services_description_content}>
              <h3 className={styles.main__services_description_title}>We cover all areas of your home or office</h3>
              <p className={`text text_size_s ${styles.main__services_description_text}`}>
                {TextVariables.weCoverAllAreas}
              </p>
              <div className={styles.main__services_areas}>
                <UnsortedList
                className={styles.main__services_areas_list}
                listItemsNames={["Bathrooms","Kitchens","Living Rooms","Carpets","Bedrooms","Offices", "Businesses","Windows"]}
                />                
              </div>
              <Button
                className={`button button_primary ${styles.main__button}`}
                onClick={() => scrollToSection(refToContact)}
                label={TextVariables.buttonLabelQuote}
              />
            </div>
          </div>
          <div className={styles.main__services_differencies}>
            <div className={styles.main__services_differencies_content}>
              <h3 className={styles.main__services_differencies_title}>What makes us different?</h3>
              <p className={`text text_size_s ${styles.main__services_differencies_text}`}>{TextVariables.whatMakesUsDif}</p>
              <p className={`text text_size_s ${styles.main__services_differencies_text}`}>To date, we have much to be proud of:</p>
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
              <Button
                className={`button button_primary ${styles.main__button}`}
                onClick={() => scrollToSection(refToContact)}
                label={TextVariables.buttonLabelQuote}
              />
            </div>
            <div className={styles.image_wrapper} style={{width: "47.64vw", height: "40.9vw"}}>
              <Image
                src={"./images/big_cleaner_man.svg"}
                alt="bcm"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        <section
          className={`main__section container ${styles.main__section_contact}`}
          id="contact"
          ref={refToContact}
        >
          <div className={styles.main__contact_content}>
            <h3 className={styles.main__contact_title}>Request a free cleaning quote today</h3>
            <p className={`text text_size_m ${styles.main__contact_text}`}>{TextVariables.requestQuoteToday}</p>
            <div className={styles.call_us_now} style={{ marginLeft: 0 }}>
              <Image
                className={styles.call_us_now__img}
                src={"./images/small_phone.svg"}
                alt="sp"
                width={72}
                height={72} />
              <div className={styles.call_us_now__frame}>
                <p className={styles.call_us_now__text}>CALL US NOW</p>
                <p className={styles.call_us_now__number}>{TextVariables.telNumber}</p>
              </div>
            </div>
            <hr className={styles.contact__hr} />
            <h4 className={styles.main__contact_title}>Not convinced yet?</h4>
            <p className={`text text_size_m ${styles.main__contact_text}`}>{TextVariables.notConvincedYet}</p>
          </div>
          <OrderForm/>          
        </section>
      </main>
      <footer className={`footer`}>
        <div className={`container ${styles.footer__container} ${styles.footer__container_top}`}>
          <div className={styles.container__block}>
            <h4 className={styles.container__block__title}>
              Quality cleaning for your home
            </h4>
            <p className={`text text_size_s`}>{TextVariables.footerText}</p>
          </div>
          <div className={styles.container__block}>
            <h6 className={styles.container__block__title}>
              Contact us
            </h6>
            <p className={`text text_size_s`}>{TextVariables.adress}</p>
            <p className={`text text_size_s`}>{TextVariables.telNumber}</p>
            <p className={`text text_size_s`}>{TextVariables.eMail}</p>
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
            <p className={styles.call_us_now__number} style={{ color: "#0075FF" }}>{TextVariables.telNumber}</p>
            <p className={`text text_size_s ${styles.container__block_text}`}>Don&apos;t wait, call us now!</p>
            <Button
              className={`button button_primary ${styles.main__button}`}
              onClick={() => scrollToSection(refToContact)}
              label={TextVariables.buttonLabelQuote}
            />
          </div>
        </div>
        <hr className="main__hr" />
        <div className={`container ${styles.footer__container} ${styles.footer__container_bottom}`}>
          <h4>{TextVariables.companyName}</h4>
          <p className={`text text_size_s text_marging_left`}>Designed by <span className="span_color_blue">BRIX Templates</span> - Edited by <span className="span_color_blue">Ivan Bogdanov</span></p>
        </div>
      </footer>
    </>
  );
}
