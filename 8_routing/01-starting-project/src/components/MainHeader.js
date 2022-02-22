import { Link, NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    //notice we used <link> instead of <a> so the page won't reload
    //.. it will take you from route to route without refreshing.
    //.. also we changed 'href' to 'to'
    //But!!!! Link won't be active if you are in some page, cuz it for links not for navLinks
    //.. that's why we need to use NavLink + activeClassName property
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    ) 
};

export default MainHeader;