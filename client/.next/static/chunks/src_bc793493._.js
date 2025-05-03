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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-client] (ecmascript)"); // Added import for ScrollToPlugin
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroComponent({ heroRef }) {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToPlugin"]); // Register ScrollToPlugin
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outerDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
                height: "400px",
                ease: "power3.out",
                scrollTrigger: {
                    trigger: outerDivRef.current,
                    start: "bottom 90%",
                    scrub: 1,
                    duration: 2.5
                }
            });
            // Add click handler for the arrow
            if (arrowRef.current) {
                arrowRef.current.addEventListener("click", handleArrowClick);
            }
            return ({
                "HeroComponent.useEffect": ()=>{
                    if (scrollTween.scrollTrigger) scrollTween.scrollTrigger.kill();
                    scrollTween.kill();
                    // Clean up event listener
                    if (arrowRef.current) {
                        arrowRef.current.removeEventListener("click", handleArrowClick);
                    }
                }
            })["HeroComponent.useEffect"];
        }
    }["HeroComponent.useEffect"], []);
    // Arrow click handler to scroll down smoothly
    const handleArrowClick = ()=>{
        // Get the current viewport height
        const viewportHeight = window.innerHeight;
        // Scroll down 100vh with animation
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
            duration: 1.2,
            scrollTo: {
                y: viewportHeight,
                autoKill: false
            },
            ease: "power3.out"
        });
    };
    const setLetterRef = (el)=>{
        if (el && !letterRefs.current.includes(el)) {
            letterRefs.current.push(el);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: outerDivRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: heroRef,
            className: "w-full h-[700px] bg-black flex flex-col items-center text-white overflow-hidden pt-20",
            "data-theme": "dark",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col gap-32",
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
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hero.jsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-title sm:px-10 flex gap-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Design. Engineering. Execution"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Built for what’s next."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Two Engagement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Models: Cash & Equity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "controls absolute bottom-20 right-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: arrowRef,
                        className: "icon-wrapper p-4 cursor-pointer hover:opacity-70 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "none",
                            viewBox: "0 0 12 12",
                            className: "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero.jsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(HeroComponent, "stvodnHnTOmwuz4ZhyvG3jOVyuI=");
_c = HeroComponent;
var _c;
__turbopack_context__.k.register(_c, "HeroComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/showreel.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Showreel = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    // State variables
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showreelCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cursor position tracking
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    });
    // Video playback functions
    const playVideo = ()=>{
        if (videoRef.current) {
            videoRef.current.play().then(()=>setIsPlaying(true)).catch((error)=>{
                console.error("Playback error:", error);
                if (!isMuted) {
                    setIsMuted(true);
                    videoRef.current.muted = true;
                    videoRef.current.play().then(()=>setIsPlaying(true));
                }
            });
        }
    };
    const openModal = ()=>setIsOpen(true);
    const closeModal = ()=>{
        if (timelineRef.current) {
            timelineRef.current.reverse().then(()=>{
                setIsOpen(false);
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            });
        }
    };
    const toggleMute = (e)=>{
        e.stopPropagation(); // Prevent closing the modal
        if (videoRef.current) {
            const newMuted = !isMuted;
            videoRef.current.muted = newMuted;
            setIsMuted(newMuted);
            if (!newMuted && !isPlaying) playVideo();
        }
    };
    const togglePlayPause = (e)=>{
        e.stopPropagation(); // Prevent closing the modal
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                playVideo();
            }
        }
    };
    // Initialize scroll animation and cursor followers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Showreel.useEffect": ()=>{
            // Scroll Animation for showreel
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(videoContainerRef.current, {
                scale: 0.8,
                opacity: 0
            });
            tl.to(videoContainerRef.current, {
                scale: 1,
                opacity: 1,
                ease: "power2.out"
            });
            // Cursor following functionality
            const showreelFollower = showreelCursorRef.current;
            const modalFollower = modalCursorRef.current;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                showreelFollower,
                modalFollower
            ], {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0.5
            });
            const onMouseMove = {
                "Showreel.useEffect.onMouseMove": (e)=>{
                    cursor.current.targetX = e.clientX;
                    cursor.current.targetY = e.clientY;
                }
            }["Showreel.useEffect.onMouseMove"];
            const followCursor = {
                "Showreel.useEffect.followCursor": ()=>{
                    cursor.current.x += (cursor.current.targetX - cursor.current.x) * 0.1;
                    cursor.current.y += (cursor.current.targetY - cursor.current.y) * 0.1;
                    if (showreelFollower && modalFollower) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                            showreelFollower,
                            modalFollower
                        ], {
                            x: cursor.current.x,
                            y: cursor.current.y
                        });
                    }
                    requestAnimationFrame(followCursor);
                }
            }["Showreel.useEffect.followCursor"];
            followCursor();
            document.addEventListener("mousemove", onMouseMove);
            // Escape key to close modal
            const handleEsc = {
                "Showreel.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape" && isOpen) closeModal();
                }
            }["Showreel.useEffect.handleEsc"];
            window.addEventListener("keydown", handleEsc);
            return ({
                "Showreel.useEffect": ()=>{
                    document.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("keydown", handleEsc);
                }
            })["Showreel.useEffect"];
        }
    }["Showreel.useEffect"], [
        isOpen
    ]);
    // Modal animation when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Showreel.useEffect": ()=>{
            if (isOpen) {
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                // Start hidden
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                    overlayRef.current,
                    modalRef.current
                ], {
                    opacity: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(modalRef.current, {
                    scale: 0.95,
                    rotate: 5
                });
                tl.to(overlayRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }).to(modalRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }, "-=0.2").call({
                    "Showreel.useEffect": ()=>{
                        if (videoRef.current) {
                            videoRef.current.style.visibility = "visible";
                            playVideo();
                        }
                    }
                }["Showreel.useEffect"]);
                timelineRef.current = tl;
                // Show the modal cursor follower
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modalCursorRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.out"
                });
            } else {
                // Hide the modal cursor follower when modal is closed
                if (modalCursorRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modalCursorRef.current, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.3,
                        ease: "power3.out"
                    });
                }
            }
        }
    }["Showreel.useEffect"], [
        isOpen
    ]);
    // Showreel hover state management
    const handleShowreelMouseEnter = ()=>{
        if (!isOpen) {
            setIsHovering(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(showreelCursorRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power3.out"
            });
        }
    };
    const handleShowreelMouseLeave = ()=>{
        setIsHovering(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(showreelCursorRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power3.out"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: showreelCursorRef,
                className: "pointer-events-none fixed top-0 left-0 w-auto h-20 flex items-center justify-center gap-2 bg-opacity-20 rounded-full z-50",
                style: {
                    opacity: 0,
                    transform: "translate(-50%, -50%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            className: "w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/showreel.jsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/showreel.jsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: "Play Reel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/showreel.jsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/showreel.jsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalCursorRef,
                className: "pointer-events-none fixed top-0 left-0 w-auto h-20 flex items-center justify-center gap-2 bg-opacity-20 rounded-full z-[9999]",
                style: {
                    opacity: 0,
                    transform: "translate(-50%, -50%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20,
                            color: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/showreel.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: "Close Reel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/showreel.jsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/showreel.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "w-full h-[800px] flex items-center justify-center relative overflow-hidden bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: videoContainerRef,
                    onMouseEnter: handleShowreelMouseEnter,
                    onMouseLeave: handleShowreelMouseLeave,
                    onClick: openModal,
                    className: "w-full h-full flex items-center justify-center cursor-pointer relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: "/reel.mp4",
                            draggable: false,
                            autoPlay: true,
                            preload: "none",
                            playsInline: true,
                            muted: true,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-7xl text-white",
                                children: "Show Reel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/showreel.jsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/showreel.jsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/showreel.jsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center",
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: modalRef,
                    className: "relative w-full max-w-5xl aspect-video bg-black overflow-hidden rounded shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            className: "w-full h-full object-cover",
                            playsInline: true,
                            loop: true,
                            muted: isMuted,
                            style: {
                                visibility: "hidden"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/reel.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/showreel.jsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-4 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleMute,
                                    className: "bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all",
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showreel.jsx",
                                        lineNumber: 329,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showreel.jsx",
                                        lineNumber: 329,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/showreel.jsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: togglePlayPause,
                                    className: "bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all",
                                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showreel.jsx",
                                        lineNumber: 336,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showreel.jsx",
                                        lineNumber: 336,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/showreel.jsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/showreel.jsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/showreel.jsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/showreel.jsx",
                lineNumber: 302,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(Showreel, "1z5KtbfKr8IEdewlbev+LICL4Fs=");
_c = Showreel;
const __TURBOPACK__default__export__ = Showreel;
var _c;
__turbopack_context__.k.register(_c, "Showreel");
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
    const hrRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const columnOneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const columnTwoParaRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const columnOneContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const columnTwoContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Function to create masked text animation
    const createMaskedTextAnimation = (element, text, containersRef, indent = false)=>{
        if (!element) return;
        // Split text into words
        const words = text.split(" ");
        element.innerHTML = "";
        // Create wrapper div
        const textWrapper = document.createElement("div");
        textWrapper.className = "text-wrapper";
        textWrapper.style.display = "flex";
        textWrapper.style.flexWrap = "wrap";
        textWrapper.style.alignItems = "flex-start";
        textWrapper.style.justifyContent = "flex-start";
        // Add indent if needed
        if (indent) {
            const indentDiv = document.createElement("div");
            indentDiv.style.width = "3em";
            indentDiv.style.display = "inline-block";
            indentDiv.style.height = "1px";
            textWrapper.appendChild(indentDiv);
        }
        // Create word containers and spans
        words.forEach((word, index)=>{
            const container = document.createElement("div");
            container.style.display = "inline-block";
            container.style.overflow = "hidden";
            container.style.verticalAlign = "top";
            container.style.position = "relative";
            const wordSpan = document.createElement("span");
            wordSpan.innerHTML = word;
            wordSpan.style.display = "inline-block";
            wordSpan.style.transform = "translateY(100%)";
            container.appendChild(wordSpan);
            containersRef.current.push({
                container,
                wordSpan
            });
            textWrapper.appendChild(container);
            if (index < words.length - 1) {
                const space = document.createElement("span");
                space.innerHTML = "\u00A0";
                textWrapper.appendChild(space);
            }
        });
        element.appendChild(textWrapper);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Statement.useLayoutEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            textContainersRef.current = [];
            columnOneContainersRef.current = [];
            columnTwoContainersRef.current = [];
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Statement.useLayoutEffect.ctx": ()=>{
                    // Main statement animation
                    createMaskedTextAnimation(statementRef.current, statementRef.current.textContent, textContainersRef, true);
                    // Column one animation
                    createMaskedTextAnimation(columnOneRef.current, columnOneRef.current.textContent, columnOneContainersRef, false);
                    // Column two paragraphs animation - sequential paragraph animation
                    columnTwoParaRefs.current.forEach({
                        "Statement.useLayoutEffect.ctx": (paraRef, paraIndex)=>{
                            if (paraRef) {
                                const paraContainers = [];
                                const tempRef = {
                                    current: paraContainers
                                };
                                createMaskedTextAnimation(paraRef, paraRef.textContent, tempRef, false);
                                // Create a timeline for this paragraph
                                const paraTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                    scrollTrigger: {
                                        trigger: columnTwoParaRefs.current[0],
                                        start: "top 80%",
                                        end: "bottom 90%"
                                    }
                                });
                                // Add to timeline with stagger between paragraphs
                                paraTl.to(paraContainers.map({
                                    "Statement.useLayoutEffect.ctx": (item)=>item.wordSpan
                                }["Statement.useLayoutEffect.ctx"]), {
                                    y: 0,
                                    duration: 0.5,
                                    ease: "power2.out",
                                    stagger: 0.05
                                }, paraIndex * 0.7 // Delay between paragraphs
                                );
                            }
                        }
                    }["Statement.useLayoutEffect.ctx"]);
                    // Animate the main statement words
                    textContainersRef.current.forEach({
                        "Statement.useLayoutEffect.ctx": ({ wordSpan }, index)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordSpan, {
                                y: 0,
                                duration: 0.5,
                                ease: "power2.out",
                                delay: index * 0.05,
                                scrollTrigger: {
                                    trigger: statementRef.current,
                                    start: "top 80%",
                                    end: "bottom 90%"
                                }
                            });
                        }
                    }["Statement.useLayoutEffect.ctx"]);
                    // Animate the HR
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(hrRef.current, {
                        width: "0%"
                    }, {
                        width: "100%",
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: hrRef.current,
                            start: "top 90%",
                            end: "bottom 90%"
                        }
                    });
                    // Animate column one words
                    columnOneContainersRef.current.forEach({
                        "Statement.useLayoutEffect.ctx": ({ wordSpan }, index)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordSpan, {
                                y: 0,
                                duration: 0.5,
                                ease: "power2.out",
                                delay: index * 0.05,
                                scrollTrigger: {
                                    trigger: columnOneRef.current,
                                    start: "top 90%",
                                    end: "bottom 90%"
                                }
                            });
                        }
                    }["Statement.useLayoutEffect.ctx"]);
                }
            }["Statement.useLayoutEffect.ctx"], statementSectionRef);
            return ({
                "Statement.useLayoutEffect": ()=>ctx.revert()
            })["Statement.useLayoutEffect"];
        }
    }["Statement.useLayoutEffect"], []);
    // Function to add paragraph refs
    const addParaRef = (el)=>{
        if (el && !columnTwoParaRefs.current.includes(el)) {
            columnTwoParaRefs.current.push(el);
        }
    };
    // Reset refs array when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Statement.useEffect": ()=>{
            columnTwoParaRefs.current = [];
        }
    }["Statement.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: statementSectionRef,
        className: "bg-black text-white py-16 px-4 md:px-8 lg:px-16 statement-section w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    ref: statementRef,
                    className: "text-4xl text-white md:text-5xl lg:text-6xl font-extralight leading-12 tracking-tighter mb-12",
                    children: [
                        "We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#services",
                            className: "underline",
                            children: "our services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/statement.jsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statement.jsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hrRef,
                className: "w-0 border-gray-50/30 border-b h-[0.5px] max-w-7xl mx-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "column",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            ref: columnOneRef,
                            className: "text-2xl font-light mb-6",
                            children: "Design that converts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/statement.jsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement.jsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "column flex flex-col gap-5 w-full md:w-4/5 lg:w-[60%] tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: addParaRef,
                                className: "text-lg font-light",
                                children: "We are the brand catalyst."
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: addParaRef,
                                className: "text-lg font-light",
                                children: "Since day one, Zenvok has helped businesses launch, scale, and stay sharp — through strategy, design, and clean engineering."
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: addParaRef,
                                className: "text-lg font-light",
                                children: "In 2025, we introduced our selective model — partnering with a few bold teams at a time to go deep, not wide."
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: addParaRef,
                                className: "text-lg font-light",
                                children: "No noise. Just focus, precision, and digital built to perform."
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement.jsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/statement.jsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
};
_s(Statement, "v2EJ97kL5x28wioqdjs20zB+2N4=");
_c = Statement;
const __TURBOPACK__default__export__ = Statement;
var _c;
__turbopack_context__.k.register(_c, "Statement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar({ heroRef }) {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    const navbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // Navbar slide in when page loads
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(navbarRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1
            });
            // Create a clip path animation container effect
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(logoContainerRef.current, {
                overflow: "hidden",
                height: textRef.current.offsetHeight,
                position: "relative"
            });
            // Set initial position of SVG
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(svgNavRef.current, {
                opacity: 0,
                y: "100%",
                position: "absolute",
                left: 0,
                top: 0
            });
            // Text and SVG scroll animation
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "bottom top",
                    end: "bottom top-=100",
                    scrub: 0.5,
                    toggleActions: "play reverse play reverse"
                }
            });
            tl.to(textRef.current, {
                y: "-100%",
                opacity: 0.3,
                duration: 0.4,
                ease: "power2.inOut"
            }).to(svgNavRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.inOut"
            }, "-=0.35" // Increased overlap for smoother transition
            );
            // Create reverse animation when scrolling back up
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: heroRef.current,
                start: "bottom top+=200",
                onLeaveBack: {
                    "Navbar.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            ease: "power2.inOut"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(svgNavRef.current, {
                            opacity: 0,
                            y: "100%",
                            duration: 0.4,
                            ease: "power2.inOut"
                        });
                    }
                }["Navbar.useEffect"]
            });
        }
    }["Navbar.useEffect"], [
        heroRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: navbarRef,
        className: "h-[80px] w-full fixed top-0 bg-transparent text-white z-10 sm:px-10 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo-wrapper flex items-start gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: logoContainerRef,
                    className: "overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            ref: textRef,
                            className: "text whitespace-nowrap",
                            children: "The Brand Catalyst"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            ref: svgNavRef,
                            width: "64",
                            height: "auto",
                            viewBox: "0 0 1364 253",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "xMidYMid meet",
                            className: "absolute left-0 top-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-wrapper text-sm flex gap-2 ml-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/works",
                        children: "Works"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/service",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-button cursor-pointer",
                children: "Let's Talk"
            }, void 0, false, {
                fileName: "[project]/src/components/navbar.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Navbar, "ynCnA5YWEbU4Qnl9/L6u8RpuSek=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/animated-slider.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AnimatedSlider = ()=>{
    _s();
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slidesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const slideCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Sample slide data - replace with your actual content
    const slides = [
        {
            id: 1,
            bgColor: "bg-indigo-900",
            title: "Creative Portfolio",
            subtitle: "Web Developer & UI/UX Designer",
            description: "Creating digital experiences that connect and inspire"
        },
        {
            id: 2,
            bgColor: "bg-purple-900",
            title: "Featured Projects",
            subtitle: "Innovative Solutions",
            description: "Discover my latest work and creative process"
        },
        {
            id: 3,
            bgColor: "bg-blue-900",
            title: "Technical Skills",
            subtitle: "Expert Technologies",
            description: "Frontend, backend, and everything in between"
        },
        {
            id: 4,
            bgColor: "bg-pink-900",
            title: "Let's Connect",
            subtitle: "Work Together",
            description: "Ready to bring your vision to life"
        }
    ];
    // Initialize slider and animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedSlider.useEffect": ()=>{
            if (!containerRef.current || !slidesContainerRef.current) return;
            slideCount.current = slides.length;
            // Function to animate to a specific slide
            const goToSlide = {
                "AnimatedSlider.useEffect.goToSlide": (index)=>{
                    if (index < 0 || index >= slideCount.current || isAnimating.current) return;
                    isAnimating.current = true;
                    setActiveSlide(index);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(slidesContainerRef.current, {
                        duration: 1,
                        x: `-${index * 100}vw`,
                        ease: "power2.out",
                        onComplete: {
                            "AnimatedSlider.useEffect.goToSlide": ()=>{
                                isAnimating.current = false;
                                // Animate elements of the active slide
                                const activeSlideElement = slidesContainerRef.current.children[index];
                                if (activeSlideElement) {
                                    const content = activeSlideElement.querySelector(".slide-content");
                                    const animatedElements = activeSlideElement.querySelectorAll(".animated-element");
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(content, {
                                        y: 30,
                                        opacity: 0
                                    }, {
                                        y: 0,
                                        opacity: 1,
                                        duration: 0.6,
                                        ease: "power2.out"
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(animatedElements, {
                                        y: 20,
                                        opacity: 0
                                    }, {
                                        y: 0,
                                        opacity: 1,
                                        duration: 0.4,
                                        stagger: 0.1,
                                        ease: "power2.out",
                                        delay: 0.3
                                    });
                                }
                            }
                        }["AnimatedSlider.useEffect.goToSlide"]
                    });
                }
            }["AnimatedSlider.useEffect.goToSlide"];
            // Check if slider is in viewport
            const checkInView = {
                "AnimatedSlider.useEffect.checkInView": ()=>{
                    if (!containerRef.current) return false;
                    const rect = containerRef.current.getBoundingClientRect();
                    const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2;
                    return isVisible;
                }
            }["AnimatedSlider.useEffect.checkInView"];
            // Handle wheel events for slide navigation
            const handleWheel = {
                "AnimatedSlider.useEffect.handleWheel": (e)=>{
                    // Check if slider is in view
                    const inView = checkInView();
                    // Only handle events when in view and not animating
                    if (!inView) {
                        isInView.current = false;
                        return;
                    }
                    isInView.current = true;
                    // If first slide and scrolling up, or last slide and scrolling down, allow normal scroll
                    if (activeSlide === 0 && e.deltaY < 0 || activeSlide === slideCount.current - 1 && e.deltaY > 0) {
                        return;
                    }
                    e.preventDefault();
                    if (isAnimating.current) return;
                    // Determine scroll direction
                    const direction = e.deltaY > 0 ? 1 : -1;
                    const newIndex = activeSlide + direction;
                    if (newIndex >= 0 && newIndex < slideCount.current) {
                        goToSlide(newIndex);
                    }
                }
            }["AnimatedSlider.useEffect.handleWheel"];
            // Handle keyboard events for slide navigation
            const handleKeyDown = {
                "AnimatedSlider.useEffect.handleKeyDown": (e)=>{
                    if (!isInView.current || isAnimating.current) return;
                    // Check if first or last slide for vertical scrolling
                    if (activeSlide === 0 && e.key === "ArrowUp" || activeSlide === slideCount.current - 1 && e.key === "ArrowDown") {
                        return;
                    }
                    let newIndex = activeSlide;
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                        e.preventDefault();
                        newIndex = activeSlide + 1;
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                        e.preventDefault();
                        newIndex = activeSlide - 1;
                    }
                    if (newIndex >= 0 && newIndex < slideCount.current && newIndex !== activeSlide) {
                        goToSlide(newIndex);
                    }
                }
            }["AnimatedSlider.useEffect.handleKeyDown"];
            // Handle touch events for mobile
            let touchStartY = 0;
            const handleTouchStart = {
                "AnimatedSlider.useEffect.handleTouchStart": (e)=>{
                    if (!isInView.current) return;
                    touchStartY = e.touches[0].clientY;
                }
            }["AnimatedSlider.useEffect.handleTouchStart"];
            const handleTouchMove = {
                "AnimatedSlider.useEffect.handleTouchMove": (e)=>{
                    if (!isInView.current || isAnimating.current) return;
                    const touchEndY = e.touches[0].clientY;
                    const diff = touchStartY - touchEndY;
                    // Check if first or last slide for vertical scrolling
                    if (activeSlide === 0 && diff < 0 || activeSlide === slideCount.current - 1 && diff > 0) {
                        return;
                    }
                    // Only proceed if the swipe is significant enough
                    if (Math.abs(diff) > 50) {
                        e.preventDefault();
                        const direction = diff > 0 ? 1 : -1;
                        const newIndex = activeSlide + direction;
                        if (newIndex >= 0 && newIndex < slideCount.current) {
                            goToSlide(newIndex);
                        }
                        // Reset start position after significant swipe
                        touchStartY = touchEndY;
                    }
                }
            }["AnimatedSlider.useEffect.handleTouchMove"];
            // Set up scroll observer to check when slider is in view
            const handleScroll = {
                "AnimatedSlider.useEffect.handleScroll": ()=>{
                    isInView.current = checkInView();
                    // If slider becomes visible for the first time, animate first slide
                    if (isInView.current && !slidesContainerRef.current.style.transform) {
                        // Reset all slides' opacity
                        const slideContents = slidesContainerRef.current.querySelectorAll(".slide-content");
                        slideContents.forEach({
                            "AnimatedSlider.useEffect.handleScroll": (content)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(content, {
                                    opacity: 0
                                });
                            }
                        }["AnimatedSlider.useEffect.handleScroll"]);
                        // Animate first slide's content
                        goToSlide(0);
                    }
                }
            }["AnimatedSlider.useEffect.handleScroll"];
            // Set up initial state
            handleScroll();
            // Add event listeners
            window.addEventListener("wheel", handleWheel, {
                passive: false
            });
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("scroll", handleScroll);
            if (containerRef.current) {
                containerRef.current.addEventListener("touchstart", handleTouchStart, {
                    passive: true
                });
                containerRef.current.addEventListener("touchmove", handleTouchMove, {
                    passive: false
                });
            }
            // Clean up event listeners
            return ({
                "AnimatedSlider.useEffect": ()=>{
                    window.removeEventListener("wheel", handleWheel);
                    window.removeEventListener("keydown", handleKeyDown);
                    window.removeEventListener("scroll", handleScroll);
                    if (containerRef.current) {
                        containerRef.current.removeEventListener("touchstart", handleTouchStart);
                        containerRef.current.removeEventListener("touchmove", handleTouchMove);
                    }
                }
            })["AnimatedSlider.useEffect"];
        }
    }["AnimatedSlider.useEffect"], [
        activeSlide,
        slides.length
    ]);
    // Function to handle navigation dot clicks
    const handleDotClick = (index)=>{
        if (!isAnimating.current && index !== activeSlide) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(slidesContainerRef.current, {
                duration: 1,
                x: `-${index * 100}vw`,
                ease: "power2.out",
                onStart: ()=>{
                    isAnimating.current = true;
                    setActiveSlide(index);
                },
                onComplete: ()=>{
                    isAnimating.current = false;
                    // Animate elements of the active slide
                    const activeSlideElement = slidesContainerRef.current.children[index];
                    if (activeSlideElement) {
                        const content = activeSlideElement.querySelector(".slide-content");
                        const animatedElements = activeSlideElement.querySelectorAll(".animated-element");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(content, {
                            y: 30,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(animatedElements, {
                            y: 20,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.1,
                            ease: "power2.out",
                            delay: 0.3
                        });
                    }
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-screen w-screen relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: slidesContainerRef,
                className: "flex h-screen w-full transition-none absolute top-0 left-0",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center ${slide.bgColor}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slide-content text-white max-w-4xl px-8 opacity-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl font-bold mb-4",
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl mb-6",
                                    children: slide.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl mb-8",
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "animated-element bg-white text-indigo-900 px-6 py-2 rounded-full font-bold    transition-colors duration-300 hover:bg-opacity-80",
                                            children: "View Portfolio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animated-slider.jsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "animated-element border-2 border-white text-white px-6 py-2 rounded-full font-bold    transition-colors duration-300 hover:bg-white hover:bg-opacity-20",
                                            children: "Contact Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animated-slider.jsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this),
                                index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animated-element bg-white bg-opacity-20 p-4 rounded-lg h-32    flex items-center justify-center text-center transition-transform duration-300 hover:scale-105",
                                            children: [
                                                "Project ",
                                                num
                                            ]
                                        }, num, true, {
                                            fileName: "[project]/src/components/animated-slider.jsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 347,
                                    columnNumber: 17
                                }, this),
                                index === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        "React",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "Node.js",
                                        "MongoDB",
                                        "Figma"
                                    ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animated-element bg-white bg-opacity-20 px-4 py-2 rounded-full   transition-transform duration-300 hover:bg-opacity-30",
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/src/components/animated-slider.jsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this),
                                index === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "flex flex-col space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Your Name",
                                                className: "animated-element bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white    placeholder-white placeholder-opacity-70 focus:bg-opacity-30 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/animated-slider.jsx",
                                                lineNumber: 384,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Your Email",
                                                className: "animated-element bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white    placeholder-white placeholder-opacity-70 focus:bg-opacity-30 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/animated-slider.jsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "animated-element bg-white text-pink-900 px-6 py-2 rounded-lg font-bold    transition-colors duration-300 hover:bg-opacity-80",
                                                children: "Send Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/animated-slider.jsx",
                                                lineNumber: 396,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/animated-slider.jsx",
                                        lineNumber: 383,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animated-slider.jsx",
                                    lineNumber: 382,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/animated-slider.jsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this)
                    }, slide.id, false, {
                        fileName: "[project]/src/components/animated-slider.jsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/animated-slider.jsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDotClick(index),
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? "bg-white w-6" : "bg-white bg-opacity-50 hover:bg-opacity-80"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/src/components/animated-slider.jsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/animated-slider.jsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-3 py-1 bg-black bg-opacity-30 rounded-full",
                    children: [
                        activeSlide + 1,
                        " / ",
                        slides.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animated-slider.jsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animated-slider.jsx",
                lineNumber: 427,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animated-slider.jsx",
        lineNumber: 310,
        columnNumber: 5
    }, this);
};
_s(AnimatedSlider, "lZt7zh+fCAklPIMZGizD+sItcnw=");
_c = AnimatedSlider;
const __TURBOPACK__default__export__ = AnimatedSlider;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$showreel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/showreel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/statement.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$slider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animated-slider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                heroRef: heroRef
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                heroRef: heroRef
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$showreel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$slider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "Kl+p09D151XtYvnxyYxoD7PJ7cE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bc793493._.js.map