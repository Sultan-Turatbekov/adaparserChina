import seoDataJson from "./seoDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import seoEN from './seoEN.json'
import seoDE from './seoDE.json'
import styles from "./style.module.scss"
import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import Infoabout from "../shared/Infoabout/Infoabout";
import { useTranslation } from "react-i18next";
function Seo() {
  const [t,i18n]=useTranslation();
  const seo = i18n.language === 'en' ?seoEN : seoDE;
  return (
    <div>
    <AllEnterLink dataJson={seoDataJson}/>
    <section className={styles.seo}>
            <h2 className={styles.seo_title}>{t("seo.titles.title1")} <br />{t("seo.titles.title1br")}</h2>
            <div className={styles.seoinfo}>
                {seo.map((item) => (
                     <div className={styles.seoinfo_conteiner}>
                      <img className={styles.seoinfo_img} src={item.img} alt="" />
                      <h3 className={styles.seoinfo_title}>{item.title}</h3>
                      <p className={styles.seoinfo_text}>{item.text}</p>
                     </div>
                ))}
            </div>
        </section>
        <AllParsings/>
        <div className={styles.services}>
      <div>
          <h3 className={styles.services_title}>{t("seo.titles.title2")}</h3>
          <p className={styles.services_text}>{t("seo.texts.text1")}</p>
          <p className={styles.services_text}>{t("seo.texts.text2")}</p>
          <p>{t("seo.texts.text3")}</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="seo/keyword.jpg" alt="services" />
      </div>
    </div>
    
        <Infoabout/>
    </div>
  )
}

export default Seo