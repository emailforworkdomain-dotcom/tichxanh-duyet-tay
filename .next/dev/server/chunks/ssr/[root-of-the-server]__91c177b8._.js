module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/service-worker-cleanup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const ServiceWorkerCleanup = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!('serviceWorker' in navigator)) return;
        navigator.serviceWorker.getRegistrations().then((registrations)=>{
            registrations.forEach((registration)=>{
                registration.unregister();
            });
        });
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = ServiceWorkerCleanup;
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/.pnpm/@vercel+analytics@2.0.1_nex_7d2f85f019af26e2f47cfe86d80a587a/node_modules/@vercel/analytics/dist/react/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics,
    "track",
    ()=>track
]);
// src/react/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        if (!window.vaq) window.vaq = [];
        window.vaq.push(params);
    };
};
// package.json
var name = "@vercel/analytics";
var version = "2.0.1";
// src/utils.ts
function isBrowser() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch  {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? "TURBOPACK unreachable" : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    let props = properties;
    const errorProperties = [];
    for (const [key, value] of Object.entries(properties)){
        if (typeof value === "object" && value !== null) {
            if (options.strip) {
                props = removeKey(key, props);
            } else {
                errorProperties.push(key);
            }
        }
    }
    if (errorProperties.length > 0 && !options.strip) {
        throw Error(`The following properties are not valid: ${errorProperties.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    }
    return props;
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return makeAbsolute(props.scriptSrc);
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return makeAbsolute(`${props.basePath}/insights/script.js`);
    }
    return "/_vercel/insights/script.js";
}
function loadProps(explicitProps, confString) {
    var _a;
    let props = explicitProps;
    if (confString) {
        try {
            props = {
                ...(_a = JSON.parse(confString)) == null ? void 0 : _a.analytics,
                ...explicitProps
            };
        } catch  {}
    }
    setMode(props.mode);
    const dataset = {
        sdkn: name + (props.framework ? `/${props.framework}` : ""),
        sdkv: version
    };
    if (props.disableAutoTrack) {
        dataset.disableAutoTrack = "1";
    }
    if (props.viewEndpoint) {
        dataset.viewEndpoint = makeAbsolute(props.viewEndpoint);
    }
    if (props.eventEndpoint) {
        dataset.eventEndpoint = makeAbsolute(props.eventEndpoint);
    }
    if (props.sessionEndpoint) {
        dataset.sessionEndpoint = makeAbsolute(props.sessionEndpoint);
    }
    if (isDevelopment() && props.debug === false) {
        dataset.debug = "false";
    }
    if (props.dsn) {
        dataset.dsn = props.dsn;
    }
    if (props.endpoint) {
        dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        dataset.endpoint = makeAbsolute(`${props.basePath}/insights`);
    }
    return {
        beforeSend: props.beforeSend,
        src: getScriptSrc(props),
        dataset
    };
}
function makeAbsolute(url) {
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/") ? url : `/${url}`;
}
// src/generic.ts
function inject(props = {
    debug: true
}, confString) {
    var _a;
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
    const beforeSend = undefined, src = undefined, dataset = undefined;
    const script = undefined;
    const key = undefined, value = undefined;
}
function track(name2, properties, options) {
    var _a, _b;
    if (!isBrowser()) {
        const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) {
            console.warn(msg);
        } else {
            throw new Error(msg);
        }
        return;
    }
    //TURBOPACK unreachable
    ;
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function getConfigString() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inject({
            framework: props.framework || "react",
            basePath: props.basePath ?? getBasePath(),
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        }, props.configString ?? getConfigString());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91c177b8._.js.map