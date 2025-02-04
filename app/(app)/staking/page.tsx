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


        <div className="container px-3 py-10 mx-auto gap-6 flex flex-col md:flex-row justify-center md:justify-between items-start my-[50px] ">
         
         
        <div className="left w-full md:w-[50%] ">
               <div className="btGroup w-full flex items-center">
                   <button onClick={switchStake} style={{color:tabActive === true ? 'black':'white', background:tabActive === true ? '#FFD77B':'transparent', }} className="text-2xl px-10 py-2 rounded-lg ">Stake</button>
                   <button onClick={switchUnstake} style={{color:inactiveTab === true ? 'black':'white',  background:inactiveTab === true ? '#FFD77B':'transparent',  }} className="text-2xl px-10 py-2 rounded-lg ml-3">Unstake</button>
               </div>


               {
                sstake === true ?
                  <>
                         {/* staking form start here */}
               <div className="bg-black/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-4 mt-4 py-6">
                <div className="w-full flex justify-between items-center">
                <h2 className="font-black text-2xl ">Stake</h2>
                <h2 className="font-black text-2xl ">Amount</h2>
                </div>
               <div className="mt-4 w-full flex justify-between items-center">
                   <div className="left_inner">
                        <div className="flex items-center">
                        <ReuseImage src={LogoImg} height={30} width={30} alt="log" cl="logo"/>
                        <h2 className="font-black text-md ml-1">FIPCOIN</h2>
                        </div>
                        <p className="text-[#FFD77B] text-[13px]">Stake FIPCOIN</p>
                   </div>
                   <div className="">
                      <input onChange={(e)=> setAmount(e.target.value)} className="ml-3 border-[2px] w-[160px] md:w-[160px] outline-none bg-transparent border-[#FFD77B] rounded-xl py-2 px-4 font-black text-3xl" type="number" placeholder="0.0"/>
                   </div>
               </div>

               <div className=" flex justify-end items-center mt-5">
               <select onChange={(e)=>setDuration(e.target.value)} className="bg-transparent w-[191px] outline-none ">
                        <option className=" text-lg font-black bg-black outline-none text-center" >Select Lock Duration</option>
                        <option value={90} className=" text-lg font-black bg-black outline-none" >90 days 1% FIPCOIN Rewards</option>
                        <option value={180} className=" text-lg font-black bg-black outline-none" >180 days 1% FIPCOIN Rewards</option>
                        <option value={360} className=" text-lg font-black bg-black outline-none" >360 days 1% FIPCOIN Rewards</option>
                     </select>
                   </div>
                   <div className=" flex justify-end items-center mt-5">
                    
                     {
                        address ? <button onClick={()=> Staking()} className="bg-[#FFD77B] text-black font-black hover:bg-white hover:border-black hover:text-black  border-[2px] border-[#FFD77B] rounded-xl w-[160px] py-2">Stake </button>:
                  <button onClick={()=> openModal()} className="w-[160px] text-black py-2 rounded-xl bg-[#FFD77B]  ">Connect Wallet</button>
                  
                  }
                   </div>
               
           </div>
           {/* staking form end here */}
                  
                  </>
:
<div className="bg-black/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-4 mt-4 py-6">
<div className="w-full flex justify-between items-center">
                <h2 className="font-black text-2xl ">Unstake</h2>
                <h2 className="font-black text-[10px] md:text-xs text-end">early withdraw 5% penelty from rewards</h2>
                </div>
<div className="mt-4 w-full flex justify-between items-center">
    <div className="left_inner">
         <div className="flex items-center">
         <ReuseImage src={LogoImg} height={30} width={30} alt="log" cl="logo"/>
         <h2 className="font-black text-md ml-1">FIPCOIN</h2>
         </div>
         <p className="text-[#FFD77B] text-[13px]">Unstake FIPCOIN</p>
    </div>
    <div className="">

    {
         address ? <button onClick={()=> unstake()} className="bg-[#FFD77B]  font-black hover:bg-white hover:border-black hover:text-black  border-[2px] border-[#FFD77B] text-black rounded-xl w-[160px] py-2">Unstake</button>:
         <button onClick={()=> openModal()} className="px-2 py-2 rounded-lg text-black bg-[#FFD77B] ">Connect Wallet</button>
                  
      }
   
    </div>
</div>
    
    <div className=" flex justify-end items-center mt-2">

    {
         address ? <button onClick={()=> earlyWithdraw()} className="bg-[#FFD77B] text-black font-black hover:bg-white hover:border-black hover:text-black  border-[2px] border-[#FFD77B] rounded-xl w-[160px] py-2 ml-2">Early Unstake</button>:
         ''
      }
    
    </div>

</div>


               }









  
              {
               address ?
               <div className="bg-black/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-4 mt-4 py-6">
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






       
             


              
               <div className="bg-black/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg h-[320px]  px-4 mt-4 py-6">
                   <h2 className="w-full text-center font-black text-2xl "> Staking Rewards</h2>
                   <div className="mt-4 w-full">
                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>90 Days </p>
                         <p>1% FIPCOIN Rewards</p>
                      </div>

                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>180 Days </p>
                         <p>1% FIPCOIN Rewards</p>
                      </div>

                      <div className="w-full my-3 flex justify-between items-center ">
                         <p>360 Days </p>
                         <p>1% FIPCOIN Rewards</p>
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

         
         
         
             <div className="left w-full md:w-[50%] mt-[60px]">
                  <h2 className="text-5xl font-black text-left">Staking</h2>

                  <div className="wrapper mt-10">
                       <div className="inner_wrapper">
                           <h2 className="font-black flex items-center text-xl md:text-3xl text-left"><span className="font-black text-gray-500 text-xl  "><div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#FFD77B]">1</div></span> <span className="ml-4 ">Don't have FIPCOIN Tokens?</span></h2>
                             Get <span className="text-[#FFD77B] "><a href="https://fipcoin.ai" target="_blank">FIPCOIN</a> </span>
                      </div>

                      <div className="inner_wrapper my-6">
                           <h2 className="font-black text-xl md:text-3xl flex items-center text-left"><div className="font-black text-gray-500 text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#FFD77B]">2</div> <span className="ml-4 ">Stake</span></h2>
                             <p className=""> <span className="text-[#FFD77B] ">Stake your <a href="https://fipcoin.ai" target="_blank">FIPCOIN</a></span></p>
                      </div>

                      <div className="inner_wrapper">
                           <h2 className="font-black text-xl md:text-3xl flex items-center text-left"><div className="font-black text-gray-500 text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#FFD77B]">3</div> <span className="ml-4 ">   
                           Unstake your Rewards
                              </span></h2>
                             <h6 className=""> <span className="text-[#FFD77B] ">
                             Unstake your <a href="https://fipcoin.ai" target="_blank">FIPCOIN</a> and Withdraw to your Wallet
                              </span></h6>
                      </div>
                  </div>
             </div>

           
           

        </div>
    

        <Footer/>
        
        
        </>
    )
}


export default Tokenomics
