"use client"

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

		const cx = size / 2
		const cy = size / 2
		const R = size * 0.41 // ≈ 57 px for 140 px canvas

		// Globe is tilted 12° so we see slightly from above (matches the "real globe" look)
		const TILT = (12 * Math.PI) / 180
		const sinT = Math.sin(TILT) // ≈ 0.208 — latitude ring ry compression
		const cosT = Math.cos(TILT) // ≈ 0.978 — latitude ring cy offset scale

		let theta = 0
		let raf: number

		const drawEllipse = (ecx: number, ecy: number, rx: number, ry: number, alpha: number, lineWidth: number) => {
			const absRx = Math.abs(rx)
			if (absRx < 0.1 && ry < 0.1) return
			ctx.save()
			ctx.globalAlpha = Math.max(0, Math.min(1, alpha))
			ctx.strokeStyle = TEAL
			ctx.lineWidth = lineWidth
			ctx.shadowColor = TEAL
			ctx.shadowBlur = 5
			ctx.beginPath()
			ctx.ellipse(ecx, ecy, Math.max(0.1, absRx), Math.max(0.1, ry), 0, 0, Math.PI * 2)
			ctx.stroke()
			ctx.restore()
		}

		const draw = () => {
			ctx.clearRect(0, 0, size, size)

			// Outer sphere silhouette (static)
			drawEllipse(cx, cy, R, R, 0.9, 2.5)

			// Latitude rings — static ellipses for a Y-axis rotation.
			// rx = R·cos(lat), ry = rx·sin(tilt), cy offset = R·sin(lat)·cos(tilt)
			for (const latDeg of [-60, -30, 0, 30, 60]) {
				const lat = (latDeg * Math.PI) / 180
				const rxL = R * Math.cos(lat)
				const ryL = rxL * sinT
				const ecyL = cy - R * Math.sin(lat) * cosT
				drawEllipse(cx, ecyL, rxL, ryL, 0.65, 3)
			}

			// Meridians — 3 longitude lines, 60° apart in phase.
			// KEY: use signed cos(theta) for rx, not |cos|.
			// Front hemisphere (cos > 0) → full opacity.
			// Back  hemisphere (cos < 0) → dim ghost (~0.18).
			// This gives the brain directional information → no reversal illusion.
			const phases = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]
			for (const phase of phases) {
				const t = theta + phase
				const cosTheta = Math.cos(t)
				const rxM = R * cosTheta // signed; abs taken inside drawEllipse
				const isFront = cosTheta >= 0
				drawEllipse(cx, cy, rxM, R, isFront ? 0.7 : 0.18, 3)
			}

			// Advance: one full revolution in 10 s at ~60 fps
			theta += (2 * Math.PI) / (10 * 60)
			raf = requestAnimationFrame(draw)
		}

		draw()
		return () => cancelAnimationFrame(raf)
	}, [size])

	return <canvas ref={ref} style={{ width: size, height: size, display: "block" }} />
}
