# Celestine Hosting Deployment Guide

This Vite application is optimized for deployment on **Celestine Hosting**.

## Build Process

### Development
```bash
npm install
npm run dev
```
This starts the Vite dev server on `http://localhost:5173`

### Production Build
```bash
npm install
npm run build
```
This generates an optimized production build in the `dist/` directory.

The build includes:
- **Minification**: JavaScript is minified using Terser for optimal file size
- **Output Directory**: Production files are generated in `dist/`
- **Base Path**: Configured as `./` for relative path hosting

### Preview Production Build
```bash
npm run preview
```
This allows you to preview the production build locally before deployment.

## Deploying to Celestine Hosting

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to Celestine Hosting**
   - Connect via FTP, SSH, or your hosting control panel
   - Upload the contents of the `dist/` directory to your public web root (usually `public_html/`)

3. **Verify Deployment**
   - Access your site at your domain
   - The app should load the interactive demo with the click counter

## Application Features

- **Vite-powered**: Fast build times and hot module replacement in development
- **Optimized for Celestine**: Built with production deployment in mind
- **Interactive Demo**: Click counter to showcase interactivity
- **Modern Styling**: Responsive design with gradient background
- **Zero Dependencies**: Vanilla JavaScript - no framework overhead

## Performance Notes

- Minified JavaScript (~2KB)
- CSS inlined for faster load times
- Suitable for static file hosting on Celestine Hosting
- CDN-friendly with relative paths

## Support

For issues with Celestine Hosting deployment, contact Celestine Hosting support.
