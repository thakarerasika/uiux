import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.post('http://10.120.101.160:8006/api/v1/aqav/centralizedservice/process', {
      "param":{
        "url":"https://www.amazon.in","browser":"DESKTOP",
        "validationsRequired":"OverLap,Alignment,OverFlow,Case Sensitive,Broken Link,Image Validation,Font,Spell,Carousel,Menu Hover,Video,Download,Accordion,Hamburger","popUpXpath":[""],"accessUrlList":[""],"selectedResolution":"Default","isCustomResolution":false,"actions":null,"scriptName":"","updateScript":false}
      }).then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    
  } catch (error) {
    console.error('Error during API call:', error);
  }
};
export default fetchData;
