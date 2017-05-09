var React=require('react');
var {Link}=require('react-router');
var {IndexLink}=require('react-router');

var Navigation=()=>{
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</Link>
                        </li>
                        <li>
                            <Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link>
                        </li>
                    </ul>

                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text" >
                            Created By <a href="http://cvasit@gmail.com" target="_blank">Vivek</a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    };

module.exports=Navigation;