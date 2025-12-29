function Greetings(props) //we cant use  {} for props cause it itself indicates props so if we use it here means we are calling props to call props
{
  return <h2>Welcome, {props.name} 🌸</h2>;
}

export default Greetings;
