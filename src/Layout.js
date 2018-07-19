import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button
                                type="button"
                                class="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Kusari</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">Nirav Patel{" "}<i className="fa fa-user-circle"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-question-circle"></i></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar">
                                <ul class="nav nav-sidebar">
                                    <li>
                                        <NavLink exact to="/" activeClassName="active">
                                            <i className="fa fa-home"></i>{" "}Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/predictive-analyst" activeClassName="active">
                                            <i className="fa fa-bullseye"></i>{" "}Predictive Analyst</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/marketing-analyst" activeClassName="active">
                                            <i className="fa fa-briefcase"></i>{" "}Marketing Analyst</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/supply-chain" activeClassName="active">
                                            <i className="fa fa-truck"></i>{" "}Supply Chain</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/data-engineer" activeClassName="active">
                                            <i className="fa fa-database"></i>{" "}Data Engineer</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                                {this.props.children}
                            </div>
                        </div>

                    </div>
                </React.Fragment>
        );
    }
}

export default Layout;