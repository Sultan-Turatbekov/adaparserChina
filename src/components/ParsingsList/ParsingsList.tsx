import parsingDE from "@/src/components/ParsingsList/ParsingsList-dataDE.json";
import parsingEN from "@/src/components/ParsingsList/ParsingsList-dataEN.json";
import { ParsingListTypes } from "@/src/types/parsingListTypes.ts";
import { AllParsingsType } from "@/src/types/allParsingsType.ts";
import {ParsingsListItem} from "@/src/components/shared/ParsingsListItems/ParsingsListItem.tsx";
import { useTranslation } from "react-i18next"
export const ParsingsList = () => {
    const { t, i18n } = useTranslation();
    const parsinglist = i18n.language === 'en' ? parsingEN : parsingDE;
    return (
        <div>
            {
                parsinglist.map((item: ParsingListTypes) => (
                    <div className={`py-10`}>
                        <div className={`flex flex-col md:flex-row items-center justify-between mb-10`}>
                            <h2 className={`font-bold text-5xl max-w-[425px]`}>{item.title}</h2>
                            <p className={`max-w-[510px] text-[18px] self-end`}>{item.specification}</p>
                        </div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                            {
                                item.data?.map((value:AllParsingsType, index:number) => (
                                    <ParsingsListItem item={value} key={index}/>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
