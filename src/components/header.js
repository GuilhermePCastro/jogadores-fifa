import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { JogadorContext } from '../App';

export default function Header(){

    const { currentFIFA, fifaDispatch } = React.useContext(JogadorContext);
    fifaDispatch({type: 'TROCA_FIFA', payload: 'FIFA22' });

    return(
        <AppBar position="fixed" color="success">
            <Toolbar>
                <Typography variant='h6' component='h1' style={{ marginLeft: '8px'}}>
                    Meus Jogadores {currentFIFA.VersaoFifa}
                </Typography>
            </Toolbar> 
        </AppBar>
    )
}