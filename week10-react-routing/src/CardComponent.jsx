function CardComponent({ title, image }) {

    const cardStyle = {

        height: '180px',
        width: '180px',
        background: 'lightblue',
        padding: '12px',
        textAlign: 'center',
        border: '1px solid lightgrey',
        boxShadow: '3px 2px 3px',
        borderRadius: '18px',
    }

    const imgStyle = {

        height: '90px',
        width: '150px',
        padding: '25px',
    }

    return (

        <div>

        <div style = { cardStyle }>
            
            { title }
            <img src = { image } style = { imgStyle } ></img>
        </div>

        </div>

    );

}

export default CardComponent