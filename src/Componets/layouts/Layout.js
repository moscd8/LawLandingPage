import classes from './Layout.module.css';
import MainNavigation from './MainNavigation/MainNavigation';

function Layout (props) {
    return (
        <div>
            <MainNavigation/>
            <main className={classes.Layout}> {props.children} </main>
        </div>
    )
}

export default Layout;