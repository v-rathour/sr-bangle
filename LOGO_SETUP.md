# Logo Setup Instructions

## Step 1: Add Logo Files

Place your logo image files in the `frontend/public/` directory:

### Required Files:
1. **logo.png** - Main logo (recommended size: 200x200px or larger, transparent background)
2. **favicon.ico** - Browser tab icon (16x16, 32x32, 48x48 sizes)
3. **logo16.png** - 16x16 icon
4. **logo32.png** - 32x32 icon  
5. **logo192.png** - 192x192 icon (for Android)
6. **logo512.png** - 512x512 icon (for Android)

## Step 2: Convert Your Logo

Since you have a circular logo with "SR" initials and a bangle, you'll need to:

### Option A: Use Online Tools
1. Go to https://favicon.io/favicon-converter/ or https://realfavicongenerator.net/
2. Upload your logo image
3. Download the generated favicon files
4. Place them in `frontend/public/` folder

### Option B: Manual Conversion
1. **For logo.png**: Use your original logo image (PNG format with transparent background)
2. **For favicon.ico**: Convert your logo to ICO format (16x16, 32x32, 48x48)
3. **For logo16.png, logo32.png**: Resize your logo to these dimensions
4. **For logo192.png, logo512.png**: Resize your logo to these dimensions

## Step 3: File Structure

Your `frontend/public/` folder should contain:
```
frontend/public/
├── logo.png          (Main logo - used in navbar)
├── favicon.ico       (Browser tab icon)
├── logo16.png        (16x16 icon)
├── logo32.png        (32x32 icon)
├── logo192.png       (192x192 icon)
├── logo512.png       (512x512 icon)
├── index.html
└── manifest.json
```

## Step 4: Recommended Logo Sizes

- **logo.png**: 200x200px to 400x400px (for navbar)
- **favicon.ico**: Multi-size ICO (16x16, 32x32, 48x48)
- **logo16.png**: 16x16px
- **logo32.png**: 32x32px
- **logo192.png**: 192x192px
- **logo512.png**: 512x512px

## Step 5: Test

After adding the files:
1. Restart your React development server (`npm start`)
2. Check the browser tab - you should see your logo
3. Check the navbar - logo should appear instead of text
4. If logo doesn't appear, check browser console for errors

## Quick Setup with Online Tool

1. Visit: https://realfavicongenerator.net/
2. Upload your logo image
3. Configure settings:
   - iOS: Use single image for all devices
   - Android: Use single image for all devices
   - Windows: Use single image
4. Generate and download the package
5. Extract and copy all files to `frontend/public/`
6. Rename files if needed to match the names above

## Notes

- The navbar will automatically use `logo.png`
- If `logo.png` is not found, it will fallback to text "S.R. Bangle"
- The favicon will appear in browser tabs
- Make sure all logo files have transparent backgrounds for best results
- PNG format is recommended for all logo files

