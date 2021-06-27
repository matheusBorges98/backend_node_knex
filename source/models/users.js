const knex = require('../database/');

module.exports = {

   async getUsers(data){
       try{
            let query = `
                select * from USERS u where u.ID = u.ID
           `
            data.cidade ? query += 
            ` and u.CIDADE = :cidade` : "";

            data.genero ? query += 
            ` and u.GENERO = :genero` : "";

            query += ` order by u.UPDATED_AT desc`;

            const results = await knex.raw(query,data);
            
            return results.rows
       }catch(err){
           return err
       }
       
   }

}