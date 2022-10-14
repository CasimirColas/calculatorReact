function Operator(props) {
    return ( 
        <button className="operator" id={props.name} onClick={props.onClick}>{props.name}</button>
     );
}

export default Operator;