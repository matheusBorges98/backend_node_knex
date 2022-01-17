
exports.up = knex => knex.schema.createTable('agenda', table=>{
    table.increments('id')

    table.datetime('data')

    table.integer('id_usuario')
        .unsigned()
        .index()
        .references('id')
        .inTable('usuarios');

        table.integer('id_servico')
        .unsigned()
        .index()
        .references('id')
        .inTable('servico');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('agenda')

