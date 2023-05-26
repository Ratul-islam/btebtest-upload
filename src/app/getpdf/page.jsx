import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse'
import LoadData from '@/component/loadpdf/page';
import { get } from 'http';
import { edgeServerAppPaths } from 'next/dist/build/webpack/plugins/pages-manifest-plugin';




  const  GetData  = async ()=> {

    var allLocation = []
  
    const getAll =async () =>{
      "use server"
      fs.readdir('./test/data',function(err, data){
        if(err){
          console.log(err)
          return;
        }
        var gg = data.text
        // return JSON.stringify(data)
        // data.map((file)=>{
        //   let dataBuffer = fs.readFileSync('./test/data/'+file);
        //   pdf(dataBuffer).then(function(data) { 
        //     return <LoadData data={data.text}/>
        // });
        // })
        console.log(gg)
      })
    }
    // getAll(another)
    // console.log('=--------------=')
    // console.log(getAll())
    getAll()
  return (
    <div className="container">
      {  
      fs.readdir('./test/data',function(err, data){
        // if(err){
        //   console.log(err)
        //   return;
        // }
        data.map((file)=>{
          let dataBuffer = fs.readFileSync('./test/data/'+file);
          return pdf(dataBuffer).then(function(data) { 
            return <LoadData data={data.text}/>
        });
        })
      })
      }
    </div>
  );
}

export default GetData;
