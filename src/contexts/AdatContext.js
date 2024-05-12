
import React,{createContext, useContext,useState, useEffect, useCallback, Children} from "react";
import axios from "../api/axios";

const AdatContext =createContext();

export const AdatProvider =({children})=>{
    const [teszt, setTeszt]=useState([]);
    const [tesztLista, setTesztLista]=useState([]);
    const [kategoria, setKategoria]=useState([]);
    const getLista = async(vegpont, callBack)=>{
        const{data}=await axios.get(vegpont);
        callBack(data)
    };
    useEffect(()=>{
       // getLista("api/teszt", setTeszt);
        getLista("api/kategoria",setKategoria)
        getLista("api/tesztLista", setTesztLista);
      //  console.log(tesztLista)
    },[teszt,tesztLista, kategoria])
   
    return(
        <AdatContext.Provider
        value={{teszt, tesztLista, kategoria}}>
        {children}
        </AdatContext.Provider>
    )
}
export default function useAdatContext(){
    return useContext(AdatContext);
}