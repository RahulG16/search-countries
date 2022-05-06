import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import SearchPage from './SearchPage'

test('on initial render, the pay button is disabled', () => {
    render(<SearchPage />)

    expect(screen.getByRole('button', {name: /search/i})).toBeDisabled();
})