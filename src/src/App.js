import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import css from './App.module.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import todo from './ToDo.json';
const contractAddress = "0x94AE0E9D8CeA6133Ce22cF8406184B039Cb902Fa" ;
export const addressContext = React.createContext() ;
export const contractContext = React.createContext() ;
function App() {
  const [address, changeAddress] = useState("") ;
  const [contract, changeContract] = useState({}) ;
  const [isthere, change] = useState(false) ;
  useEffect(() =>{
    if(Object.keys(contract).length === 0){
      const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')) ;
      const instance = new web3.eth.Contract(todo.abi, contractAddress) ;
      changeContract(instance) ;
      const Main = async () =>{
        if (typeof window.ethereum !== 'undefined') {
          // Initialize Web3 with the provider from MetaMask
          const web3 = new Web3(window.ethereum);
        
          // Request access to the user's MetaMask account
          window.ethereum.enable()
            .then(accounts => {
              // `accounts` is an array of connected accounts
              const userAddress = accounts[0];
              changeAddress(userAddress) ;
              // Now you can use `web3` to interact with the blockchain
              console.log('Connected to MetaMask. User address:', userAddress);
            })
            .catch(error => {
              console.error('Error connecting to MetaMask:', error);
            });
        } else {
          change(true)
        }
      } ;Main() ;
    }
  }, [address, contract]) ;
  return (
    <addressContext.Provider value={address}>
      <contractContext.Provider value={contract}>
      <div className={css.app}>
      <Header />
      <Body />
      {
        isthere? console.log("Meta Mask not Found") : console.log(`The address was ${address}`)
      }
    </div>
      </contractContext.Provider>
    </addressContext.Provider>
  );
}

export default App;
