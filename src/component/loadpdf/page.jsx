"use client"

import React, {useState} from 'react'

import styles from './styles.module.css'

const LoadData = ({data}) => {
    console.log(data)
    const [finalData, setFinalData] = useState([])
    var rawData = data;
    var collages = data?.match(/\d{5}/g);
    var rolls
    const clgArr=[];
    const endLocation=[];
    const newData=[];

    for(var b = 0; b<= collages?.length;b=b+1){
        if(rawData[rawData.indexOf(collages[b])+6] == '-'){
            for(var e = rawData.indexOf(collages[b])+6; e<=rawData.length; e= e+1){
                if(rawData[e] == ','){
                    clgArr.push(rawData.slice(rawData.indexOf(collages[b])+7,e-1))
                    break
                }
            }
        }
    }
    var notes = Array.from(rawData?.matchAll("Note:"))
    notes.map((note)=> endLocation.push(note.index))
    for(let times= 0; times<clgArr.length; times++){
        let trimedData = {
            college: clgArr[times],
            data: rawData.slice(rawData.indexOf(clgArr[times]),endLocation[times])
        }
        newData.push(trimedData)
    }

  const handleClick = () =>{
    
    newData.map((data)=>{
        rolls = data.data.match(/\d{6}/g);
        for(var i=0;i<=rolls.length;i++){
            if(rawData[rawData.indexOf(rolls[i])+7]==`(`){
                
                let info = {
                    roll: rolls[i],
                    technology: rawData.slice(rawData.match('Examination of').index +14,rawData.match('held in').index-7),
                    regulation : rawData.slice(rawData.match('Regulation').index-5 ,rawData.match('Regulation').index),
                    college: data.college,
                    result: [{
                        semester: rawData.slice(rawData.match('th Semester').index-2 ,rawData.match('th Semester').index+3),
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
        
                            let info = {
                                roll: rolls[i],
                                technology: rawData.slice(rawData.match('Examination of').index +14,rawData.match('held in').index-7),
                                regulation : rawData.slice(rawData.match('Regulation').index-5 ,rawData.match('Regulation').index),
                                college: data.college,
                                result: [{
                                    semester: rawData.slice(rawData.match('th Semester').index-2 ,rawData.match('th Semester').index+3),
                                    status : rawData.slice(rawData.indexOf(rolls[i])+8 , rawData.indexOf(rolls[i])+12)
                                }],
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

export default LoadData;