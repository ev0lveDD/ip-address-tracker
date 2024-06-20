import InputFieldSkeleton from "@/Components/InputField/Skeleton/input-field-skeleton";
import classes from "./information-container-skeleton.module.css";

export default function InformationContainerSkeleton() {
    return (
        <div className={classes.dataWrapperSkeleton}>
          <h1 className={classes.skeletonHeader}></h1>
          <InputFieldSkeleton />
          <div className={classes.dataDisplaySectionSkeleton}>
                    <div className={classes.dataSectionSkeleton}>
                      <p className={classes.labelSkeleton}></p>
                      <h1 className={classes.valueSkeleton}></h1>
                    </div>
                    <div className={classes.dataSectionSkeleton}>
                      <p className={classes.labelSkeleton}></p>
                      <h1 className={classes.valueSkeleton}></h1>
                    </div>
                    <div className={classes.dataSectionSkeleton}>
                      <p className={classes.labelSkeleton}></p>
                      <h1 className={classes.valueSkeleton}></h1>
                    </div>
                    <div className={classes.dataSectionSkeleton}>
                      <p className={classes.labelSkeleton}></p>
                      <h1 className={classes.valueSkeleton}></h1>
                    </div>
          </div>
        </div>
      );
}