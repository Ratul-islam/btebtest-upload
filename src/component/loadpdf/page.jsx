"use client"

import React, {useState} from 'react'

import styles from './styles.module.css'

const GetData = ({data}) => {
  // const [rolls, setRolls] = useState()
  var rawData = data
  var rolls = data.match(/\d{6}/g);
  const [finalData, setFinalData] = useState([])



  const handleClick = () =>{



    for(var i=0;i<=rolls.length;i++){
      if(rawData[rawData.indexOf(rolls[i])+7]==`(`){
         
         let info = {
             roll: rolls[i],
             result: {
              semesterName : rawData.slice(rawData.indexOf(rolls[i])+8 , rawData.indexOf(rolls[i])+12)
          },
             passed: true,
         }
         setFinalData((oldData) => [...oldData , {info}])
    
     }   
     }
     
 
     for(var i=0;i<=rolls.length;i++){
         if(rawData[rawData.indexOf(rolls[i])+7]==`{`){
             for(var start = rawData.indexOf(rolls[i])+7; start<=rawData.length; start = start+1 ){
                 if(rawData[start]=='}'){
 
                     let info = {
                         roll: rolls[i],
                         result: {semesterName: rawData.slice(rawData.indexOf(rolls[i])+7,start+1)},
                         passed: false,
                     }
                     setFinalData((oldData) => [...oldData , {info}])
                     break
                 }
             }
 
         }
     }
}
console.log(finalData)

    return(
      <div>
        <button onClick={handleClick}>click me!</button>
      </div>
    )
}

export default GetData;