

const About = () => {
    

    return (
        <section id='about' className='relative'>

            {/* page bacground */}
            <div className='w-full h-screen fixed top-0 overflow-hidden -z-30'>
                <div className='bg-shadow -z-30'></div> {/* uses css */}
            </div>
            <div className="
                bg-gradient-to-br 
                from-teal-900
                via-sky-900
                to-sky-950 
                fixed -z-40 w-full h-full top-0"></div>

            {/* hero */}
            <div className='min-h-screen md:min-h-[60vh] 
                flex justify-center align-bottom items-center 
                bg-gradient-to-b 
                from-transparent
                to-zinc-900/50'
            >
                <article className='relative md:top-6'>

                    <h1 className='text-2xl text-cyan-400 ml-[-28px] mb-2.5'>
                        <i className='fa-solid fa-chevron-right 
                        text-base mr-4 relative bottom-0.5'
                        />
                        <span className='text-zinc-100'>Leo</span>nardo Mathot
                    </h1>

                    <h2 className='text-zinc-300 mb-4'>Front End Developer</h2>

                    {/* links */}
                    <div className='text-zinc-300 flex gap-4 items-center'>
                        <a className='hover:text-cyan-400 group/link'
                            href='https://www.linkedin.com/in/leonardo-m-180a90208/' target='_blank'>
                            <i className='fa-brands fa-linkedin'></i>
                            <span className='text-xs ml-1 
                            text-transparent group-hover/link:text-cyan-400 
                            inline-block h-full relative top-[2px] overflow-hidden duration-500 max-w-0 group-hover/link:max-w-20'>LinkedIn</span>
                        </a>
                        <a className='hover:text-cyan-400 group/link'
                            href='https://github.com/leomathot' target='_blank'>
                            <i className='fa-brands fa-github'></i>
                            <span className='text-xs ml-1 
                            text-transparent group-hover/link:text-cyan-400 
                            inline-block h-full relative top-[2px] overflow-hidden duration-500 max-w-0 group-hover/link:max-w-20'
                            >GitHub</span>
                        </a>
                        <a className='hover:text-cyan-400 group/link'
                            href='#contact'>
                            <i className='fa-solid fa-envelope'></i>
                            <span className='text-xs ml-1 
                            text-transparent group-hover/link:text-cyan-400 
                            inline-block h-full relative top-[2px] overflow-hidden duration-500 max-w-0 group-hover/link:max-w-20'>Contact</span>
                        </a>
                    </div>

                </article>
            </div>

            {/* description */}
            <div className='bg-zinc-900/50 
            text-zinc-300'>
                <div className='about-desc max-width md:min-h-[40vh] flex flex-col'>
                    <div className='grid md:grid-cols-2 gap-10 max-w-[850px] mx-auto pt-5'>
                        <div className='md:text-right'>
                            <p>Switched from electrician to programmer. Committed to doing my best, I bring problem-solving skills and meticulous attention to detail.</p>
                        </div>
                        <div className='md:text-left'>
                            <p>Currently studying Computer Programming at Niagara College Canada while constantly seeking to improve my skills from online resources.</p>
                        </div>
                    </div>

                    {/* technology logos */}
                    <div className='flex justify-center items-center gap-8 flex-wrap my-20 px-4 text-cyan-400/70'>

                        <i className='fa-brands fa-html5 text-2xl' title='HTML5'></i>
                        <i className='fa-brands fa-css3-alt text-2xl' title='CSS3'></i>

                        <svg className='min-w-6' fill='currentColor' width='24' height='24' viewBox='0 0 24 24' role='img' xmlns='http://www.w3.org/2000/svg'><title>Tailwind CSS</title><path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z' /></svg>

                        <i className='fa-brands fa-js text-2xl' title='JavaScript'></i>
                        <i className='fa-brands fa-react text-2xl' title='React'></i>

                        <svg className='min-w-6' fill='currentColor' width='24' height='24' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 50 50'><title>C#</title>
                            <path d='M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z'></path>
                        </svg>

                        <svg className='min-w-6' fill='currentColor' width='24' height='24' viewBox='-8.78 0 70 70' xmlns: dc='http://purl.org/dc/elements/1.1/' xmlns: cc='http://creativecommons.org/ns#' xmlns: rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns='http://www.w3.org/2000/svg'><title>SQL</title><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <metadata> <rdf: rdf> <cc: work> <dc: subject> Data </dc: subject> <dc: identifier> sql-database-generic </dc: identifier> <dc: title> SQL Database (Generic) </dc: title> <dc: format> image/svg+xml </dc: format> <dc: publisher> Amido Limited </dc: publisher> <dc: creator> Richard Slater </dc: creator> <dc: type rdf: resource='http://purl.org/dc/dcmitype/StillImage'></dc: type> </cc: work> </rdf: rdf> </metadata> <path d='m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z' transform='translate(-830.906 -943.981)'></path> </g></svg>

                        <i className='fa-brands fa-python text-2xl' title='Python'></i>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About