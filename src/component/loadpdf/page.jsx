"use client"

import React, {useState} from 'react'

import styles from './styles.module.css'

const GetData = ({data, rawData}) => {
  // const [rolls, setRolls] = useState()
//   console.log(data)
//   var rawData = data
//   var rolls = data.match(/\d{6}/g);
  const [finalData, setFinalData] = useState([])
  var rolls

// console.log(rawData)
    const handleClick = () =>{
    
        data.map((data)=>{
            rolls = data.data.match(/\d{6}/g);
            for(var i=0;i<=rolls.length;i++){
                if(rawData[rawData.indexOf(rolls[i])+7]==`(`){
                    var frsm
                    if(rawData.includes('th Semester')){
                        frsm = rawData.slice(rawData.match('th Semester').index-1 ,rawData.match('th Semester').index+2)
                    }else if(rawData.includes('nd Semester')){
                        frsm = rawData.slice(rawData.match('nd Semester').index-1 ,rawData.match('nd Semester').index+2)
                    }else if(rawData.includes('st Semester')){
                        frsm = rawData.slice(rawData.match('st Semester').index-1 ,rawData.match('st Semester').index+2)

                    }else {
                        frsm = 'no semester found'
                    }
                    
                    let info = {
                        roll: rolls[i],
                        technology: rawData.slice(rawData.match('Examination of').index +14,rawData.match('held in').index-7),
                        regulation : rawData.slice(rawData.match('Regulation').index-5 ,rawData.match('Regulation').index),
                        college: data.college,
                        result: [{
                            semester: frsm,
                            status : rawData.slice(rawData.indexOf(rolls[i])+8 , rawData.indexOf(rolls[i])+12)
                        }],
                        passed: true,
                    }
                    setFinalData((oldData) => [...oldData , {info}])
                
                }   
         }
         for(var i=0;i<=rolls.length;i++){
            if(rawData[rawData.indexOf(rolls[i])+7]==`{`){
                for(var start = rawData.indexOf(rolls[i])+7; start<=rawData.length; start = start+1 ){
                    if(rawData[start]=='}'){
                        var frsm
                        if(rawData.includes('th Semester')){
                            frsm = rawData.slice(rawData.match('th Semester').index-1 ,rawData.match('th Semester').index+2)
                        }else if(rawData.includes('nd Semester')){
                            frsm = rawData.slice(rawData.match('nd Semester').index-1 ,rawData.match('nd Semester').index+2)
                        }else if(rawData.includes('st Semester')){
                            frsm = rawData.slice(rawData.match('st Semester').index-1 ,rawData.match('st Semester').index+2)
    
                        }else {
                            frsm = 'no semester found'
                        }
    
                        let info = {
                            roll: rolls[i],
                            technology: rawData.slice(rawData.match('Examination of').index +14,rawData.match('held in').index-7),
                            regulation : rawData.slice(rawData.match('Regulation').index-5 ,rawData.match('Regulation').index),
                            college: data.college,
                            result: [
                                {
                                    semester: frsm,
                                    status: rawData.slice(rawData.indexOf(rolls[i])+7,start+1)
                                }
                            ],
                            passed: false,
                        }
                        setFinalData((oldData) => [...oldData , {info}])
                        break
                    }
                }
    
            }
        }
        
    
    
        })
    }
console.log(finalData)

    return(
      <div>
        <button onClick={handleClick}>click me!</button>
      </div>
    )
}

export default GetData;