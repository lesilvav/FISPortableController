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
 * Send an update status of a Device.
 */
exports.updateDevice = function(device){
    socketio.emit('update-device',{
        id: device.id,
        status: device.status,
        runId: device.runId
    });
}