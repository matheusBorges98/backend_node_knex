
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
       let crt;
       try{
            crt = await usersModel.createUsers(data);
           
       }catch(err){
           return err
       }

       return crt;
   },

   async delete(id){
       try{
           const result = await usersModel.deleteUsers(id);

       }catch(err){
           return err;
       }
   }

}