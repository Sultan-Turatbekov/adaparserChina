import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import {FillBrif} from "@/src/components/shared/FillBrif/FillBrif";
import AllEnterLink from "../../components/shared/AllEnterLink/AllEnterLink"
import homeDataJson from "./homeDataJson.json"
import {Pricing} from "@/src/components/shared/Pricing/Pricing.tsx";
import TopStore from "@/src/components/shared/TopStore/TopStore";
import Infoabout from "@/src/components/shared/Infoabout/Infoabout";

export const Home = () => {
    return(
        <>
            <AllEnterLink dataJson={homeDataJson}/>
            <AllParsings/>
            <FillBrif/>
            <TopStore/>
            <Infoabout/>
            <Pricing/>
        </>
    )
}