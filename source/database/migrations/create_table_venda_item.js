
exports.up = knex => knex.schema.createTable('venda_item', table=>{
    table.increments('id')

    table.text('situacao')

    table.float('valor_venda')

    table.integer('id_venda')
        .unsigned()
        .index()
        .references('id')
        .inTable('venda');

    table.integer('id_produto')
        .unsigned()
        .index()
        .references('id')
        .inTable('produto');

    table.integer('id_cliente')
        .unsigned()
        .index()
        .references('id')
        .inTable('cliente');
    
    table.float('quantidade')

    table.integer('id_usuario')
        .unsigned()
        .index()
        .references('id')
        .inTable('usuarios');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('venda_item')

