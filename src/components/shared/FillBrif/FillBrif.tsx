import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next';
export const FillBrif = () => {
    const {t}=useTranslation();
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="flex flex-col gap-4 lg:w-[455px] lg:text-left">
                <h2 className="text-[25px] lg:text-4xl font-bold text-center lg:text-left">{t("fillbrif.header")}</h2>
                <p className="text-lg lg:text-xl  text-center lg:text-left ">
                {t("fillbrif.description")}
                </p>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-2">
                        <img className="mt-1" src="/brifImages/brifDone.svg" alt="" />
                        <span className="text-base lg:text-xl">
                        {t("fillbrif.briflist.list1")}
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <img className="mt-1" src="/brifImages/brifDone.svg" alt="" />
                        <span className="text-base lg:text-xl">
                        {t("fillbrif.briflist.list2")}
                        </span>
                    </li>
                </ul>
                <Link to="/fill-brif" className="flex gap-2 items-center justify-center lg:justify-start">
                    <p className="font-bold text-blue-700">{t("fillbrif.brifbutton")}</p>
                    <span>
                        <img src="https://uploads-ssl.webflow.com/61ea8fed046f701b672b404d/61ea8fed046f70e6172b413d_Group%2084.svg" alt="" />
                    </span>
                </Link>
            </div>

            <div className="max-w-[100%] lg:max-w-[705px] lg:max-h-[585px]">
                <img className="w-full" src="/brifImages/brif.png" alt="" />
            </div>
        </div>
    );
};
