import style from "./HowWeWork.module.scss";
import {ReactComponent as Admob} from '../../assets/images/admob.svg';
import {ReactComponent as Adsense} from '../../assets/images/adsense.svg';
import {ReactComponent as Amazon} from '../../assets/images/amazon.svg';
import {motion} from 'framer-motion';
import {shadowAnimation, textAnimation} from "../../constants/constant";




export const NetWorks = () => {

    return (
        <div className={style.Wrapper}>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <motion.h2 variants={textAnimation}
                               id={"WhereAccept"}
                               initial="hidden"
                               whileInView="visible"
                               viewport={{amount: 0.2}}
                               custom={1}
                               className={style.Title}
                    >
                        Из каких сетей принимаем деньги
                    </motion.h2>
                    <motion.div variants={shadowAnimation}
                                initial="hidden"
                                whileInView="visible"
                                custom={2}
                                viewport={{amount: 0.13}}
                                className={style.NetWorks}>
                        <div className={style.NetWork}>
                            <Admob className={style.AdmobSvg}/>
                            <p>Admob</p>
                        </div>
                        <div className={style.NetWork}>
                            <Adsense className={style.AdsensSvg}/>
                            <p>AdSense</p>
                        </div>
                        <div className={style.NetWork}>
                            <Amazon className={style.AmazonSvg}/>
                            <p>Amazon</p>
                        </div>
                        <div className={style.NetWork}>
                            <p>Прочие по запросу</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}