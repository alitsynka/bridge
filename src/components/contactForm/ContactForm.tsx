import style from "./ContactForm.module.scss";
import {motion} from "framer-motion";
import {stepsAnimation} from "../../constants/constant";
import telegramImg from "../../assets/images/telegramLogo.png";
import telegramImg2 from "../../assets/images/telegram-banner-img.781d9e7d.png";

export const ContactForm = () => {
    return (
        <div className={style.Wrapper}>
            {/*<motion.div className={style.Container}*/}
            {/*            variants={stepsAnimation}*/}
            {/*            initial="hidden"*/}
            {/*            whileInView="visible"*/}
            {/*            viewport={{amount: 0.2}}*/}
            {/*            custom={1}*/}
            {/*            id={'form'}*/}
            {/*>*/}
            {/*    <div className={style.DescBlock}>*/}
            {/*        <h2 className={style.Title}>Остались вопросы?</h2>*/}
            {/*        <h3 className={style.Title2}>Свяжитесь с нами</h3>*/}
            {/*        <p className={style.Description}>Задайте любой интересующий вас вопрос и получите*/}
            {/*            профессиональную консультацию от нашего специалиста*/}
            {/*            <br/>*/}
            {/*            <span>Заполните форму или свяжитесь с нами*/}
            {/*            удобным для вас способом</span>*/}
            {/*        </p>*/}
            {/*        <a href={'#'} className={style.EmailText}>blablavla@gmail</a>*/}
            {/*        <img src={telegramImg} alt="" className={style.Telegram}/>*/}
            {/*    </div>*/}
            {/*    <div className={style.ContactBlock}>*/}
            {/*        <input type="text" className={style.Input} placeholder={'Ник в телеграм'}/>*/}
            {/*        <input type="email" className={style.Input} placeholder={'Email'}/>*/}
            {/*        <textarea className={style.InputQ} placeholder={'Вопросы и комментарии'}/>*/}
            {/*        <div className={style.BtnWrapper}>*/}
            {/*            <button className={style.Btn}>Задать вопрос</button>*/}
            {/*            <p>Нажимая на кнопку, вы даете согласие*/}
            {/*                на обработку ваших персональных данных*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</motion.div>*/}
            <div className={style.ContainerTg}>
                <img src={telegramImg2} alt="" className={style.TelegramImg2}/>
                <h3>
                    Подпишитесь на наш <span>Telegram-канал</span>
                    <img src={telegramImg2} alt="" className={style.TelegramImg3}/>
                </h3>
                <input type="email" className={style.Input} placeholder={'Email'}/>
                <a href={"#"} className={style.Subscribe}>Подписаться</a>
            </div>
        </div>
    )
}