import { Suspense } from "react";
import classes from "./information-container.module.css";
import InputField from "../InputField/input-field";

export default function InformationContainer({dataFetched, userIP, setUserIP}){

    return (
      <div className={classes.dataWrapper}>
        <h1>IP Address Tracker</h1>
        <h1>{userIP}</h1>
        <InputField userIP={userIP} setUserIP={setUserIP}/>
        <div className={classes.dataDisplaySection}>
        {dataFetched ?
                  <Suspense fallback={"Loading ..."}>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>IP ADDRESS: </p>
                    <p className={classes.dataValue}>{dataFetched.ip}</p>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>LOCATION: </p>
                    <p className={classes.dataValue}>{dataFetched.location.city}, {dataFetched.location.country}</p>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>TIMEZONE: </p>
                    <p className={classes.dataValue}>{dataFetched.location.timezone}</p>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>ISP : </p>
                    <p className={classes.dataValue}>{dataFetched.isp}</p>
                  </div>
                </Suspense>
                : <p>LOADING</p>}
        </div>
      </div>
    );
}