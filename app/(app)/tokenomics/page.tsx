"use client"
import Footer from "@/app/_components/Footer"
import Nav from "@/app/_components/Nav"
import ReuseImage from "@/app/_components/ReuseImage"
import LogoImg from '@/app/images/logo.png'
import CircleImg from '@/app/images/circle_logo.png'

const Tokenomics = ()=>{




    return(
        <>
        <Nav isWallet={false}/>

        <div className="container mt-10 md:mt-[50px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="right w-full md:w-[50%] py-0 md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
               <h2 className=" text-3xl text-left  md:text-left  md:text-[40px] font-black leading-[105%]">
               Bitcoin Edge Tokenomics
               </h2>

               <ul className="mt-5 ">
                <li > • CONTRACT RENOUNCED </li>
                <li className="my-4">• NO TAXES</li>
                <li>• BURNED LIQUIDITY </li>
               </ul>

               
                </div>
              

            </div>

     


        <div className="left overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-center   flex-col">
                   
              <ReuseImage  height={300} width={300} alt="hero_image" cl="" src={LogoImg}/>
        </div>
            
        
        </div>
        



        <div className="container px-3 mx-auto gap-10 flex flex-col md:flex-row justify-center md:justify-between items-center my-[50px] ">
            
            
              <div className="w-full md:w-[50%] py-5 px-8 bg-gradient-to-b from-[#333332] to-[#363532] rounded-[20px] h-[650px] flex justify-center items-center flex-col">
                          

                            <h2 className="my-3 w-full mt-8 text-xl text-left md:text-[35px] leading-[105%]">
                            Max Supply:21,000,000 BTEG Tokens
                            </h2>

                            <h2 className="my-3 w-full text-left  text-xl md:text-[35px] leading-[105%]">
                            Total Supply :19,000,000 Tokens
                            </h2>
                            <h2 className="my-3 w-full  text-left text-xl md:text-[35px] leading-[105%]">
                            Circulation Supply : 19,000,000 Tokens
                            </h2>

                            <a href="https://base.blockscout.com/tx/0x3e7450c71a64d97cce9872129b140d22e5740907ddd63d552e4846015a81000e" className=" text-center text-black  py-3 px-10  rounded-[20px] bg-[#17FF03]">Proof Of Burn 1</a>
                            <a href="https://base.blockscout.com/tx/0x70c9947f5a7baf7287d9eda74db439858cb4384356d37d372f0a929f61f060c7" className=" text-center text-black  py-3 px-10 mt-3  rounded-[20px] bg-[#17FF03]">Proof Of Burn 2</a>

                            
              </div>
       
       

              <div className="w-full md:w-[50%] py-5 px-8 bg-gradient-to-b from-[#333332] to-[#363532] rounded-[20px] h-[650px] flex justify-center items-center flex-col">
                           

                            <h2 className="my-3 w-full mt-8 text-xl text-left md:text-[35px] leading-[105%]">
                            Founder Allocation: 9% 1,890,000 BTEG Tokens
                            </h2>
                            
                            <p className="text-left">
                            Reserved for the founder to ensure long-term commitment and project success while promoting a decentralized ethos.
                            </p>

                           
                            
              </div>
       
        </div>
    

        <Footer/>
        
        
        </>
    )
}


export default Tokenomics
