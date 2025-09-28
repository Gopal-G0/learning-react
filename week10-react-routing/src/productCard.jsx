function ProductCard(props) {

    return (
        <div>

            <div style={{
                height: '30vh',
                width: '25vh',
                marginRight: 10,
                border: '2px solid black',
                padding: 10
            }}>
                Title: {props.title} <br />
                Price: {props.price} <br />
                Specs: {props.Specs} <br />
                Image : <br />
                <img style ={{
                    height: 175,
                    padding: 8
                }} src = {props.src}></img>
            </div>

        </div>
    );

}

export default ProductCard