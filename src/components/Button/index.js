/**
 * @description   
 * @since         Sunday, 10 25th 2020, 16:08:40 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles);

export default props => {
	const { onClick, children, isError } = props;
	const cssClasses = cx({
		'btn': true,
		'primary': !isError,
		'error': isError,
	});
	return (
		<button className={cssClasses} onClick={onClick}>
			{children}
		</button>
	);
};