/**
 * @description   
 * @since         Sunday, 11 8th 2020, 21:33:55 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { useState } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';

import Button from '../../components/Button';
import styles from '../../app.scss';

const cx = classNames.bind(styles);

const Home = () => {
	const [error, setError] = useState(false);
	const onClickBtn = () => setError(!error);
	return (
		<div>
			<h1 className={cx({ 'red': error, 'green': !error })}>
				React JS version {React.version}
			</h1>
			<Button isError={error} onClick={onClickBtn}>
				Change Color
			</Button>
			<br />
		</div>
	);
};

export default Home;
