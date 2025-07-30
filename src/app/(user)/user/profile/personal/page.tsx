"use client";
import PhoneInput from "react-phone-input-2";
import styles from "./personal.module.scss";
import MyPhoneInput from "@/components/common/inputs/Phone/Phone";

export default function PersonalProfile() {
    return (
        <form className={styles.personalForm}>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Имя</div>
                <input />
            </div>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Фамилия</div>
                <input />
            </div>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Дата рождения</div>
                <input />
            </div>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Номер телефона</div>
                <MyPhoneInput />
            </div>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Дополнительный номер</div>
                <MyPhoneInput />
            </div>
            <div className={styles.fieldBlock}>
                <div className={styles.title}>Электронная почта</div>
                <input />
            </div>
            <div className={styles.checkBlock}>
                <input type="checkbox" />
                <div className={styles.title}>Получать уведомления</div>
            </div>
            <div className={styles.optionBlock}>
                <div className={styles.title}>Пол</div>
                <select>
                    <option>мужской</option>
                    <option>жунский</option>
                </select>
            </div>
        </form>
    );
}
