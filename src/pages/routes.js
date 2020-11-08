/**
 * @description   
 * @since         Sunday, 11 8th 2020, 21:35:04 pm
 * @author        Nguyễn Đạt <nguyendat0410@gmail.com>
 * @copyright     Copyright (c) 2020, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


let routes = [];

const context = require.context('.', true, /route.js$/);

context.keys().forEach(path => {
	let Component = require(`${path}`).default;
	if (!Component) {
		return false;
	}
	routes.push(Component);
});

export default routes;
