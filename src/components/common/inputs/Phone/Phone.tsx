"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // стандартная тема

export default function MyPhoneInput({ name = "phone" }: { name?: string }) {
    return (
        <PhoneInput
            country={"ru"}
            preferredCountries={["ru", "us", "kz", "by", "md"]}
            enableSearch
            inputClass="my-input"
            buttonClass="my-flag"
            placeholder="Введите номер"
            // onChange={(phone, data, event, formattedValue) => {
            //     console.log(phone, data, formattedValue);
            // }}
            inputProps={{
                name,
            }}
            inputStyle={{
                width: "100%",
                borderRadius: 8,
                background: "var(--f_gray-50)",
                border: 0,
                fontSize: "var(--f_link-size)",
                padding: 16,
            }}
            dropdownStyle={{
                border: 0,
                outline: 0,
                borderRadius: 8,
                fontSize: "var(--f_link-size)",
                // padding: "var(--input_padding-16x13x12x12)",
            }}
            buttonStyle={{
                border: 0,
                outline: 0,
                borderRadius: 8,
                fontSize: "var(--f_link-size)",
                // padding: "var(--input_padding-16x13x12x12)",
            }}
        />
    );
}
