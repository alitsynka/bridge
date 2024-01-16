import style from "./WeWork.module.scss";
import {motion} from "framer-motion";
import {stepsAnimation, textAnimation} from "../../constants/constant";

export const WeWork = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container} id={'HowWeWork'}>
                <motion.h2 className={style.Title}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{amount: 0.2}}
                           variants={textAnimation}
                           custom={1}>
                    Как <span>мы</span> работаем
                </motion.h2>
                <motion.div className={style.StepsBlock}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.1}}>
                    <motion.div variants={stepsAnimation} custom={2} className={style.Step}>
                        <h3 className={style.TitleStep}>Безопасно</h3>
                        <p>Заключаете договор и подключаете ключи</p>
                    </motion.div>
                    <motion.div variants={stepsAnimation} custom={2} className={style.Step}>
                        <h3 className={style.TitleStep}>Стабильно</h3>
                        <p>Мы получаем выплату на несколько компаний в европе, что гарантирует поступление
                            платежа</p>
                    </motion.div>
                    <motion.div variants={stepsAnimation} custom={2} className={style.Step}>
                        <h3 className={style.TitleStep}>Удобно</h3>
                        <p>Заказываете выплату любым удобным для себя спобосом</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}