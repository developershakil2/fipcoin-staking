import  {SetStateAction, Dispatch} from 'react'


export interface ConType{
    openNav:any,
    setOpenNav:Dispatch<SetStateAction <any>>;
    contractAddress:string;
    abi:any;
    stake:(amount:any, lockPeriod:any)=> Promise<void>;
    totalStaked:any;
    stakers:any;
    unstake:()=> Promise<void>;
    earlyWithdraw:()=> Promise<void>
    resMessage:string,
    setResMessage:Dispatch<SetStateAction<any>>;
    isLoad:boolean;
    setIsLoad:Dispatch<SetStateAction <boolean>>;
    stakerIn:any;
    buyToken:(amount:any)=> Promise<void>;

}