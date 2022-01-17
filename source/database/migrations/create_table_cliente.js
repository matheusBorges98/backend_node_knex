
exports.up = knex => knex.schema.createTable('cliente', table=>{
    table.increments('id')

    table.text('nome')

    table.text('ativo')

    table.text('cidade')
    
    table.text('celular')

    table.text('endereco')

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
    
    table.date('data_ingresso')

    table.date('ultimo_servico')

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('cliente')

