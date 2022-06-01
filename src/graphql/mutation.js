import { gql } from '@apollo/client'

export const  INSERT_JOGADOR = gql `
mutation INSERT_JOGADOR($foto: String!, $idade: Int!, $link: String!, $nome: String!, $over_atual: Int!, $posicao_princ: String!, $posicoes: String!, $potencial: Int!, $salario: String!, $valor: String!) {
  insert_jogadores(objects: {foto: $foto, idade: $idade, link: $link, nome: $nome, over_atual: $over_atual, posicao_princ: $posicao_princ, posicoes: $posicoes, potencial: $potencial, salario: $salario, valor: $valor}) {
    returning {
      valor
      salario
      potencial
      posicoes
      posicao_princ
      over_atual
      nome
      link
      idade
      id
      foto
    }
  }
}

`

export const  DELETE_JOGADOR = gql `
mutation DELETE_JOGADOR($id: uuid!) {
  delete_jogadores(where: {id: {_eq: $id}}) {
    affected_rows
  }
}

`