
exports.up = knex => knex.schema.createTable('servico', table=>{
    table.increments('id')

    table.text('status')

    table.text('tera_retorno')

    table.text('descricao')

    table.integer('id_usuario')
        .unsigned()
        .index()
        .references('id')
        .inTable('usuarios');

    table.integer('id_venda')
        .unsigned()
        .index()
        .references('id')
        .inTable('venda');
    
    table.date('garantia_data_fim')

    table.date('data_agendada')

    table.integer('id_cliente')
        .unsigned()
        .index()
        .references('id')
        .inTable('cliente');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('servico')

