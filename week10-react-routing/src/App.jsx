import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (

    <div>
      
      <BrowserRouter>

        <Link to = "/">ALLEN </Link>

        <Link to = "neet/class-11-coaching">Class 11 </Link>

        <Link to = "neet/class-12-coaching">Class 12 </Link>

          <Routes>

            <Route path="neet/class-11-coaching" element = { <Class11Program /> } />
            <Route path="neet/class-12-coaching" element= { <Class12Program /> } />
            <Route path="/" element = { <LandingPage /> } />

          </Routes>

      </BrowserRouter>

    </div>

  );
}

function Class12Program() {

  return (
    <div>
      NEET program for Class 12th
    </div>
  );
}

function Class11Program() {

  return (
    <div>
      NEET program for Class 11th
    </div>
  );
}

function LandingPage() {

  return (
    <div>
      Welcome to ALLEN
    </div>
  );
}

export default App
