import type { Meta, StoryObj } from '@storybook/react'
import ThemeDecorator from 'shared/StyleDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
}

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
}

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
}

ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
