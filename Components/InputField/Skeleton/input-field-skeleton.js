import Image from "next/image";
import classes from "./input-field-skeleton.module.css";

export default function InputFieldSkeleton() {
    return(
        <div className={classes.inputWrapperSkeleton}>
            <input className={classes.ipInputSkeleton}></input>
            <button className={classes.ipInputButtonSkeleton}>
            </button>
        </div>
    );
}