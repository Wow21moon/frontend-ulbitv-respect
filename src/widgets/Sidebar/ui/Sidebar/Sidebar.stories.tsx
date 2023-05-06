import type { Meta, StoryObj } from '@storybook/react'
import ThemeDecorator from 'shared/StyleDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { Sidebar } from './Sidebar'



const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sidebar>;


export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
