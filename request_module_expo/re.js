'use strict'
const r = require('request')
const info=require('./config')
console.log(`json values, ==>${info.url}`)
r(info.url,(err,res,body) => {
	console.log(`error message ==>${err}
		   response ===>${JSON.stringify(res)}
  content of the body ===>${JSON.stringify(body)}`);
})
