export default function CharacterInputBox() {

    const textBoxStyle = {

        height: '30px',
        width: '350px',
        fontSize: '16px',
        paddingTop: '15px',
        paddingLeft: '8px',
        borderRadius: '9px'
    }

  return (
    <div>

      <div>

        <textarea style = {textBoxStyle} placeholder="Start Typing..."></textarea>

      </div>

    </div>
  );
}
