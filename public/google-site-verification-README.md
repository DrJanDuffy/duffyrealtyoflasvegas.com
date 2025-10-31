# Google Search Console Verification

This directory is ready for Google Search Console verification files.

## Verification Methods

### Method 1: HTML File Upload (Recommended)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.duffyrealtyoflasvegas.com`
3. Choose "HTML file upload" verification method
4. Download the verification HTML file (e.g., `google1234567890abcdef.html`)
5. Place it in the `public/` directory
6. The file will be accessible at: `https://www.duffyrealtyoflasvegas.com/google1234567890abcdef.html`

### Method 2: Meta Tag
1. In Google Search Console, choose "HTML tag" verification method
2. Copy the content value from the meta tag (the code after `content="..."`)
3. Update `app/layout.tsx` and add it to the `verification` object:
   ```typescript
   verification: {
     google: 'your-verification-code-here',
   },
   ```

### Method 3: DNS Record (Alternative)
If you prefer DNS verification, follow the instructions in Google Search Console.

## After Verification

Once verified, you can:
- Submit your sitemap: `https://www.duffyrealtyoflasvegas.com/sitemap.xml`
- Monitor search performance
- Track indexing status
- View search analytics

## Files Already Created

- ✅ `public/robots.txt` - Tells search engines what to crawl
- ✅ `app/sitemap.ts` - Dynamic sitemap generation
- ✅ Google Analytics tracking code is already added
- ✅ Proper metadata and canonical URLs configured

