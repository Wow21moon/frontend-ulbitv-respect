import type { Meta, StoryObj } from '@storybook/react'
import ThemeDecorator from 'shared/StyleDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
