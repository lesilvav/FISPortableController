/**
 * Represents a Run
 */

function Run(req){
    this.id = req.query.RUNID;
    this.URLTOBUILD = req.query.URLTOBUILD;
    this.USERNAME = req.query.USERNAME
}

module.exports