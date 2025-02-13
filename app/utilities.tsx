'use client'
import React, {createContext, useState, useEffect, ReactNode} from 'react'
import { ConType } from './UtilitiesType'
import ABI from './abi/FipcoinStaking.json'
import  Token from './abi/token.json'
export const API = createContext<ConType | undefined>(undefined)
import { ethers } from "ethers"
import { useWriteContract, useAccount } from 'wagmi'

interface ContextProps{
    children:ReactNode
}

// https://rpc.ankr.com/bsc

const ContextComponent = ({children}:ContextProps)=>{
    const contractAddress = '0x817aCe112B48a372e032f415D54Da6F1C29f4424'
     const tokenAddress = '0x3F885D6a9737A0649574dA3693E54F74eB1FAC53'
     const abi = ABI;
    const [openNav, setOpenNav] = useState<any>('-9999%')
    const {writeContractAsync} = useWriteContract()
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [resMessage, setResMessage] = useState<any>('')
     const {address} = useAccount()

  



const buyToken = async(amount:number)=>{
  try{
   setIsLoad(true);
   const usdt = '0x55d398326f99059fF775485246999027B3197955'
    

   if(amount <= 0){
    setResMessage("please insert a valid amount of tokens");
    return;
   }
   const amountInFormat = ethers.utils.parseEther(String(amount));

   const approvalTxHash = await writeContractAsync({
    address: usdt,
    abi: Token,
    functionName: 'approve',
    args: [contractAddress, amountInFormat],
  });

  // Wait for the approval transaction to be mined
  const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
  const approvalTxReceipt = await provider.waitForTransaction(approvalTxHash);


  if (approvalTxReceipt.status === 1) {
    const buyHash = await writeContractAsync({
      address: contractAddress,
      abi: abi,
      functionName: 'buyToken',
      args: [amountInFormat], 
    });

    const stakeTxReceipt = await provider.waitForTransaction(buyHash);

    if (stakeTxReceipt.status === 1) {
      setIsLoad(false)
     setResMessage(`you've succcessfully Bought FIPCOIN `)
    } else {
      setIsLoad(false)
      setResMessage( "FIPCOIN Buy transaction failed")

    }
  } else {
    setIsLoad(false)
   setResMessage('Token Approval failed')
  }





  }catch(error:any){
    setIsLoad(false)
    console.error('Full error object:', error); 

    if (error?.reason) {
      setResMessage(error.reason); 
    } else if (error?.message) {
      const revertMessageMatch = error.message.match(/reverted with the following reason:\s*(.*)/);
      if (revertMessageMatch && revertMessageMatch[1]) {
        setResMessage(revertMessageMatch[1]); 
      } else {
        setResMessage(error.message); 
      }
    } else {
      setResMessage("Unexpected error occurred"); 
    }
    setIsLoad(false); 
  }
}


const stake = async (amount: number, lockPeriod: string) => {
  try {
    setIsLoad(true)
    if (amount <= 0) {
      setResMessage("Please insert a valid amount of tokens");
      return;
    }

    const amountInFormat = ethers.utils.parseEther(String(amount));

    let  selectedLockPeriod:any = 360; // ✅ Matches smart contract
     
    
    // Approve tokens first
    const approvalTxHash = await writeContractAsync({
      address: tokenAddress,
      abi: Token,
      functionName: 'approve',
      args: [contractAddress, amountInFormat],
    });

    console.log('Lock Period Sent:', selectedLockPeriod);


    // Wait for the approval transaction to be mined
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
    const approvalTxReceipt = await provider.waitForTransaction(approvalTxHash);

    if (approvalTxReceipt.status === 1) {
      // Proceed with staking if approval succeeds
      const stakeTxHash = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: 'stake',
        args: [amountInFormat, ethers.utils.parseEther(String(selectedLockPeriod))], // Pass the staked amount and the lock period in seconds
      });

      const stakeTxReceipt = await provider.waitForTransaction(stakeTxHash);

      if (stakeTxReceipt.status === 1) {
        setIsLoad(false)
       setResMessage("you've succcessfully staked ")
      } else {
        setIsLoad(false)
        setResMessage( "Staking transaction failed")

      }
    } else {
      setIsLoad(false)
     setResMessage('Token Approval failed')
    }
  } catch (error: any) {
    setIsLoad(false)
    console.error('Full error object:', error); 

    if (error?.reason) {
      setResMessage(error.reason); 
    } else if (error?.message) {
      const revertMessageMatch = error.message.match(/reverted with the following reason:\s*(.*)/);
      if (revertMessageMatch && revertMessageMatch[1]) {
        setResMessage(revertMessageMatch[1]); 
      } else {
        setIsLoad(false)
        setResMessage( "Staking transaction failed")
      }
    } else {
      setResMessage( "Staking transaction failed")

    }
    setIsLoad(false); 
  }
};


const unstake = async () => {
    try {
      setIsLoad(true)
      const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
    
        const stakeTxHash = await writeContractAsync({
          address: contractAddress,
          abi: abi,
          functionName: 'withdraw',
        
        });

        const unstakeReciept = await provider.waitForTransaction(stakeTxHash);
  
        if (unstakeReciept.status === 1) {
          setIsLoad(false)
          setResMessage('you Withdrawn successfully ');
        } 

    }catch (error: any) {
      setIsLoad(false)
        console.error('Full error object:', error); 
        if (error?.reason) {
          setResMessage(error.reason); 
          setIsLoad(false)
        }
        // In case `error.message` holds the message
        else if (error?.message) {
        
          const revertMessageMatch = error.message.match(/reverted with the following reason:\s*(.*)/);
          if (revertMessageMatch && revertMessageMatch[1]) {
            setResMessage(revertMessageMatch[1]); 
            setIsLoad(false)
          } else {
            setResMessage( "Unstake transaction failed")

            setIsLoad(false)
          }
        } 
  
        else {
            setResMessage("unexpected error"); 
            setIsLoad(false)
        }
      }
      
  };
     


  const earlyWithdraw = async () => {
    try {
        setIsLoad(true)

      const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
    
        const stakeTxHash = await writeContractAsync({
          address: contractAddress,
          abi: abi,
          functionName: 'earlyWithdraw',
        
        });

        const unstakeReciept = await provider.waitForTransaction(stakeTxHash);
  
        if (unstakeReciept.status === 1) {
          setIsLoad(false)
          setResMessage('Your Early Withdrawn successed with 5% penalty from rewards');
        } 

    }catch (error: any) {
      setIsLoad(false)
        console.error('Full error object:', error); 
        if (error?.reason) {
          setResMessage(error.reason); 
          setIsLoad(false)
        }
        // In case `error.message` holds the message
        else if (error?.message) {
        
          const revertMessageMatch = error.message.match(/reverted with the following reason:\s*(.*)/);
          if (revertMessageMatch && revertMessageMatch[1]) {
            setResMessage(revertMessageMatch[1]); 
            setIsLoad(false)
          } else {
            setResMessage( "Early Withdraw transaction failed")

            setIsLoad(false)
          }
        } 
  
        else {
            setResMessage("unexpected error"); 
            setIsLoad(false)
        }
      }
  };
     






const [totalStaked, setTotalStaked] = useState<any>()
const [stakers, setStakers] = useState<any>([])
const [stakerInfo, setStakerInfo] = useState<any>([])

const [stakerIn, setStakerIn] = useState<any>({
  stake:'',
  reward:'',
  lock:'',
  remaining:''

})


useEffect(()=>{
    const getTotalStaked = async()=>{
  
        try{
          
       const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc')
       const contract = new ethers.Contract(contractAddress, ABI, provider)
    
       const staked =  await contract.getTotalStaked()
       const actualStaked = ethers.utils.formatEther(staked)
         setTotalStaked(actualStaked)
    
        }catch(error){
            console.log(error)
        }
    
    }


    const getTotalStakers = async()=>{
  
        try{
          
       const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc')
       const contract = new ethers.Contract(contractAddress, ABI, provider)
    
       const stakers =  await contract.getAllStakers()
       
         setStakers(stakers)
    
        }catch(error){
            console.log(error)
        }
    
    }



 
    getTotalStakers()
    getTotalStaked()
}, [])




useEffect(() => {
  const getStakerInfo = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
      const contract = new ethers.Contract(contractAddress, ABI, provider);

      const stakers = await contract.viewStakerInfo(address);

      setStakerInfo(stakers);

    
      setStakerIn({
        stake: ethers.utils.formatUnits(stakers.stakedAmount, 18),  // Convert based on token decimals (assuming 18)
        reward: ethers.utils.formatUnits(stakers.rewardAmount, 18), // Convert based on token decimals (assuming 18)
        lock: (Number(stakers.lockPeriod) / 86400).toFixed(2),   // Convert seconds to days
        remaining: (stakers.timeRemaining.toNumber() / 86400).toFixed(2),  // Convert seconds to days
      });
    } catch (error) {
      console.log(error);
    }
  };

  getStakerInfo();
}, [address]);






console.log(stakerIn, 'data')


    return(

         <API.Provider value={{openNav, setOpenNav, contractAddress, abi, stake, totalStaked,
            stakers,
            unstake,
            earlyWithdraw,
            isLoad, setIsLoad,
            resMessage,
            setResMessage,
            stakerIn,
            buyToken, 
            stakerInfo
            


         }}>
            {children}
         </API.Provider>
    )


}


export default ContextComponent;
