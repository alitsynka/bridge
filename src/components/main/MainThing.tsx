import style from "./MainThing.module.scss";
import roud from '../../assets/images/Roud.png';
import {motion} from 'framer-motion';
import {Header} from "../header/Header";
import {Link} from "react-scroll";
import {ReactComponent as Time} from "../../assets/images/time.svg";
import {ReactComponent as Cubes} from "../../assets/images/cubes.svg";
import {ReactComponent as Currency} from "../../assets/images/valuta.svg";

export const MainThing = () => {

    const rightAnimation = {
        hidden: {
            x: 300,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }
    const leftAnimation = {
        hidden: {
            x: -300,
            opacity: 0,
            breakpoints: [800]
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }

    return (
        <div className={style.CommonWrapper}>
            <Header/>
            <div className={style.Wrapper} id={'Main'}>

                <div className={style.Container}>

                    <motion.div className={style.LeftBlock}
                                initial="hidden"
                                whileInView="visible"
                    >
                        <motion.h1
                            variants={leftAnimation}
                            custom={1}
                            className={style.Title}>
                            Поможем принять для вас денежные средства в РФ. Для ИП и ФИЗ ЛИЦ
                        </motion.h1>
                        <motion.p variants={leftAnimation}
                                  custom={2}
                                  className={style.Desc}>Google Admob, Youtube Adsense, Amazon и многие другие
                            {/*<span>со всего мира!</span>*/}
                        </motion.p>
                        <div className={style.BtnsWr}>
                            <Link to={"form"}
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  offset={-250}
                                  duration={700}
                                  delay={100}
                                  className={style.BtnConnect}>
                                Получить консультацию
                            </Link>
                            <Link to={"form"}
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  offset={-250}
                                  duration={700}
                                  delay={100}

                                  className={style.HowItWorks}>
                                Как это работает
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        className={`${style.RightBlock} `}>
                        <motion.img variants={rightAnimation}
                                    custom={1}
                                    className={style.Map}
                            // transition={{type: "spring", stiffness: 80}}
                                    src={roud} alt=""/>
                        <motion.p variants={rightAnimation}
                                  custom={2}
                            // transition={{type: "spring", stiffness: 800}}
                                  className={style.Desc2}>Принимайте деньги от Google AdSense на
                            Российские
                            реквизиты
                        </motion.p>

                    </motion.div>
                    <div className={style.AsideBlock}>
                        <div className={style.AsideContainer}>
                            <div>
                                <Time/>
                                <p>Быстро, доступно, прозрачно
                                    без сомнительных схем</p>
                            </div>
                            <div>
                                <Currency/>
                                <p>Предложим подходящий
                                    тарифный план под ваши цели</p>
                            </div>
                            <div>
                                <Cubes/>
                                <p>Стабильный прием и вывод средств,
                                    несмотря на ограничения</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}