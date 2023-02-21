import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Game from "../pages/Game";

describe('', () => {
	it('', async () => {
		const { history } = renderWithRouterAndRedux(<App />)


		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		let responseCorrect;
		let buttonNext;
		await waitFor(() => {
			responseCorrect = screen.getByTestId('correct-answer');
			buttonNext = screen.getByText(/próxima/i)
		}, { timeout: 5000 })

		expect(responseCorrect).toBeInTheDocument();
		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);
		
		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/feedbacks')
		}, { timeout: 5000 })

		userEvent.click(screen.getByTestId('btn-ranking'));
	}, 50000);

	it('', async () => {
		const { history } = renderWithRouterAndRedux(<App />)


		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		let responseCorrect;
		let buttonNext;
		await waitFor(() => {
			responseCorrect = screen.getByTestId('correct-answer');
			buttonNext = screen.getByText(/próxima/i)
		}, { timeout: 5000 })

		expect(responseCorrect).toBeInTheDocument();
		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);
		
		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		userEvent.click(responseCorrect);
		userEvent.click(buttonNext);

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/feedbacks')
		}, { timeout: 5000 })

		userEvent.click(screen.getByTestId('btn-play-again'));
	}, 50000);
})