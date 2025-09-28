import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfileCard from './profileCard.jsx'
import ProductCard from './productCard.jsx'
import ButtonCard from './ButtonCard.jsx'
import Alert from './AlertComponent.jsx'
import CardComponent  from './CardComponent.jsx';
function App() {

  return (
   
    <>

      <h2 style = {{
        textAlign: 'center'
      }}>Card Compoent For Course Website</h2>

    <div style = {{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px',
      justifyItems: 'center',
      padding: '45px'

    }} >
      
      {/* <ProfileCard name = 'Gopal' age = '19' designation = 'Data Engineer' />
      <ProfileCard name = 'Amit' age = '23' designation = 'Data Scientist' />
      <ProfileCard name = 'Arohi' age = '25' designation = 'DevOps Engineer' />
      <ProfileCard name = 'Anupam' age = '30' designation = 'Software Engineer' /> */}



      {/* <ProductCard title = 'Iphone' price = '$950' Specs = '12GB, 256GB'
      src = 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317398_0_m-WVpWSKl.png?updatedAt=1757527159495' />
      <ProductCard title = 'Samsung S25' price = '$990' Specs = '12GB, 512GB'
       src = 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/318407_0_uXW3QS3A1.png?updatedAt=1755701296800' />
      <ProductCard title = 'Motorola G96' price = '$205' Specs = '12GB, 256GB'
      src = 'https://www.jiomart.com/images/product/original/rvvfzrtdpp/motorola-g96-5g-8gb-ram-256gb-storage-pantone-ashleigh-blue-smartphone-product-images-orvvfzrtdpp-p612012303-0-202507221914.jpg?im=Resize=(1000,1000)' /> */}


      {/* <ButtonCard label = 'Button 1' style = {{
        height:60,
        width: 70,
        marginRight: 10,
        background: 'lightgreen'
      }} /> 

      <ButtonCard label = 'Button 2' style = {{
        height:60,
        width: 70,
        marginRight: 10,
        background: 'skyblue'
      }} />

      <ButtonCard label = 'Button 3' style = {{
        height:60,
        width: 70,
        marginRight: 10,
        background: 'cyan'
      }} />

      <ButtonCard label = 'Button 4' style = {{
        height:60,
        width: 70,
        background: 'purple',
        color: 'white'
      }} /> */}



      {/* <Alert type = 'success'> Data Fetched Successfully </Alert>
      <Alert type = 'warning'> Please check your fetch logic </Alert>
      <Alert type = 'Error'> Error while Fetching Data </Alert> */}

      
      <CardComponent title = 'React Basics' image = 'https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format&corner-radius=16&fit=crop&h=312&mask=corners&q=45&w=568' />
      <CardComponent title = 'React Advanced' image = 'https://s3.us-east-1.amazonaws.com/creator-assets.codedamn.com/codedamn-61897bfe60f1140008feb00d/COURSE_IMAGE/2023-02-12/eba1c4863eb1a6576514ccf2b138f6f5b53871e9' />
      <CardComponent title = 'Tailwind CSS Full Course' image = 'https://miro.medium.com/1*tHpUU_Z2pTMt5G1KfY0ulg.jpeg' />
      <CardComponent title = 'TypeScript Course' image = 'https://wearedevelopers.imgix.net/magazine/articles/554/images/hero/odPaQHSbArSIFzZbUzlE-1740483365.jpeg?w=720&auto=compress,format' />

    </div>

    </>

  );
}

export default App
