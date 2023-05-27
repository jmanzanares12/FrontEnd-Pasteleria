import React from 'react';
import PropTypes from 'prop-types';
// CSS
import classes from './Title.module.css';

export default function Title(props) {
    return (
        <h1 className={classes.Container}>{props.children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
