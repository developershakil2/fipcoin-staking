'use client'
import Logo from './logo.png'
import Link from "next/link";
import ReuseImage from './ReuseImage';
import closeImg from '../images/close.png'
import NavImg from '../images/nav.png'
import { API } from '@/app/utilities';
import React,  { useContext } from 'react';
import { openModal } from '../WalletProvider';
import { useAccount } from 'wagmi';

const Nav = ({isWallet}:any)=>{

const context = useContext(API)
if(!context){
  throw new Error("somecomponent should use with context ")
}

const {openNav, setOpenNav} = context
 const {address} = useAccount()

    return(
        <>
          <div className="w-full flex justify-center items-center h-[85px]">
             <div className="container px-3 mx-auto flex justify-between items-center h-[85px]">
                   <div className="nav_left">
                   <a href="/">
                       <ReuseImage height={85} width={85} cl="w-[70px] h-[70px] rounded-full" src={Logo} alt="logo"/>
                    </a>
                   </div>

                   <div className="nav_middle">
                
                       <ul style={{left:openNav}} id="menu_items" className="list-none z-[30] flex justify-center p-0 h-[85] items-center gap-8">
                          <li className="w-full mb-0 flex justify-end items-center md:hidden">
                          <button onClick={()=> setOpenNav('-999980%')}>
                         <ReuseImage height={35} width={35} cl="w-[35px] h-[35px] rounded-full" src={closeImg} alt="logo"/>
                         </button>
                          </li>
                       
                     

                         <li className="w-full mb-1 flex justify-center items-center md:hidden">

                         <div className="icon_group_nav gap-5 flex items-center justify-center">
                         <button onClick={()=> window.location.href = '/buy'} className="bg-[#FFD77B] w-[160px]  h-[44px] rounded-lg text-black text-[16px] ">BUY FIPCOIN</button>
               
                        </div>
                         </li>

                         <li className="w-full  flex justify-center items-center md:hidden"> <Link  onClick={()=> setOpenNav('-999980%')}  href="/staking">
                        <div className="w-[160px] flex justify-center text-[16px] md:text-lg items-center h-[44px] rounded-lg text-[#111]  bg-[#FFD77B]">
                           <span> Launch App</span>
                        </div>
                        </Link>
                          </li>

                          
                          

                          <li className="w-full mb-10 flex justify-center items-center md:hidden">
                          <button onClick={()=> openModal()} className="w-[160px] text-black  py-2 rounded-lg bg-[#FFD77B] ">{address  ? `${address?.slice(0,4)}...${address?.slice(37,42)}`:'Connect Wallet'}</button>

                            </li>
                       </ul>
                   </div>


                   <div className="nav_end  flex justify-center gap-5 items-center">
                        <div className="icon_group_nav hidden gap-5 md:flex items-center justify-center">
                        <button onClick={()=> window.location.href = '/buy'} className="bg-[#FFD77B] w-[154px]  h-[44px] rounded-lg text-black text-[16px] ">BUY FIPCOIN</button>
               
                        </div>

                         {
                          isWallet === true ? <button onClick={()=> openModal()} className="w-[160px] text-black py-2 rounded-xl  bg-[#FFD77B]  ">{address  ? `${address?.slice(0,4)}...${address?.slice(37,42)}`:'Connect Wallet'}</button>

                          :     <Link  onClick={()=> setOpenNav('-999980%')}  href="/staking">
                          <div className="w-[136px] flex justify-center text-[16px] md:text-lg items-center h-[44px] rounded-lg text-[#111] bg-[#FFD77B]">
                             <span> Launch App</span>
                          </div>
                          </Link>
                         }

                         <button onClick={()=> setOpenNav('0%')} className="block md:hidden">
                         <ReuseImage height={35} width={35} cl="w-[35px] h-[35px] rounded-full" src={NavImg} alt="logo"/>
                         </button>

                   </div>
             </div>
      
          </div>
        </>


    )
}


export default Nav;