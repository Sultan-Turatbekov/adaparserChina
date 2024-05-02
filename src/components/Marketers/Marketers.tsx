import marketersDataJson from "./marketersDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import Infoabout from "../shared/Infoabout/Infoabout"
import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next";
function Marketers() {
  const [t,i18n] =useTranslation();
  return (
    <div>
        <AllEnterLink dataJson={marketersDataJson}/>
        <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="marketers/marketers1.png" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>{t("marketers.titles.title1")}</h3>
          <p className={styles.services_text}>{t("marketers.texts.text1")}</p>
          <p className={styles.services_text}>{t("marketers.texts.text2")}</p>
          <p className={styles.services_text}>{t("marketers.texts.text3")}</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>{t("marketers.titles.title2")}</h3>
          <p className={styles.services_text}>{t("marketers.texts.text4")}</p>
          <p className={styles.services_text}>{t("marketers.texts.text5")}</p> 
          <p className={styles.services_text}>{t("marketers.texts.text6")}</p> 
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="marketers/marketers2.jpg" alt="" />
      </div>
    </div>
        <AllParsings/>
        <Infoabout/>
    </div>
  )
}

export default Marketers