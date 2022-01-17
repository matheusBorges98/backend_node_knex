
exports.up = knex => knex.schema.createTable('tipo_usuario', table=>{
    table.increments('id')

    table.text('nome', 150)
      .notNullable()

    table.integer('nivel_acesso').comment('1-2-3');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('tipo_usuario')

