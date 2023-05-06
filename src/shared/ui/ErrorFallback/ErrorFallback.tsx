import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ErrorFallback.module.scss'
import { Button, ThemeButton } from '../Button/Button'

interface ErrorFallbackProps {
    error: Error
    resetErrorBoundary: () => void
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    console.log(error, resetErrorBoundary)

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.errorFallback, {}, [])}>
            <p>{t('Произошла ошибка')}</p>
            <pre>{error.message}</pre>
            <Button theme={ThemeButton.CLEAR} onClick={resetErrorBoundary}>{t('Обновить')}</Button>
        </div>
    )
}
