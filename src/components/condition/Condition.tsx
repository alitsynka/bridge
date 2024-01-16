import style from "./Condition.module.scss";

export const Condition = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <h2 className={style.Title}>Условия сотрудничества</h2>
                <p className={style.ConditionsTitle}>Мы предлагаем гибкие условия сотрудничества начиная от 7%
                    от
                    суммы поступления
                </p>
            </div>
        </div>

    )
}