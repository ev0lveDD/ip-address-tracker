import InformationContainerSkeleton from "@/Components/InformationContainer/Skeleton/information-container-skeleton";
import MapWrapperSkeleton from "@/Components/MapWrapper/Skeleton/map-wrapper-skeleton";

export default function HomePageSkeleton() {
    return(
        <>
            <InformationContainerSkeleton />
            <MapWrapperSkeleton />
        </>
);
}