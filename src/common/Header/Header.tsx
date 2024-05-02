import React from "react";
import {Link} from "react-router-dom";
import  adaUseEN  from './adaUseEN.json';
import  adaUseCH  from './adaUseCH.json';
import  resourcesEN  from './resourcesEN.json';
import  resourcesCH  from './resourcesCH.json';
import { BurgerMenu } from "../../components/shared/burgerMenu/BurgerMenu";
import styles from './Header.module.scss';



import { Button } from "@/src/components/ui/button"


import {
    DropdownMenu,
    DropdownMenuContent,
    
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
  } from "@/src/components/ui/dropdown-menu"



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

    const [position, setPosition] = React.useState("bottom")
 

    const {t,i18n}=useTranslation();
    const changeLanguage = (language:string)=>{
        i18n.changeLanguage(language);
        localStorage.setItem('nextlocal', language)
    }
    const header = i18n.language === 'en' ? adaUseEN : adaUseCH;
    const resource = i18n.language === 'en' ? resourcesEN : resourcesCH;
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




                

                
                <div className="mt-[19px]">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline">{i18n.language.toUpperCase()}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[40px]">
                    
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem onClick={()=>changeLanguage("en")} value="top">EN</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem onClick={()=>changeLanguage("ch")} value="bottom">CH</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                
                


            </div>
            
        </header>
    );
}