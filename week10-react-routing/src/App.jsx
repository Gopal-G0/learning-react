import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfileCard from './profileCard.jsx'
import ProductCard from './productCard.jsx'
import ButtonCard from './ButtonCard.jsx'
import Alert from './AlertComponent.jsx'
function App() {

  return (

    <div style = {{ 
      display: 'flex'
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



      <Alert type = 'success'> Data Fetched Successfully </Alert>
      <Alert type = 'warning'> Please the your fetch logic </Alert>
      <Alert type = 'Error'> Error while Fetching Data </Alert>

    </div>

  );
}

export default App
