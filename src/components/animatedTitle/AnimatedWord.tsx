import {motion} from 'framer-motion';
import style from './animated.module.css';

export const AnimatedTitle = () => {
    const text = 'Animated Text igerc oeoe eeee' // This would normally be passed into this component as a prop!

    const changeText = text.split(" ")

    console.log(changeText)

    const containerAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom = 1): any => ({
            opacity: 1,
            transition: {
                delayChildren: custom * 0.04,
                staggerChildren: 0.12,
                duration: 0.9,
                // delay: custom * 0.25
            },
        })
    }


    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 200,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            }
        },
    }

    return (
        <motion.div className={style.Wrapper}
                    variants={containerAnimation}
                    initial="hidden"
                    animate={'visible'}
                    style={{fontSize: '65px', color: "deeppink"}}
            // whileInView="visible"
            // custom={1}
        >
            {text.split(" ").map((word, index) => {
                return (
                    <motion.span
                        variants={child}
                        // initial="hidden"
                        // animate={'visible'}
                        // whileInView="visible"
                        // custom={2}
                        style={{marginRight: '25px'}} key={index}>
                        {word}
                    </motion.span>
                )
            })}
        </motion.div>
    )
}