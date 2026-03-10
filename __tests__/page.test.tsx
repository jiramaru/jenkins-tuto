import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from '../app/page'

test('renders Welcome to Jenkins', () => {
    render(<Page />)
    expect(screen.getByText((content, element) => {
        const hasText = (node: Element | null) => node?.textContent === 'Welcome to Jenkins'
        const nodeHasText = hasText(element)
        const childrenDontHaveText = Array.from(element?.children || []).every(
            child => !hasText(child as Element)
        )
        return nodeHasText && childrenDontHaveText
    })).toBeDefined()
})
