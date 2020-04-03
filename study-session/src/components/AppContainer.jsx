import React, { Component, Fragment } from 'react';
import SimpleGrid from './SimpleGrid'; // import child component
import ReactCards from './ReactCard'; // import child component
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router

class AppContainer extends Component {

    render() {
        return (

            // fragment to hold Router Links
            <Fragment>
                <Router>
                    {/* Bootstrap Navigation Bar */}
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Example App
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reactCards">
                                Bootstrap App
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/simpleGrid">
                                Simple Grid
                            </Link>
                        </li>
                    </ul>
                    {/* Routes for Simple Grid and React Cards example */}
                    <Route path="/simpleGrid">
                        <SimpleGrid />
                    </Route>
                    <Route path="/reactCards">
                        <ReactCards />
                    </Route>
                </Router>
            </Fragment>
        )
    }
}

export default AppContainer