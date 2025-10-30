/************************************************************************************************
 * Objetivo: Model reponsavel pelo CRUD de dados referete a tabela de tipoMovimentacao no Banco de Dados
 * Data: 17/04/25
 * Autor: Vitor Paes Rodrigues
 * Versão:1.0
 * ********************************************************************************************/

// Importando o prisma client para executar os scripts no banco de dados
const { PrismaClient } = require('./generated/prisma')

// Cria uma instância do prisma
const prisma = new PrismaClient()

// Função para inserir no banco de dados um novo tipoMovimentacao
const insertTipoMovimentacao = async function(tipoMovimentacao) {
    try { 

        let sql = `insert into tbl_tipoMovimentacao (nome) values ('${tipoMovimentacao.nome}')`

        // Executa o script SQL no banco de dados e aguarda o retorno do banco de dados
        let result = await prisma.$executeRawUnsafe(sql)

        if (result)
            return true
        else
            return false
    } catch (error) {
        console.log(error)
        return false
    }
}

// Função para deletar um tipoMovimentacao existente no banco de dados
const deleteTipoMovimentacao = async function(id) {
    try {
        let sql = `delete from tbl_tipoMovimentacao where id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)
        
        if (result)
            return true
        else
            return false
    } catch (error) {
        console.log(error)
    }
}

// Função para atualizar no banco de dados um tipoMovimentacao existente
const updateTipoMovimentacao = async function(tipoMovimentacao) {
    try {

       let SQL = `update tbl_tipoMovimentacao set nome = '${tipoMovimentacao.nome}' where id = ${tipoMovimentacao.id}`

       //execute é usado quado não é necessário retornar nada ao dados do banco
       let result = await prisma.$executeRawUnsafe(SQL)

       if (result)
           return true
       else
           return false

    } catch (error) {
       return false
    }

}

// Função para atualizar no banco de dados um tipoMovimentacao existente
const selectAllTipoMovimentacao = async function() {
    try {
       
       //script SQL para retornar os dados do banco do banco
       let sql = `select * from tbl_tipoMovimentacao order by id desc`

       // Executa o script SQL no banco de dados e aguarda o retorno do banco de dados
       let result = await prisma.$queryRawUnsafe(sql)

       if (result)
           return result
       else
           return false
    } catch (error) {
       
    }
}

// Função para buscar no banco de dados um tipoMovimentacao pelo id
const selectByIdTipoMovimentacao = async function(id) {
    try {
       let sql = `select * from tbl_tipoMovimentacao where id = ${id}`

       let result = await prisma.$queryRawUnsafe(sql)

       if (result.length > 0)
           return result
       else
           return false
    } catch (error) {
       console.log(error)
    }
}             

module.exports = { insertTipoMovimentacao, deleteTipoMovimentacao, updateTipoMovimentacao, selectAllTipoMovimentacao, selectByIdTipoMovimentacao }