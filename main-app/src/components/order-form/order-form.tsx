import React, { useEffect, useState } from "react";

import { CustomFormData, OrderFormProps } from "./types";
import styles from "@/app/page.module.scss";

const options = [
  "House Cleaning",
  "Office cleaning",
  "Moving cleaning",
  "Airbnb cleaning",
];

export default function OrderForm() {
  const [formData, setFormData] = useState<CustomFormData>({
    name: "",
    address: "",
    option: "",
    phone: "",
    email: "",
    date: "",
    note: "",
  });

  const [minDate, setMinDate] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const today = new Date();
    const tommorow = new Date(today);
    tommorow.setDate(today.getDate() + 1);
    const formattedDate = tommorow.toISOString().split("T")[0];
    setMinDate(formattedDate);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
        setFormData({
          name: "",
          address: "",
          option: "",
          phone: "",
          email: "",
          date: "",
          note: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.orderForm}>
      <div className={styles.orderForm__group}>
        <label htmlFor="name" className={styles.orderForm__label}>
          Your name*
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Name"
          pattern="^[a-zA-Z\s]+$"
          title="Name should contain only letters"
          required
          maxLength={50}
          className={styles.orderForm__input}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="address" className={styles.orderForm__label}>
          Address of the house
        </label>
        <input
          type="text"
          name="address"
          id="address"
          autoComplete="address"
          placeholder="Street name, house and apt. numbers, zip code"
          className={styles.orderForm__input}
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="option" className={styles.orderForm__label}>
          Requested service*
        </label>
        <select        
          name="option"
          id="option"
          required
          className={styles.orderForm__input}
          value={formData.option}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose service
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>        
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="phone" className={styles.orderForm__label}>
          Phone number*
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="phone"
          placeholder="+358 00 0000000"
          pattern="^\+?[0-9]*$"
          maxLength={13}
          title="Phone number should contain only digits and an optional leading +"
          required
          className={styles.orderForm__input}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="email" className={styles.orderForm__label}>
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="example@domain.fi"
          required
          className={styles.orderForm__input}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="date" className={styles.orderForm__label}>
          Desired day of service
        </label>
        <input
          type="date"
          name="date"
          id="date"
          min={minDate}
          className={styles.orderForm__input}
          value={formData.date}
          onChange={handleChange}
          suppressHydrationWarning
        />
      </div>
      <div
        className={`${styles.orderForm__group} ${styles.orderForm__textarea}`}
      >
        <label htmlFor="note" className={styles.orderForm__label}>
          Add a note
        </label>
        <textarea
          name="note"
          id="note"
          maxLength={200}
          className={`${styles.orderForm__input} ${styles.orderForm__textarea}`}
          spellCheck="true"
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className={`button button_primary ${styles.main__button}`}
      >
        Submit message
      </button>
      <p style={{ color: "grey" }}>* - this information is necessary</p>
      {isLoading && <p style={{ color: "yellow" }}>Loading...</p>}
      {isSuccess && (
        <p style={{ color: "green" }}>
          Aplication sent. We will call you back shortly.
        </p>
      )}
      {isError && (
        <p style={{ color: "red" }}>
          Failed to send request. Please make request by phone.
        </p>
      )}
    </form>
  );
}
