import Infoabout from "../shared/Infoabout/Infoabout"
import servicesDataJson from "./servicesDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import { Pricing } from "../shared/Pricing/Pricing"
import styles from "./Services.module.scss"
import {useTranslation} from 'react-i18next';
function Services() {
  const {t,i18n}=useTranslation();
  return (
    <>
    <AllEnterLink dataJson={servicesDataJson}/>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage3.png" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>{t("services.block1.header")}</h3>
          <p className={styles.services_text}>{t("services.block1.description")}</p>
          <p className={styles.services_text}>{t("services.block1.title")}</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>{t("services.block2.header")}</h3>
          <p className={styles.services_text}>{t("services.block2.description")}</p>
          <p className={styles.services_text}>{t("services.block2.title")}</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage2.png" alt="" />
      </div>
    </div>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage3.svg" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>{t("services.block3.header")}</h3>
          <p className={styles.services_text}>{t("services.block3.description")}</p>
          <p className={styles.services_text}>{t("services.block3.title")}</p>
      </div>
    </div>

    <div className={styles.schemeOfWork}>
        <div className={styles.schemeOfWork_titleContiner}>
            <h3 className={styles.schemeOfWork_title}>{t("services.block4.header")}</h3>
            <h4 className={styles.schemeOfWork_subtitle}>{t("services.block4.description")}</h4>
        </div>
        <Pricing/>
        <Infoabout/>
        
    </div>

    </>
  )
}

export default Services