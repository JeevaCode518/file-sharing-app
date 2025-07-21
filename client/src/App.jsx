import { useRef, useState, useEffect} from 'react'
import './App.css'
import { uploadFile } from './service/api';

function App() {

  const [file, setFile] = useState();
  const [result, setResult] = useState('');
  
  const fileInputRef = useRef(null);

  const onUploadClick = () =>{
    fileInputRef.current.click();
  }

  const handleChange = (e) =>{
    setFile(e.target.files[0]);
  }

  useEffect(() =>{
    const getImage = async() =>{
      if(file){
        setResult("");
        try{
          const data = new FormData();
          data.append('name', file.name);
          data.append('file', file);

          const response = await uploadFile(data);
          console.log(response);
          setResult(response.path);
          console.log(response);
        }
        catch(error){
          console.log(error.message);
        }
      }
    };

    getImage();
  },[file]);


  return (
    <>
      <div className='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
        <div className='container'>
          <div className='wrapper'>
            <h1> File Sharing App!</h1>
            <p>Upload and share you file with ease</p>

            <button id="upload-botton" onClick={onUploadClick}>Upload File</button>
            <input type='file' ref={fileInputRef} onChange={handleChange} style={{display:'none'}}/>
            {result && (
            <a href={result} target='_blank' rel="noopener noreferrer" style={{ marginTop: '20px', display: 'block' }}>
              {result}
            </a>
          )}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
