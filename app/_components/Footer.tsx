'use client'
import Logo from './logo.png'
import ReuseImage from './ReuseImage';
import Tw  from '../images/tw.png'
import Tel from '../images/tel.png'
import Facebook from '../images/facebook.png'
import Insta from '../images/insta.png'
import Dis from '../images/dis.png'


const Footer = ()=>{




    return(
        <>
          <div className="w-full bg-[#1E5267]  py-10 flex mt-[130px] justify-start md:justify-center items-center">
             <div className="container mx-auto flex justify-start md:justify-between items-center h-[85px] flex-col md:flex-row">
                   <div className="nav_left w-full md:w-[50%] flex md:block md:justify-center items-center md:flex-col flex-row">
                
                      
                    <button onClick={()=> window.location.href = '/buy'} className="border-[#EED57B] border-[2px] flex items-center justify-center w-[154px] mr-3 h-[44px] rounded-[20px] text-white text-[16px] font-black">
                    <ReuseImage height={18} width={18} cl="w-[18px] h-[18px] mr-1 rounded-full" src={Logo} alt="logo"/>
                   
                     <span>Buy FIPCOIN
                     </span>
                      </button>

                      <div className="">
                      <p className="text-[15px]">Secure and Decentralizied
                    </p>
                    <p className="text-[15px]">Financial Ecosystem</p>
                  
                      </div>
                   </div>

              

                   <div className="nav_end w-full md:w-[50%] flex flex-col justify-center gap-5 items-start md:items-end">
                        
                         <div className='flex justify-center items-center h-20 md:block pl-4 md:pl-0'>
                            <div className="h-[50px]"></div>


                      <div className="">
                      <button onClick={()=> window.location.href = 'https://fipnext.com'} className="bg-[#EED57B] w-[154px] mr-3 h-[44px] rounded-[20px] text-black text-[16px] font-black">FIPCOIN</button>

                           
              <button onClick={()=> window.location.href = 'https://fipcoin.ai'} className="bg-[#EED57B] w-[154px]  h-[44px] rounded-[20px] text-black text-[16px] font-black">FIPNEXT</button>



                      </div>
                        
                         </div>

                       
                   </div>
             </div>
      
          </div>

          <div className="flex mb-5 mt-10 border-t-1 border-[#ffff] justify-center items-center">
              <div >
              <div className="icon_group_nav w-full  gap-5 md:mt-0 flex items-center justify-center">
                             <a href="https://t.me/fipcoin_official" className="rounded-full bg-white p-1">
                             <ReuseImage height={20} width={20} src={Tel} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>

                             </a>

                             <a href="https://x.com/fipcoin" className="rounded-full bg-white p-1">
                             <ReuseImage height={20} width={20} src={Tw} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>
                             </a>

                             <a href="https://www.facebook.com/fipcoin" className="rounded-full bg-white p-1">
                             <ReuseImage height={20} width={20} src={Facebook} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>
                             </a>

                             <a href="https://www.instagram.com/fipcoin/" className="rounded-full bg-white p-1">
                             <ReuseImage height={20} width={20} src={Insta} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>
                             </a>

                             <a href="https://discord.com/invite/EVNB4Yz3sj" className="rounded-full bg-white p-1">
                             <ReuseImage height={20} width={20} src={Dis} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>
                             </a>
                        </div>
                 <div className=''>
                         
                         <p className='text-[15px] text-start md:text-center mt-2'>© 2024, All rights reserved </p>
                         </div>
              </div>
          </div>
        </>


    )
}


export default Footer;