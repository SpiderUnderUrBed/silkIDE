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
		client: {"start":"_app/immutable/entry/start.C9rWQ5Xz.js","app":"_app/immutable/entry/app.D6JB3T6D.js","imports":["_app/immutable/entry/start.C9rWQ5Xz.js","_app/immutable/chunks/entry.N5JhNTfb.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.D6JB3T6D.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DTuvpgqx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
