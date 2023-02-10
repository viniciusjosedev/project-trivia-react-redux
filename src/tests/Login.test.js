import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Testa o componente Login', () => {
  it('Testa se o componente Login possui 2 inputs e um botão', () => {
    renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByTestId('btn-play');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
  });

  it('Testa se quando inserimos somente valor no campo de nome, o botão fica desabilitado', () => {
    renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    const playBtn = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Sthefani');
    expect(playBtn).toBeDisabled();
  });

  it('Testa se quando inserimos somente valor no campo de e-mail, o botão fica desabilitado', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByTestId('btn-play');
    userEvent.type(emailInput, 'sthefani@hotmail.com');
    expect(playBtn).toBeDisabled();
  });

  it('Testa se alterarmos os valores dos inputs de nome e email, o botão fica habilitado', () => {
    renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByTestId('btn-play')

    userEvent.type(nameInput, 'Sthefani');
    userEvent.type(emailInput, 'sthefani@hotmail.com');

    expect(playBtn).not.toBeDisabled();
  });

  it('Testa se existe um botão de configuração do jogo', () => {
    renderWithRouterAndRedux(<Login />);

    const configBtn = screen.getByTestId('btn-settings');
    expect(configBtn).toBeInTheDocument();
  });

  it('Testa se ao clicar no botão de configuração do jogo, ele redireciona para a página de configurações', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const configBtn = screen.getByTestId('btn-settings');
    userEvent.click(configBtn);
    const { pathname } = history.location;

    expect(pathname).toBe('/configuracao');
  });

  it('Testa se ao clicar no botão de jogar ele redirecionar para a página Game', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByTestId('btn-play');

    userEvent.type(nameInput, 'Sthefani');
    userEvent.type(emailInput, 'sthefani@hotmail.com');
    userEvent.click(playBtn);

    const { pathname } = history.location;
    waitFor( () => expect(pathname).toBe('/game'), { timeout: 5000 });
		waitFor( () => expect(JSON.parse(localStorage.getItem('token')).length).toBeDefined(), { timeout: 5000 } )
  });
});
