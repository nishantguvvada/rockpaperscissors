import { useState } from 'react'
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissor from "./assets/scissors.png";
import play from "./assets/play.png";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userMove, setUserMove] = useState("");
  const [compMove, setCompMove] = useState("");
  const [roundWinner, setRoundWinner] = useState("");

  function rpsGenerate() {

    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    const compChoice = choices[index];
    setCompMove(compChoice);
    console.log("index", index);
    setRoundWinner(getResult(userMove, compMove));

  }

  function getResult(userChoice, compChoice) {
    if (userChoice === compChoice) {
      return "Tie"
    } else if (
      (userChoice === 'rock' && compChoice === 'scissors') ||
      (userChoice === 'paper' && compChoice === 'rock') ||
      (userChoice === 'scissors' && compChoice === 'paper')
    ) {
      setUserScore(userScore + 1);
      return "User";
    } else {
      setCompScore(compScore + 1);
      return "CPU"
    }

  }

  function resetGame() {

    setUserScore(0);
    setCompScore(0);
    setUserMove("");
    setCompMove("");
    setRoundWinner("");
  }

  return (
    <div className="mt-20 w-full h-screen flex flex-row items-center justify-center">
      <div className="h-screen w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Make a move!
            </h1>
            <div className="flex flex-col items-center justify-center gap-5">
                <button onClick={() => {
                  // setCompMove("");
                  // setUserMove("");
                  setUserMove(c => "rock");
                  rpsGenerate();
                }}><img className="rounded-full w-24 h-24" src={rock}></img></button>
                <button onClick={() => {
                  // setCompMove("");
                  // setUserMove("");
                  setUserMove(c => "paper");
                  rpsGenerate();
                }}><img className="rounded-full w-24 h-24" src={paper}></img></button>
                <button onClick={() => {
                  // setCompMove("");
                  // setUserMove("");
                  setUserMove(c => "scissors");
                  rpsGenerate();
                }}><img className="rounded-full w-24 h-24" src={scissor}></img></button>
            </div>
        </div>
    </div>
      <div className="gap-4 w-full flex flex-col items-center justify-center h-screen w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="gap-4 w-full flex flex-row items-center justify-center h-24 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="gap-4 w-full flex flex-col items-center justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">User Score</h1>
            <h1 className="mb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{userScore}</h1>
          </div>
          <div className="gap-4 w-full flex flex-col items-center justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Comp Score</h1>
            <h1 className="mb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{compScore}</h1>
          </div>
        </div>
        
        {roundWinner ? <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Winner: {roundWinner}</h1>: ""}
        
      <h1 className="mt-4 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Click to Reset</h1>
      <button type="button" onClick={resetGame} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm me-2"><img className="rounded-full w-12 h-12" src={play}></img></button>
      </div>
      
      <div className="gap-4 w-full flex flex-row items-center justify-center h-screen w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h1 className="mb-4 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">You chose</h1>
          <div className="flex flex-row items-center justify-center">{userMove == "" ? <div></div> : userMove == "rock" ? <div><img className="rounded-full w-24 h-24" src={rock}></img></div> : userMove == "paper" ? <div><img className="rounded-full w-24 h-24" src={paper}></img></div> : userMove == "scissors" ? <div><img className="rounded-full w-24 h-24" src={scissor}></img></div> : ""}</div>
        </div>
        <div>
          <h1 className="mb-4 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">CPU chose</h1>
          <div>{compMove == "" ? <div></div> : compMove == "rock" ? <div><img className="rounded-full w-24 h-24" src={rock}></img></div> : compMove == "paper" ? <div><img className="rounded-full w-24 h-24" src={paper}></img></div> : compMove == "scissors" ? <div><img className="rounded-full w-24 h-24" src={scissor}></img></div> : ""}</div>
        </div>
      </div>
      
    </div>
  )
}

export default App
