export default function CharacterInputBox(props) {

    

  return (
    <div>

      <div>

        <textarea 
          style = { props.style } 
          placeholder="Start Typing..."
          value = { props.value }
          onChange = { props.onChange }>

        </textarea>

      </div>

    </div>
  );
}
