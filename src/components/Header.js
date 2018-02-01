import React from 'react';
import './Header.css';

const Header = (props) => {

	return (
		<header className="c-heading">
			<svg className="c-heading__logo" viewBox="0 0 700 860">
				<use xlinkHref="#buffy-heart" />
			</svg>

			<h1 className="c-heading__title">Buffy Quotes App</h1>
		</header>
	);

};

export default Header;
