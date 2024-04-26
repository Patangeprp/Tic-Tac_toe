import React,{useRef, useState} from 'react';
import "./Tictactoe.css";
import circle_icon from '../asssets/circle.png';
import cross_icon from '../asssets/cross.png';

let data=["","","","","","","","",""];

const Tictactoe = () => {

    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleref=useRef(null);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);

    const box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        
        if(count%2===0){
            e.target.innerHTML=`<img src=${circle_icon}>`;
            data[num]="x";
            setCount(count+1);
        }
        else{
            e.target.innerHTML=`<img src=${cross_icon}>`;
            data[num]="o";
            setCount(count+1);
        }
        checkWinner();
    }

    function checkWinner(){
        const lines=[
            [data[0],data[1],data[2]],
            [data[0],data[3],data[6]],
            [data[0],data[4],data[8]],
            [data[1],data[4],data[7]],
            [data[2],data[5],data[8]],
            [data[3],data[4],data[5]],
            [data[2],data[4],data[6]],
            [data[6],data[7],data[8]]
        ];
    

    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(a && a==b && b==c ){
            won(c);
        }
    }
}
const won=(winner)=>{
    setLock(true);
    if(winner==="o"){
        titleref.current.innerHTML=`congratulation: <img src=${cross_icon}> is the winner`;
    }
    else if(winner==="x") {
        titleref.current.innerHTML=`congratulation: <img src=${circle_icon}> is the winner`;
    }
}
const reset=()=>{
    setLock(false);
    titleref.current.innerHTML = `Tic tac toe in <span>react</span>`;
    data = ["", "", "", "", "", "", "", "", ""];

    // Reset inner HTML of each button
    box_array.forEach((boxRef) => {
        boxRef.current.innerHTML = "";
    });

    // Reset count
    setCount(0);
}
  return (
    <div className='container'>
      <h1 ref={titleref} className='title' >Tic tac toe in <span>react</span></h1>
      <div>
        <div className='row1'>
            <button className='btn' ref={box1} onClick={(e)=>{toggle(e,0)}} ></button>
            <button className='btn' ref={box2} onClick={(e)=>{toggle(e,1)}} ></button>
            <button className='btn' ref={box3} onClick={(e)=>{toggle(e,2)}} ></button>
        </div>
        <div className='row2'>
            <button className='btn' ref={box4} onClick={(e)=>{toggle(e,3)}} ></button>
            <button className='btn' ref={box5} onClick={(e)=>{toggle(e,4)}} ></button>
            <button className='btn' ref={box6} onClick={(e)=>{toggle(e,5)}} ></button>
        </div>
        <div className='row3'>
            <button className='btn' ref={box7} onClick={(e)=>{toggle(e,6)}} ></button>
            <button className='btn' ref={box8} onClick={(e)=>{toggle(e,7)}} ></button>
            <button className='btn' ref={box9} onClick={(e)=>{toggle(e,8)}} ></button>
        </div>
      </div>
      <button className='reset' onClick={reset} >Reset</button>
    </div>
  )
}

export default Tictactoe
