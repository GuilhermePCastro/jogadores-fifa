import { useSubscription } from '@apollo/client';
import React from 'react';
import { GET_JOGADORES } from '../graphql/subscription';
import { Button, Card, Grid, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useMutation } from '@apollo/client';
import { DELETE_JOGADOR } from '../graphql/mutation';

export default function ListaJogadores(){

    const{ data, loading, error } = useSubscription(GET_JOGADORES);
    const [deleteJogador] = useMutation(DELETE_JOGADOR);
    const [jogadorDelete, setJogadorDelete] = React.useState(0);

    if(loading){
        return <div>Escalando...</div>
    }

    if(error){
        console.log(error);
        return <div>Deu ruim jogador!</div>
    }


    async function handleDeleteJogador(id){
        
        try{
            await deleteJogador({
                variables: {
                    
                    id: id
                }
            });

        }catch(e){
            alert("Deu ruim! " + e.message);
        }
       
    }

    function Jogador({jogador}){
        const {valor, salario, potencial, posicoes, posicao_princ, over_atual, nome, link, idade, foto, id} = jogador;

        return(
            <>
                  
                <Card style={{ margin: '10px 5px 10px 10px', display: 'flex', alignItems:'center'}}>
                    <CardMedia image={foto} style={{ objectFit:'cover', width:'90px', height:'90px' }}/>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <CardContent style={{ paddingRight: '0' }}>
                            <Typography 
                                fontFamily='Segoe UI' variant='h5' component='h2'>{nome}
                            </Typography>
                            <Typography style={{ marginTop: '10px' }}
                                fontFamily='Segoe UI' variant='subtitle2' component='h3'>Idade: {idade}
                            </Typography>
                            <Typography
                                fontFamily='Segoe UI' variant='subtitle2' component='h3'>Funções: {posicoes}
                            </Typography>
                            <Typography
                                fontFamily='Segoe UI' variant='subtitle2' component='h3'>Valor: €{valor}
                            </Typography>
                            <Typography
                                fontFamily='Segoe UI' variant='subtitle2' component='h3'>Salario: €{salario}
                            </Typography>

                            
                            <a href={link} target='_blank'> Mais informações</a>
                            
                            
                            
                        </CardContent>   
                        <CardContent style={{ paddingRight: '0' }}>
                            <Typography 
                                fontFamily='Segoe UI' variant='h5' component='h3'>  {posicao_princ} 
                            </Typography>

                        </CardContent>   
                        <CardContent style={{ paddingRight: '0' }}>
                            <Typography 
                                fontFamily='Segoe UI' variant='h5' component='h3'>  {over_atual}/{potencial}
                            </Typography>

                            
                            
                            <Button  onClick={() => handleDeleteJogador(id)} style={{ marginTop: '100px', marginLeft: '35px'}}>
                                <DeleteForever color="error"/>
                            </Button>
                           

                        </CardContent>   
                    </div>                
                </Card>
                

            </>
        )

        
    }

    return(
        <>
            <Typography style={{ marginBottom:'10px', marginLeft:'8px'}}
                        fontFamily='Segoe UI' variant='h5' component='h3'>Jogadores selecionados
            </Typography> 
            <Grid container spacing={0}>
                
                {data.jogadores.map((jogador) =>{
                    return(
                
                            < Grid item lg={4} md={6} xs={12}>
                                <Jogador key={jogador.id} jogador={jogador}/>
                            </Grid>
                
                    )
            
                })}
                    
                    
            </Grid>
        </>
    )
}