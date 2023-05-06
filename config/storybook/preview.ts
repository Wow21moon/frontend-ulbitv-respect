import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import MainDecorator from '../../src/shared/StyleDecorators/MainDecorator'
import ThemeDecorator from '../../src/shared/StyleDecorators/ThemeDecorator'
import RouterDecorator from '../../src/shared/StyleDecorators/RouterDecorator'

const preview: Preview = {
    decorators: [
        MainDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
