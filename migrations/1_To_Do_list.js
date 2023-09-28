const todo = artifacts.require("./ToDo.sol") ;

module.exports = function(deployer){
    //console.log(todo) ;
    deployer.deploy(todo) ;
}