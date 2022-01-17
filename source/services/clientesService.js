
const clientesModel = require('../models/clientes');

module.exports = {

   async get(data){
       try{
            const results = await clientesModel.getCliente(data);
            return results
       }catch(err){
           return err
       }
   },

   async create(data){
       let crt;
       try{
            crt = await clientesModel.createCliente(data);
           
       }catch(err){
           return err
       }

       return crt;
   },

   async delete(id){
       try{
           const result = await clientesModel.deleteCliente(id);

       }catch(err){
           return err;
       }
   }

}