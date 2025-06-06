import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems =['Home','About','Top','Algorithms']

const NavBar = () => {

    const [isAudioPlaying,setIsAudioPlaying] = useState(false);
    const [isIndicatorActive,setIsIndicatorActive] = useState(false);
    const [lastScrollY,setLastScrollY] = useState(0);
    const [isNavVisible,setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef()


    const {y : currentScrollY } = useWindowScroll();

    useEffect(()=>{
        if(currentScrollY === 0){
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }
        else if(currentScrollY > lastScrollY){
            setIsNavVisible(false);
            navContainerRef.current.classList.remove('floating-nav');
        }
        else{
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY)

    },[currentScrollY])

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y:isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration:0.2,
        })
    },[isNavVisible])

    const toggleAudioIndicator = () =>{
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        }
        else{
            audioElementRef.current.pause();
        }
    },[[isAudioPlaying]])
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 hidden md:block' >
      <header className='absolute top-1/2 w-full -transalte-y-1/2'> 
        <nav className='flex size-full items-center justify-between p-a top-[-20px] relative'>
            <a className='flex items-center gap-7' href='#home'>
                <img className='w-10 ml-3'
                  src='./img/logo.png' alt='logo'
                />
            </a>

            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLocaleLowerCase()}`} className='nav-hover-btn'>
                            {item}
                        </a>
                    ))}
                </div>
                <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                    <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                        {[1,2,3,4,5].map((bar) => (
                            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay:`${bar*0.1}s`}}/>
                        ))}
                </button>
            </div>
        </nav>
      </header>
    </div>
  )
}



export default NavBar
