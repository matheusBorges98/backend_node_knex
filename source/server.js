const express = require('express')
const knex = require('./database')
const routes = require ('./routes')

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

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({ error: error.message})
})

app.listen(3333, (err)=>{
    
    console.log('\n######################################################################');
	console.log('---------------------------API VALLECIA::-------------------------------');
	console.log('==> ' + new Date());

	if (err) {
		console.log('==> Não foi possível usar a porta 3333 ', err);
	} else {
		console.log('-----------------==> Rodando na porta 3333 <==----------------------');
	}

	console.log('######################################################################\n');

    
});

module