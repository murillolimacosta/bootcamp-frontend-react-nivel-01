import React from 'react';
import { render } from 'react-dom';

import App from './App';

/**
 * JSX: HTML dentro do javascript (JavaScript XML)
 * Fragment: <> e </> CRiação de container para envolver mais 
 * de um component sem tem nenhum elemento html entre eles.
 * 
 * Três conceitos básicos
 * Componente: Função que retorna HTML
 * Propriedade: A capacidade de passar uma infrmação de um 
 * componente pai para um filho. 
 * Estado & Imutabilidade:
 */

render(<App />, document.getElementById('app'));