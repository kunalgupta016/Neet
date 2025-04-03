import React, { useEffect, useState } from 'react'
import QuestionsData from './Mixed.json';
import { motion } from 'framer-motion';
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router';
const Mixed = () => {

    const [questions, setquestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [useSkip,setUseSkip] = useState(true);
  const [useFiftyFifty,setUseFiftyFifty] = useState(true);
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    startQuiz();
  },[]);

  const startQuiz = ()=>{
    const shuffled = QuestionsData.sort(()=>0.5-Math.random()).slice(0,10);
    setquestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(20);
    setQuizOver(false);
    setUseSkip(true);
    setUseFiftyFifty(true);
    if(shuffled.length>0){
      loadQuestions(shuffled[0]);
    }
  }

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft]);

  const loadQuestions = (question)=>{
      const choices = [...question.incorrect_answers,question.correct_answer];
      setOptions(choices.sort(()=>Math.random-0.5));
      setTimeLeft(20);
  }

  const nextQuestion = () =>{
    if(currentIndex<questions.length-1){
        setCurrentIndex(currentIndex+1);
        loadQuestions(questions[currentIndex+1]);
    }
    else{
      alert(`Quiz over Your Score is ${score}`);
      setQuizOver(true);
      
      
      
      
    }
  }

  const handleAnswer = (answer)=>{{
    if(answer==questions[currentIndex].correct_answer){
      setScore(score+10);
    }
    nextQuestion();
  }}

  const skip = ()=>{
    if(!useSkip)return;
    setUseSkip(false);
    nextQuestion();
  }

  const fiftyfifty = ()=>{
    if(!useFiftyFifty)return;
    const correctAnswers = questions[currentIndex].correct_answer;
    const incorrectAnswers = questions[currentIndex].incorrect_answers;
    const remaining = incorrectAnswers.slice(0,1).concat(correctAnswers);
    setOptions(remaining.sort(()=>Math.random()-0.5));
    setUseFiftyFifty(false);
  }

  

  if (questions.length === 0) return `<p>Loading...</p>`;

  return (
    <>
      <div className='min-h-screen min-w-screen bg-[#F7F7FA]'>
        <motion.header 
        className='bg-black/95  w-full p-4 shadow-md text-white '
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className='container flex justify-between items-center'> {/* navbar ke liye*/ }
            <div className='flex items-center gap-2'> {/* LEft */}
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <Link to='/'>
                <ArrowLeft className="w-6 h-6 text-black" />
              </Link>
              
          </motion.div>
              <h1 className='lg:text-xl md:text-sm text-xs lg:font-bold '>Exit Quiz</h1>
            </div>

            <div> {/* Right Nav bar */}
              <h1 className='lg:text-xl md:text-sm text-xs lg:font-bold '>Mixed Quiz</h1>
            </div>
          </div>


        </motion.header>

        {quizOver ? (
        <motion.div className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md grid grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">Quiz Over!</h2>
          <motion.button 
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md flex gap-2 justify-center items-center text-xl font-semibold "
          onClick={startQuiz}>Restart Quiz</motion.button>

          <Link to='/'>
          <motion.button 
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md flex gap-2 justify-center items-center text-xl font-semibold "
          onClick={startQuiz}>Go to Home</motion.button>
          </Link>
          
        </motion.div>
      ) : (
      


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 animate-fade-in'>
          {/* Left */}
          <motion.div className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.5 }}
        >
          
            

            <h2 className="text-2xl font-bold mb-4">
            Question {currentIndex+1}: {questions[currentIndex].question}
            </h2>
            

            <div className="flex flex-col gap-4">
          
            {options.map((option,index)=>(
              <motion.button
              key = {index}
              whileHover={{ scale: 1.04 }}
              whileTap={{scale:0.9}}
              className='p-3 rounded-lg border border-black w-full'
              onClick={() => handleAnswer(option)}
            >
              {option}
              
            </motion.button>
            ))}
            

            
        
            </div>
      
          </motion.div>


          {/* Right */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
              

              {/* Upper */}
            <motion.div className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md text-2xl flex justify-around items-center gap-3 font-bold "
            whileHover={{ scale: 1.04 }}
            >
              <div>
                {/* Score */}Score : {score}
              </div>

              <div>
                {/* TImer */} Time : {timeLeft}
              </div>

              <button>

              </button>

              
              
            </motion.div>


            {/* Down  */}
            <motion.div  className=" bg-[#F7F7FA] text-black  m-4  grid grid-cols-1 md:grid-cols-2 ">
              {/* 50-50 + Skip */}
                <motion.button className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md flex gap-2 justify-center items-center text-xl font-semibold disabled:cursor-not-allowed"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                onClick={fiftyfifty}
                disabled = {!useFiftyFifty}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors h-4 w-4" ><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
                  {/*  50-50 */}
                  50-50
                </motion.button>

                <motion.button className=" bg-[#F7F7FA] text-black p-6 m-4 border rounded-md shadow-md flex justify-center items-center gap-3 text-xl font-semibold disabled:cursor-not-allowed"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                onClick={skip}
                disabled={!useSkip}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward h-4 w-4" ><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
                    {/* Skip */}
                    Skip
                </motion.button>

            </motion.div>

        </motion.div>
        

        </div>)}
      
      </div>
    </>
  )
}

export default Mixed
