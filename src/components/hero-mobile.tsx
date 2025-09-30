import React from 'react';
import Image from 'next/image';

export default function HeroMobile() {
    return (
        <div className='bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] min-h-screen flex flex-col relative overflow-hidden pt-20'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-10 left-5 w-32 h-32 bg-purple-400 rounded-full blur-2xl'></div>
                <div className='absolute bottom-10 right-5 w-48 h-48 bg-blue-400 rounded-full blur-2xl'></div>
            </div>

            {/* Content Container */}
            <div className='relative z-20 container mx-auto w-full px-4 flex flex-col items-center flex-grow'>
                {/* Hello emoji */}
                <div className='flex justify-center mb-2'>
                    <Image
                        src='/hello.png'
                        alt='Hello'
                        width={100}
                        height={100}
                    />
                </div>

                {/* Main heading - Adjusted for mobile */}
                <h1 className='text-center mb-4 w-full'>
                    <span className='text-black text-4xl font-bold'>I&apos;m </span>
                    <span className='text-[#BDCFE3] text-4xl font-bold'>Arshadul Mokaddis</span>
                </h1>

                {/* Large title with image - Adjusted for mobile */}
                <div className='relative flex justify-center items-center mb-8 w-full'>
                    <h2 className='text-white text-5xl font-bold tracking-tight'>
                        UX/UI Designer
                    </h2>
                </div>

                
            </div>

            {/* Hero Image - Positioned absolutely like desktop version */}
            <div className='absolute inset-0 z-10'>
                <Image
                    src='/hero.png'
                    alt='Hero'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='opacity-100'
                />
            </div>

            {/* Action Buttons - Stacked for mobile */}
            <div className='relative z-20 w-full flex flex-col gap-4 mb-8 mt-auto px-4'>
                <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg'>
                    Portfolio
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
                <button className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-[#8850EF] px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mb-8'>
                    Hire me
                </button>
            </div>
        </div>
    );
}