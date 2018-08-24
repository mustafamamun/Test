/*jslint node:true*/
'use strict';
import { MongoClient } from 'mongodb';
import  config from 'config';
const url = 'mongodb://' + config.get('mongoConfig.host') + ':' + config.get('mongoConfig.port') + '/'+ config.get('mongoConfig.db');
module.exports.init = async function(options){
	try {
		const db = await await MongoClient.connect(url);
		module.exports.db = db;
	} catch(e) {
		console.log(e)
	}
};
