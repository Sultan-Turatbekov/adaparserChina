import businessDataJson from "./businessDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import Infoabout from "../shared/Infoabout/Infoabout"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"

function Business() {
  const { t, i18n } = useTranslation();
  return (
    <div>
        <AllEnterLink dataJson={businessDataJson}/>
        <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="business/replaceEntireTeam.jpg" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>{t("business.titles.title1")}</h3>
          <p className={styles.services_text}>{t("business.texts.text1")}</p>
          <p className={styles.services_text}>{t("business.descriptions.desc1")}</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>{t("business.titles.title2")}</h3>
          <p className={styles.services_text}>{t("business.texts.text2")}</p>
          <p className={styles.services_text}>{t("business.descriptions.desc2")}</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="business/better.png" alt="" />
      </div>
    </div>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="business/costParsing.png" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}></h3>
          <p className={styles.services_text}>{t("business.titles.title3")}</p>
          <p className={styles.services_text}>{t("business.texts.text3")}</p>
      </div>{t("business.descriptions.desc3")}
    </div>

    <Infoabout/>

    </div>
    

  )
}

export default Business