
exports.up = knex => knex.schema.createTable('produto', table=>{
    table.increments('id')

    table.text('nome')

    table.text('modelo')

    table.text('cod_serie')

    table.text('fabricante')

    table.float('valor_venda')

    table.float('custo_compra')

    table.integer('quantidade')

    table.text('ativo')

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

exports.down = knex => knex.schema.droptable('produto')

