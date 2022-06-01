import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { INSERT_JOGADOR } from '../graphql/mutation';
import { useMutation } from '@apollo/client';

const DEFAULT_JOGADOR = {
    id: "",
    potencial: "",
    over_atual: "",
    salario: "",
    valor: "",
    posicoes: "",
    posicao_princ: "",
    nome: "",
    link: "",
    idade: "",
    foto: ""
};

export default function AddMusica(){

    const [dialog, setDialog] = React.useState(false);
    const [addJogador, {error}] = useMutation(INSERT_JOGADOR);
    const [jogador, setJogador ] = React.useState(DEFAULT_JOGADOR);


    async function handleAddJogador(){
        
        try{
            await addJogador({
                variables: {
                    
                    potencial: jogador.potencial.length > 0 ? jogador.potencial  : null,
                    over_atual: jogador.over_atual.length > 0 ? jogador.over_atual : null,
                    salario: jogador.salario.length > 0 ? jogador.salario  : null,
                    valor: jogador.valor.length > 0 ? jogador.valor : null,
                    posicoes: jogador.posicoes.length > 0 ? jogador.posicoes : null,
                    posicao_princ: jogador.posicao_princ.length > 0 ? jogador.posicao_princ : null,
                    nome: jogador.nome.length > 0 ? jogador.nome : null,
                    link: jogador.link.length > 0 ? jogador.link : null,
                    idade:jogador.idade.length > 0 ? jogador.idade : null,
                    foto: jogador.foto.length > 0 ? jogador.foto : null
    
                }
            });
    
            
            setDialog(false);
            setJogador(DEFAULT_JOGADOR);
        }catch(e){
            alert("Deu ruim! " + e.message);
        }
    }


    return(
        <>
            <Dialog open={dialog}>
                <DialogTitle>Adicionar Jogador</DialogTitle>
                <DialogContent style={{ textAlign: 'center'}}>
                    <TextField name='nome' onChange={(event)=>setJogador({...jogador, nome: event.target.value})} style={{ marginTop: '10px'}} value={jogador.nome} variant="outlined" label="Nome" fullWidth></TextField>
                    <TextField name='posicao_princ' onChange={(event)=>setJogador({...jogador, posicao_princ: event.target.value})} style={{ marginTop: '8px'}} value={jogador.posicao_princ} variant="outlined" label="Posição Principal" ></TextField>
                    <TextField name='idade' onChange={(event)=>setJogador({...jogador, idade: event.target.value})} style={{ marginTop: '8px'}} value={jogador.idade} variant="outlined" label="Idade" ></TextField>
                    <TextField name='over_atual' onChange={(event)=>setJogador({...jogador, over_atual: event.target.value})} style={{ marginTop: '8px'}} value={jogador.over_atual} variant="outlined" label="Over" ></TextField>
                    <TextField name='potencial' onChange={(event)=>setJogador({...jogador, potencial: event.target.value})} style={{ marginTop: '8px'}} value={jogador.potencial} variant="outlined" label="Potencial" ></TextField>
                    <TextField name='posicoes' onChange={(event)=>setJogador({...jogador, posicoes: event.target.value})} style={{ marginTop: '8px'}} value={jogador.posicoes} variant="outlined" label="Posições Secundárias/funções" fullWidth></TextField>
                    <TextField name='salario' onChange={(event)=>setJogador({...jogador, salario: event.target.value})} style={{ marginTop: '8px'}} value={jogador.salario} variant="outlined" label="Salário" ></TextField>
                    <TextField name='valor' onChange={(event)=>setJogador({...jogador, valor: event.target.value})} style={{ marginTop: '8px'}} value={jogador.valor} variant="outlined" label="Valor" ></TextField>
                    <TextField name='foto' onChange={(event)=>setJogador({...jogador, foto: event.target.value})} style={{ marginTop: '8px'}} value={jogador.foto} variant="outlined" label="Link Imagem" fullWidth></TextField>
                    <TextField name='link' onChange={(event)=>setJogador({...jogador, link: event.target.value})} style={{ marginTop: '8px'}} value={jogador.link} variant="outlined" label="Link FIFAPRO" fullWidth></TextField>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={() => setDialog(false)}>Cancelar</Button>
                    <Button color="primary" onClick={handleAddJogador}>Salvar</Button>
                </DialogActions>
            </Dialog>

            
            <Button  onClick={() => setDialog(true)} color='warning' style={{ marginBottom:'10px', marginLeft: '1200px',  marginRight: '5px'}}  variant="contained">Adicionar</Button>
            <a style={{ marginLeft: '1150px',  marginRight: '5px'}} href='https://sofifa.com/' target='_blank'>Veja os jogadores aqui</a>
        </>
    )
}