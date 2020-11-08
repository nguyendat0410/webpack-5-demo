/**
 * @description   
 * @since         Sunday, 10 25th 2020, 12:56:28 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import styles from './app.scss';

const cx = classNames.bind(styles);

import routes from './pages/routes';

function Main() {
	return (
		<div className={cx('wrapper')}>
			<Router>
				<Link to="/" className={cx('menu')}>Home</Link> |&nbsp;
				<Link to="/product" className={cx('menu')}>Product</Link> |&nbsp;
				<Link to="/profile" className={cx('menu')}>Profile</Link> |&nbsp;
				<br /><br />
				<Routes>
					{
						routes.map(({ Element, path, ...rest }) => (
							<Route
								key={path}
								path={path}
								element={<Element />}
								{...rest}
							/>
						))
					}
				</Routes>
			</Router>
		</div>
	);
}

export default Main;
