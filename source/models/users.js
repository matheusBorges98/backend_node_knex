const knex = require('../database/');

module.exports = {

   async getUsers(data){
       try{
            let query = `
                select * from users
           `
            // data.cidade ? query += 
            // ` and u.CIDADE = :cidade` : "";

            // data.genero ? query += 
            // ` and u.GENERO = :genero` : "";

            // query += ` order by u.UPDATED_AT desc`;

            const results = await knex.raw(query,data);
            console.log(results)
            return results[0]
       }catch(err){
           return err
       }
       
   },

   async createUsers(data){
       let result;
       try{
            result = await knex('users').insert(data);

            result = {"Status":"Created", "Code":400}

       }catch(err){
           console.log(err)
           return {"Error ":err.detail}
       }

       return result;
   },

   async deleteUsers(id){
       try{
           const result = await knex('users')
            .where({id})
            .del()
       }catch(err){
          return {"Error ":err.detail}
       }
   }



}