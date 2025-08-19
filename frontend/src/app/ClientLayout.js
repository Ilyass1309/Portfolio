'use client';

/* .bg-gradient-top { ... } */

import { useEffect, useRef } from 'react';

const COLORS = [
	'rgba(182,224,254,0.55)', // bleu pastel
	'rgba(184,242,230,0.45)', // vert pastel
	'rgba(251,194,235,0.45)', // rose pastel
	'rgba(246,234,194,0.45)', // beige pastel
	'rgba(255,255,255,0.18)', // blanc doux
];

function randomBetween(a, b) {
	return a + Math.random() * (b - a);
}

function createBlob(width, height) {
	// Calculer la taille des bulles basée sur la largeur d'écran seulement
	// Pour garder la même animation sur tous les appareils
	const screenWidth = width;
	let baseRadius;
	
	if (screenWidth <= 640) { // Mobile
		baseRadius = 80; // Bulles plus petites sur mobile
	} else if (screenWidth <= 1024) { // Tablette
		baseRadius = 140; // Taille intermédiaire
	} else { // Desktop
		baseRadius = 200; // Bulles plus grandes sur desktop
	}
	
	const radius = randomBetween(baseRadius * 0.6, baseRadius * 1.4); // variation de ±40%
	
	return {
		x: randomBetween(radius, width - radius),
		y: randomBetween(radius, height * 0.7),
		r: radius,
		color: COLORS[Math.floor(Math.random() * COLORS.length)],
		// Vitesse identique sur tous les appareils (comme sur desktop)
		dx: randomBetween(-0.08, 0.08),
		dy: randomBetween(-0.06, 0.06),
		alpha: randomBetween(0.35, 0.6),
	};
}

function animateBlobs(canvas, numBlobs = 6) {
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	let width = window.innerWidth;
	let height = 700; // Hauteur fixe pour garder la même animation sur tous les appareils
	let blobs = [];

	function resize() {
		width = window.innerWidth;
		height = 700; // Hauteur fixe
		canvas.width = width;
		canvas.height = height;
		// Recalculer les bulles avec les nouvelles dimensions
		blobs = Array.from({ length: numBlobs }, () => createBlob(width, height));
	}

	function draw() {
		ctx.clearRect(0, 0, width, height);
		ctx.save();
		ctx.globalCompositeOperation = 'lighter';
		blobs.forEach((blob) => {
			ctx.save();
			ctx.globalAlpha = blob.alpha;
			ctx.beginPath();
			ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = blob.color;
			// Flou identique sur tous les appareils (comme sur desktop)
			const blurAmount = Math.max(50, Math.min(80, blob.r * 0.3));
			ctx.filter = `blur(${blurAmount}px)`;
			ctx.fill();
			ctx.restore();
		});
		ctx.restore();

		// Ajoute un fondu alpha en bas du canvas pour une transition douce
		const fadeHeight = 180; // Hauteur de fondu fixe pour tous les écrans
		const gradient = ctx.createLinearGradient(0, height - fadeHeight, 0, height);
		gradient.addColorStop(0, 'rgba(246,234,194,0)'); // transparent
		gradient.addColorStop(1, 'hsla(36, 31%, 90%, 1)'); // beige opaque
		ctx.globalAlpha = 1;
		ctx.fillStyle = gradient;
		ctx.fillRect(0, height - fadeHeight, width, fadeHeight);
	}

	function animate() {
		blobs.forEach((blob) => {
			blob.x += blob.dx;
			blob.y += blob.dy;
			// Bounce softly on edges
			if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.dx *= -1;
			if (blob.y - blob.r < 0 || blob.y + blob.r > height * 0.8) blob.dy *= -1;
		});
		draw();
		requestAnimationFrame(animate);
	}

	resize();
	window.addEventListener('resize', resize);
	animate();

	return () => window.removeEventListener('resize', resize);
}

export default function ClientLayout({ children }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		return animateBlobs(canvasRef.current);
	}, []);

	return (
		<>
			<canvas
				id="bg-canvas"
				ref={canvasRef}
				aria-hidden="true"
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100vw',
					height: '700px', // Hauteur fixe pour tous les écrans
					zIndex: -1,
					pointerEvents: 'none',
					display: 'block',
					background: 'transparent',
				}}
			/>
			{children}
		</>
	);
}