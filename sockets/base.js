var socketio = '';

/**
 * Sets the Socket io object.
 */
exports.setIo = function(io){
    socketio = io;
}

/**
 * Return the Socket io.
 */
exports.socketio = function(){return socketio};

/**
 * Update status of a Device.
 */
exports.updateDevice = function(device){
    socketio.emit('update-device',{
        id: device.id,
        status: device.status,
        runId: device.runId
    });
}

//TODO: Don't send complete Run object to client because it could containt sensible
//data
/**
 * Add a Run in the Queue.
 */
exports.addRunQueue = function(run){
    socketio.emit('add-run-queue',{run});
}

/**
 * Remove a Run from the Queue.
 */
exports.removeRunQueue = function(run){
    socketio.emit('remove-run-queue',{run});
}