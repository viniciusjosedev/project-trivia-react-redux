import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('All teste configuration', () => {
	it('testa todas as funções da configuration', async () => {
		renderWithRouterAndRedux(<App />)

		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonSettings = screen.getByTestId('btn-settings');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonSettings);

		userEvent.click(screen.getByTestId('difficulty'));
		userEvent.click(screen.getByText(/hard/i))
		userEvent.click(screen.getByText(/Any Difficulty/i))
		userEvent.click(screen.getByTestId('type'));
		userEvent.click(screen.getByText(/multiple choice/i))
		userEvent.click(screen.getByText(/multiple choice/i))
		userEvent.click(screen.getByText('Any Type'))

		await waitFor(() => {
			expect(screen.getByText(/jogar/i)).toBeInTheDocument()
		}, { timeout: 5000 })

	}, 30000)
})