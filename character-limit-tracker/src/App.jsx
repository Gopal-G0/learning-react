import { useState } from 'react'
import CharacterInputBox from "./CharacterInputCard.jsx"
function App() {

  const [textValue, setTextValue] = useState("");
  let charLimit = 10;
  let characterLeft = charLimit - textValue.length;

  let crossedCharLimit;

  if (characterLeft >= 0) {

    crossedCharLimit = false;

  } else {

    crossedCharLimit = true;
  }


  const textBoxStyle = {

    height: '30px',
    width: '350px',
    fontSize: '16px',
    paddingTop: '15px',
    paddingLeft: '8px',
    borderRadius: '9px',
    color: !crossedCharLimit ? 'black' : 'red'
  }


  return (

    <div style={{

      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'CaskaydiaMono Nerd Font',
      fontSize: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
    }}>

      <h4>Character Limit Tracker</h4>
      <CharacterInputBox
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        style={textBoxStyle} /

      >

      <div>

        <p>Remaining Characters: {characterLeft}</p>

        { crossedCharLimit && <p style={{color: 'red'}}>You crossed the character limit</p> }

      </div>
    </div>
  )
}

export default App
