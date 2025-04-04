import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router';


    const fadeInUp = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration:  1} },
      };

      const fadeInDown = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      };
      

const Nav = () => {


  return (
    <>
        <div className='min-w-full min-h-screen bg-[#F7F7FA]'>
            <motion.header className='bg-black/95  w-full p-4 shadow-md text-white '
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            <div className=' container flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    {/* logo + text */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-6 w-6" data-lov-id="src/pages/Index.tsx:36:12" data-lov-name="Brain" data-component-path="src/pages/Index.tsx" data-component-line="36" data-component-file="Index.tsx" data-component-name="Brain" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>

                    <h1 className='lg:text-xl md:text-sm text-xs lg:font-bold '>
                        {/* text */}
                        NEET MASTER CHALLENGE
                    </h1>
                </div>


                <div>
                    <button className='rounded bg-slate-200 text-black/80 font-medium p-1 hover:bg-slate-500 hover:text-white transition-colors flex flex-wrap justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy h-4 w-4 mr-1" data-lov-id="src/pages/Index.tsx:47:14" data-lov-name="Trophy" data-component-path="src/pages/Index.tsx" data-component-line="47" data-component-file="Index.tsx" data-component-name="Trophy" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20mr-1%22%7D"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    Leaderboard
                    </button>
                </div>
            </div>

            </motion.header>

            <main className='container px-4 py-4'>
                <motion.section className='max-w-4xl mx-auto mb-12 text-center'
                initial = {{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.8,ease:"easeOut"}}
                >
                    <div className='inline-flex items-center justify-center p-3 rounded-full mb-4 bg-gray-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-6 w-6 text-primary" data-lov-id="src/pages/Index.tsx:57:12" data-lov-name="BookOpen" data-component-path="src/pages/Index.tsx" data-component-line="57" data-component-file="Index.tsx" data-component-name="BookOpen" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-primary%22%7D"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                    </div>
                    <h1 className='text-3xl md:4xl font-bold mb-4'>Test Your Neet Knowlege</h1>
                    <p className='text-gray-500 '>Challenge yourself with questions in Physics, Chemistry, Biology, or try the mixed mode to prepare for your NEET exam.</p>
                </motion.section>

                <div 
                className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'
                
                >

                    <motion.div className='md:col-span-2 shadow-lg border rounded-md'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    >
                        <div className='rounded-lg bg-[#F7F7FA] border-[#D3D3D3] shadow-lg'>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb h-5 w-5 text-mixed" data-lov-id="src/pages/Index.tsx:72:18" data-lov-name="Lightbulb" data-component-path="src/pages/Index.tsx" data-component-line="72" data-component-file="Index.tsx" data-component-name="Lightbulb" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-mixed%22%7D"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                Choose a Subject
                                </h3>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 animate-fade-in'>

                                    <Link to ='/physics'>
                                    <div className='rounded-lg border text-black shadow-sm hover:shadow-lg hover:border-[#7C3AED] cursor-pointer transform transition-all duration-300 hover:scale-105'>
                                        
                                        
                                        <div className='flex flex-col space-y-1.5 p-6 pb-2'>
                                        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-[#4B0082]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom h-6 w-6" data-lov-id="src/components/SubjectSelection.tsx:21:12" data-lov-name="Atom" data-component-path="src/components/SubjectSelection.tsx" data-component-line="21" data-component-file="SubjectSelection.tsx" data-component-name="Atom" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
                                            Physics
                                        </h3>
                                        <p className='text-sm text-slate-700 '>
                                            Test your knowledge of mechanics , elctricity and much more
                                        </p>

                                    </div>
                                        
                                        
                                        

                                    <div className='p-6 pt-0 flex flex-col items-center justify-center'>
                                        <p className='text-sm text-black'>
                                        Covers topics like kinematics, dynamics, electromagnetism, and quantum physics. Challenge yourself with fundamental concepts and numerical problems.
                                        </p>
                                        <button className='inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-slate-300
                                        ring-offset-white p-3 border border-[#4B0082] m-2 text-[#4B0082]  hover:bg-[#4B0082] hover:text-white disabled:pointer-events-none
                                        hover:border-0 hover:font-medium'>
                                            Select Physics
                                        </button>

                                    </div>
                                           
                                    </div>
                                    </Link>


                                    <Link to='/chemistry'>
                                    <div className='rounded-lg border text-black shadow-sm hover:shadow-lg hover:border-[#0369A1] cursor-pointer transform transition-all duration-300 hover:scale-105'>
                                        <div className='flex flex-col space-y-1.5 p-6 pb-2'>
                                        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-[#0369A1]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-beaker h-6 w-6" data-lov-id="src/components/SubjectSelection.tsx:53:12" data-lov-name="Beaker" data-component-path="src/components/SubjectSelection.tsx" data-component-line="53" data-component-file="SubjectSelection.tsx" data-component-name="Beaker" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
                                            Chemistry
                                        </h3>
                                        <p className='text-sm text-slate-700 '>
                                        Challenge yourself with organic, inorganic, and physical chemistry
                                        </p>

                                    </div>

                                    <div className='p-6 pt-0 flex flex-col items-center justify-center'>
                                        <p className='text-sm text-black'>
                                        From periodic table properties to reaction mechanisms and chemical equilibrium. Test your understanding of chemical principles and reactions.
                                        </p>
                                        <button className='inline-flex items-center justify-centergap-2 rounded-md text-sm font-medium bg-slate-300
                                        ring-offset-white p-3 border border-[#0369A1] m-2 text-[#0369A1] hover:bg-[#0369A1] hover:text-white disabled:pointer-events-none
                                        hover:border-0'>
                                            Select Chemistry
                                        </button>

                                    </div>
                                           
                                    </div>
                                    </Link>

                                    <Link to='/biology'>
                                    <div className='rounded-lg border text-black shadow-sm hover:shadow-lg hover:border-[#EA580C] cursor-pointer transform transition-all duration-300 hover:scale-105'>
                                        <div className='flex flex-col space-y-1.5 p-6 pb-2'>
                                        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-[#EA580C]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-6 w-6" data-lov-id="src/components/SubjectSelection.tsx:85:12" data-lov-name="Brain" data-component-path="src/components/SubjectSelection.tsx" data-component-line="85" data-component-file="SubjectSelection.tsx" data-component-name="Brain" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
                                            Biology
                                        </h3>
                                        <p className='text-sm text-slate-400 '>
                                        Explore topics in human physiology, botany, and zoology
                                        </p>

                                    </div>

                                    <div className='p-6 pt-0 flex flex-col items-center justify-center'>
                                        <p className='text-sm text-black'>
                                        From cell biology to ecology and human systems. Test your knowledge of living organisms and biological process essential for NEET.
                                        </p>
                                        <button className='inline-flex items-center justify-centergap-2 rounded-md text-sm font-medium bg-slate-300
                                        ring-offset-white p-3 border border-[#EA580C] m-2 text-[#EA580C] hover:bg-[#EA580C] hover:text-white disabled:pointer-events-none
                                        hover:border-0'>
                                            Select Biology
                                        </button>

                                    </div>
                                           
                                    </div>
                                    </Link>


                                   <Link to='/mixed'>
                                   <div className='rounded-lg border text-black shadow-sm hover:shadow-lg hover:border-[#10B981] cursor-pointer transform transition-all duration-300 hover:scale-105'>
                                        <div className='flex flex-col space-y-1.5 p-6 pb-2'>
                                        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-[#10B981]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom h-6 w-6" data-lov-id="src/components/SubjectSelection.tsx:21:12" data-lov-name="Atom" data-component-path="src/components/SubjectSelection.tsx" data-component-line="21" data-component-file="SubjectSelection.tsx" data-component-name="Atom" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
                                            Mixed
                                        </h3>
                                        <p className='text-sm text-slate-400 '>
                                        Challenge yourself with questions from all subjects
                                        </p>

                                    </div>

                                    <div className='p-6 pt-0 flex flex-col items-center justify-center'>
                                        <p className='text-sm text-black'>
                                        A comprehensive mix of Physics, Chemistry, and Biology questions. Perfect for all-round NEET preparation and final revision.
                                        </p>
                                        <button className='inline-flex items-center justify-centergap-2 rounded-md text-sm font-medium bg-slate-300
                                        ring-offset-white p-3 border border-[#10B981] m-2 text-[#10B981] hover:bg-[#10B981] hover:text-white disabled:pointer-events-none
                                        hover:border-0'>
                                            Select Mixed
                                        </button>

                                    </div>
                                           
                                    </div>
                                   </Link>



                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.div className='space-y-6'
                    initial="hidden"
                    animate="visible"
                    variants = {fadeInDown}
                    >
                        
                        <div className='border rounded-md shadow-md'>
                            <div className='p-6 flex flex-col space-y-1.6'>
                                <h3 className='flex items-center text-2xl font-semibold leading-none tracking-tight gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help h-5 w-5" data-lov-id="src/components/Instructions.tsx:10:10" data-lov-name="HelpCircle" data-component-path="src/components/Instructions.tsx" data-component-line="10" data-component-file="Instructions.tsx" data-component-name="HelpCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                How To Play
                                </h3>

                                <p className='mt-2 text-slate-700'>
                                Master your NEET preparation with our interactive quiz
                                </p>

                            </div>

                            <div className='p-6 pt-3'>
                                
                                {/* logo */}
                                <div className='flex gap-3 mt-2'>
                                    <div className='flex-shrink-0 flex items-center rounded-full bg-slate-400 justify-center h-8 w-8'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-4 w-4 text-primary" data-lov-id="src/components/Instructions.tsx:21:12" data-lov-name="Clock" data-component-path="src/components/Instructions.tsx" data-component-line="21" data-component-file="Instructions.tsx" data-component-name="Clock" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                                    </div>
                                {/* text */}
                                    <div>
                                        <h4 className='font-medium text-sm'>Timed Questions</h4>
                                        <p className='text-sm text-slate-500'>Each question has a 15-second timer. Answer before time runs out!</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 mt-2'>
                                    <div className='flex-shrink-0 flex items-center rounded-full bg-green-300 justify-center h-8 w-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4 text-correct" data-lov-id="src/components/Instructions.tsx:33:12" data-lov-name="CheckCircle" data-component-path="src/components/Instructions.tsx" data-component-line="33" data-component-file="Instructions.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-correct%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                    </div>
                                {/* text */}
                                    <div>
                                        <h4 className='font-medium text-sm'>Scoring System</h4>
                                        <p className='text-sm text-slate-500'>Earn 10 points for each correct answer. No points are deducted for incorrect answers.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <div className='flex-shrink-0 flex items-center rounded-full bg-slate-400 justify-center h-8 w-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors h-4 w-4 text-primary" data-lov-id="src/components/Instructions.tsx:45:12" data-lov-name="Scissors" data-component-path="src/components/Instructions.tsx" data-component-line="45" data-component-file="Instructions.tsx" data-component-name="Scissors" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>

                                    </div>
                                {/* text */}
                                    <div>
                                        <h4 className='font-medium text-sm'>50:50 Lifeline</h4>
                                        <p className='text-sm text-slate-500'>Use once per quiz to eliminate two incorrect options, making it easier to find the right answer.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <div className='flex-shrink-0 flex items-center rounded-full bg-slate-400 justify-center h-8 w-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward h-4 w-4 text-primary" data-lov-id="src/components/Instructions.tsx:57:12" data-lov-name="SkipForward" data-component-path="src/components/Instructions.tsx" data-component-line="57" data-component-file="Instructions.tsx" data-component-name="SkipForward" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>

                                    </div>
                                {/* text */}
                                    <div>
                                        <h4 className='font-medium text-sm'>Skip Questions</h4>
                                        <p className='text-sm text-slate-500'>Use once per quiz to skip a difficult question without penalty.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <div className='flex-shrink-0 flex items-center rounded-full bg-purple-500 justify-center h-8 w-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb h-4 w-4 text-mixed" data-lov-id="src/components/Instructions.tsx:69:12" data-lov-name="Lightbulb" data-component-path="src/components/Instructions.tsx" data-component-line="69" data-component-file="Instructions.tsx" data-component-name="Lightbulb" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-mixed%22%7D"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>

                                    </div>
                                {/* text */}
                                    <div>
                                        <h4 className='font-medium text-sm'>Subject Selection</h4>
                                        <p className='text-sm text-slate-500'>Choose your preferred subject or test all areas with the Mixed mode for comprehensive practice.</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='rounded-lg border shadow-md w-full animate-fade-in'>
                            <div className='flex flex-col p-6 bg-black text-white'>
                                <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy h-5 w-5" data-lov-id="src/components/HighScores.tsx:33:10" data-lov-name="Trophy" data-component-path="src/components/HighScores.tsx" data-component-line="33" data-component-file="HighScores.tsx" data-component-name="Trophy" data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                                High Scores
                                </h3>
                            </div>

                            <div className='mt-3 text-bold text-slate-600 text-center'>
                                Nothing
                            </div>
                        </div>
                    </motion.div>


                </div>


            </main>
        </div>
        
    
    </>
  )
}

export default Nav
