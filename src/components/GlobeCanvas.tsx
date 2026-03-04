"use client"

import * as d3 from "d3-geo"

import { useEffect, useRef } from "react"

const TEAL = "#2dd4bf"

export default function GlobeCanvas({ size = 140 }: { size?: number }) {
	const ref = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = ref.current
		if (!canvas) return
		const ctx = canvas.getContext("2d")!
		const dpr = Math.min(window.devicePixelRatio || 1, 2)
		canvas.width = size * dpr
		canvas.height = size * dpr
		ctx.scale(dpr, dpr)

		const projectionFront = d3
			.geoOrthographic()
			.scale(size * 0.41)
			.translate([size / 2, size / 2])
			.clipAngle(90)

		const projectionBack = d3
			.geoOrthographic()
			.scale(size * 0.41)
			.translate([size / 2, size / 2])
			.clipAngle(180)

		const pathFront = d3.geoPath(projectionFront, ctx)
		const pathBack = d3.geoPath(projectionBack, ctx)

		// OPTIMIZATION 1: Generate the coordinate arrays exactly ONCE.
		// We cache the resulting GeoJSON so D3 isn't building arrays 60x a second.
		const graticuleData = d3.geoGraticule().step([60, 30])()
		// @ts-ignore - D3 specific sphere geometry
		const sphereData = { type: "Sphere" }

		// Degrees per second (e.g. 36 means one full 360° revolution every 10 seconds)
		const SPEED = 36
		let raf: number

		// requestAnimationFrame automatically passes the high-res timestamp into the callback
		const draw = (timestamp: number) => {
			ctx.clearRect(0, 0, size, size)

			// OPTIMIZATION 2: Time-based rotation.
			// Divide timestamp by 1000 to get seconds, multiply by degrees-per-second.
			// This makes the spin completely immune to frame drops or 120Hz ProMotion displays.
			const rotation = (timestamp / 1000) * SPEED

			projectionFront.rotate([rotation, -12, 0])
			projectionBack.rotate([rotation, -12, 0])

			// ── Draw Back Hemisphere
			ctx.beginPath()
			pathBack(graticuleData)
			ctx.strokeStyle = TEAL
			ctx.globalAlpha = 0.18
			ctx.lineWidth = 3
			ctx.shadowBlur = 0
			ctx.stroke()

			// ── Draw Front Hemisphere
			ctx.beginPath()
			pathFront(graticuleData)
			ctx.globalAlpha = 0.7
			ctx.shadowColor = TEAL
			ctx.shadowBlur = 5
			ctx.lineWidth = 3
			ctx.stroke()

			// ── Draw Outer Silhouette
			ctx.beginPath()
			pathFront(sphereData)
			ctx.globalAlpha = 0.9
			ctx.lineWidth = 2.5
			ctx.stroke()

			raf = requestAnimationFrame(draw)
		}

		// Kick off the first frame
		raf = requestAnimationFrame(draw)

		return () => cancelAnimationFrame(raf)
	}, [size])

	return <canvas ref={ref} style={{ width: size, height: size, display: "block" }} />
}
