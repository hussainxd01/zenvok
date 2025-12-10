(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/components/work-showcase.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/masked-text.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const WorkShowcase = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slidesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isListView, setIsListView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const projects = [
        {
            id: 1,
            name: "Rivian",
            image: "/van.jpg",
            url: "/work/rivian",
            number: "01"
        },
        {
            id: 2,
            name: "Du Chateau",
            image: "/furniture.jpg",
            url: "/work/du-chateau",
            number: "02"
        },
        {
            id: 3,
            name: "Oura Ring",
            image: "/ring.png",
            url: "/work/oura-ring",
            number: "03"
        },
        {
            id: 4,
            name: "Tesla",
            image: "/fashion.jpg",
            url: "/work/tesla",
            number: "04"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            // ✅ Only skip setting height when it's list view *and* mobile
            const isMobile = window.innerWidth < 768;
            if (isListView && isMobile) {
                if (containerRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(containerRef.current, {
                        height: "auto"
                    });
                }
                return; // don't apply GSAP scroll logic
            }
            const totalHeight = projects.length * 100;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(containerRef.current, {
                height: `${totalHeight}vh`
            });
            document.body.style.overflowX = "hidden";
            document.body.style.background = "#000";
            const scrollTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: containerRef.current,
                start: "top top",
                end: `bottom bottom`,
                scrub: 1.2,
                onUpdate: {
                    "WorkShowcase.useEffect.scrollTrigger": (self)=>{
                        const progress = self.progress;
                        const totalSections = projects.length;
                        const rawIndex = progress * totalSections;
                        const newIndex = Math.min(Math.floor(rawIndex), totalSections - 1);
                        if (newIndex !== currentIndex) setCurrentIndex(newIndex);
                        const currentSlide = slidesRef.current[newIndex];
                        const nextSlide = slidesRef.current[Math.min(newIndex + 1, totalSections - 1)];
                        if (!currentSlide || !nextSlide || newIndex >= totalSections - 1) return;
                        const sectionProgress = rawIndex - newIndex;
                        const currentMediaWrapper = currentSlide.querySelector(".media-wrapper");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(currentMediaWrapper, {
                            y: `${sectionProgress * 30}%`
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(currentSlide, {
                            y: `${sectionProgress * -100}%`
                        });
                        const nextMediaWrapper = nextSlide.querySelector(".media-wrapper");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(nextSlide, {
                            y: `${100 - sectionProgress * 100}%`
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(nextMediaWrapper, {
                            y: `${-30 + sectionProgress * 30}%`
                        });
                    }
                }["WorkShowcase.useEffect.scrollTrigger"]
            });
            return ({
                "WorkShowcase.useEffect": ()=>{
                    scrollTrigger.kill();
                    document.body.style.overflowX = "";
                    document.body.style.background = "";
                }
            })["WorkShowcase.useEffect"];
        }
    }["WorkShowcase.useEffect"], [
        projects.length,
        currentIndex,
        isListView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkShowcase.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
            tl.fromTo(heroRef.current, {
                y: "-100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    }["WorkShowcase.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heroRef,
                className: "sm:min-h-[80vh] h-[90dvh] w-full bg-white z-40 relative flex md:flex-row items-end justify-between px-2 md:px-10 py-10",
                "data-theme": "light",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[720px] sm:max-w-[1400px] mx-auto px-4 sm:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$masked$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "We are a collective of seasoned creatives, strategists, growth marketers, and technologists, dedicated to transforming ambitious visions into high-performing brands.",
                            className: "font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter",
                            indent: 0,
                            positioning: "w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/work-showcase.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsListView((prev)=>!prev),
                            className: "mt-6 md:mt-0 md:absolute bottom-10 left-10 z-50 flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm md:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-6 h-6 flex items-center justify-center border border-black/30 rounded-full",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isListView ? "Showcase view" : "List view"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/work-showcase.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/work-showcase.jsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/work-showcase.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            !isListView ? // Cinematic scroll view (for all devices)
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative w-full overflow-hidden bg-black",
                "data-theme": "dark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 w-full h-full bg-black z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/work-showcase.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>slidesRef.current[index] = el,
                            className: "slide w-full h-screen fixed top-0 left-0",
                            style: {
                                zIndex: projects.length - index,
                                visibility: index <= currentIndex + 1 ? "visible" : "hidden",
                                transform: "translate3d(0,0,0)",
                                willChange: "transform",
                                backfaceVisibility: "hidden"
                            },
                            "data-theme": "dark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: project.url,
                                className: "block w-full h-full",
                                "aria-label": project.name,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "media-wrapper w-full h-full overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full bg-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: project.image,
                                                    alt: project.name,
                                                    fill: true,
                                                    priority: index === 0,
                                                    className: "object-cover",
                                                    sizes: "100vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work-showcase.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work-showcase.jsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/work-showcase.jsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight border-b border-white/30 pb-2 text-white",
                                                children: project.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/work-showcase.jsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/work-showcase.jsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-8 right-8 text-lg sm:text-xl font-light text-white",
                                            children: project.number
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/work-showcase.jsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/work-showcase.jsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        }, project.id, false, {
                            fileName: "[project]/src/components/work-showcase.jsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/work-showcase.jsx",
                lineNumber: 146,
                columnNumber: 9
            }, this) : // List view (mobile-friendly)
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "w-full bg-black sm:py-16",
                "data-theme": "dark",
                children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: project.url,
                        className: "block group w-full relative",
                        "aria-label": project.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[20vh] sm:h-[40vh] overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.image,
                                    alt: project.name,
                                    fill: true,
                                    className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-between px-6 sm:px-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl sm:text-5xl font-light text-white",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/work-showcase.jsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60 text-xl",
                                            children: project.number
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/work-showcase.jsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/work-showcase.jsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/work-showcase.jsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, this)
                    }, project.id, false, {
                        fileName: "[project]/src/components/work-showcase.jsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/work-showcase.jsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(WorkShowcase, "LlSNWfJKmuE+yVB/9bWUhcYtd0U=");
_c = WorkShowcase;
const __TURBOPACK__default__export__ = WorkShowcase;
var _c;
__turbopack_context__.k.register(_c, "WorkShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/works/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Work)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$work$2d$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/work-showcase.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function Work() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                adaptiveMode: true
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$work$2d$showcase$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5b15ad95._.js.map