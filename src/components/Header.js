import React from 'react';
import { string } from 'prop-types';
import './Header.css';

const Header = ({ title }) => {

	return (
		<header className="c-heading">
			<svg className="c-heading__logo" viewBox="0 0 700 860">
				<use xlinkHref="#buffy-heart" />
			</svg>

			<h1 className="c-heading__title">{ title }</h1>
		</header>
	);

};

Header.propTypes = {
	title : string.isRequired
};

export default Header;
