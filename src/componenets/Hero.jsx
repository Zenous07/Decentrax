import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);

    const totalImages = 3;
    const nextImageRef = useRef(null);
    const currentImageRef = useRef(null);

    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
    };

    const upComingImageIndex = (currentIndex % totalImages) + 1;

    const handleMiniImgClick = useCallback(() => {
        setHasClicked(true);
        setCurrentIndex(upComingImageIndex);
    }, [upComingImageIndex]);

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-image', { visibility: 'visible' });

            gsap.to('#next-image', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
            });

            gsap.from('#current-image', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#image-frame', {
            clipPath: 'polygon(20% 0%, 80% 0%, 94% 88%, 9% 100%)',
            borderRadius: '0 45% 45% 15%',
        });

        gsap.from('#image-frame', {
            clipPath: 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#image-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            },
        });
    });

    const getImageSource = (index) => `img/hero-${index}.jpg`;
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden" id='home'>
            <div id='image-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniImgClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <img
                                ref={nextImageRef}
                                src={getImageSource(upComingImageIndex)}
                                alt={`Upcoming Image ${upComingImageIndex}`}
                                id="current-image"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                    <img
                        ref={nextImageRef}
                        src={getImageSource(currentIndex)}
                        alt={`Next Image ${currentIndex}`}
                        id="next-image"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={getImageSource(currentIndex === totalImages - 1 ? 1 : currentIndex)}
                        alt={`Current Image ${currentIndex}`}
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoad={handleImageLoad}
                    />
                </div>

                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    Decentr<b>a</b>x
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            Bl<b>o</b>ckified
                        </h1>

                        <p className="mb-5 font-robert-regular text-blue-100 text-4xl">
                            Decrypt <br />
                            The Edge 
                            With Us
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                Decentr<b>a</b>x
            </h1>
        </div>
    );
};

export default Hero;