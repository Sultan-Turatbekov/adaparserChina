// import dataEn from './dataEn.json';
// import dataGr from './dataGr.json';
import { AllParsingsType } from "@/src/types/allParsingsType.ts";
import { ParsingsListItem } from "@/src/components/shared/ParsingsListItems/ParsingsListItem.tsx";
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export const AllParsings = () => {
    const [jsonData, setJsonData] = useState<AllParsingsType[]>([]);
    const [t,i18n]=useTranslation();
    // useEffect(() => {
    //     const nextLocal = localStorage.getItem('nextlocal');
    //     const parsedData = nextLocal === 'gr' ? dataGr : dataEn;
    //     setJsonData(parsedData);
    //     window.location.reload()
    // }, []); 

    return (
        <section className={`py-10`}>
            <div className={`flex flex-col md:flex-row justify-between items-center`}>
                <h2 className={`font-bold text-3xl sm:text-4xl`}>{t("allparsing.ourparser")}</h2>
                <Link to={`/parsings-list`} className={`font-medium text-[17px] text-black hover:text-blue-500 flex items-center md:text-xl gap-2 hover:bg-slate-200 max-w-[350px] rounded-xl px-2 transition-all duration-500`}>{t("allparsing.allparser")}
                    <span>
                        <img src="https://uploads-ssl.webflow.com/61ea8fed046f701b672b404d/61ea8fed046f70e6172b413d_Group%2084.svg" alt="arrow" />
                    </span>
                </Link>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                {jsonData.map((item: AllParsingsType, index: number) => (
                    <div key={index}>
                        <ParsingsListItem item={item}/>
                    </div>
                ))}
            </div>
        </section>
    )
}