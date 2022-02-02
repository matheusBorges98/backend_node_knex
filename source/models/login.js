const knex = require('../database');
require('dotenv').config()


module.exports = {

   async logar(data){
       
       try{
            const result = knex.select('*').table('usuarios').where({login: data.login, senha:data.senha})
           
           return result

       }catch(err){
           return err
       }
       
   },

//    async createUsers(data){
//        let result;
//        try{
//             result = await knex('usuarios').insert(data);

//             result = {"Status":"Created", "Code":400}

//        }catch(err){
//            console.log(err)
//            return {"Error ":err.detail}
//        }

//        return result;
//    },

//    async deleteUsers(id){
//        try{
//            const result = await knex('usuarios')
//             .where({id})
//             .del()
//        }catch(err){
//           return {"Error ":err.detail}
//        }
//    }



}