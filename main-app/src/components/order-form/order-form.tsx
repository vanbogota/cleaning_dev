import React, { useEffect, useState } from "react";
import { OrderFormProps } from "./types";
import styles from "@/app/page.module.scss";

const options = ['House Cleaning', 'Office cleaning', 'Moving cleaning', 'Airbnb cleaning'];

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    option: '',
    phone: '',
    email: '',
    date: '',
    note: ''
  });

  const [minDate, setMinDate] = useState('');

  useEffect(()=>{
    const today = new Date();
    const tommorow = new Date(today);
    tommorow.setDate(today.getDate()+1);
    const formattedDate = tommorow.toISOString().split('T')[0];
    setMinDate(formattedDate)
  },[])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      address: '',
      option: '',
      phone: '',
      email: '',
      date: '',
      note: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.orderForm}>
      <div className={styles.orderForm__group}>
        <label htmlFor="name" className={styles.orderForm__label}>Full name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
          maxLength={50}
          className={styles.orderForm__input}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="address" className={styles.orderForm__label}>Address</label>
        <input
          type="text"
          name="address"
          id="address"
          autoComplete="address"
          className={styles.orderForm__input}
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="option" className={styles.orderForm__label}>Requested service</label>
        <input
          list="options"
          name="option"
          autoComplete="option"
          required
          className={styles.orderForm__input}
          value={formData.option}
          onChange={handleChange}
        />
        <datalist id="options">
          {
            options.map((option, index) => (<option key={index} value={option} />))
          }
        </datalist>
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="phone" className={styles.orderForm__label}>Phone number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="phone"
          placeholder="+358 00 0000000"
          pattern="^\+?[0-9]*$"
          title="Phone number should contain only digits and an optional leading +"
          required
          className={styles.orderForm__input}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="email" className={styles.orderForm__label}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className={styles.orderForm__input}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.orderForm__group}>
        <label htmlFor="date" className={styles.orderForm__label}>Day of service</label>
        <input
          type="date"
          name="date"
          id="date"
          min={minDate}
          className={styles.orderForm__input}
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.orderForm__group} ${styles.orderForm__textarea}`}>
        <label htmlFor="note" className={styles.orderForm__label}>Add a note</label>
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
      <button type="submit" className={`button button_primary ${styles.main__button}`}>Submit message</button>
    </form>
  )
}