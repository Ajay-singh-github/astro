import  { useEffect, useRef } from 'react'

export default function Scrollc() {
    const section = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(section.current){
            section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },[])
  return section;
}
