function ProfileCard(props) {

    return (
        <div>

            <div style = {{
                height: '18vh',
                width: '25vh',
                marginRight: 10,
                border: '2px solid black',
                padding: 8
            }}>

                Name : { props.name }
                <br></br>
                Age : { props.age }
                <br></br>
                Design. : { props.designation }

            </div>

        </div>
    );

}

export default ProfileCard