/*jslint node:true*/

'user strict';
import { db }  from './connection';

async function saveToDB(collection, data){
	try {
		return await db.collection(collection).insert(data)
	} catch (error) {
		return error
	}
}
async function updateDB(collection, qs, us){
	try {
		return await  db.collection(collection).update(qs, {$set:us}, {upsert : false})
	} catch (error) {
		return error
	}
}
function getFromDB(collection, qs, paging, sort){
	return db.collection(collection).find(qs, {_id:0}, paging).sort(sort).toArray();
}

function findCount(collection, qs){
 	return db.collection(collection).find(qs).count();
}
module.exports = {
	saveToDB,
	getFromDB,
	updateDB,
	findCount
};
