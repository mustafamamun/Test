/*jslint node:true*/
'use strict';
import query from '../services/db/query';
import createError from 'http-errors';
import config from 'config';
import { ObjectId } from 'mongodb';

const collectionName = config.get('mongoConfig.eventCollection');

//Controller function
function getEvents(req, res, next) {
  query.getFromDB(collectionName, {}, {_id:0})
  .then((result)=>{
    return res.status(200).json(result);
  })
  .catch((err)=>{ return next(createError(err.status || 500, err.message || 'Internal server errror')); });
}

function postEvent(req, res, next){
  const eventDetails = Object.assign({}, {_id : new ObjectId(), title : req.body.title, description: req.body.description, place : req.body.place, startTime: req.body.startTime, endTime: req.body.endTime});
  query.saveToDB(collectionName, eventDetails)
  .then((result)=>{ return res.status(201).json({title : req.body.title, description:    req.body.description, place : req.body.place, startTime: req.body.startTime, endTime: req.body.endTime}); })
  .catch((err)=>{ return next(createError(err.status || 500, err.message || 'Internal server errror')); });
}

module.exports = {
  getEvents,
  postEvent
};