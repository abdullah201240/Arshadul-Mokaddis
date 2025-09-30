import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        // Added hidden sm:block class to only show on small screens and up
        <div className='hidden sm:block bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] min-h-screen flex flex-col relative overflow-hidden pt-20'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-20 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl'></div>
            </div>

            {/* Content Container - Full width aligned with navbar */}
            <div className='relative z-0 container mx-auto w-full px-4  flex flex-col items-center'>
                {/* Hello emoji */}
                <div className='flex justify-center mb-2'>
                    <Image
                        src='/hello.png'
                        alt='Hello'
                        width={150}
                        height={150}
                    />
                </div>



                {/* Main heading - Even larger */}
                <h1 className='text-center mb-4 w-full'>
                    <span className='text-black text-7xl md:text-8xl font-bold'>I&apos;m </span>
                    <span className='text-[#BDCFE3] text-7xl md:text-8xl font-bold'>Arshadul Mokaddis</span>
                </h1>

                {/* Large title with image - Even larger */}
                <div className='relative flex justify-center items-center mb-12 w-full'>
                    <h2 className='text-white text-8xl md:text-9xl font-bold tracking-tight'>
                        UX/UI Designer
                    </h2>
                </div>
            </div>

            {/* Hero Image - Moved slightly down */}
            <div className='absolute inset-0 z-10 top-30'>
                <Image
                    src='/hero.png'
                    alt='Hero'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='opacity-100'
                />
            </div>
            {/* Stats Cards - Positioned at Left and Right Edges */}
            <div className="absolute inset-x-0 bottom-22 z-20 pointer-events-none">
                <div className="container mx-auto px-4 relative h-56">

                    {/* Left card - Projects */}
                    <div className="absolute left-0 top-0 w-72 py-6 px-6 rounded-3xl
                    bg-white/10 backdrop-blur-xl border border-white/20
                    shadow-inner 
                    before:absolute before:inset-0 before:rounded-3xl 
                    before:bg-gradient-to-br before:from-white/30 before:to-transparent 
                    before:opacity-10 before:pointer-events-none
                    flex flex-col items-start text-left
                    transform rotate-6">
                        <p className="text-white text-5xl font-bold mb-2">20+</p>
                        <p className="text-white/80 text-xl">Live Projects</p>
                    </div>

                    {/* Right card - Experience */}
                    <div className="absolute right-0 top-0 w-72 py-6 px-6 rounded-3xl
                    bg-white/10 backdrop-blur-xl border border-white/20
                    shadow-inner 
                    before:absolute before:inset-0 before:rounded-3xl 
                    before:bg-gradient-to-br before:from-white/30 before:to-transparent 
                    before:opacity-10 before:pointer-events-none
                    flex flex-col items-start text-left
                    transform -rotate-6">
                        <p className="text-white text-5xl font-bold mb-2">2+</p>
                        <p className="text-white/80 text-xl">Years Exp.</p>
                    </div>

                </div>
            </div>





            {/* Action Buttons - Footer Position with Enhanced Glass Effect */}
            <div className='absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center  pr-6'>
                <div className='flex gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 pl-8 pr-8 shadow-2xl'>
                    <button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg'>
                        Portfolio
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </button>
                    <button className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-[#8850EF] border border-[#8850EF] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg'>
                        Hire me
                    </button>
                </div>
            </div>
        </div>
    );
}