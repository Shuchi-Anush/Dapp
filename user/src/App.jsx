import { useState,useEffect } from 'react'
import abi from "./Json/Twitter.json"; 
import './App.css'
import {ethers} from "ethers"


function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const template=async()=>{
   
      const contractAddress="0x8bFD84Db85392f7E509B343C0FC8A9a211892451";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
    
   try{
        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
      const provider=new ethers.providers.Web3Provider(ethereum);//read the bock
      const signer = provider.getSigner();
      const contract =new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
      setState({provider,signer,contract});
    }
    catch(error){
alert(error);
    }
  }
    

    template();
  },[])
  return (
    <div className="App">

   
  </div>
  )
}

export default App