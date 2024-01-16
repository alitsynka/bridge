import style from './Header.module.scss';
import accountImg from "../../assets/images/account.png";
import telegramImg from "../../assets/images/telegramLogo.png";
import {SideBarMenu} from "../sidebar/SideBarMenu";
import {links} from '../../constants/constant'
import {Link} from "react-scroll";
import {useEffect, useState} from "react";

export const Header = () => {

    const [menuActive, setMenuActive] = useState<boolean>(false);
    useEffect(() => {
        const changePosition = () => {
            if (window.scrollY >= 206) {
                setMenuActive(true)
            } else {
                setMenuActive(false)
            }
        }

        changePosition()

        // adding the event when scroll change background
        window.addEventListener("scroll", changePosition)
        return () => {
            window.removeEventListener("scroll", changePosition)
        }
    }, [])

    return (
        <div className={`${style.Wrapper} ${menuActive && style.MenuActive}`}>
            <div className={style.Container}>
                <div className={style.ContainerForNav}>
                    <div className={style.LogoBlock}>
                        <p className={`${style.Title} ${menuActive && style.TitleActivated}`}>Cashbridge</p>
                    </div>
                    <ul className={style.NavBlock}>
                        {
                            links.map((link: any) => {
                                return (
                                    <li>
                                        <Link to={link.path}
                                              spy={true}
                                              smooth={true}
                                              hashSpy={true}
                                              offset={-200}
                                              duration={500}
                                              delay={100}
                                              className={`${style.Link} ${menuActive && style.ActivatedLink}`}>
                                            {link.title}
                                        </Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.ConsultationBlock}>
                    <img src={telegramImg} alt="" className={style.LogoContact}/>
                    <img src={accountImg} alt="" className={style.LogoContact}/>
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

                <SideBarMenu/>
            </div>
        </div>
    )
}