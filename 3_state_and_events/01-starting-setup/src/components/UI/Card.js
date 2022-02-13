import './Card.css';
//this component is just wrapper (a styled div):
const Card = (props) => {
    //you must do this ترقيع to so the card class and any other custom class will work:
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div> // children used so nested react tags can work (look at ExpenseItem components)
}

export default Card;