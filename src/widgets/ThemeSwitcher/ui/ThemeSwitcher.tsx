import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import ThemeSwitcherSVG from 'shared/assets/icon/theme-switcher-btn.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { FC } from 'react'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? (
                <ThemeSwitcherSVG className={cls.icon} />
            ) : (
                <ThemeSwitcherSVG className={cls.icon} />
            )}
        </Button>
    )
}
