"use client"
import React, {useContext} from 'react'
import Footer from "@/app/_components/Footer"
import Nav from "@/app/_components/Nav"
import ReuseImage from "@/app/_components/ReuseImage"
import ConnectButton from "@/app/Connect"
import LogoImg from '@/app/images/logo.png'
import Loading from '@/app/images/loading.gif'
import { useState } from "react"
import { useAccount } from "wagmi"
import {API} from '@/app/utilities'
import { ethers } from 'ethers'
import {openModal} from "../../WalletProvider"

const Tokenomics = ()=>{
 
 const {address} = useAccount()
 const [sstake, setSstake] = useState<boolean>(true)
const  [tabActive, setTabActive] = useState<boolean>(true)
const [inactiveTab, setInactiveTab] = useState<boolean>(false)
const [amount, setAmount] = useState<any>()
const [duration, setDuration] = useState<any>()


const context = useContext(API)
if(!context){
   throw new Error("error from staking context")
}
const {stake, totalStaked, stakers, unstake, earlyWithdraw, isLoad, resMessage, setResMessage, stakerIn} = context;
  



const Staking = async()=>{
   await stake(amount, duration)
}

 const switchStake = ()=>{
    setSstake(true)
    setTabActive(true)
    setInactiveTab(false)
 }

 const switchUnstake = ()=>{
    setSstake(false)
  setTabActive(false)
  setInactiveTab(true)
 }


    return(
        <>

{
        isLoad == true?   <div className="w-full z-50 h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
        <ReuseImage height={250} width={250} src={Loading} alt="loading" cl="w-[250px] h-[250px] object-cover rounded-full" />
    </div>:''
    }
      {
        resMessage != ''?   <div className="w-full z-50 h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
            <div className="w-[360px] bg-white h-auto p-10 rounded-xl flex justify-center items-center">
                   <div className="w-full flex justify-center items-center flex-col">
                     <h2 className="text-black text-xl font-black text-center">
                        {resMessage}
                     </h2>
                     <button onClick={()=> setResMessage('')} className="bg-black mt-4 px-4 rounded-xl py-2 text-white font-black" data-translate data-original-text="okay">Okay</button>

                   </div>
            </div>
    </div>:''
    }




        <Nav isWallet={true}/>


        <div className="container px-3 py-10 mx-auto gap-6 flex flex-col md:flex-row justify-center md:justify-between items-center my-[50px] ">
         
         
        <div className="left w-full md:w-[50%] ">
               <div className="btGroup w-full flex items-center">
                   <button onClick={switchStake} style={{color:tabActive === true ? 'white':'gray', textDecoration:tabActive === true ? 'underline':'none'}} className="text-2xl font-black ">Stake</button>
                   <button onClick={switchUnstake} style={{color:inactiveTab === true ? 'white':'gray', textDecoration:inactiveTab === true ? 'underline':'none'}} className="text-2xl font-black  ml-8">Unstake</button>
               </div>


               {
                sstake === true ?
                  <>
                         {/* staking form start here */}
               <div className="bg-[#2B2727] rounded-xl px-4 mt-4 py-6">
                <div className="w-full flex justify-between items-center">
                <h2 className="font-black text-2xl ">Stake</h2>
                <h2 className="font-black text-2xl ">Amount</h2>
                </div>
               <div className="mt-4 w-full flex justify-between items-center">
                   <div className="left_inner">
                        <div className="flex items-center">
                        <ReuseImage src={LogoImg} height={30} width={30} alt="log" cl="logo"/>
                        <h2 className="font-black text-3xl ml-4">FIPCOIN</h2>
                        </div>
                        <p className="text-[#EED57B]">Stake FIPCOIN Token</p>
                   </div>
                   <div className="">
                      <input onChange={(e)=> setAmount(e.target.value)} className="ml-3 border-[2px] w-[160px] md:w-[300px] outline-none bg-transparent border-[#EED57B] rounded-xl py-3 px-4 font-black text-3xl" type="number" placeholder="0.0"/>
                   </div>
               </div>

               <div className=" flex justify-end items-center mt-5">
               <select onChange={(e)=>setDuration(e.target.value)} className="bg-transparent outline-none ">
                        <option className=" text-lg font-black bg-black outline-none text-center" >Select Lock Duration</option>
                        <option value={60} className=" text-lg font-black bg-black outline-none" >60 days 4% FIPCOIN Rewards</option>
                        <option value={90} className=" text-lg font-black bg-black outline-none" >90 days 7% FIPCOIN Rewards</option>
                        <option value={180} className=" text-lg font-black bg-black outline-none" >180 days 16% FIPCOIN Rewards</option>
                     </select>
                   </div>
                   <div className=" flex justify-end items-center mt-5">
                    
                     {
                        address ? <button onClick={()=> Staking()} className="bg-[#EED57B] text-black font-black hover:bg-black hover:border-black hover:text-white  border-[2px] border-[#EED57B] rounded-xl px-10 py-2">Stake</button>:
                  <button onClick={()=> openModal()} className="px-7 py-2 rounded-xl border-[#EED57B]  border-[2px] ">Connect Wallet</button>
                  
                  }
                   </div>
               
           </div>
           {/* staking form end here */}
                  
                  </>
:
<div className="bg-[#2B2727] rounded-xl px-4 mt-4 py-6">
<div className="w-full flex justify-between items-center">
                <h2 className="font-black text-2xl ">Unstake</h2>
                <h2 className="font-black text-xs text-end">early withdraw 5% penelty from rewards</h2>
                </div>
<div className="mt-4 w-full flex justify-between items-center">
    <div className="left_inner">
         <div className="flex items-center">
         <ReuseImage src={LogoImg} height={30} width={30} alt="log" cl="logo"/>
         <h2 className="font-black text-3xl ml-4">FIPCOIN</h2>
         </div>
         <p className="text-[#EED57B]">Stake FIPCOIN Token</p>
    </div>
    <div className="">

    {
         address ? <button onClick={()=> unstake()} className="bg-[#EED57B]  font-black hover:bg-black hover:border-black hover:text-white  border-[2px] border-[#EED57B] text-black rounded-xl px-10 py-2">Unstake</button>:
         <button onClick={()=> openModal()} className="px-7 py-2 rounded-xl border-[2px] border-[#EED57B] ">Connect Wallet</button>
                  
      }
   
    </div>
</div>
    
    <div className=" flex justify-end items-center mt-2">

    {
         address ? <button onClick={()=> earlyWithdraw()} className="bg-[#EED57B] text-black font-black hover:bg-black hover:border-black hover:text-white  border-[2px] border-[#EED57B] rounded-xl px-10 py-2 ml-2">Early Unstake</button>:
         ''
      }
    
    </div>

</div>


               }









  
              {
               address ?
               <div className="bg-[#2B2727]  rounded-xl px-4 mt-4 py-6">
               <h2 className="w-full text-center font-black text-2xl ">Your Records</h2>
               <div className="mt-4 w-full">
                  <div className="w-full my-3 flex justify-between items-center ">
                     <p>Staked Amount </p>
                     <p>{stakerIn.stake}</p>
                  </div>

                  <div className="w-full my-3 flex justify-between items-center ">
                     <p>Rewards </p>
                     <p>
  {stakerIn?.reward ? Number(stakerIn.reward).toFixed(2) : '0.00'}
</p>

                  </div>

                  <div className="w-full my-3 flex justify-between items-center ">
                     <p>Locked Period </p>
                     <p>{stakerIn.lock} days</p>
                  </div>

                  <div className="w-full my-3 flex justify-between items-center ">
                     <p>Remaining Days </p>
                     <p>{stakerIn.remaining} days</p>
                  </div>
                   
                  </div>
           </div>

:''
              }






       
             


              
               <div className="bg-[#2B2727] h-[320px] rounded-xl px-4 mt-4 py-6">
                   <h2 className="w-full text-center font-black text-2xl "> Staking Rewards</h2>
                   <div className="mt-4 w-full">
                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>60 Days </p>
                         <p>4% FIPCOIN Rewards</p>
                      </div>

                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>90 Days </p>
                         <p>7% FIPCOIN Rewards</p>
                      </div>

                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>180 Days </p>
                         <p>16% FIPCOIN Rewards</p>
                      </div>
                       
                       <div className="mt-4 h-[2px] bg-white ">
                        <div className="h-5"/>
                     

                      <div className="w-full my-3 flex justify-between items-center ">
                         <p className="font-black">Total Staked FIPCOIN</p>
                         <p className="font-black">{totalStaked}</p>
                      </div>
                       </div>

                   </div>
               </div>



           </div>

         
         
         
             <div className="left w-full md:w-[50%] ">
                  <h2 className="text-5xl font-black text-left">Staking</h2>

                  <div className="wrapper mt-10">
                       <div className="inner_wrapper">
                           <h2 className="font-black flex items-center text-xl md:text-3xl text-left"><span className="font-black text-gray-500 text-xl  "><div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#EED57B]">1</div></span> <span className="ml-4 ">Don't have FIPCOIN Tokens?</span></h2>
                             <p className="ml-8 md:ml-11">Get <span className="text-[#EED57B] ">FIPCOIN Tokens</span></p>
                      </div>

                      <div className="inner_wrapper my-6">
                           <h2 className="font-black text-xl md:text-3xl flex items-center text-left"><div className="font-black text-gray-500 text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#EED57B]">2</div> <span className="ml-4 ">Stake</span></h2>
                             <p className="ml-8 md:ml-11"> <span className="text-[#EED57B] ">Stake your FIPCOIN Tokens</span></p>
                      </div>

                      <div className="inner_wrapper">
                           <h2 className="font-black text-xl md:text-3xl flex items-center text-left"><div className="font-black text-gray-500 text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#EED57B]">3</div> <span className="ml-4 ">   
                           Unstake your Rewards
                              </span></h2>
                             <p className="ml-8 md:ml-11"> <span className="text-[#EED57B] ">
                             Unstake your FIPCOIN Tokens and Withdraw to your Wallet
                              </span></p>
                      </div>
                  </div>
             </div>

           
           

        </div>
    

        <Footer/>
        
        
        </>
    )
}


export default Tokenomics
