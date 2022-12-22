import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';  

function MainNavigation (props) { 
    return (        
            <header className={classes.header}>
            <div className={classes.logo}>עו"ד בע"מ</div> 
            <nav>
                <ul>
                    <li>
                        <Link to='/'>בית</Link>
                    </li>
                    <li>
                        <Link to='/about'>אודות</Link>
                    </li>
                    <li>
                        <Link to='/message'>צור קשר</Link>
                    </li>
                </ul>
            </nav>
            </header>    
    )
}

export default MainNavigation;