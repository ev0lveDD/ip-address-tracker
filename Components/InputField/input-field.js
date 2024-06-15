'use client';

import Image from "next/image";
import { useState } from "react";
import classes from "./input-field.module.css";

import arrowIcon from "@/public/icon-arrow.svg";

export default function InputField({userIP, setUserIP}) {

    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit() {
        setUserIP(value);
        console.log(value);
        console.log("IP UPDATED!!!!!!!!!!!!!!!")
      }

    return(
        <div className={classes.ipInputWrapper}>
            <input value={value} onChange={handleChange} placeholder="Search for any IP address or domain" className={classes.ipInput}></input>
            <button className={classes.ipInputButton} type="submit" onClick={handleSubmit}>
            <Image src={arrowIcon} width={25} height={25} alt="arrow icon"/>
            </button>
        </div>

    );
}