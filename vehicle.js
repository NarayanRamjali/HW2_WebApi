/**
 * Created by NarayanRamjali on 2/22/17.
 */
'use strict';
// Exports all the functions

module.exports = {
    getAll : getAll,
    save : save,
    getOne : getOne,
    update : update,
    delVehicle : delvehicle
};

//GET /vehicle operationId
function getAll(req, res, next) {
   // res.json({ vehicles: find()});
    res.json("hello GET");

}
//POST /vehicle operationId
function save(req, res, next) {
    //res.json({success: save(req.body), description: "Vehicle added to the list!"});
    res.json("hello POST");
}
//GET /vehicle/{id} operationId
function getOne(req, res, next) {
    //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    //var vehicle = find(id);
    //if(vehicle) {
    //    res.json(vehicle);
    //}else {
    //    res.status(204).send();
    //}
    res.json("hello ID");
}
//PUT /vehicle/{id} operationId
function update(req, res, next) {
    // var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    // var movie = req.body;
    // if(update(id, movie)){
    //     res.json({success: 1, description: "Movie updated!"});
    // }else{
    //     res.status(204).send();
    // }
    res.json("hello PUT");

}
//DELETE /movie/{id} operationId
function delvehicle(req, res, next) {
    // var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    // if(remove(id)){
    //     res.json({success: 1, description: "Vehicle deleted!"});
    // }else{
    //     res.status(204).send();
    // }
    res.json("hello DELETE");
}