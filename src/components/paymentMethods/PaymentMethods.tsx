import style from "./PaymentMethods.module.scss";
import {motion} from "framer-motion";
import {textAnimation} from "../../constants/constant";
import otherMethod from "../../assets/images/block_6_h_4.ba3c8e88.png";
import service from "../../assets/images/block_6_h_3.d3e346ba.png";
import digital from "../../assets/images/block_6_h_2.ca921971.png";


export const PaymentMethods = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container} id={'HowSent'}>
                <motion.h2 variants={textAnimation}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{amount: 0.2}}
                           custom={1}
                           className={style.Title}>Способы оплаты
                </motion.h2>
                <div className={style.PaymentMethods}>
                    <motion.div className={style.PaymentMethod}
                                initial="hidden"
                                whileInView="visible"
                                variants={textAnimation} custom={1}
                    >
                        <img src={otherMethod} alt="" className={style.MethodImg}/>
                        <p>Счет ИП /<br/> Юридического лица</p>
                    </motion.div>
                    <motion.div className={style.PaymentMethod}
                                initial="hidden"
                                whileInView="visible"
                                variants={textAnimation} custom={1}
                    >
                        <img src={service} alt="" className={style.MethodImg}/>
                        <p>Перевод на карту Тинькофф или Сбербанк</p>
                    </motion.div>
                    <motion.div className={style.PaymentMethod}
                                initial="hidden"
                                whileInView="visible"
                                variants={textAnimation} custom={1}
                    >
                        <img src={digital} alt="" className={style.MethodImg}/>
                        <p>Криптовалюта</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}