import { gql } from '@apollo/client'

export const GET_JOGADORES = gql `
    subscription GET_JOGADORES {
        jogadores(order_by: {created_at: desc}) {
            id
            foto
            idade
            link
            nome
            over_atual
            posicao_princ
            posicoes
            potencial
            salario
            valor
          }
    }
`