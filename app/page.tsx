'use client'
import React, {useState} from 'react';
import Footer from "./_components/Footer";
import Nav from "./_components/Nav";
import ReuseImage from "./_components/ReuseImage";
import ShapeImg from './images/shape.png'
import logoImg from './images/logo.png'
import DeImg from './images/audit.png'


import Target from './images/target.png' 
import User from './images/user.png';
import Chart from './images/chart.png';
import Down from './images/downArrow.png';
import Fipcoin from  './images/fipcoina.png';
import Fip from './images/fip.png'

export default function Home() {


  const [copy, setCopy] = useState<any>()



  return (
       <div className="home_page">
        <Nav isWallet={false}/>
        
        <div className="container px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col-reverse md:flex-row">
         
        <div className="hero_right overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-start  relative flex-col">
                     
                     <div className=" absolute  opacity-70 blur  top-10 right-0 ">

              <ReuseImage  height={300} width={300} alt="shap_image" cl="ani w-[200px] h-[200px] md:w-[300px] md:h-[300px] " src={ShapeImg}/>
              </div>
               
                <div className="mt-10 ml-0 md:ml-[100px]"></div>
              <ReuseImage  height={360} width={360} alt="hero_image" cl="animi md:ml-[70px]" src={logoImg}/>
        </div>
         
         
            <div className="hero_left w-full md:w-[50%] py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full px-2 md:w-[full]">
                <h1 className="text-[#fff]  leading-[105%] font-black text-4xl text-center md:text-left md:text-[55px]">
               Fipcoin The Future of Crypto 
               </h1>
               <h1 className="text-[#EED57B] text-4xl text-center md:text-left md:text-[55px] font-black leading-[105%]">Powered by BSC Network</h1>
                </div>
                 <p className="text-center mt-5 md:text-start text-[20px] text-[#fff]">
                 Step into the future of finance with Fipcoin—where cutting-edge technology and trust converge on the BSC Network
                 </p>  

                 <div className="flex mt-5 gap-3 w-full md:w-[390px] btn_group px-4 md:px-0 justify-between items-center h-[54px]">
                  <button onClick={()=> window.location.href = '/staking'} className="bg-[#EED57B] w-[174px]  h-[54px] rounded-[20px] text-black text-[16px] font-black">Stake Fipcoin</button>
               
                 <button onClick={()=> window.location.href = '/buy'}  className="bg-transparent border-[2px] border-[#EED57B] w-[184px]  h-[54px] rounded-[20px] text-[#fff]  text-[16px] ">Buy Fipcoin</button>
                
                 </div>

            </div>

        </div>
        
        <div className="container px-2 my-[60px] mx-auto flex-col flex justify-center items-center ">
            <p className="text-center text-[17px] md:text-[21px] text-[#EED57B]"> Secure, decentralized, transparent</p>
            <p className="text-white text-[17px] md:text-[21px] text-center my-1"> Copy FIPCOIN Address </p>
            <button onClick={
             ()=>  navigator.clipboard.writeText('0x3F885D6a9737A0649574dA3693E54F74eB1FAC53')
               .then(() => {
                 setCopy(true); 
                 setTimeout(()=> setCopy(false), 2000)
               })
               .catch((err) => {
                 console.error('Failed to copy text: ', err);
               })
            } className="bg-[#EED57B] w-[174px]  flex justify-center items-center h-[54px] rounded-[20px] text-black text-[16px] font-black">
              {
                copy === true ?
                <p>Copied</p>:
                <>
                 <img className="object-cover rounded-full" height="18px" width="18px" src="./copy.png" alt="/"/>
                 <p className="ml-2 ">Copy</p>
                </>
              }
            </button>
               
           
        </div>

        <div className="container mx-auto mt-[80px] px-2 flex justify-center items-center ">
           <div className="w-full md:w-[70%] flex justify-around items-center flex-col md:flex-row">
             
             
            <div className="mobile_responsive  md:w-[50%] gap-2 w-full px-4 flex justify-around items-center">
            <div className="w-[50%] my-3  md:w-[25%] px-3 py-3 bg-slate-800 md:bg-transparent rounded-xl flex justify-start md:justify-center items-center">
                 <ReuseImage src={Chart} height={50} width={50} alt="chart_image" cl=""/>
                 <p className="ml-2">Sustaionable<br/>
                 Growth</p>

              </div>

              <div className="w-[50%] my-3  md:w-[25%] px-3 py-3 flex bg-slate-800 md:bg-transparent rounded-xl justify-start md:justify-center items-center">
                 <ReuseImage src={Down} height={50} width={50} alt="chart_image" cl=""/>
                 <p className="ml-2">Attractive<br/>
                 APY</p>

              </div>
            </div>



            <div className="mobile_responsive md:w-[50%] gap-2 w-full px-4 flex justify-around items-center">

            <div className="w-[50%] my-3  md:w-[25%] px-3 py-3 flex bg-slate-800 md:bg-transparent rounded-xl justify-start md:justify-center items-center">
                 <ReuseImage src={User} height={50} width={50} alt="chart_image" cl=""/>
                 <p className="ml-2">Auto<br/>
                 Reinvesting</p>

              </div>

              <div className="w-[50%] my-3  md:w-[25%] px-3 py-3 flex justify-start bg-slate-800 md:bg-transparent rounded-xl md:justify-center items-center">
                 <ReuseImage src={Target} height={50} width={50} alt="chart_image" cl=""/>
                 <p className="ml-2">Anti<br/>
                 Dump</p>

              </div>

            </div>


           </div>
        </div>
        
        <div className="container mt-10 md:mt-[100px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="left overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-start  relative flex-col">
                     
                     <div className=" absolute  opacity-70 blur  top-10 left-0 md:-left-[60px]">

              <ReuseImage  height={300} width={300} alt="shap_image" cl="ani" src={ShapeImg}/>
              </div>
               
                <div className="mt-10"></div>
              <ReuseImage  height={300} width={300} alt="hero_image" cl="animi ml-0 md:w-[450px] object-cover md:h-[450px] md:ml-20" src={Fipcoin}/>
        </div>
            
            
            <div className="right w-full md:w-[50%] py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
               <h2 className="text-[#EED57B] text-3xl text-left  md:text-[40px] font-black leading-[105%]">Fipcoin Vision for the Future</h2>
                </div>
                 <p className="text-left md:text-justify mt-5  text-[20px] text-[#fff] ">
                 <span className="text-[#EED57B] my-2">Fipcoin is not just a token</span> it is a movement to bring the best aspects of Bitcoin to the BSC Network. Our vision includes
                 </p>
                 <p className="text-left md:text-justify mt-5  text-[20px] text-[#fff] ">
                 <span className="text-[#EED57B] my-2">Widespread Adoption </span> 
                 By leveraging Base's capabilities, Fipcoin aims to become a leading cryptocurrency for both retail and institutional investors.
                 </p>
                 <p className="text-left md:text-justify mt-5  text-[20px] text-[#fff] ">
                 <span className="text-[#EED57B] my-2">Innovative Use Cases </span> 
                 From decentralized finance (DeFi) to cross-border payments, Fipcoin will explore and develop a wide range of applications, driving utility and value.
                 </p>
                 <p className="text-left md:text-justify mt-5  text-[20px] text-[#fff] ">
                 <span className="text-[#EED57B] my-2">Building a Vibrant and Engaged Community of Users </span> 
                 At Fipcoin (FIPCOIN), we believe that a strong, active community is the backbone of any successful cryptocurrency project. Our goal is to cultivate a vibrant and engaged community of users who are passionate about the mission and growth of Fipcoin
                 </p>


                 

            </div>
        
        </div>
        


        <div className="py-[100px] md:py-[200px] container flex justify-center items-center flex-col mx-auto ">
            <h2 className="text-[#EED57B] text-4xl text-[45px] text-center">Our Commitment</h2>
            <div className="w-full px-2 md:w-[360px]  mt-5">
              <p className="text-[20px] text-center">
              Groundbreaking token project inspired by Bitcoin's principles of trust and scarcity on BSC Network.
              </p>
            </div>
        </div>
        

        
        <div className="container mt-10 md:mt-[20px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="right w-full md:w-[50%]  md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
               <h2 className="text-[#ffffff] text-3xl text-left  md:text-[40px] font-black leading-[105%]">
               Pioneering Decentralization <span className="text-[#EED57B] ">and Trust</span>
               </h2>
                </div>
                 <p className="text-left mt-5  text-[16px] text-[#fff] ">
                 At Fipcoin, we are dedicated to advancing the principles of decentralization and trust. We believe in the power of community-driven initiatives, ensuring that every decision, upgrade, and feature aligns with the needs and desires of our users.
                 </p>
                 <h3 className="text-[#EED57B] text-left w-full font-black  mt-5 text-xl">Unwavering Security and Stability</h3>
                 <p className="text-left md:text-justify   text-[16px] text-[#fff] ">
                 Security is at the heart of Fipcoin. With a renounced contract and burned liquidity, we commit to creating a stable and secure environment that you can trust. Our platform is designed to provide long-term reliability, safeguarding your assets in an ever-evolving digital landscape.
                 </p>
              
                 <h3 className="text-[#EED57B] text-left w-full font-black  mt-5 text-xl">Empowering the Future of Finance</h3>
                 <p className="text-left md:text-justify   text-[16px] text-[#fff] ">
                 Combining the foundational strengths of Bitcoin with the innovative potential of the BSC Network, Fipcoin is more than just a cryptocurrency. It’s a movement towards a more transparent, scalable, and inclusive financial future, where the community leads the way.
                 </p>
              

                 

            </div>



    
        <div className="left overflow-x-hidden w-full mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-end  relative flex-col">
                     
                     <div className=" absolute  opacity-70 blur  top-10 right-0 md:-right-[60px]">

              <ReuseImage  height={300} width={300} alt="shap_image" cl="" src={ShapeImg}/>
              </div>
               
                <div className="mt-10"></div>
              <ReuseImage  height={560} width={560} alt="hero_image" cl="" src={DeImg}/>
        </div>
            
        </div>
        


        <div className="container mt-10 md:mt-[100px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col-reverse md:flex-row">
        <div className="left overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-start md:items-start  relative flex-col">
                     
                <div className="mt-0 md:mt-10"></div>
              <ReuseImage  height={300} width={300} alt="hero_image" cl="ml-0 md:ml-20" src={Fip}/>
        </div>
            
            
            <div className="right w-full md:w-[50%] py-0 md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
               <h2 className=" text-3xl text-center md:text-left  md:text-[40px] font-black leading-[105%]">
               Get Rewards <span className="text-[#EED57B]">Every 60 Minutes</span> / 24 Times 
                 Daily
               </h2>
                </div>
                <p className="text-[17px] text-center md:text-left ">
                A simple,stable and predictable way to earn passive income
                </p>
                <a href="/buy">
                <button className="w-[200px] h-[68px] rounded-[20px] border-[2px] border-[#EED57B] mt-3">GET FIPCOIN TOKEN</button>
                </a>
                
                
    

                 

            </div>

        
        </div>
        

        
    
        


{/* 
        <div className="container  md:mt-[100px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col-reverse md:flex-row">
       
            
            <div className="right w-full md:w-[50%] py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full  md:w-[full]">
               
                <h2 className=" text-3xl text-left  md:text-[30px] font-black leading-[105%]">
                The first protocol to take a unique aproach to building a sustainable ecosystem
                </h2>

               <h2 className=" text-3xl text-left  md:text-[30px] mt-[40px] font-black leading-[105%]">
               Combining <span className="text-[#EED57B]">auto-staking</span> and counponding 
               </h2>
                </div>
              
           

                 

            </div>


            <div className="left overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] md:py-10 flex justify-start md:items-start  relative flex-col">
                     
                     <div className="mt-10"></div>
                   <ReuseImage  height={560} width={560} alt="hero_image" cl="" src={AuditImg}/>
             </div>
                 

        
        </div>
         */}
        
        
        
        <Footer/>


       </div>
  );
}
