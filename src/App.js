import React,{ useEffect, useState } from 'react';
import './App.css';


function App()
{
    let seconds = new Date().toLocaleDateString();
    const [currentTime1, setCurrentTime1] = useState(seconds)
    const updateTime1=()=>{
        let hours = new Date().getSeconds();
        setCurrentTime1(hours);
    }
    setInterval(updateTime1,1000)
  
    let minutes = new Date().toLocaleDateString();
    const [currentTime2, setCurrentTime2] = useState(minutes)
    const updateTime2=()=>{
        let hours = new Date().getMinutes();
        setCurrentTime2(hours);
    }
    setInterval(updateTime2,1000)

    let hours = new Date().toLocaleDateString();
    const [currentTime3, setCurrentTime3] = useState(hours)
    const updateTime3=()=>{
        let hours = new Date().getHours();
        setCurrentTime3(hours);
    }
    setInterval(updateTime3,1000)
    
    function time(hours){
        if(hours>12){
           return hours-12;
        }
        return hours;
    }

    function addZero(t){
        var len=t.toString().length;
        if(len<=1){
            return "0"+t;
        }
        return t;
    }

    function ampm(t){
        if(t>=12){
            return "PM"
        }
        return "PM"
    
    }

    let date = new Date().getDate()
    let month = new Date().getMonth()+1
    let year = new Date().getFullYear()

  return (
    <div className="App">
       <h2>REACT DIGITAL CLOCK</h2>
    <div className="date">
    Date:{addZero(date)}/
         {addZero(month)}/    
         {year}
    </div>
    <div className="clock">
        <div>
            <span>{addZero(time(currentTime3))}</span>
            <span className="text">Hours</span>
        </div>
        <div>
            <span>{addZero(currentTime2)}</span>
            <span className="text">Minutes</span>
        </div>
        <div>
            <span>{addZero(currentTime1)}</span>
            <span className="text">Seconds</span>
        </div>
        <div>
            <span id="ampm">{ampm()}</span>
        </div>
    </div>
    </div>
  );
}

export default App;
