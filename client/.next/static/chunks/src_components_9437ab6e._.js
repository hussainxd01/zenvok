(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroComponent() {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroComponent.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            // Animation...
            tl.fromTo(heroRef.current, {
                y: "-100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            });
            tl.fromTo(letterRefs.current, {
                yPercent: 100,
                opacity: 0,
                scaleY: 1.2,
                transformOrigin: "bottom"
            }, {
                yPercent: 0,
                opacity: 1,
                scaleY: 1,
                duration: 1.2,
                stagger: 0.08,
                ease: "power3.out"
            }, "-=1.2");
            const scrollTween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(heroRef.current, {
                height: "500px",
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    scrub: true
                }
            });
            return ({
                "HeroComponent.useEffect": ()=>{
                    if (scrollTween.scrollTrigger) scrollTween.scrollTrigger.kill();
                    scrollTween.kill();
                }
            })["HeroComponent.useEffect"];
        }
    }["HeroComponent.useEffect"], []);
    const setLetterRef = (el)=>{
        if (el && !letterRefs.current.includes(el)) {
            letterRefs.current.push(el);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: heroRef,
        className: "w-full h-[700px] bg-black flex flex-col items-center text-white overflow-hidden pt-20",
        "data-theme": "dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-wrapper w-full sm:px-10 mt-10 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            ref: svgRef,
                            width: "100%",
                            height: "auto",
                            viewBox: "0 0 1364 253",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "xMidYMid meet",
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    ref: setLetterRef,
                                    d: "M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls absolute bottom-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "icon-wrapper p-4 cursor-pointer hover:opacity-70 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 12 12",
                        className: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hero.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(HeroComponent, "mEkfVdGkjc/sTxoH/9fcxKoKif0=");
_c = HeroComponent;
var _c;
__turbopack_context__.k.register(_c, "HeroComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/statement.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Statement = ()=>{
    _s();
    const statementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statementSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Statement.useLayoutEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            textRefs.current = [];
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Statement.useLayoutEffect.ctx": ()=>{
                    const statement = statementRef.current;
                    const words = statement.innerText.split(" ");
                    const localScrollTriggers = [];
                    statement.innerHTML = "";
                    words.forEach({
                        "Statement.useLayoutEffect.ctx": (word, index)=>{
                            const wordSpan = document.createElement("span");
                            wordSpan.innerHTML = word + (index < words.length - 1 ? " " : "");
                            wordSpan.style.display = "inline-block";
                            wordSpan.style.overflow = "hidden";
                            textRefs.current.push(wordSpan);
                            statement.appendChild(wordSpan);
                        }
                    }["Statement.useLayoutEffect.ctx"]);
                    textRefs.current.forEach({
                        "Statement.useLayoutEffect.ctx": (word, index)=>{
                            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(word, {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: "power2.out",
                                delay: index * 0.05,
                                scrollTrigger: {
                                    trigger: statementRef.current,
                                    start: "top 80%",
                                    end: "bottom 90%"
                                }
                            });
                            localScrollTriggers.push(tween.scrollTrigger);
                        }
                    }["Statement.useLayoutEffect.ctx"]);
                }
            }["Statement.useLayoutEffect.ctx"], statementSectionRef);
            return ({
                "Statement.useLayoutEffect": ()=>ctx.revert()
            })["Statement.useLayoutEffect"];
        }
    }["Statement.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: statementSectionRef,
        className: "bg-black text-white py-16 px-4 md:px-8 lg:px-16 statement-section w-full ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: statementRef,
                className: "text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-12",
                children: [
                    "We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#services",
                        className: "underline",
                        children: "our services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/statement.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/statement.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(Statement, "3+yeAmhBFiR5fkwUOk21kXAaQR4=");
_c = Statement;
const __TURBOPACK__default__export__ = Statement;
var _c;
__turbopack_context__.k.register(_c, "Statement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_9437ab6e._.js.map