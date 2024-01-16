import style from './Modal.module.scss';
import {ReactComponent as Close} from "../../assets/images/close-modal.14990f1c.svg";

export const Modal = () => {
    return (
        <div className={style.Carpet}>
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <div className={style.ContainerWrapper}>
                        <h2 className={style.Title}>
                            Заполните форму<br/>
                            и получите консультацию по<br/>
                            <span>подключению платежной системы</span>
                        </h2>
                        <Close/>
                    </div>
                    <p>Мы свяжемся с вами в ближайшее время,
                        проконсультруем по всем вопросам и поможем
                        подобрать подходящий вам тариф.
                    </p>
                    <div className={style.ContactBlock}>
                        <input type="text" className={style.Input} placeholder={'Ник в телеграм'}/>
                        <input type="email" className={style.Input} placeholder={'Email'}/>
                        <textarea className={style.InputQ} placeholder={'Вопросы и комментарии'}/>
                        <div className={style.BtnWrapper}>
                            <button className={style.Btn}>Задать вопрос</button>
                            <p>Нажимая на кнопку, вы даете согласие
                                на обработку ваших персональных данных
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}