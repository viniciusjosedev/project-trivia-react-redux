import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import { fetchDataMockado } from './mocks/data';

describe('All tests from screen Game', () => {
	it('Testa se a pagina do game esta sendo chamada', async () => {
		const { history } = renderWithRouterAndRedux(<App />)

		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');


		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		await waitFor(() => {
			expect(screen.getByAltText(/estrela dos pontos/i)).toBeInTheDocument();
			expect(history.location.pathname).toEqual('/game')
		}, { timeout: 5000 })

	}, 30000)

	it('Clica no botão /próxima/', async () => {
		const { history } = renderWithRouterAndRedux(<App />)

		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);
		
		let buttonNext = await screen.findByText(/próxima/i)

		// await waitFor(() => {
		// 	buttonNext = screen.getByText(/próxima/i)
    //   expect(screen.getByTestId('text-timer').textContent).toEqual('Tempo: 21s')
		// }, { timeout: 10000 })

		userEvent.click(buttonNext);
		userEvent.click(buttonNext);
		userEvent.click(buttonNext);
		userEvent.click(buttonNext);
		userEvent.click(buttonNext);

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/feedbacks')
		}, { timeout: 5000 })

	}, 30000)

	it('testa e está indo para a página de Game', async () => {
		const { history } = renderWithRouterAndRedux(<App />)

		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/game')
		}, { timeout: 5000 })
	}, 30000)

	it('Passa por todos os clicks de next', async () => {
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

		userEvent.click(screen.getByTestId('btn-play-again'))

		userEvent.type(screen.getByTestId('input-player-name'), 'Vinicius');
		userEvent.type(screen.getByTestId('input-gravatar-email'), 'a@gmail.com')
		userEvent.click(screen.getByTestId('btn-settings'));

		userEvent.click(screen.getByTestId('category'))
		expect(screen.getByTestId('category')).toBeInTheDocument();
		userEvent.click(screen.getByText('History'))
		expect(screen.getByText('History')).toBeInTheDocument();
		expect(screen.getByText(/jogar/i)).toBeInTheDocument();
		userEvent.click(screen.getByText(/jogar/i));
	}, 30000)

	it('', async () => {
		renderWithRouterAndRedux(<App />)

		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		await waitFor(() => {
			expect(screen.getByTestId('text-timer').textContent).toContain('Tempo: 1s')
		}, { timeout: 35000 })

	}, 50000)
	
	it('Testa se quando o /responde_code/ é 0 o usuario é redirecionado para a /', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue({...fetchDataMockado, "response_code": 3}),
		})

		const { history } = renderWithRouterAndRedux(<App />)


		const inputName = screen.getByTestId('input-player-name');
		const inputEmail = screen.getByTestId('input-gravatar-email');
		const buttonPlay = screen.getByTestId('btn-play');

		userEvent.type(inputName, 'Vinicius');
		userEvent.type(inputEmail, 'a@gmail.com')
		userEvent.click(buttonPlay);

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/game')
		}, { timeout: 5000 })

		await waitFor(() => {
			expect(history.location.pathname).toEqual('/')
		}, { timeout: 5000})
		jest.clearAllMocks();
	}, 30000)
})	