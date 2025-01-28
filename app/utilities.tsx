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


const ContextComponent = ({children}:ContextProps)=>{
    const contractAddress = '0xb0953c42d9d7A430D72c5e2756c96bAAcCF921b1'
     const tokenAddress = '0x3F885D6a9737A0649574dA3693E54F74eB1FAC53'
     const abi = ABI;
    const [openNav, setOpenNav] = useState<any>('-9999%')
    const {writeContractAsync} = useWriteContract()
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [resMessage, setResMessage] = useState<any>('')
     const {address} = useAccount()

  

// Constants for lock periods in seconds (since "60 days" translates to seconds)
const LOCK_PERIOD_60_DAYS = 60 * 24 * 60 * 60;
const LOCK_PERIOD_90_DAYS = 90 * 24 * 60 * 60;
const LOCK_PERIOD_180_DAYS = 180 * 24 * 60 * 60;



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

    // Convert the selected lock period to seconds
    let selectedLockPeriod: number;
    switch (lockPeriod) {
      case '60':
        selectedLockPeriod = LOCK_PERIOD_60_DAYS
        break;
      case '90':
        selectedLockPeriod = LOCK_PERIOD_90_DAYS
        break;
      case '180':
        selectedLockPeriod = LOCK_PERIOD_180_DAYS
        break;
      default:
        throw new Error('Invalid lock period selected');
    }

    // Approve tokens first
    const approvalTxHash = await writeContractAsync({
      address: tokenAddress,
      abi: Token,
      functionName: 'approve',
      args: [contractAddress, amountInFormat],
    });

    // Wait for the approval transaction to be mined
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
    const approvalTxReceipt = await provider.waitForTransaction(approvalTxHash);

    if (approvalTxReceipt.status === 1) {
      // Proceed with staking if approval succeeds
      const stakeTxHash = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: 'stake',
        args: [amountInFormat, selectedLockPeriod], // Pass the staked amount and the lock period in seconds
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
        setResMessage(error.message); 
      }
    } else {
      setResMessage("Unexpected error occurred"); 
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
            setResMessage(error.message); 
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
            setResMessage(error.message); 
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

      // Convert the values properly
      setStakerIn({
        stake: ethers.utils.formatUnits(stakers.stakedAmount, 18),  // Convert based on token decimals (assuming 18)
        reward: ethers.utils.formatUnits(stakers.rewardAmount, 18), // Convert based on token decimals (assuming 18)
        lock: (stakers.lockPeriod.toNumber() / 86400).toFixed(2),   // Convert seconds to days
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
            buyToken
            


         }}>
            {children}
         </API.Provider>
    )


}


export default ContextComponent;
