import Knex from 'knex';

//Popula a base de dados com dados padrão
export async function seed(knex: Knex){
   await knex('items').insert([
    {title:'Lâmpadas', image: 'lampadas.svg'}, 
    {title:'Pilhas e Baterias', image: 'baterias.svg'}, 
    {title:'Papéis e Papelão', image: 'papeis-papelao.svg'}, 
    {title:'Resíduos Eletrônicos', image: 'eletronicos.svg'}, 
    {title:'Resíduos Orgânicos', image: 'organicos.svg'}, 
    {title:'Óleo de cozinha', image: 'oleo.svg'}, 
  ])
}

