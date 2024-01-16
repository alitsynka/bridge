import style from './Payments.module.scss';
import {Link} from "react-scroll";
import card from '../../assets/images/block_11_h_2.ea80990a.png';

export const Payments = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.Description}>
                    <h2>Принимайте электронные платежи
                        <br/>
                        <span>из Европы, США и других стран</span>
                    </h2>
                    <p>Наши специалисты свяжутся с вами в самые короткие сроки и проконсультируют по выбору оптимального
                        тарифа под ваши цели
                        <br/>
                        <span>
                            Если в процессе подключения у вас возникнут дополнительные вопросы, то вы всегда сможете
                        обратиться к нашей поддержке.
                        </span>
                    </p>
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
                </div>
                <img src={card} alt="" className={style.Card}/>
            </div>
        </div>
    )
}

