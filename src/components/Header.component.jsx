import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.styles.css';

const Header = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleOnChange} className="search" placeholder="Search by filter, user..." />
            <div>
            {
                props.types.map((type) => (
                    <React.Fragment key={type}>
                        <Link to={`/${type}`}>
                            <input type="radio" name="filterType" value={type} id={type} checked={props.selectedType === type} onChange={props.onTypeChanged} />
                            <label className="radiolabel" htmlFor={type}>{type}</label>
                        </Link>
                    </React.Fragment>
                ))
            }
            </div>
        </div>
    )
}

export default Header;