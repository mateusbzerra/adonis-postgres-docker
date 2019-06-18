'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PostSchema extends Schema {
	up() {
		this.create('posts', (table) => {
			table.increments();
			table.string('user', 80).notNullable().unique();
			table.text('content').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('posts');
	}
}

module.exports = PostSchema;
