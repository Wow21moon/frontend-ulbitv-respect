import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props

    return (
        <div className={classNames(cls['lds-ring'], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
