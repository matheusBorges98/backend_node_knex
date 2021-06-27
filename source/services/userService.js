
const usersModel = require('../models/users');

module.exports = {

   async get(data){
       try{
            const results = await usersModel.getUsers(data);
            return results
       }catch(err){
           return err
       }
   }

}