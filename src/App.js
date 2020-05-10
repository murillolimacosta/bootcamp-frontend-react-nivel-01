import React, { useState, useEffect } from 'react';
import api from './services/api';

import './css/App.css';

import Header from './components/Header';

function App() {

    /**
     * Aplicação do conceito de estado
     * 
     * 'useState' transforma a antiga array projects em um estado.
     * Um estado retorna uma array com duas posições:
     *  1° posição: O valor própriamente dito
     *  2° posição: Uma função que pode ser chamada para alterar 
     * o valor do estado. 
     */
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);


    async function handleAddProject() {

        /**
         * Aplicando o conceito de imutabilidade, uma variável não pode 
         * ter seu valor alterado, deve sempre ser um novo valor. 
         * 
         * ...projects = Percorre todos os valores atuais do valor do 
         * estado exportando os antigos valores da array. 
         * 
         * Uma nova array é formada, contendo os antigos valores 
         * acrescentando o novo valor (imutabilidade), dessa forma 
         * o estado é atualizado.
         * 
         * setProjects([...projects, project]);
         */
        const response = await api.post('projects', {
            title: `Projeto ${Date.now()}`,
	        owner: "Murillo Lima Costa"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Título 11"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
        
            <button onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;