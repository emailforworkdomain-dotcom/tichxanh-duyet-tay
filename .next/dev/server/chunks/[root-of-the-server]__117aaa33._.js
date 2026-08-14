module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/server.js [middleware] (ecmascript)");
;
const BOT_KEYWORDS = [
    'bot',
    'spider',
    'crawler',
    'headl',
    'headless',
    'slurp',
    'fetcher',
    'googlebot',
    'bingbot',
    'yandexbot',
    'baiduspider',
    'twitterbot',
    'ahrefsbot',
    'semrushbot',
    'mj12bot',
    'dotbot',
    'puppeteer',
    'selenium',
    'webdriver',
    'curl',
    'wget',
    'python',
    'scrapy',
    'lighthouse',
    'facebookexternalhit'
];
const BLOCKED_ASN = new Set([
    // Cloud Providers
    15169,
    396982,
    8075,
    16509,
    16510,
    14618,
    31898,
    45102,
    55960,
    // Data Centers
    198605,
    201814,
    24940,
    51396,
    14061,
    20473,
    63949,
    16276,
    135377,
    52925,
    17895,
    52468,
    36947,
    // VPN Providers
    // 212238, // Datacamp Limited
    // 60068, // Datacamp
    // 136787, // PacketHub S.A.
    // 62240, // Clouvider
    // 9009, // M247 Europe SRL
    // 208172, // Proton AG (ProtonVPN)
    // 131199, // Nexeon Technologies, Inc.
    // 21859, // Zenlayer Inc
    // Proxy / Hosting
    55720,
    397373,
    208312,
    37100,
    // Other
    214961,
    401115,
    210644,
    6939,
    209 // CenturyLink
]);
const BLOCKED_UA_REGEX = new RegExp(`(${BOT_KEYWORDS.join('|')})|Linux(?!.*Android)`, 'i');
const getGeoInfo = async (ip)=>{
    try {
        const response = await fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json`, {
            signal: AbortSignal.timeout(3000)
        });
        if (!response.ok) {
            console.error('GeoJS API error:', response.status);
            return null;
        }
        const data = await response.json();
        return {
            asn: data.asn
        };
    } catch  {
        return null;
    }
};
const proxy = async (req)=>{
    const ua = req.headers.get('user-agent');
    const { pathname } = req.nextUrl;
    const ip = req.headers.get('cf-connecting-ip') || req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
    if (!ua || BLOCKED_UA_REGEX.test(ua)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"](null, {
            status: 404
        });
    }
    if (ip !== 'unknown') {
        const geoInfo = await getGeoInfo(ip);
        if (geoInfo) {
            if (geoInfo.asn && BLOCKED_ASN.has(geoInfo.asn)) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"](null, {
                    status: 404
                });
            }
        }
    }
    if (!pathname.startsWith('/contact')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (pathname === '/contact') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const currentTime = Date.now();
    const token = req.cookies.get('token')?.value;
    const pathSegments = pathname.split('/');
    const slug = pathSegments[2];
    const isValid = token && slug && Number(slug) - Number(token) < 240000 && currentTime - Number(token) < 240000;
    if (isValid) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 404
    });
};
const config = {
    matcher: [
        '/contact/:path*',
        '/contact'
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__117aaa33._.js.map