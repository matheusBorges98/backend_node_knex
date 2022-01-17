
exports.up = knex => knex.schema.createTable('forma_pagamento', table=>{
    table.increments('id')

    table.text('nome')

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('forma_pagamento')

