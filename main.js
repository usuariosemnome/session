const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo');
var signature = require('cookie-signature')
var crypto = require('crypto')



 // console.log(crypto.createHash('sha1').update(JSON.stringify({set:'eita acho que um cookie'}), 'utf8').digest('hex'))
 // console.log(crypto.createHash('sha1').update(JSON.stringify({}), 'utf8').digest('hex'))
const app = express()
const { MongoClient, ServerApiVersion, Mongo } = require('mongodb');
const uri = "mongodb+srv://gabriel:gabriel@cluster0.sesl7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


/*console.log(Object.getOwnPropertyNames(MongoStore.create({ mongoUrl: uri,dbName: 'sample_mflix' })))
console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')
*/



  	






async function asd(){
	await client.connect();
	
	const database = client.db('sample_mflix');
    const movies = database.collection('movies');
	//console.log(client.startSession())
	const ses = client.startSession()
	//console.log(ses.getDatabase(database.getName()))
	function aaa(k){
				//console.log(k)
		return function aaa(req,res,next){
			next()
		}
	}
app.use(aaa(210))



app.use(session({
		secret: "dasdada",
		resave: false,
		store: MongoStore.create({
	    mongoUrl: uri,
	    dbName: 'sample_mflix'
  	}),
		saveUninitialized: false,
		name:    'cookieTest',
		cookie: {
			httpOnly:false,
			maxAge: 1000 * 60 * 60 * 24 
		}
	}))

app.get('/set',(req,res)=>{	
	req.session.set = 'eita acho que um cookie'
	res.send('123')
})

app.get('/a',(req,res)=>{	
	
	res.send('/')
})

app.get('/b',(req,res)=>{	
	req.session.b = 'b'
	res.send('/')
})

app.get('/',(req,res,next)=>{
	//req.session.nome = 'qqqqqqqqqqqq'
	//console.log(req.session.save())
			next('esta errado')
	
},async (err, req,res,next)=>{
	//req.session.sobrenome = 'paeqwqqqqqqqqqqqqqqqqqqqqqeqweulo'
	//req.session.resto = 'qweqweqwqqqqqqqqqqqqqqqqqqqqqqqqqeqwe'
	//console.log(req.session)
	console.log(req.session)
	await client.connect();
	const database = await  client.db('sample_mflix');
	
	//console.log(await database.collection('sessions').find({}).toArray())
	//console.log(3)
			
	
},(req,res)=>{
	req.session.resto = 'qqqqqqqqqqqqqqqqqq'
	console.log('asd')
	//console.log(Object.getOwnPropertyNames(req.session))
	//console.log(req.session.prototype)

	res.send(`<h1>${String(req.session.set)}</h1>
		<h1>${String(req.sessionID)}</h1>
		<a href="/set">set</a>
		<button class="limpar">limpar cookie</button>
		<script>
		console.log(1)
		document.querySelector('.limpar').addEventListener('click',()=>{
			cookieStore.delete('cookieTest')
		})
		</script>
		`)
})

app.get('/dados', async (req,res)=>{
	await client.connect();
	const database = await  client.db('sample_mflix');
	
	console.log(await database.collection('session').find({}).toArray())
})


app.listen("3000", ()=>{console.log("ok")})

	
	return movies
}
asd()


