const Keys = (props) => {
    return ( 
        <button className="number" onClick={props.onClick}>{props.name}</button>
     );
}
 
export default Keys;