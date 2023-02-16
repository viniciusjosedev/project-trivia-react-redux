import { Component } from 'react';
import logoTrybe from '../styles/images/logoTrybe.svg';
import style from '../styles/Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={ style.footer }>
        <img className={ style.logoTrybe } src={ logoTrybe } alt="Logo Trybe" />
        <h4 className={ style.titleFooter }>
          Desenvolvido por: Grupo 10
        </h4>
        <h4 className={ style.titleFooter }>© Trivia</h4>
      </footer>
    );
  }
}
