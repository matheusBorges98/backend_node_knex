
const loginModel = require('../models/login');
const jwt = require('jsonwebtoken');

module.exports = {

   async logar(data){
        let userLogado = []
        try{
            userLogado = await loginModel.logar(data);
            if(userLogado.length == 0){
                userLogado = [{
                  status: 204,
                  message:'Dados inválido'
                }]

            }else{
                let login           = userLogado[0].login;
                let tokenCode       = jwt.sign({ login }, process.env.SECRET, {expiresIn: 3600});
                userLogado[0].token = tokenCode
            }
        }catch(err){
            return err
        }

        return userLogado;
   },

//    async create(data){
//        let crt;
//        try{
//             crt = await clientesModel.createCliente(data);
           
//        }catch(err){
//            return err
//        }

//        return crt;
//    },

//    async delete(id){
//        try{
//            const result = await clientesModel.deleteCliente(id);

//        }catch(err){
//            return err;
//        }
//    }

}