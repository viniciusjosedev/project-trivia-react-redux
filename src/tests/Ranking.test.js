import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import localStorageMock from './mocks/localStorageMock.test';
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Ranking from '../pages/Ranking';

const player = {
  name: 'fulaninho',
    gravatarEmail: 'https://www.gravatar.com/avatar/a2b512c71c7be8132878b934a6dbc682',
    assertions: 2,
    score: 70,
};

const mockLocalStorage = () => {
  Object.defineProperty(window, 'localStorage', { 
    value: new localStorageMock
  })
}

describe('Verifica a funcionalidade da página de Ranking', () => {
  beforeEach(() => {
    mockLocalStorage();
  })

  afterEach(() => {
    jest.restoreAllMocks();
  })

  test('Verifica se a página de Ranking é carregada ao clicar no botão Ver Ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />, { player }, '/ranking');

    expect(history.location.pathname).toBe('/ranking');
  });

  test('Verifica se os elementos da página Ranking são renderizados', () => {
    const component = renderWithRouterAndRedux(<Ranking />);

    expect(screen.getByTestId('ranking-title')).toBeInTheDocument();
    expect(screen.getByTestId('btn-go-home')).toBeInTheDocument();
  });

  test('Verifica se ao clicar no botão de voltar para login a página é redirecionada', () => {
    const { history } = renderWithRouterAndRedux(<App />,  { player } , '/ranking');

    const button = screen.getByTestId('btn-go-home');
    userEvent.click(button);

    expect(history.location.pathname).toBe('/');
  })

  test('Verifica se a quantidade de players exibida no ranking está correta', () => {
    renderWithRouterAndRedux(<App />, { player }, '/ranking');

    const listSize = JSON.parse(localStorage.getItem('ranking')).length;

    expect(listSize).toBe(3);
  
    for (let i = 0; i < listSize; i += 1) {
      const playerName = screen.getByTestId(`player-name-${i}`)
      const playerScore = screen.getByTestId(`player-score-${i}`);

      expect(playerName).toBeInTheDocument();
      expect(playerScore).toBeInTheDocument();
    }
  })

	test('', () => {
		renderWithRouterAndRedux(<App />, { player }, '/ranking');
	})
});