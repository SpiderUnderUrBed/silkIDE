export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.L3Lq03DQ.js","app":"_app/immutable/entry/app.BpWJaNXW.js","imports":["_app/immutable/entry/start.L3Lq03DQ.js","_app/immutable/chunks/entry.QEYdFgqj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BpWJaNXW.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DTuvpgqx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
