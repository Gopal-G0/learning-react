import CharacterInputBox from "../CharacterInputCard"
function App() {


  return (
    <div style = {{

      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh'

    }}>

      <h4>Text Box:</h4>
      <CharacterInputBox />
      
    </div>
  )
}

export default App
