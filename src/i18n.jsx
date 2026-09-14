import {createContext,useContext,useEffect,useState} from 'react';
const C=createContext(null);
export function LanguageProvider({children}){const[lang,setLang]=useState(()=>localStorage.getItem('landai-lang')||'es');useEffect(()=>{localStorage.setItem('landai-lang',lang);document.documentElement.lang=lang},[lang]);const t=(es,en)=>lang==='es'?es:en;return <C.Provider value={{lang,setLang,t}}>{children}</C.Provider>}
export const useLanguage=()=>useContext(C);
