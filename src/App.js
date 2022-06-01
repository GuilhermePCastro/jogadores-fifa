import React from 'react';
import { jogadoresReducer } from './redux'
import Header from './components/header';
import ListaJogadores from './components/listaJogadores';
import {Grid, Typography } from '@mui/material';
import AddJogador from './components/addJogador';
import { fifaReducer } from './redux'

export const JogadorContext = React.createContext({
  VersaoFifa: ''
});

function App() {
  const initFIFA = React.useContext(JogadorContext);
  const [currentFIFA, fifaDispatch] = React.useReducer(fifaReducer, initFIFA);

  return (
    <JogadorContext.Provider  value={{ currentFIFA, fifaDispatch }} className="App">
      
      <Header />
      <div  style ={{marginTop: '80px'}}>
        <AddJogador />
        
        <ListaJogadores />
      </div>
      
    </JogadorContext.Provider>
  );
}

export default App;