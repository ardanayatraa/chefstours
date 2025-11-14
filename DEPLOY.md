# Deploy ke Vercel

## Setup di Vercel:
1. Build Command: `npm run build`
2. Output Directory: `dist`
3. Install Command: `npm install`

## Sebelum Deploy:
```bash
git add .
git commit -m "Update build process"
git push
```

Build command akan:
- Copy semua gambar dari `src/img` ke `dist/img`
- Build Tailwind CSS

Gambar akan tersedia di path: `img/nama-file.png`
