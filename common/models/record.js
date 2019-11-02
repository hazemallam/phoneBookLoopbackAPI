'use strict';

module.exports = function(Record) {
    Record.validatesLengthOf('name', {min: 3, message: {min: 'name must be greater than 3 chars'}});
    Record.validatesUniquenessOf('phoneNumber');

    Record.findRecord = function(name, callback){
        Record.find({
            where:{
                name:{
                    eq : name
                }
            }
        }, callback);
    }

    Record.remoteMethod("findRecord",{
        accepts:{
            arg: 'name',
            type:'string'
        },
        returns:{
            arg: 'records',
            type:'array'
        },
        http:{
            path: '/find-record',
            verb: 'get'
        }
    });
   
};
