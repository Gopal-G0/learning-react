function Alert(props) {

    let bgColor;

    if(props.type == 'success') {

        bgColor = 'lightgreen';

    } else if(props.type == 'warning') {

        bgColor = 'lightcoral'

    } else if(props.type == 'error') {

        bgColor = 'lightgray';

    } else {

        bgColor = 'yellowgreen'
    }

    const style = {

        padding: '12px',
        height: '70px',
        width: '120px',
        borderRadius: '10px',
        margin: '10px 8px',
        paddingLeft: '30px',
        backgroundColor: bgColor,
        fontWeight: 'bold'
    }

    return (

        <div style = { style }>
            { props.children }
        </div>
    );
}

export default Alert