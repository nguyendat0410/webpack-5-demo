/**
 * @description   
 * @since         Sunday, 11 8th 2020, 21:32:19 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import loadable from '@loadable/component';
import Loading from 'components/Loading';

export default {
	path: '/',
	exact: true,
	public: true,
	Element: loadable(() => import('.'), {
		fallback: <Loading />,
	}),
};
