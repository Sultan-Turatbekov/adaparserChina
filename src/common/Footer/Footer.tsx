import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {contactLinks, contacts, payment, paymentMethods, services} from "@/src/common/Footer/footerData.ts";
import {useTranslation} from 'react-i18next';
export const Footer = () => {
    const {t,i18n}=useTranslation();
    
    return (
        <footer className={`${styles.full_bleed} bg-dark_full p-4 md:py-10 lg:py-16 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white`}>
            <div className={`mt-2`}>
                <div className={`max-w-[200px] mb-4`}>
                    <img width={`100%`} src='logo.png' alt="logo"/>
                </div>
                <p className={`mb-10`}>&copy; 2023 All Rights Reserved</p>
                <div className={`flex flex-col gap-1`}>
                    <Link to={`*`} className={`hover:border-b transition-all duration-200 max-w-[210px]`}>{t("footer.footerLink1")}</Link>
                    <Link to={`*`} className={`hover:border-b transition-all duration-200`}>{t("footer.footerLink2")}</Link>
                </div>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>{t("footer.contacts")}</h4>
                <ul className={`flex flex-col gap-2`}>
                    {contactLinks.map((link:contacts, index:number) => (
                        <li key={index}>
                            <Link to={link.to} className={`flex gap-2 items-center cursor-pointer`}>
                                <div className={`max-w-[20px]`}>
                                    <FontAwesomeIcon icon={link.icon} />
                                </div>
                                <p className={`hover:border-b transition-all duration-200`}>{link.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>{t("footer.service")}</h4>
                <ul className={`flex flex-col gap-2`}>
                    <li>{t("footer.instagram")}</li>
                    <li>{t("footer.wildberris")}</li>
                    <li>{t("footer.onlineShop")}</li>
                </ul>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>{t("footer.pay")}</h4>
                <ul className={`grid grid-cols-3 gap-3`}>
                    {paymentMethods.map((method:payment, index:number) => (
                        <li className={`w-full h-full mx-auto`} key={index}>
                            <img width={`100%`} className={`h-full rounded-[${method.rounded}] h-9`} src={method.src} alt={method.alt}/>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
