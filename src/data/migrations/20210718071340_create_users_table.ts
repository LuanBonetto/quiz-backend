import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function(table){
    table.uuid('id').notNullable().primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('nickname').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('picture');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}

