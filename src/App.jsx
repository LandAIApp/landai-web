import { Routes,Route,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header'; import Footer from './components/Footer';
import Home from './pages/Home'; import {Privacidad,Terminos} from './pages/Legal'; import Servicios from './pages/Servicios'; import Soluciones from './pages/Soluciones'; import Proyectos from './pages/Proyectos'; import Platform from './pages/Platform'; import Nosotros from './pages/Nosotros'; import Contacto from './pages/Contacto';
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{ window.scrollTo({top:0,left:0,behavior:'auto'}); },[pathname]);return null}
export default function App(){return <><ScrollTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/servicios" element={<Servicios/>}/><Route path="/soluciones" element={<Soluciones/>}/><Route path="/proyectos" element={<Proyectos/>}/><Route path="/platform" element={<Platform/>}/><Route path="/nosotros" element={<Nosotros/>}/><Route path="/contacto" element={<Contacto/>}/><Route path="/privacidad" element={<Privacidad/>}/><Route path="/terminos" element={<Terminos/>}/></Routes></main><Footer/></>}
