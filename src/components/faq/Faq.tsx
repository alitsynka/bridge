import style from "./Faq.module.scss";
import {motion} from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {useState} from "react";
import {stepsAnimation} from "../../constants/constant";
import arrow from '../../assets/images/arrow.png'


const Icon = () => {
    return (
        <div>
            <img src={arrow} alt="" style={{width: '20px', height: '20px'}}/>
        </div>
    )
}

export const Faq = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className={style.Wrapper}>
            <motion.div className={style.Container}
                        variants={stepsAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        custom={1}
            >
                <h2 className={style.Title}>Часто задаваемые вопросы </h2>
                <div className={style.WrapperAccordion}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<Icon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className={`${style.AccordionIcon} ${expanded === 'panel1' && style.ExpandedAccordionIcon}`}
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>
                                Какая комиссия за вывод?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Комиссия от 7%, все зависит от суммы поступления.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<Icon/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            className={`${style.AccordionIcon} ${expanded === 'panel2' && style.ExpandedAccordionIcon}`}
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}
                                        className={style.AccordionTitle}>Какая минимальная сумма выплаты?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Минимальная сумма выплаты составляет $100. Эта сумма может измениться в будущем.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<Icon/>}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            className={`${style.AccordionIcon} ${expanded === 'panel3' && style.ExpandedAccordionIcon}`}
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>
                                Какие способы вывода возможны?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Доступны различные способы вывода, например на Счет ИП/Юр. лица в РФ; перевод на карту
                                Тинькофф/Сбербанк; также доступны выплаты в криптовалюте.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<Icon/>}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            className={`${style.AccordionIcon} ${expanded === 'panel4' && style.ExpandedAccordionIcon}`}
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>Клиентам из
                                каких стран вы можете помочь с выводом?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Мы помогаем клиентам из всех стран.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </motion.div>
        </div>
    )
}