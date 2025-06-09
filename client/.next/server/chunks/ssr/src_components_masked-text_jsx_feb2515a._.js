module.exports = {

"[project]/src/components/masked-text.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const MaskedText = ({ text, className = "", indent = true })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const animationExecuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
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
            container.style.paddingBottom = "5px"; // Add padding to prevent clipping
            // Create word span that will be animated
            const wordSpan = document.createElement("span");
            wordSpan.textContent = word;
            wordSpan.style.display = "inline-block";
            wordSpan.style.transform = "translateY(100%)"; // Start below - will slide up
            wordSpan.style.willChange = "transform"; // Optimize for animation
            container.appendChild(wordSpan);
            wrapper.appendChild(container);
            // Store references for animation
            wordContainersRef.current.push(container);
            wordRefs.current.push(wordSpan);
            // Add space between words
            if (index < words.length - 1) {
                const space = document.createElement("span");
                space.innerHTML = "\u00A0";
                wrapper.appendChild(space);
            }
        });
        element.appendChild(wrapper);
        // Force layout calculation to ensure proper sizing
        wordContainersRef.current.forEach((container, i)=>{
            const wordHeight = wordRefs.current[i].offsetHeight;
            // Set container height slightly larger than word height to prevent clipping
            container.style.height = `${wordHeight + 2}px`;
        });
    };
    // Setup Intersection Observer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Once we've observed it coming into view, we can disconnect
                    observer.disconnect();
                }
            });
        }, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return ()=>{
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);
    // Handle creating masked words
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        createMaskedWords();
        // Set initial position - explicitly position words outside their containers
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(wordRefs.current, {
            y: "100%",
            immediateRender: true
        });
    }, [
        text
    ]);
    // Handle animation when in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
            // Add a small delay to ensure everything is properly set
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordRefs.current, {
                    y: "0%",
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.05,
                    onComplete: ()=>{
                        animationExecuted.current = true;
                        // Update container heights after animation completes
                        wordContainersRef.current.forEach((container, i)=>{
                            const wordHeight = wordRefs.current[i].offsetHeight;
                            container.style.height = `${wordHeight + 6}px`;
                        });
                    }
                });
            }, 100);
        }
    }, [
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            ref: textRef,
            className: `text-black font-extralight tracking-tight mb-12 ${className}`,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/masked-text.jsx",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/masked-text.jsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MaskedText;
}}),

};

//# sourceMappingURL=src_components_masked-text_jsx_feb2515a._.js.map