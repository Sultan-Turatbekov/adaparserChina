import { FC } from 'react';
import { AllEnterLinkProps } from "@/src/types/AllEnterLink/AllEnterLink";
import styles from "./AllEnterLink.module.scss"
import {useTranslation} from 'react-i18next';

const AllEnterLink: FC<AllEnterLinkProps> = ({ dataJson }) => {
  const {t}=useTranslation();
    return (
      <div>
        {dataJson.map((item, index) => (
          <div key={index} className={styles.allEnterLink}>
            <div>
              <h3 className={styles.allEnterLink_title}>{t("allenterLink.title")}</h3>
              <p className={styles.allEnterLink_text}>{t("allenterLink.description")}</p>
              <button className={styles.allEnterLink_btn} onClick={()=>window.location.href='https://web.telegram.org/a/#6944523790'}>{t("allenterLink.button")}</button>
            </div>
            <div className={styles.allEnterLink_imgConteiner}>
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default AllEnterLink;