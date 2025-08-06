import MoodInput from "@/components/ui/moodinput"
import { useState } from "react";
import Moodoutput from "@/components/ui/moodoutput"
const Home = () => {

   const[mood, setMood]= useState("");
   const[subject,setSubject]=useState("");
   const[footer,setFooter]=useState("");
   const[generate,setGenerator]=useState(false);
   const handleGenerate =()=>{
    const lowerMood= mood.toLowerCase();
    if(lowerMood.includes("happy")){
      setSubject("Feeling great today!");
      setFooter("Keep Smiling");
    }else if(lowerMood.includes("sad")){
      setSubject("Unlucky Day!");
      setFooter("Smiling is the best medicine");
    }
    else if(lowerMood.includes("angry")){
      setSubject("Need to calm down");
      setFooter("Deep breaths,everthing will be fine");
    }
    else{
      setSubject("Mood Update");
      setFooter("Catch you later");
    }
    setGenerator(true);

   }
   const handleReset=()=>{
    setMood("");
   setSubject("");
  setFooter("");
  setGenerator(false);
   }
  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>Mood Mail Generator</h2>

       {!generate?(
         <MoodInput mood={mood} setMood={setMood} onGenerate={handleGenerate} disabled={generate}/>):(<Moodoutput subject={subject} footer={footer} onReset={handleReset}/>)
         }
     

    </div>
  )
}

export default Home
