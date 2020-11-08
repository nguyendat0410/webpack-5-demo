/**
 * @description   
 * @since         Sunday, 11 8th 2020, 22:09:15 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import loadable from '@loadable/component';
import Loading from 'components/Loading';

export default {
	path: '/product',
	exact: true,
	public: true,
	Element: loadable(() => import('./'), {
		fallback: <Loading />,
	}),
};