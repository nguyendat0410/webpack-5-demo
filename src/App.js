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

import Button from './components/Button';

import styles from './app.scss';

const cx = classNames.bind(styles);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
		};
	}
	onClickBtn = () => this.setState({ error: !this.state.error });
	render() {
		return (
			<div className={cx('wrapper')}>
				<h1 className={cx('hello')}>React JS version {React.version}</h1>
				<Button isError={this.state.error} onClick={this.onClickBtn}>
					Overwrite
				</Button>
			</div>
		);
	}
}