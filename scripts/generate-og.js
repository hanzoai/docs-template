#!/usr/bin/env node
/**
 * Generate OG image using @luxfi/logo
 * 
 * Usage: node scripts/generate-og.js
 * 
 * Requires: sharp (npm install sharp)
 */

import { getColorSVG } from '@luxfi/logo'
import fs from 'fs'
import path from 'path'

// Try to use sharp if available, otherwise output SVG
async function generateOG() {
  const width = 1200
  const height = 630
  
  // Get the Lux logo SVG
  const logoSvg = getColorSVG()
  
  // Create OG image SVG
  const ogSvg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a0a0a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <g transform="translate(${width/2 - 80}, ${height/2 - 120})">
      <svg viewBox="0 0 100 100" width="160" height="160">
        <path d="M50 85 L15 25 L85 25 Z" fill="#ffffff"/>
      </svg>
    </g>
    <text x="${width/2}" y="${height/2 + 100}" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="48" 
          font-weight="600" 
          fill="#ffffff" 
          text-anchor="middle">
      Docs Template
    </text>
    <text x="${width/2}" y="${height/2 + 150}" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="24" 
          fill="#888888" 
          text-anchor="middle">
      Documentation for Lux Network
    </text>
  </svg>`
  
  // Write SVG version
  const svgPath = path.join(process.cwd(), 'public', 'og.svg')
  fs.writeFileSync(svgPath, ogSvg)
  console.log(`Generated: ${svgPath}`)
  
  // Try to convert to PNG using sharp
  try {
    const sharp = (await import('sharp')).default
    const pngPath = path.join(process.cwd(), 'public', 'og.png')
    await sharp(Buffer.from(ogSvg))
      .png()
      .toFile(pngPath)
    console.log(`Generated: ${pngPath}`)
  } catch (e) {
    console.log('Note: Install sharp to generate PNG: npm install sharp')
    console.log('For now, use og.svg or convert manually')
  }
}

generateOG().catch(console.error)
