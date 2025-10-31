# Google Search Console Setup Guide

Your site has been prepared for Google Search Console verification and indexing.

## ✅ Files Created

1. **`public/robots.txt`**
   - Allows all search engines to crawl your site
   - Points to your sitemap location
   - Accessible at: `https://www.duffyrealtyoflasvegas.com/robots.txt`

2. **`app/sitemap.ts`**
   - Dynamic sitemap generation using Next.js App Router
   - Automatically updates when pages change
   - Accessible at: `https://www.duffyrealtyoflasvegas.com/sitemap.xml`

3. **Verification Support in `app/layout.tsx`**
   - Meta tag verification ready
   - HTML file upload ready (place files in `public/`)

## 🔍 Verification Steps

### Option 1: HTML File Upload (Easiest)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" → Enter `https://www.duffyrealtyoflasvegas.com`
3. Choose "HTML file upload" verification method
4. Download the verification file (e.g., `google1234567890abcdef.html`)
5. Place the file in the `public/` directory of your project
6. Commit and push the file
7. Wait for deployment, then click "Verify" in Google Search Console

### Option 2: Meta Tag
1. In Google Search Console, choose "HTML tag" verification
2. Copy the `content` value from the meta tag shown
3. Edit `app/layout.tsx` and update the verification object:
   ```typescript
   verification: {
     google: 'paste-your-verification-code-here',
   },
   ```
4. Commit, push, and verify after deployment

## 📋 After Verification

Once verified, you should:

1. **Submit Your Sitemap**
   - Go to Sitemaps section in Search Console
   - Submit: `https://www.duffyrealtyoflasvegas.com/sitemap.xml`

2. **Request Indexing**
   - Go to URL Inspection tool
   - Enter your homepage URL
   - Click "Request Indexing"

3. **Monitor**
   - Check indexing status
   - Review search performance
   - Monitor for any issues

## 🔗 Important URLs

- **Robots.txt**: https://www.duffyrealtyoflasvegas.com/robots.txt
- **Sitemap**: https://www.duffyrealtyoflasvegas.com/sitemap.xml
- **Homepage**: https://www.duffyrealtyoflasvegas.com

## ✅ Already Configured

- ✅ Google Analytics (G-1JC6VLTL8P)
- ✅ Canonical URLs
- ✅ Open Graph metadata
- ✅ Proper domain configuration
- ✅ SEO-friendly page structure

Your site is ready for Google Search Console!

