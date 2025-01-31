"use client"
import React, {useContext, useState} from 'react'
import Footer from "@/app/_components/Footer"
import Nav from "@/app/_components/Nav"
import ReuseImage from "@/app/_components/ReuseImage"
import LogoImg from '@/app/images/logo.png'
import USDT from '@/app/images/usdt.png'
import Loading from '@/app/images/loading.gif'
import { useAccount } from "wagmi"
import {API} from '@/app/utilities'
import {openModal} from "../../WalletProvider"
import DownArrow from '@/app/images/down-arrow.png'



const BuyPage = ()=>{
 
 const {address} = useAccount()

const [amount, setAmount] = useState<any>()
const [usdt, setUsdt]  = useState<any>()

const context = useContext(API)
if(!context){
   throw new Error("error from buy context")
}
const { isLoad, resMessage, setResMessage,buyToken } = context;
const tokenPrice = 1;



const BuyToken = async()=>{
   await buyToken(usdt)
}


const buyTokenFunc = (e:any)=>{
       
    setUsdt(e.target.value);
    setAmount(e.target.value/tokenPrice)

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


        <div className="container px-3 py-10 mx-auto gap-6 flex flex-col md:flex-row justify-center md:justify-center items-center my-[50px] ">
         
         
        <div className="left w-full md:w-[50%] ">
            

    
               <div className="bg-[#2B2727] rounded-xl px-4 mt-4 py-6">
                <div className="w-full flex justify-between items-center">
                <h2 className="font-black text-2xl ">Buy FIPCOIN</h2>
                <h2 className="font-black text-xs ">1 USDT = 1 FIPCOIN</h2>
                </div>
               <div className="mt-4 w-full ">
                   <div className="left_inner py-6 px-3 bg-[#373636] shadow-sm shadow-black rounded-xl w-full">
                   <h2 className="-mb-2 mt-2">You Send</h2>
                    <div className="flex items-center w-full  justify-between">

                    <div className="">
                   
                   <input onChange={ buyTokenFunc} className=" w-[120px] md:w-[140px] outline-none bg-transparent border-[#FFD77B] rounded-xl py-3 px-4 font-black text-3xl" type="number" placeholder="0.0"/>
                </div>

                <div className="bg-[#FFD77B] w-[130px] flex justify-center items-center text-black font-black py-2 px-5 rounded-lg">
                        USDT  <ReuseImage src={USDT} height={25} width={25} alt="log" cl="logo ml-1"/>
                </div>
                     
                    </div>
                     
                   </div>

                   <div className="flex justify-center items-center w-full py-3 my-5">
                   <ReuseImage src={DownArrow} height={35} width={35} alt="log" cl="logo ml-1"/>
                   </div>

                   <div className="left_inner py-6 px-3 bg-[#373636] shadow-sm shadow-black rounded-xl w-full">
                   <h2 className="-mb-2 mt-2">You Recieve</h2>
                    <div className="flex items-center w-full  justify-between">

                    <div className="">
                   
                   <input value={amount} disabled className=" w-[120px] md:w-[140px] outline-none bg-transparent border-[#FFD77B] rounded-xl py-3 px-4 font-black text-3xl"  placeholder="0.0"/>
                </div>

                <div className="border-[#FFD77B] w-[130px] border-[2px] flex justify-center items-center text-[#FFD77B] font-black py-2 px-5 rounded-lg">
                        FIPCOIN  <ReuseImage src={LogoImg} height={25} width={25} alt="log" cl="logo ml-1"/>
                </div>
                     
                    </div>
                     
                   </div>



                   
               </div>

              
                   <div className=" flex justify-end items-center mt-5">
                    
                     {
                        address ? <button onClick={()=> BuyToken()} className="bg-[#FFD77B] text-black font-black hover:bg-black hover:border-black hover:text-white  border-[2px] border-[#FFD77B] rounded-xl w-[160px] py-2">BUY</button>:
                  <button onClick={()=> openModal()} className=" py-2 w-[160px] rounded-xl bg-[#FFD77B]  text-black">Connect Wallet</button>
                  
                  }
                   </div>
               
           </div>
       


           </div>

         
         
           

        </div>
    

        <Footer/>
        
        
        </>
    )
}


export default BuyPage
