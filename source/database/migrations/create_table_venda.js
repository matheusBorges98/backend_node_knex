
exports.up = knex => knex.schema.createTable('venda', table=>{
    table.increments('id')

    table.text('situacao')

    table.float('valor_venda')

    table.integer('id_forma_pagamento')
        .unsigned()
        .index()
        .references('id')
        .inTable('forma_pagamento');

    table.integer('id_usuario')
        .unsigned()
        .index()
        .references('id')
        .inTable('usuarios');
    
    table.float('desc_acresc')

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

exports.down = knex => knex.schema.droptable('venda')

