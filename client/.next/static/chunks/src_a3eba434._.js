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
function HeroComponent() {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToPlugin"]); // Register ScrollToPlugin
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outerDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroComponent.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 1
            });
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
            className: "w-full sm:h-[700px] bg-black flex flex-col h-[85vh] items-center text-white overflow-hidden pt-20 relative",
            "data-theme": "dark",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col gap-32",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "logo-wrapper w-full sm:px-10 md:mt-10 overflow-hidden px-1",
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
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        ref: setLetterRef,
                                        d: "M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hero.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-title sm:px-10 flex sm:gap-40 text-[14px] font-bold sm:text-base gap-5 px-1 absolute sm:relative bottom-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Design. Engineering."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Execution."
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
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Two Engagement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Models: Project & Partnership"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "controls sm:absolute bottom-20 right-10 hidden sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: arrowRef,
                        className: "icon-wrapper p-4 cursor-pointer hover:opacity-70 transition-opacity ",
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
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.jsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(HeroComponent, "RPUbI4Sb32s9glWU5GGy3eUImy8=");
_c = HeroComponent;
var _c;
__turbopack_context__.k.register(_c, "HeroComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/media-showcase.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MediaShowcase = ({ // Media configuration
type = "video", src = "/showreel.mp4", sources = [], // Display configuration
title = "", height = "800px", backgroundColor = "bg-white", titleColor = "white", titleSize = "text-7xl", // Animation configuration
enableScaleAnimation = true, // Video specific options
autoPlay = true, muted = true, loop = true, preload = "none", // Interaction text
playText = "Play Reel", closeText = "Close Reel", // Custom styling
containerClassName = "", titleClassName = "", // Callbacks
onOpen = ()=>{}, onClose = ()=>{}, onPlay = ()=>{}, onPause = ()=>{} })=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    // State variables
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(muted);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isScrubbing, setIsScrubbing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showreelCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cursor position tracking
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    });
    // Get current media source
    const getCurrentSrc = ()=>{
        if (type === "slideshow" && sources.length > 0) {
            return sources[currentSlide]?.src || "";
        }
        return src;
    };
    // Video playback functions
    const playVideo = ()=>{
        if (type === "video" && mediaRef.current) {
            mediaRef.current.play().then(()=>{
                setIsPlaying(true);
                onPlay();
            }).catch((error)=>{
                console.error("Playback error:", error);
                if (!isMuted) {
                    setIsMuted(true);
                    mediaRef.current.muted = true;
                    mediaRef.current.play().then(()=>{
                        setIsPlaying(true);
                        onPlay();
                    });
                }
            });
        }
    };
    const pauseVideo = ()=>{
        if (type === "video" && mediaRef.current) {
            mediaRef.current.pause();
            setIsPlaying(false);
            onPause();
        }
    };
    // Update progress from video
    const updateProgress = ()=>{
        if (type === "video" && mediaRef.current && !isScrubbing) {
            const currentTime = mediaRef.current.currentTime;
            const duration = mediaRef.current.duration;
            if (duration > 0) {
                setProgress(currentTime / duration);
            }
        }
    };
    // Seek functionality
    const handleProgressClick = (e)=>{
        if (type !== "video" || !progressTrackRef.current || !mediaRef.current) return;
        const rect = progressTrackRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
        const duration = mediaRef.current.duration;
        if (duration > 0) {
            mediaRef.current.currentTime = newProgress * duration;
            setProgress(newProgress);
        }
    };
    const handleSeekStart = (e)=>{
        if (type !== "video") return;
        e.preventDefault();
        e.stopPropagation();
        setIsScrubbing(true);
        const handleSeekMove = (moveEvent)=>{
            if (!progressTrackRef.current || !mediaRef.current) return;
            const rect = progressTrackRef.current.getBoundingClientRect();
            const clientX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
            const clickX = clientX - rect.left;
            const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
            const duration = mediaRef.current.duration;
            if (duration > 0) {
                mediaRef.current.currentTime = newProgress * duration;
                setProgress(newProgress);
            }
        };
        const handleSeekEnd = ()=>{
            setIsScrubbing(false);
            document.removeEventListener("mousemove", handleSeekMove);
            document.removeEventListener("mouseup", handleSeekEnd);
            document.removeEventListener("touchmove", handleSeekMove);
            document.removeEventListener("touchend", handleSeekEnd);
        };
        handleSeekMove(e);
        document.addEventListener("mousemove", handleSeekMove);
        document.addEventListener("mouseup", handleSeekEnd);
        document.addEventListener("touchmove", handleSeekMove, {
            passive: false
        });
        document.addEventListener("touchend", handleSeekEnd);
    };
    // Slideshow navigation
    const nextSlide = (e)=>{
        e.stopPropagation();
        if (type === "slideshow" && sources.length > 0) {
            setCurrentSlide((prev)=>(prev + 1) % sources.length);
        }
    };
    const prevSlide = (e)=>{
        e.stopPropagation();
        if (type === "slideshow" && sources.length > 0) {
            setCurrentSlide((prev)=>(prev - 1 + sources.length) % sources.length);
        }
    };
    const openModal = ()=>{
        setIsOpen(true);
        onOpen();
    };
    const closeModal = ()=>{
        if (timelineRef.current) {
            timelineRef.current.reverse().then(()=>{
                setIsOpen(false);
                if (type === "video" && mediaRef.current) {
                    pauseVideo();
                }
                onClose();
            });
        }
    };
    const toggleMute = (e)=>{
        e.stopPropagation();
        if (type === "video" && mediaRef.current) {
            const newMuted = !isMuted;
            mediaRef.current.muted = newMuted;
            setIsMuted(newMuted);
            if (!newMuted && !isPlaying) playVideo();
        }
    };
    const togglePlayPause = (e)=>{
        e.stopPropagation();
        if (type === "video" && mediaRef.current) {
            if (isPlaying) {
                pauseVideo();
            } else {
                playVideo();
            }
        }
    };
    // Initialize scroll animation and cursor followers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaShowcase.useEffect": ()=>{
            // Scroll Animation - Only if enableScaleAnimation is true
            if (enableScaleAnimation) {
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "center center",
                        scrub: 1
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(mediaContainerRef.current, {
                    scale: 0.3,
                    opacity: 0
                });
                tl.to(mediaContainerRef.current, {
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                });
            } else {
                // If scale animation is disabled, ensure the container is visible
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(mediaContainerRef.current, {
                    scale: 1,
                    opacity: 1
                });
            }
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
                "MediaShowcase.useEffect.onMouseMove": (e)=>{
                    cursor.current.targetX = e.clientX;
                    cursor.current.targetY = e.clientY;
                }
            }["MediaShowcase.useEffect.onMouseMove"];
            const followCursor = {
                "MediaShowcase.useEffect.followCursor": ()=>{
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
            }["MediaShowcase.useEffect.followCursor"];
            followCursor();
            document.addEventListener("mousemove", onMouseMove);
            // Escape key to close modal
            const handleEsc = {
                "MediaShowcase.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape" && isOpen) closeModal();
                }
            }["MediaShowcase.useEffect.handleEsc"];
            window.addEventListener("keydown", handleEsc);
            return ({
                "MediaShowcase.useEffect": ()=>{
                    document.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("keydown", handleEsc);
                }
            })["MediaShowcase.useEffect"];
        }
    }["MediaShowcase.useEffect"], [
        isOpen,
        enableScaleAnimation
    ]);
    // Modal animation when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaShowcase.useEffect": ()=>{
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
                    "MediaShowcase.useEffect": ()=>{
                        if (type === "video" && mediaRef.current) {
                            mediaRef.current.style.visibility = "visible";
                            playVideo();
                        }
                    }
                }["MediaShowcase.useEffect"]);
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
    }["MediaShowcase.useEffect"], [
        isOpen,
        type
    ]);
    // Hover state management
    const handleMouseEnter = ()=>{
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
    const handleMouseLeave = ()=>{
        setIsHovering(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(showreelCursorRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power3.out"
        });
    };
    // Sync progress with video
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaShowcase.useEffect": ()=>{
            if (type !== "video" || !mediaRef.current) return;
            const video = mediaRef.current;
            const handleTimeUpdate = {
                "MediaShowcase.useEffect.handleTimeUpdate": ()=>{
                    updateProgress();
                }
            }["MediaShowcase.useEffect.handleTimeUpdate"];
            const handleEnded = {
                "MediaShowcase.useEffect.handleEnded": ()=>{
                    if (!loop) {
                        setIsPlaying(false);
                    }
                }
            }["MediaShowcase.useEffect.handleEnded"];
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("ended", handleEnded);
            return ({
                "MediaShowcase.useEffect": ()=>{
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener("ended", handleEnded);
                }
            })["MediaShowcase.useEffect"];
        }
    }["MediaShowcase.useEffect"], [
        type,
        isScrubbing,
        loop
    ]);
    // Render preview media
    const renderPreviewMedia = ()=>{
        const currentSrc = getCurrentSrc();
        if (type === "video") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: currentSrc,
                draggable: false,
                autoPlay: autoPlay,
                preload: preload,
                playsInline: true,
                muted: true,
                loop: loop,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 425,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: currentSrc || "/placeholder.svg",
                alt: type === "slideshow" ? sources[currentSlide]?.alt || "" : "Preview",
                draggable: false,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 438,
                columnNumber: 9
            }, this);
        }
    };
    // Render modal media
    const renderModalMedia = ()=>{
        const currentSrc = getCurrentSrc();
        if (type === "video") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: mediaRef,
                className: "w-full h-full object-cover",
                playsInline: true,
                loop: loop,
                muted: isMuted,
                style: {
                    visibility: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: currentSrc,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/components/media-showcase.jsx",
                    lineNumber: 464,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 456,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: mediaRef,
                src: currentSrc || "/placeholder.svg",
                alt: type === "slideshow" ? sources[currentSlide]?.alt || "" : "Modal",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 469,
                columnNumber: 9
            }, this);
        }
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
                                fileName: "[project]/src/components/media-showcase.jsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/media-showcase.jsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/media-showcase.jsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: playText
                    }, void 0, false, {
                        fileName: "[project]/src/components/media-showcase.jsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: `w-full flex items-center justify-center relative overflow-hidden ${backgroundColor} ${containerClassName}`,
                style: {
                    height
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: mediaContainerRef,
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    onClick: openModal,
                    className: "w-full h-full flex items-center justify-center cursor-pointer relative",
                    children: [
                        renderPreviewMedia(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `${titleSize} ${titleColor} ${titleClassName}`,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/media-showcase.jsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/media-showcase.jsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/media-showcase.jsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center",
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: modalRef,
                    className: "relative w-full max-w-5xl aspect-video bg-black overflow-hidden rounded shadow-xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        renderModalMedia(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeModal,
                            className: "absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/media-showcase.jsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/media-showcase.jsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 p-4",
                            children: [
                                type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: progressTrackRef,
                                    className: "w-full h-0.5 bg-white/30 mb-3 cursor-pointer relative",
                                    onMouseDown: handleSeekStart,
                                    onTouchStart: handleSeekStart,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-white transition-none",
                                        style: {
                                            width: `${progress * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/media-showcase.jsx",
                                        lineNumber: 575,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/media-showcase.jsx",
                                    lineNumber: 569,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: togglePlayPause,
                                                    className: "w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors",
                                                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 592,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 594,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/media-showcase.jsx",
                                                    lineNumber: 587,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: toggleMute,
                                                    className: "w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors",
                                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 603,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/media-showcase.jsx",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        type === "slideshow" && sources.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevSlide,
                                                    className: "w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 618,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/media-showcase.jsx",
                                                    lineNumber: 614,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-2 text-white/80 text-xs flex items-center",
                                                    children: [
                                                        currentSlide + 1,
                                                        " / ",
                                                        sources.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/media-showcase.jsx",
                                                    lineNumber: 621,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextSlide,
                                                    className: "w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/media-showcase.jsx",
                                                        lineNumber: 629,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/media-showcase.jsx",
                                                    lineNumber: 625,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/media-showcase.jsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/media-showcase.jsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/media-showcase.jsx",
                    lineNumber: 550,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/media-showcase.jsx",
                lineNumber: 545,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(MediaShowcase, "V3q5U4g6w7RLKTEQ2XlPHrokR6E=");
_c = MediaShowcase;
const __TURBOPACK__default__export__ = MediaShowcase;
var _c;
__turbopack_context__.k.register(_c, "MediaShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/masked-text.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const MaskedText = ({ text, className = "", indent = true, positioning = "" })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const animationExecuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const createMaskedWords = ()=>{
        const element = textRef.current;
        if (!element) return;
        const words = text.split(" ");
        element.innerHTML = ""; // Clear any content
        wordRefs.current = [];
        wordContainersRef.current = [];
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.flexWrap = "wrap";
        wrapper.style.alignItems = "flex-start";
        wrapper.style.justifyContent = "flex-start";
        wrapper.style.lineHeight = "1"; // Tighter line height for better control
        if (indent) {
            const indentDiv = document.createElement("div");
            indentDiv.style.width = "3em";
            indentDiv.style.display = "inline-block";
            indentDiv.style.height = "1px";
            wrapper.appendChild(indentDiv);
        }
        words.forEach((word, index)=>{
            // Create container with overflow hidden
            const container = document.createElement("div");
            container.style.display = "inline-block";
            container.style.overflow = "hidden";
            container.style.position = "relative";
            container.style.verticalAlign = "top";
            container.style.paddingBottom = "5px";
            container.style.paddingRight = "2px";
            container.style.marginRight = index < words.length - 1 ? "0.20em" : "0"; // Better word spacing
            // Create word span that will be animated
            const wordSpan = document.createElement("span");
            wordSpan.textContent = word;
            wordSpan.style.display = "inline-block";
            wordSpan.style.transform = "translateY(100%)";
            wordSpan.style.willChange = "transform";
            container.appendChild(wordSpan);
            wrapper.appendChild(container);
            // Store references for animation
            wordContainersRef.current.push(container);
            wordRefs.current.push(wordSpan);
        });
        element.appendChild(wrapper);
        // Force layout calculation to ensure proper sizing
        wordContainersRef.current.forEach((container, i)=>{
            const wordHeight = wordRefs.current[i].offsetHeight;
            container.style.height = `${wordHeight + 2}px`;
        });
    };
    // Setup Intersection Observer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaskedText.useEffect": ()=>{
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };
            const observer = new IntersectionObserver({
                "MaskedText.useEffect": (entries)=>{
                    entries.forEach({
                        "MaskedText.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setIsInView(true);
                                observer.disconnect();
                            }
                        }
                    }["MaskedText.useEffect"]);
                }
            }["MaskedText.useEffect"], options);
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "MaskedText.useEffect": ()=>{
                    if (observer) {
                        observer.disconnect();
                    }
                }
            })["MaskedText.useEffect"];
        }
    }["MaskedText.useEffect"], []);
    // Handle creating masked words
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MaskedText.useLayoutEffect": ()=>{
            createMaskedWords();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(wordRefs.current, {
                y: "100%",
                immediateRender: true
            });
        }
    }["MaskedText.useLayoutEffect"], [
        text
    ]);
    // Handle animation when in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaskedText.useEffect": ()=>{
            if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
                setTimeout({
                    "MaskedText.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordRefs.current, {
                            y: "0%",
                            duration: 0.6,
                            ease: "power3.out",
                            stagger: 0.05,
                            onComplete: {
                                "MaskedText.useEffect": ()=>{
                                    animationExecuted.current = true;
                                    wordContainersRef.current.forEach({
                                        "MaskedText.useEffect": (container, i)=>{
                                            const wordHeight = wordRefs.current[i].offsetHeight;
                                            container.style.height = `${wordHeight + 6}px`;
                                        }
                                    }["MaskedText.useEffect"]);
                                }
                            }["MaskedText.useEffect"]
                        });
                    }
                }["MaskedText.useEffect"], 100);
            }
        }
    }["MaskedText.useEffect"], [
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: positioning,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            ref: textRef,
            className: `text-black font-light tracking-tight ${className}`,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/masked-text.jsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/masked-text.jsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
_s(MaskedText, "oBGb3CXPhwzMTkQ+KMFfIqc0ADM=");
_c = MaskedText;
const __TURBOPACK__default__export__ = MaskedText;
var _c;
__turbopack_context__.k.register(_c, "MaskedText");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/masked-text.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Statement = ()=>{
    _s();
    const hrRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Statement.useEffect": ()=>{
            // Animate the HR line when it comes into view
            const observer = new IntersectionObserver({
                "Statement.useEffect": (entries)=>{
                    entries.forEach({
                        "Statement.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(hrRef.current, {
                                    width: "0%"
                                }, {
                                    width: "100%",
                                    duration: 1,
                                    ease: "power2.out"
                                });
                                observer.disconnect();
                            }
                        }
                    }["Statement.useEffect"]);
                }
            }["Statement.useEffect"], {
                threshold: 0.2
            });
            if (hrRef.current) observer.observe(hrRef.current);
            return ({
                "Statement.useEffect": ()=>observer.disconnect()
            })["Statement.useEffect"];
        }
    }["Statement.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black text-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:px-16 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: `We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See our services.`,
                    className: "text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-extralight leading-snug sm:leading-tight tracking-tight sm:tracking-tighter mb-8 sm:mb-12 text-white",
                    indent: true
                }, void 0, false, {
                    fileName: "[project]/src/components/statement.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hrRef,
                className: "w-0 border-gray-50/30 border-b h-[0.5px] max-w-7xl mx-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mt-10 sm:mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "column",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Design that converts.",
                            className: "text-base sm:text-lg md:text-2xl font-light text-white",
                            indent: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/statement.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "column flex flex-col gap-4 sm:gap-6 tracking-tight col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Since day one, Zenvok has helped businesses launch, scale, and stay sharp — through strategy, design, and clean engineering.",
                                className: "text-sm sm:text-base md:text-lg font-light leading-relaxed text-white",
                                indent: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "In 2025, we introduced our selective model — partnering with a few bold teams at a time to go deep, not wide.",
                                className: "text-sm sm:text-base md:text-lg font-light leading-relaxed text-white",
                                indent: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "underline underline-offset-4 text-sm sm:text-base font-light mt-2 text-white",
                                children: "Learn more ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/statement.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_s(Statement, "i5zpyJpWQ+DA6F3KHQ+sTsO7LFE=");
_c = Statement;
const __TURBOPACK__default__export__ = Statement;
var _c;
__turbopack_context__.k.register(_c, "Statement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/footer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Footer() {
    _s();
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const svgContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const setLetterRef = (el)=>{
        if (el && !letterRefs.current.includes(el)) {
            letterRefs.current.push(el);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            if (animationInitialized.current) return;
            if (!footerRef.current || !svgContainerRef.current || letterRefs.current.length === 0) {
                return;
            }
            animationInitialized.current = true;
            // Initial state
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(letterRefs.current, {
                yPercent: 100,
                opacity: 0,
                scaleY: 1.2,
                transformOrigin: "bottom"
            });
            // Animate letters when footer enters view
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    id: "footer-animation"
                }
            });
            tl.to(letterRefs.current, {
                yPercent: 0,
                opacity: 1,
                scaleY: 1,
                duration: 1.2,
                stagger: 0.08,
                ease: "power3.out"
            });
            return ({
                "Footer.useEffect": ()=>{
                    tl.kill();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Footer.useEffect": (trigger)=>{
                            if (trigger.vars.id === "footer-animation") {
                                trigger.kill();
                            }
                        }
                    }["Footer.useEffect"]);
                }
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footerRef,
        className: "w-full bg-black flex flex-col text-white overflow-hidden py-10 sm:px-10 px-2",
        "data-theme": "dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-8",
                                children: "Do it once. Do it right."
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "New Business:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:zenvok.inbox@gmail.com",
                                        className: "hover:underline",
                                        children: "zenvok.inbox@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: "Sign up for our newsletter (No spam)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex border-b border-white pb-2 max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Email",
                                                className: "bg-transparent outline-none flex-grow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ml-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/",
                                            className: "hover:underline",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/work",
                                            className: "hover:underline",
                                            children: "Work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/about",
                                            className: "hover:underline",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            className: "hover:underline",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "hover:underline",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/footer.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com",
                                                className: "flex items-center hover:underline",
                                                children: [
                                                    "Instagram ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://linkedin.com",
                                                className: "flex items-center hover:underline",
                                                children: [
                                                    "LinkedIn ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "India — Kolkata"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/terms",
                                                        className: "hover:underline",
                                                        children: "Terms of use"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "©24-30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo-wrapper w-full sm:px-10 mt-auto",
                ref: svgContainerRef,
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
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: setLetterRef,
                            d: "M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: setLetterRef,
                            d: "M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: setLetterRef,
                            d: "M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: setLetterRef,
                            d: "M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: setLetterRef,
                            d: "M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/footer.jsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Footer, "xAlU5uyCc8T5XL/QwuZ6C/oIeDQ=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/approach.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/masked-text.jsx [app-client] (ecmascript)"); // Import the MaskedText component
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Approach = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hr1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hr2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Approach.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const section = sectionRef.current;
            const heading = headingRef.current;
            const hr1 = hr1Ref.current;
            const hr2 = hr2Ref.current;
            // Create a timeline for the animations
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
            // Heading masked text animation is now handled by MaskedText component
            // So we only need to animate the horizontal lines
            // Animate first horizontal line
            tl.fromTo(hr1, {
                scaleX: 0,
                transformOrigin: "left center"
            }, {
                scaleX: 1,
                duration: 1.2,
                ease: "power3.inOut"
            }, "+=0.5" // Start after MaskedText animation likely completes
            );
            // Animate second horizontal line
            tl.fromTo(hr2, {
                scaleX: 0,
                transformOrigin: "left center"
            }, {
                scaleX: 1,
                duration: 1.2,
                ease: "power3.inOut"
            }, "+=0.5");
            return ({
                "Approach.useEffect": ()=>{
                    // Clean up ScrollTrigger when component unmounts
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Approach.useEffect": (trigger)=>trigger.kill()
                    }["Approach.useEffect"]);
                }
            })["Approach.useEffect"];
        }
    }["Approach.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "w-full mx-auto px-4 md:px-10 py-20 md:py-28 bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headingRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Our approach.",
                    className: "text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-20",
                    indent: false
                }, void 0, false, {
                    fileName: "[project]/src/components/approach.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/approach.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                ref: hr1Ref,
                className: "border-t border-gray-300 mb-12 md:mb-16"
            }, void 0, false, {
                fileName: "[project]/src/components/approach.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "A simple philosophy: quality over quantity.",
                            className: "text-xl leading-relaxed font-extralight",
                            indent: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/approach.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/approach.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[380px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "We work with select clients to ensure focus, precision, and results. Every project is crafted to be strategic and transformative.",
                            className: "text-lg md:text-xl font-normal",
                            indent: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/approach.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/approach.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/approach.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                ref: hr2Ref,
                className: "border-t border-gray-300 mb-12 md:mb-16"
            }, void 0, false, {
                fileName: "[project]/src/components/approach.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Performance & emotion. You need both.",
                            className: "text-xl md:text-2xl font-normal leading-relaxed",
                            indent: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/approach.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/approach.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[380px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "We build websites that are fast, reliable, and designed for people—combining clean code with growth-focused design.",
                            className: "text-lg md:text-xl font-normal leading-relaxed",
                            indent: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/approach.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/approach.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/approach.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/approach.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(Approach, "siLExAMnbhk9Asa+JfIcuhrhcNM=");
_c = Approach;
const __TURBOPACK__default__export__ = Approach;
var _c;
__turbopack_context__.k.register(_c, "Approach");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/space.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Space)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Space() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 w-full bg-white"
        }, void 0, false, {
            fileName: "[project]/src/components/space.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = Space;
var _c;
__turbopack_context__.k.register(_c, "Space");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/showcase.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WorkShowcase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
// Mock API data - replace with your actual API
const portfolioData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Design",
        image: "/ecommerce.jpeg",
        color: "bg-blue-50"
    },
    {
        id: 2,
        title: "Fashion Blog",
        category: "UI/UX Design",
        image: "/blog.jpeg",
        color: "bg-pink-50"
    },
    {
        id: 3,
        title: "News Portal",
        category: "Editorial Design",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=800&fit=crop",
        color: "bg-gray-50"
    },
    {
        id: 4,
        title: "Travel App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
        color: "bg-green-50"
    },
    {
        id: 5,
        title: "Music Streaming",
        category: "App Design",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=800&fit=crop",
        color: "bg-purple-50"
    }
];
function WorkShowcase() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // keep UI state (so you can still style depending on drag/pause)
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // internal refs to avoid stale closures inside RAF
    const isPausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isPaused);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isDragging);
    const startXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartScrollLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resumeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // keep refs in sync with state so UI updates still work
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            isPausedRef.current = isPaused;
        }
    }["WorkShowcase.useEffect"], [
        isPaused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            isDraggingRef.current = isDragging;
        }
    }["WorkShowcase.useEffect"], [
        isDragging
    ]);
    // Smooth auto scroll using RAF — improved infinite loop handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;
            // initialize scrollPosition to current scrollLeft
            scrollPositionRef.current = scrollContainer.scrollLeft;
            const scrollSpeed = 0.5; // px per frame — tweak if you want faster/slower
            const step = {
                "WorkShowcase.useEffect.step": ()=>{
                    if (!scrollContainer) return;
                    const halfWidth = scrollContainer.scrollWidth / 2 || 0;
                    // when not paused and not dragging, advance continuously
                    if (!isPausedRef.current && !isDraggingRef.current) {
                        scrollPositionRef.current += scrollSpeed;
                        // wrap-around smoothly by subtracting half width (since data is duplicated)
                        if (halfWidth > 0 && scrollPositionRef.current >= halfWidth) {
                            scrollPositionRef.current -= halfWidth;
                        } else if (halfWidth > 0 && scrollPositionRef.current < 0) {
                            scrollPositionRef.current += halfWidth;
                        }
                        scrollContainer.scrollLeft = scrollPositionRef.current;
                    } else if (!isDraggingRef.current) {
                        // if paused but not dragging, keep our internal pointer in sync
                        scrollPositionRef.current = scrollContainer.scrollLeft;
                    }
                    rafIdRef.current = requestAnimationFrame(step);
                }
            }["WorkShowcase.useEffect.step"];
            rafIdRef.current = requestAnimationFrame(step);
            const handleResize = {
                "WorkShowcase.useEffect.handleResize": ()=>{
                    // keep the internal pointer in sync after layout changes
                    scrollPositionRef.current = scrollContainer.scrollLeft;
                }
            }["WorkShowcase.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "WorkShowcase.useEffect": ()=>{
                    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
                    window.removeEventListener("resize", handleResize);
                    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                }
            })["WorkShowcase.useEffect"];
        // we intentionally do not depend on isPaused/isDragging here because we use refs
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["WorkShowcase.useEffect"], []);
    // Mouse handlers (desktop)
    const handleMouseDown = (e)=>{
        if (!scrollRef.current) return;
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
        setIsDragging(true);
        setIsPaused(true);
        isDraggingRef.current = true;
        isPausedRef.current = true;
        startXRef.current = e.pageX - scrollRef.current.offsetLeft;
        dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = "grabbing";
    };
    const handleMouseUp = ()=>{
        if (!scrollRef.current) return;
        setIsDragging(false);
        isDraggingRef.current = false;
        scrollRef.current.style.cursor = "grab";
        // resume auto-scroll after a short delay so user can do another touch without fight
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(()=>{
            setIsPaused(false);
            isPausedRef.current = false;
            resumeTimeoutRef.current = null;
        }, 900);
    };
    const handleMouseMove = (e)=>{
        if (!isDraggingRef.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 2; // same multiplier as before
        scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - walk;
    };
    const handleMouseLeave = ()=>{
        if (!scrollRef.current) return;
        if (isDraggingRef.current) {
            setIsDragging(false);
            isDraggingRef.current = false;
            scrollRef.current.style.cursor = "grab";
        }
        // resume like mouseup
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(()=>{
            setIsPaused(false);
            isPausedRef.current = false;
            resumeTimeoutRef.current = null;
        }, 900);
    };
    // ✅ TOUCH SUPPORT for mobile — improved: treat touch as dragging and delay resume
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;
            const handleTouchStart = {
                "WorkShowcase.useEffect.handleTouchStart": (e)=>{
                    if (resumeTimeoutRef.current) {
                        clearTimeout(resumeTimeoutRef.current);
                        resumeTimeoutRef.current = null;
                    }
                    setIsDragging(true);
                    setIsPaused(true);
                    isDraggingRef.current = true;
                    isPausedRef.current = true;
                    const touchX = e.touches[0].pageX - scrollContainer.offsetLeft;
                    startXRef.current = touchX;
                    dragStartScrollLeftRef.current = scrollContainer.scrollLeft;
                }
            }["WorkShowcase.useEffect.handleTouchStart"];
            const handleTouchMove = {
                "WorkShowcase.useEffect.handleTouchMove": (e)=>{
                    if (!isDraggingRef.current) return;
                    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
                    const walk = (x - startXRef.current) * 1.5; // slight resistance for smooth feel
                    scrollContainer.scrollLeft = dragStartScrollLeftRef.current - walk;
                }
            }["WorkShowcase.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "WorkShowcase.useEffect.handleTouchEnd": ()=>{
                    setIsDragging(false);
                    isDraggingRef.current = false;
                    // small timeout before resuming auto-scroll so user's momentum/tap interactions don't fight the auto-scroll
                    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                    resumeTimeoutRef.current = setTimeout({
                        "WorkShowcase.useEffect.handleTouchEnd": ()=>{
                            setIsPaused(false);
                            isPausedRef.current = false;
                            resumeTimeoutRef.current = null;
                        }
                    }["WorkShowcase.useEffect.handleTouchEnd"], 900);
                }
            }["WorkShowcase.useEffect.handleTouchEnd"];
            scrollContainer.addEventListener("touchstart", handleTouchStart, {
                passive: true
            });
            scrollContainer.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            scrollContainer.addEventListener("touchend", handleTouchEnd);
            scrollContainer.addEventListener("touchcancel", handleTouchEnd);
            return ({
                "WorkShowcase.useEffect": ()=>{
                    scrollContainer.removeEventListener("touchstart", handleTouchStart);
                    scrollContainer.removeEventListener("touchmove", handleTouchMove);
                    scrollContainer.removeEventListener("touchend", handleTouchEnd);
                    scrollContainer.removeEventListener("touchcancel", handleTouchEnd);
                }
            })["WorkShowcase.useEffect"];
        }
    }["WorkShowcase.useEffect"], []);
    const duplicatedData = [
        ...portfolioData,
        ...portfolioData
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full py-20 bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Selected Works"
                    }, void 0, false, {
                        fileName: "[project]/src/components/showcase.jsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-lg",
                        children: "Crafting digital experiences that inspire and engage"
                    }, void 0, false, {
                        fileName: "[project]/src/components/showcase.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/showcase.jsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex gap-6 overflow-x-hidden scrollbar-hide pl-6 cursor-grab active:cursor-grabbing touch-pan-x",
                onMouseDown: handleMouseDown,
                onMouseUp: handleMouseUp,
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    userSelect: "none",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth"
                },
                children: duplicatedData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 w-64 group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-black rounded-3xl p-2 shadow-2xl transition-transform duration-300",
                                style: {
                                    width: "256px",
                                    height: "520px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showcase.jsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full rounded-2xl overflow-hidden bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.title,
                                                className: "w-full h-full object-cover",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/showcase.jsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/showcase.jsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium mb-1",
                                                            children: item.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/showcase.jsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/showcase.jsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/showcase.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/showcase.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/showcase.jsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showcase.jsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/showcase.jsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-1",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showcase.jsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-900",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/showcase.jsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/showcase.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${item.id}-${index}`, true, {
                        fileName: "[project]/src/components/showcase.jsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/showcase.jsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/showcase.jsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s(WorkShowcase, "auU2CcGjgqUsgE7QbtX1r2Xe9HA=");
_c = WorkShowcase;
var _c;
__turbopack_context__.k.register(_c, "WorkShowcase");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$media$2d$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/media-showcase.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/statement.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$approach$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/approach.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$space$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/space.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/showcase.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                adaptiveMode: true
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$media$2d$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                enableScaleAnimation: false
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$approach$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a3eba434._.js.map