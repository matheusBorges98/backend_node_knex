const express = require('express');
const knex = require('./database');
const routes = require ('./routes/routes.js');

require('dotenv').config()

const PORT = process.env.PORT || 3333;

const app = express()

app.use(express.json())
app.use(routes)


//notFound
app.use((req, res,next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

//catch all

app.use((err, req, res, next)=>{
	console.error(err.message)
    res.status(err.status || 500).send({status: err.status, message: err.message})
})

app.listen(PORT, (err)=>{
    
    console.log('\n######################################################################');
	console.log('---------------------------API VALLECIA::-------------------------------');
	console.log('==> ' + new Date());

	if (err) {
		console.log('==> Não foi possível usar a porta ', PORT, err);
	} else {
		console.log('-----------------==> Rodando na porta', PORT, ' <==----------------------');
	}

	console.log('######################################################################\n');

    
});

module