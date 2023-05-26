import fs from 'fs';
import pdf from 'pdf-parse'

import LoadPdf from '@/component/loadpdf/page';



  const  GetData =async ()=> {
    
  let dataBuffer = fs.readFileSync('./test/data/all-result2023.txt', 'utf-8');
  var data = JSON.stringify(dataBuffer)
      var rawData = data;
      var collages = data?.match(/\d{5}/g);
      
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

  return (
    <div className="container">
      {  
    <LoadPdf data = {newData} rawData={rawData}/>
    }
    </div>
  );
}

export default GetData;
