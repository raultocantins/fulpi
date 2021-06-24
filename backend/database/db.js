const config=require('./knexfile.js')
const knex=require('knex')(config)
const { attachPaginate } = require('knex-paginate');
attachPaginate();
module.exports=knex