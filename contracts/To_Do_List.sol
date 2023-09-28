// SPDX-License-Identifier: GPL-3.0


pragma solidity ^0.8.0 ;
pragma abicoder v2;

contract todo{
    
    mapping(address => string[]) public list ;
    mapping(address => mapping(string => bool)) public content ;

    modifier duplicates(string memory name){
        require(!content[msg.sender][name], "Already Exists") ;
        _;
    }

    modifier taskLength(uint length){
        require(length > 0 && length < 16, "Min one character max of 15 are alloweds") ;
        _;
    }

    modifier isExists(string memory name){
        require(content[msg.sender][name],"Doesn't exists") ;
        _;
    }

    function add(string memory name)public duplicates(name) taskLength(bytes(name).length){
        list[msg.sender].push(name) ;
        content[msg.sender][name] = true ;
    }

    function markascompleted(string memory name) public payable isExists(name){
         delete content[msg.sender][name] ;
         bytes32  _name = keccak256(abi.encodePacked(name)) ;
         bool b = false ;
         bool pop = false ;
         bytes32 _indexName ;
         for(uint i = 0 ; i < list[msg.sender].length ; i++){
             if(!b){
                 _indexName = keccak256(abi.encodePacked(list[msg.sender][i])) ;
             }else{
                 list[msg.sender][i-1] = list[msg.sender][i] ;
             }
             if( _name == _indexName) {
                 b = true ;
                 pop = true ;
             }
         }
         list[msg.sender].pop() ;
    }

    function getTasks() public view returns(string[] memory){
        return list[msg.sender] ;
    }

}

// 0x0Ee0AF44a01aeB028616b22e77e96A4B9F600507 -> contract Address deployed on the sepolia testnet