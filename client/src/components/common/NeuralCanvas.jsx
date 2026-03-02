import { useEffect, useRef } from 'react';

export default function NeuralCanvas() {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const nodesRef = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initNodes();
        };

        const NODE_COUNT = Math.min(80, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 12000));
        const MAX_DIST = 150;

        const initNodes = () => {
            nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02,
            }));
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const nodes = nodesRef.current;

            // Update positions
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.pulseSpeed;

                // Bounce off walls
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

                // Mouse repulsion
                const dx = n.x - mouseRef.current.x;
                const dy = n.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    n.vx += (dx / dist) * 0.3;
                    n.vy += (dy / dist) * 0.3;
                    // Speed limit
                    const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
                    if (speed > 2) { n.vx = (n.vx / speed) * 2; n.vy = (n.vy / speed) * 2; }
                }
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DIST) {
                        const opacity = (1 - dist / MAX_DIST) * 0.35;
                        const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                        gradient.addColorStop(0, `rgba(99,102,241,${opacity})`);
                        gradient.addColorStop(0.5, `rgba(139,92,246,${opacity * 0.8})`);
                        gradient.addColorStop(1, `rgba(6,182,212,${opacity})`);

                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(n => {
                const glow = Math.sin(n.pulse) * 0.3 + 0.7;
                const radius = n.r * glow;

                // Glow halo
                const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 6);
                halo.addColorStop(0, `rgba(99,102,241,${0.2 * glow})`);
                halo.addColorStop(1, 'rgba(99,102,241,0)');
                ctx.beginPath();
                ctx.arc(n.x, n.y, radius * 6, 0, Math.PI * 2);
                ctx.fillStyle = halo;
                ctx.fill();

                // Node core
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius);
                grad.addColorStop(0, `rgba(200,200,255,${0.8 * glow})`);
                grad.addColorStop(1, `rgba(99,102,241,${0.5 * glow})`);
                ctx.beginPath();
                ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(draw);
        };

        resize();
        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="neural-canvas"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.55 }}
        />
    );
}
