import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create canvas with OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Colors from the brand (from tailwind.config.mjs)
const warmBeige = '#F0EDE6';
const sage = '#AEB697';
const sageDark = '#8D9B7A';
const warmGray = '#3A3A3A';

// Background - warm beige
ctx.fillStyle = warmBeige;
ctx.fillRect(0, 0, width, height);

// Add sage accent shapes (geometric decorative elements)
// Large circle in top right
ctx.fillStyle = sage;
ctx.globalAlpha = 0.15;
ctx.beginPath();
ctx.arc(width - 150, 150, 200, 0, Math.PI * 2);
ctx.fill();

// Small circle in bottom left
ctx.beginPath();
ctx.arc(150, height - 150, 120, 0, Math.PI * 2);
ctx.fill();

// Organic shape in center-left
ctx.globalAlpha = 0.1;
ctx.fillStyle = sageDark;
ctx.beginPath();
ctx.ellipse(200, height / 2, 150, 100, Math.PI / 4, 0, Math.PI * 2);
ctx.fill();

ctx.globalAlpha = 1.0;

// Add vertical accent line on left
ctx.fillStyle = sage;
ctx.fillRect(80, 200, 8, 230);

// Text content
ctx.fillStyle = warmGray;
ctx.textAlign = 'left';

// Name (large, bold)
ctx.font = 'bold 64px sans-serif';
ctx.fillText('Анастасия Быстрова', 110, 290);

// Title/subtitle
ctx.font = '42px sans-serif';
ctx.fillStyle = sageDark;
ctx.fillText('Психолог, КПТ-терапевт', 110, 360);

// Additional info
ctx.font = '32px sans-serif';
ctx.fillStyle = '#666666';
ctx.fillText('Онлайн консультации КПТ', 110, 420);

// Save the image
const outputPath = path.join(__dirname, '..', 'public', 'og-image.jpg');
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
fs.writeFileSync(outputPath, buffer);

console.log('✓ Open Graph image generated at public/og-image.jpg');
