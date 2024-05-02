import {Button} from "@/src/components/ui/button.tsx";
import {useTranslation} from 'react-i18next';
export const Pricing = () => {
    const {t,i18n}=useTranslation();
    return (
        <section className={`my-10`}>
            <div className={`bg-gradient-to-br from-sky-300 to-sky-900 rounded-xl p-4 md:py-12`}>
                <h3 className={`text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-white`}>{t("pricing.pricingheader")}</h3>
                <div className={`flex flex-col sm:flex-row items-center gap-5`}>
                    <div className={`w-1/2 h-full   `}>
                        <img width={`100%`} height={`100%`} src="/pricingImages/parser.png" alt="pricingImages"/>
                    </div>
                    <div className={`flex flex-col justify-center mx-auto`}>
                        <ul className={`flex flex-col gap-1 md:gap-3 mb-5 sm:mb-10 lg:mb-20`}>
                            <li className={`relative flex items-start gap-2 text-white font-normal text-[12px] sm:text-xl`}>
                                <img src="pricingImages/checkMark.svg" className={`w-4 sm:w-6`} alt="mark"/>
                                {t("pricing.pricinglist.list1")}</li>
                            <li className={`relative flex items-start gap-2  text-white font-normal text-[12px] sm:text-xl`}>
                                <img src="pricingImages/checkMark.svg" className={`w-4 sm:w-6`} alt="mark"/>
                                {t("pricing.pricinglist.list2")}</li>
                            <li className={`relative flex items-start gap-2  text-white font-normal text-[12px] sm:text-xl`}>
                                <img src="pricingImages/checkMark.svg" className={`w-4 sm:w-6`} alt="mark"/>
                                {t("pricing.pricinglist.list3")}
                            </li>
                        </ul>
                        <Button
                            className={` mx-auto bg-white hover:bg-gray-200 vtransition-all duration-500 text-sky-600 max-w-[300px] w-full font-[600] text-sm md:text-xl lg:text-2xl`} onClick={()=>window.location.href = 'https://web.telegram.org/a/#6944523790'}>{t("pricing.order")}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}