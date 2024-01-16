export type LinksType = {
    path: string
    title: string
}
export const links:LinksType[] = [
    {
        path: 'Main',
        title: 'Главная'
    },
    {
        path: 'HowWeWork',
        title: 'Как мы работаем'
    },
    {
        path: 'WhereAccept',
        title: 'Откуда принимаем'
    },
    {
        path: 'HowSent',
        title: 'Как отправляем'
    },
]
export const stepsAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            // duration: 0.4,
            delay: custom * 0.2,
            ease: "easeInOut"
        },
    })
}
export const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.15},
    })
}
export const shadowAnimation = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            delay: custom * 0.25},
    })
}