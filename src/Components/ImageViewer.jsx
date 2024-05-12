import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';
import homePage from './Assets/home-page.jpg'


const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;

function ImageViewer({testId}) {
  const [placement, setPlacement] = React.useState('bottom');
  const [shape, setShape] = React.useState('dot');

  const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
      console.log("testId");
      console.log(testId);
        const fetchFiles = async () => {
            try {
                var token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                const response = await axios.get('http://localhost:8080/dicom/getFiles', {
                    params: {
                        testId: testId,
                    },
                });
                
                const urlsArray = response.data.map((dataString) => {
                    const byteCharacters = atob(dataString);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
    
                    let image = new Blob([byteArray], { type: 'image/jpeg' });
    
                    return URL.createObjectURL(image);
                });
    
                setUrls(urlsArray);
                setFiles(response.data);
                setError(null);

                console.log('fetchfile success');
                console.log(response);
            } catch (error) {
                console.log('fetchfile failed');
                console.error('Error fetching files:', error);
                setError('Failed to fetch files');
            }
        };

        fetchFiles();
    }, [testId]);

    const openFile = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };


  return (
    <>
      {/* <RadioGroup
        name="radioList"
        inline
        appearance="picker"
        defaultValue={placement}
        onChange={setPlacement}
      >
        <RadioLabel>Placement: </RadioLabel>
        <Radio value="top">Top</Radio>
        <Radio value="bottom">Bottom</Radio>
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
      </RadioGroup> */}
      <Divider vertical />
      {/* <RadioGroup
        name="radioList"
        inline
        appearance="picker"
        defaultValue={shape}
        onChange={setShape}
      >
        <RadioLabel>Shape: </RadioLabel>
        <Radio value="dot">Dot</Radio>
        <Radio value="bar">Bar</Radio>
      </RadioGroup> */}
      <Carousel
        key={`${placement}.${shape}`}
        placement={placement}
        shape={shape}
        className="custom-slider"
      >
        {/* <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
        <img src={homePage} height="250" /> */}

            {urls.map((url, index) => (
                    <img key={index} src={url} alt={`Image ${index}`} />
                ))}
                
      </Carousel>
    </>
  );
}

export default ImageViewer;

// ReactDOM.render(<ImageViewer />, document.getElementById('root'));
