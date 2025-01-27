"use client"
import Footer from "@/app/_components/Footer"
import Nav from "@/app/_components/Nav"
import ReuseImage from "@/app/_components/ReuseImage"
import LogoImg from '@/app/images/logo.png'



const About = ()=>{




    return(
        <>
        <Nav isWallet={false}/>

        <div className="container mt-10 md:mt-[50px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="right w-full md:w-[50%] py-0 md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
               <h2 className=" text-3xl text-left  md:text-left  md:text-[40px] font-black leading-[105%]">
               Bitcoin Edge Bringing Bitcoin&apos;s <span className="text-[#EED57B]">Legacy to Next</span> Genaration Network
               </h2>

               <h3 className="my-3 text-left font-black text-xl">
               Secure and <span className="text-[#EED57B]">Decentralized</span> Financial Ecosystem
               </h3>
                </div>
                <p className="text-[17px] text-left ">
                Bitcoin Edge BTEG is a groundbreaking token project on the Base Network, inspired by Bitcoin&apos;s principles of trust and scarcity. With a fixed supply of 21 million BTGE tokens, Bitcoin Edge aims to create a secure, decentralized, and transparent financial ecosystem
                </p>
              

            </div>

     


        <div className="left overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-center   flex-col">
                   
              <ReuseImage  height={300} width={300} alt="hero_image" cl="" src={LogoImg}/>
        </div>
            
            
           
        
        </div>
        
      <div className="w-full py-[120px] bg-gradient-to-l from-[#C0F6FE] via-[#798CCE] via-[#798CCE] to-[#D5E0E0]">

        <div className="container px-5 md:px-0 gap-5 mx-auto flex-col md:flex-row flex justify-between items-center">
                <div className="left my-3 py-10  w-full md:w-[50%]">
                    <p className="text-left text-[21px] text-black">
                    The contract is renounced, and liquidity is burned, ensuring stability and long-term trust. Our mission is to combine the best aspects of Bitcoin with the advanced capabilities of the Base Network, providing a scalable, efficient, and community-driven cryptocurrency.
                    </p>
                </div>

                <div className="w-full md:w-[50%]">
                   <h3 className="text-black text-2xl md:text-[50px] leading-[100%] font-black">
                   Community-Driven Cryptocurrency Project
                   </h3>
                </div>
        </div>
      </div>

        <Footer/>
        
        
        </>
    )
}


export default About