
const usersModel = require('../models/users');

module.exports = {

   async get(data){
       try{
            const results = await usersModel.getUsers(data);
            return results
       }catch(err){
           return err
       }
   },

   async create(data){
       let message;
       try{
            const results = await usersModel.createUsers(data);
            console.log(results)
            message = results;
       }catch(err){
           throw err;
       }
       return { message }
   },

   async delete(id){
       let message;
       try{
           const result = await usersModel.deleteUsers(id);

           message = result;
       }catch(err){
           throw err;
       }
       return { message }
   }

}