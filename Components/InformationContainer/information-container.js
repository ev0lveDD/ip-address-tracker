import { Suspense } from "react";
import classes from "./information-container.module.css";
import InputField from "../InputField/input-field";

export default function InformationContainer({dataFetched, userIP, setUserIP}){

    return (
      <div className={classes.dataWrapper}>
        <h1>IP Address Tracker</h1>
        <InputField userIP={userIP} setUserIP={setUserIP}/>
        <div className={classes.dataDisplaySection}>
        {dataFetched ?
                  <Suspense fallback={"Loading ..."}>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>IP ADDRESS</p>
                    <h1 className={classes.dataValue}>{dataFetched.ip}</h1>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>LOCATION</p>
                    <h1 className={classes.dataValue}>{dataFetched.location.city}, {dataFetched.location.country}</h1>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>TIMEZONE</p>
                    <h1 className={classes.dataValue}>{dataFetched.location.timezone}</h1>
                  </div>
                  <div className={classes.dataSection}>
                    <p className={classes.dataLabel}>ISP</p>
                    <h1 className={classes.dataValue}>{dataFetched.isp}</h1>
                  </div>
                </Suspense>
                : <p>LOADING</p>}
        </div>
      </div>
    );
}