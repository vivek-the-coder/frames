"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CDN_ROOT = "https://cdn.jsdelivr.net/gh/vivek-the-coder/frames";

const CONFIG = {
    desktop: {
        totalFrames: 120,
        folder: "desktop",
        scenes: [
            { name: "scene1", start: 1, end: 22, text: "ENTRY", desc: "Where perfection enters the light" },
            { name: "scene2", start: 23, end: 36, text: "LED INSPECTION", desc: "Every imperfection revealed" },
            { name: "scene3", start: 37, end: 54, text: "PPF PROTECTION", desc: "Engineered defense applied by hand" },
            { name: "scene4", start: 55, end: 81, text: "CERAMIC COATING", desc: "Molecular-level ceramic bonding" },
            { name: "scene5", start: 82, end: 104, text: "SEALED", desc: "Sealed from the outside world" },
            { name: "scene6", start: 105, end: 120, text: "REVEAL", desc: "Perfection, realized" }
        ]
    },
    mobile: {
        totalFrames: 80,
        folder: "mobile",
        scenes: [
            { name: "scene1", start: 1, end: 14, text: "ENTRY", desc: "Where perfection enters the light" },
            { name: "scene2", start: 15, end: 25, text: "LED INSPECTION", desc: "Every imperfection revealed" },
            { name: "scene3", start: 26, end: 37, text: "PPF PROTECTION", desc: "Engineered defense applied by hand" },
            { name: "scene4", start: 38, end: 54, text: "CERAMIC COATING", desc: "Molecular-level ceramic bonding" },
            { name: "scene5", start: 55, end: 68, text: "SEALED", desc: "Sealed from the outside world" },
            { name: "scene6", start: 69, end: 80, text: "REVEAL", desc: "Perfection, realized" }
        ]
    }
};

export default function ScrollVideo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const bitmapsRef = useRef<ImageBitmap[]>([]);
    const loadedScenes = useRef(new Set<number>());
    const isRenderingRef = useRef(false);

    const [isMobile, setIsMobile] = useState(false);
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Determine configuration
    const ACTIVE = isMobile ? CONFIG.mobile : CONFIG.desktop;
    const SCENES = ACTIVE.scenes;

    // Helper: Determine scene name from frame number
    const getSceneName = (frame: number) => {
        const scene = SCENES.find(s => frame >= s.start && frame <= s.end);
        return scene ? scene.name : "scene1";
    };

    // Helper: Generate URL based on new folder structure
    const getFrameUrl = (frame: number) => {
        const sceneName = getSceneName(frame);
        const padded = String(frame).padStart(4, "0");
        return `${CDN_ROOT}/${ACTIVE.folder}/${sceneName}/frame_${padded}.webp`;
    };

    const preloadFrames = async (sceneIndex: number, priority = false) => {
        if (sceneIndex < 0 || sceneIndex >= SCENES.length || loadedScenes.current.has(sceneIndex)) return;

        const scene = SCENES[sceneIndex];

        const load = async () => {
            for (let i = scene.start; i <= scene.end; i++) {
                if (bitmapsRef.current[i]) continue;

                const url = getFrameUrl(i);

                try {
                    const response = await fetch(url, { mode: "cors", cache: "force-cache" });
                    const blob = await response.blob();
                    const bitmap = await createImageBitmap(blob);

                    bitmapsRef.current[i] = bitmap;

                    // Instant first frame render
                    if (i === 1 && !isRenderingRef.current) {
                        drawFrame(1);
                        isRenderingRef.current = true;
                    }
                } catch (e) {
                    console.error("Frame load failed:", url);
                }
            }
            loadedScenes.current.add(sceneIndex);
        };

        if (priority) {
            load();
        } else {
            if (typeof window.requestIdleCallback !== 'undefined') {
                window.requestIdleCallback(load);
            } else {
                setTimeout(load, 0);
            }
        }
    };

    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const bitmap = bitmapsRef.current[frameIndex];
        if (!bitmap) return;

        const cw = canvas.width;
        const ch = canvas.height;

        const scale = Math.max(cw / bitmap.width, ch / bitmap.height);
        const x = (cw - bitmap.width * scale) / 2;
        const y = (ch - bitmap.height * scale) / 2;

        context.clearRect(0, 0, cw, ch);
        context.drawImage(bitmap, x, y, bitmap.width * scale, bitmap.height * scale);
    };

    // Initialization: Detect device
    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Main animation logic
    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Reset state on config change
        loadedScenes.current.clear();
        bitmapsRef.current = [];
        isRenderingRef.current = false;

        // Cap DPR
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

        const setCanvasSize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.setTransform(1, 0, 0, 1, 0, 0);
        };

        setCanvasSize();
        const handleResizeCanvas = () => setCanvasSize();
        window.addEventListener("resize", handleResizeCanvas);

        // Priority Preload Scene 1
        preloadFrames(0, true);

        // Preload subsequent scenes based on scroll triggers
        SCENES.forEach((_, index) => {
            // Trigger preloading next scene a bit earlier (e.g. 50% through previous scene)
            // But simplify logic: just attach triggers to container scrub points?
            // User requested: "top 80%", "top 160%" relative to viewport/trigger?
            // Actually, we can use the main timeline progress or separate triggers.
            // Using separate triggers aligned with scroll distance:

            ScrollTrigger.create({
                trigger: container,
                start: `${index * 80}% top`,
                onEnter: () => preloadFrames(index),
            });
        });

        const animation = { frame: 1 };

        const ctx = gsap.context(() => {
            gsap.to(animation, {
                frame: ACTIVE.totalFrames,
                ease: "none",
                snap: "frame",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "600% top",
                    scrub: 0.3,
                    pin: true,
                    anticipatePin: 1,
                },
                onUpdate: () => {
                    const f = Math.min(Math.max(1, Math.floor(animation.frame)), ACTIVE.totalFrames);
                    drawFrame(f);

                    // Sync Text Overlay
                    const newSceneIndex = SCENES.findIndex(s => f >= s.start && f <= s.end);
                    if (newSceneIndex !== -1 && newSceneIndex !== activeSceneIndex) {
                        // Use functional update or ref if needed to avoid closures, 
                        // but here we are re-creating effect on dependency change?
                        // No, activeSceneIndex is state. We need to be careful about re-renders.
                        // Setting state here triggers re-render of component, but NOT this effect hook 
                        // unless we add it to deps. If we add it to deps, we kill animation.
                        // Ideally we use a Ref for internal logic or accept that setText triggers render.
                        // We can set state directly.
                        setActiveSceneIndex(newSceneIndex);
                    }
                },
            });
        }, container);

        return () => {
            window.removeEventListener("resize", handleResizeCanvas);
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };

    }, [isMobile, mounted]); // Dependency on isMobile switches config

    const currentScene = SCENES[activeSceneIndex] || SCENES[0];

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-black overflow-hidden"
        >
            {/* Cinematic Overlay Text */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end pb-[15vh] items-center text-center">
                <div key={currentScene.text} className="animate-fade">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wider mb-2">
                        {currentScene.text}
                    </h2>
                    <p className="text-white/60 text-sm md:text-base font-light tracking-wide">
                        {currentScene.desc}
                    </p>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
                style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                }}
            />

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade {
                    animation: fadeIn 0.6s ease forwards;
                }
            `}</style>
        </section>
    );
}

