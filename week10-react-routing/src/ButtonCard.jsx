function ButtonCard(props) {

    return (
        <div>
            <button style = { props.style }>
                { props.label }
            </button>
        </div>
    );

}

export default ButtonCard