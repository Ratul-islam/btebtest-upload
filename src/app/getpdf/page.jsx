import fs from 'fs';
import pdf from 'pdf-parse'

import LoadPdf from '@/component/loadpdf/page';



  const  GetData =async ()=> {
    
  let dataBuffer = fs.readFileSync('./test/data/result_tour_6th.pdf');

   
  return (
    <div className="container">
      {  
      pdf(dataBuffer).then(function(data) {
        console.log(data.metadata)
           return <LoadPdf data = {JSON.stringify(data.text)} />
    })}
    </div>
  );
}

export default GetData;
