import ControlledSwitches from "./SwitchTheme/ThemeSwitcher"
import { LocaleSwitcher } from "./switchLocale/LocaleSwitcher"
import { useTheme } from "../../context/ThemeContext"
import style from './Header.module.css'
import { Link } from "react-router-dom"
export const Header = () => {
    const { isDark } = useTheme()
    console.log(style)
    return (
        <div className={`${style.wrapper} ${isDark ? style.dark : style.light}`}>
            <div className={style.links_wrapper}>
                <Link className={`${style.link} ${isDark ? style.dark_link : style.light_link}`} to={"/"}>Главная</Link>
                <Link className={`${style.link} ${isDark ? style.dark_link : style.light_link}`} to={"/designers"}>Таблица Дизайнеров</Link>
                <Link className={`${style.link} ${isDark ? style.dark_link : style.light_link}`} to={"/graphicks"}>Графики</Link>
            </div>
            <div>
            <ControlledSwitches />
            <LocaleSwitcher />
            </div>
            
        </div>
    )
}