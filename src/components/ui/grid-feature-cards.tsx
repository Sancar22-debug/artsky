import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	description: string;
	image?: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	const p = genDeterministicPattern(feature.title);

	return (
		<div 
			className={cn(
				"relative overflow-hidden border border-dashed border-white/20 p-5 sm:p-6 md:p-8 lg:p-10 group hover:bg-white/[0.01] transition-colors min-h-[160px] md:min-h-[200px] flex flex-col justify-end",
				className
			)} 
			{...props}
		>
			
			{/* Hover Background Image with zoom and fade */}
			{feature.image && (
				<div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-65 transition-opacity duration-700 ease-out pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/50 to-transparent z-10" />
					<img
						src={feature.image}
						alt={feature.title}
						className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
					/>
				</div>
			)}

			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] z-0">
				<div className="from-white/5 to-white/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-white/5 stroke-white/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>

			<div className="relative z-10 mt-auto">
				<h3 className="text-base md:text-lg lg:text-xl font-heading font-bold uppercase tracking-tight text-white group-hover:text-gold-accent transition-colors duration-300">{feature.title}</h3>
				<p className="text-white/60 relative z-20 mt-4 text-sm font-light leading-relaxed">{feature.description}</p>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genDeterministicPattern(seed: string, length?: number): number[][] {
	length = length ?? 5;
	let hash = 0;
	for (let i = 0; i < seed.length; i++) {
		hash = seed.charCodeAt(i) + ((hash << 5) - hash);
		hash |= 0;
	}

	const results: number[][] = [];
	let currentSeed = Math.abs(hash);

	for (let i = 0; i < length; i++) {
		currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
		const x = Math.floor((currentSeed / 4294967296) * 4) + 7;
		currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
		const y = Math.floor((currentSeed / 4294967296) * 6) + 1;
		results.push([x, y]);
	}

	return results;
}
