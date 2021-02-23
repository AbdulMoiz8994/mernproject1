import React, { Component } from 'react'
import styles from './NavBar.module.css'
// import TypeScript
import PropTypes from 'prop-types'


class NavBar extends Component {
    static defaultProperty={
        title: 'GitHub Users',
        icon: 'fab fa-github',
    }

static propTypes={
     title: PropTypes.string.isRequired,
     icon: PropTypes.string.isRequired 
}


    render() {
        return (
            <div className={styles.header}>
          <h1> {this.props.title} <i className="fab fa-github"></i></h1>
            </div>
        )
    }
}

export default NavBar
