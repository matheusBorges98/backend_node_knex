const knex = require('../database');

module.exports = {

   async getUsers(data){
       try{
            let query = `
                select * from usuarios u order by u.updated_at DESC
           `

            const results = await knex.raw(query,data);

            return results[0]
       }catch(err){
           return err
       }
       
   },

   async createUsers(data){
       let result;
       try{
            result = await knex('usuarios').insert(data);

            result = {"Status":"Created", "Code":400}

       }catch(err){
           console.log(err)
           return {"Error ":err.detail}
       }

       return result;
   },

   async deleteUsers(id){
       try{
           const result = await knex('usuarios')
            .where({id})
            .del()
       }catch(err){
          return {"Error ":err.detail}
       }
   }



}