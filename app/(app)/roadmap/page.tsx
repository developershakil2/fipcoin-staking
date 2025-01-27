"use client"
import Footer from "@/app/_components/Footer"
import Nav from "@/app/_components/Nav"

const Roadmap = ()=>{




    return(
        <>
        <Nav isWallet={false}/>
        
        <div className="container mt-40 md:mt-[110px] mx-auto ">
              <div className="w-full px-4 md:w-[70%] mx-auto">
                    <h2 className="text-3xl text-center md:text-[50px] leading-[115%] font-black "> BITCOIN EDGE ROADMAP</h2>
                          
                          <div className="h-[140px]"></div>

                   <p className="text-[#EED57B] font-black mt-5">Q3 2024 /</p>
                   <p className="font-black">September</p>
                    <ul>
                        <li>✅Official Launch: Bitcoin Edge project officially launched.</li>
                        <li>✅BTEG Token Trading: Trading begins on Uniswap.</li>
                    </ul>



                   <p className="text-[#EED57B] font-black mt-5">Q4 2024</p>
                   <p className="font-black">
                   Staking Launch
                   </p>
                   <ul>
                        <li>✅Introduce staking to incentivize BTEG holders and foster community engagement.</li>
                        
                    </ul>


                   <p className="text-[#EED57B] font-black mt-5">Q1 2025</p>
                   <p className="font-black">
                   DEXTicket Development Begins:
                   </p>
                   <ul>
                        <li>✅Start building DEXTicket, a decentralized event ticketing platform powered by BTEG.</li>
                        <li>✅Focus on developing the ambassador program.</li>
                    </ul>
                    <p className="font-black">Ambassador Program Launch.</p>




                   <p className="text-[#EED57B] font-black mt-5"> Q2 2025</p>
                   <p className="font-black">
                   DEXTicket MVP Release
                   </p>
                   <ul>
                        <li>✅Launch the Minimum Viable Product (MVP) with core features
                            <ul>
                                <li className="pl-3">1 Event creation and ticket sales</li>
                                <li className="pl-3">2 Escrow-based fund management</li>
                                <li className="pl-3">3 Ticket resale marketplace.</li>
                            </ul>
                        </li>
                        <li>✅Onboard initial events and collect user feedback for refinement.</li>
                    </ul>
                    <p className="font-black">
                    CoinMarketCap and CoinGecko Listings
                    </p>
                    <ul>
                        <li>✅Official listing of BTEG for increased visibility and market tracking.</li>
                        
                    </ul>
                    <p className="font-black">
                    CEX Listing:
                    </p>
                    <ul>
                        <li>✅Secure listing on a mid-tier centralized exchange to enhance trading liquidity and accessibility.</li>
                    </ul>


                    <p className="text-[#EED57B] font-black mt-5">Q3-Q4 2025</p>
                   <p className="font-black">
                   DEXTicket Soft Launch
                   </p>
                   <ul>
                        <li>✅Expand access to the platform with a focus on testing scalability and stability.</li>
                        <li>✅Host  20-50 events to prepare for the full launch.</li>
                    </ul>
                    <p className="font-black">DEXTicket Official Launch.</p>

                    <ul>
                        <li>✅Release the full platform to the public with advanced features fully operational.</li>
                        
                    </ul>


              </div>
        </div>

         
        <Footer/>
        
        
        </>
    )
}


export default Roadmap