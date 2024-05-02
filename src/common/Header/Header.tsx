import {Link} from "react-router-dom";
import  adaUseEN  from './adaUseEN.json';
import  adaUseDE  from './adaUseDE.json';
import  resourcesEN  from './resourcesEN.json';
import  resourcesDE  from './resourcesDE.json';
import { BurgerMenu } from "../../components/shared/burgerMenu/BurgerMenu";
import styles from './Header.module.scss';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"
   import {useTranslation} from 'react-i18next';

  export const Header = () => {

    const {t,i18n}=useTranslation();
    const changeLanguage = (language:string)=>{
        i18n.changeLanguage(language);
        localStorage.setItem('nextlocal', language)
    }
    const header = i18n.language === 'en' ? adaUseEN : adaUseDE;
    const resource = i18n.language === 'en' ? resourcesEN : resourcesDE;
    return (
        <header className={`${styles.full_bleed }`}>
            <div className={styles.header_container}>
                <NavigationMenu className={styles.NavigationMenu}>
                    <div className={styles.header_logoContainer}>
                        <Link to="/">
                            <img src="/logoWi.svg" alt="logo" />
                        </Link>
                    </div>
                    <NavigationMenuList className={styles.NavigationMenuList}>
                        <NavigationMenuItem className={styles.NavigationMenuItem}>{t("header.header1")}
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}></NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent}>
                            {header.map((item, index) => (
                                <NavigationMenuLink key={index}>
                                    <Link to={item.link}>
                                        <div className={styles.Header_link}>
                                            <img className={styles.Header_link_img} src={item.img} alt="" />
                                            <h3 className={styles.Header_link_subtitle}>{item.subtitle}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            ))}

                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>{t("header.resource")}</NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent2}>
                            {resource.map((item, index) => (
                                <NavigationMenuLink key={index}>
                                    <div className={styles.Header_link}>
                                        <img className={styles.Header_link_img} src={item.img} alt="" />
                                        <h3 className={styles.Header_link_subtitle}>{item.subtitle}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </NavigationMenuLink>
                            ))}

                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <Link to="/parsings-list"><h2 className={`${styles.NavigationMenuTrigger} ${styles.NavigationMenuTrigg}`}>{t("header.parsers")}</h2></Link>
                    <Link to="/services"><h2 className={styles.NavigationMenuTrigge}>{t("header.service")}</h2></Link>
                </NavigationMenu>
                <Link to="https://web.telegram.org/a/#6944523790"><button className={styles.header_button}>{t("header.buy")}</button></Link>
                <BurgerMenu />
                <div className={styles.header_logo_media}>
                    <img src="/logoWi.svg" alt="" />
                </div>
                
                <button className={styles.multiLanguage} onClick={()=>changeLanguage("en")}>EN</button>
                <button className={styles.multiLanguage} onClick={()=>changeLanguage("gr")}>GR</button>
                
            </div>
            
        </header>
    );
}