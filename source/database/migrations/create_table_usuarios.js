
exports.up = knex => knex.schema.createTable('usuarios', table=>{
    table.increments('id')

    table.text('nome', 150)
      .notNullable()

    table.text('email', 150)
      .notNullable()

    table.text('login', 50)
      .notNullable()

    table.text('senha')

    table.text('uf', 2)

    table.text('cidade')

    table.text('nome_fantasia')

    table.text('cpf_cnpj')

    table.integer('tipo_usuario')
    .unsigned()
    .index()
    .references('id')
    .inTable('tipo_usuario');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.droptable('usuarios')

