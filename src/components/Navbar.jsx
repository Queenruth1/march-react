function Navbar(props) {
    console.log(props)
    return(
         <h1 style={{ 
        backgroundColor: "#121212", 
        color: "white" }}
    className={props.className}
    >
    {props.name}
    </h1>
    );
}


export default Navbar