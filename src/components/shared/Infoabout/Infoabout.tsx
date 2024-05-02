import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import infoAboutEN from './infoaboutEN.json'
import infoaboutDE from './infoaboutDE.json';
function Infoabout() {
  const { t, i18n } = useTranslation();
  const infoabout = i18n.language === 'en' ? infoAboutEN : infoaboutDE;
  return (
    <div className={styles.schemeOfWork_info_conteiner}>
        {infoabout.map((item,index)=>(
          <div key={index} className={styles.schemeOfWork_info}>
          <img className={styles.schemeOfWork_info_img} src={item.img} alt="schemeOfWork_info_img" />
          <h3 className={styles.schemeOfWork_info_title}>{item.subtitle}</h3>
          <h4 className={styles.schemeOfWork_info_subtitle}>{item.text}</h4>
        </div>
        ))}
    </div>
  )
}

export default Infoabout