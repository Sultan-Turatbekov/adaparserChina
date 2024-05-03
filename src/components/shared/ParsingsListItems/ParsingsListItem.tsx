import {Button} from "@/src/components/ui/button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ParsingsListItemProps} from "@/src/types/propsType/ParsingsListItemProps.ts";
import { useTranslation } from "react-i18next"; 
export const ParsingsListItem = ({item}:ParsingsListItemProps) =>{
    const [t]=useTranslation();
    return (
        <div className={`max-w-[400px] w-full py-8 px-7 flex flex-col shadow-xl rounded-[6px] mx-auto`}>
            <div className={`flex justify-between items-center mb-10 max-h-[50px] h-full`}>
                <div className={`max-w-14`}>
                    <img className={`w-full`} src={item.img} alt={item.title}/>
                </div>
                <Button onClick={()=>window.location.href = 'https://web.telegram.org/a/#6944523790'}  className={`max-w-[120px] w-full bg-slate-200 hover:bg-slate-300 text-black`}><FontAwesomeIcon
                    className={`mr-3`} icon={faPlus}/> {t("parsingsListItem.button")}</Button>
            </div>
            <h3 className={`font-bold text-xl`}>{item.title}</h3>
            <p className={`mt-auto`}>{item.description}</p>
        </div>
    )
}