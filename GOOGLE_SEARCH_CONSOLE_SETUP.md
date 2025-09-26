# Google Search Console Setup Guide for Viraj Jewellers

## ✅ Fixed Issues
- **Sitemap**: Now accessible at `https://virajjewellers.com/sitemap.xml`
- **Robots.txt**: Now accessible at `https://virajjewellers.com/robots.txt`
- Both files are static and work with your `output: 'export'` configuration

## 🔧 Google Search Console Setup Steps

### 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://virajjewellers.com`
5. Click "Continue"

### 2. Verify Ownership
Choose **HTML tag method** (recommended):
1. Copy the verification code from GSC
2. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GSC_VERIFICATION=your_verification_code_here
   ```
3. The code is already integrated in your `app/layout.tsx`
4. Click "Verify" in GSC

### 3. Submit Sitemap
1. In GSC, go to "Sitemaps" in the left menu
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success"

### 4. Request Indexing (Priority Pages)
Request indexing for these key pages:
1. **Homepage**: `https://virajjewellers.com/`
2. **Main Service**: `https://virajjewellers.com/services/cash-for-gold`
3. **Cornerstone**: `https://virajjewellers.com/best-gold-buyer-lajpat-nagar`
4. **Location**: `https://virajjewellers.com/locations/lajpat-nagar`

**How to request indexing:**
1. Use GSC URL Inspection tool
2. Enter each URL
3. Click "Request Indexing"

### 5. Monitor Coverage
Check these sections regularly:
- **Coverage**: Look for errors, warnings
- **Sitemaps**: Ensure all pages are discovered
- **URL Inspection**: Test individual pages
- **Performance**: Track impressions, clicks, CTR

### 6. Set Up Alerts
1. Go to Settings → Users and permissions
2. Add your email for notifications
3. Enable alerts for:
   - Coverage issues
   - Manual actions
   - Security issues

## 🚀 Fast Indexing Tips

### Immediate Actions (Do Today):
1. **Submit sitemap** in GSC
2. **Request indexing** for 4 priority pages above
3. **Run reindex API**: Visit `https://virajjewellers.com/api/reindex`
4. **Share on social**: Post your cornerstone page URL

### Within 24 Hours:
1. **Get 3-5 Google Reviews** mentioning:
   - "Authorized SBI Approver"
   - "Cash for Gold Lajpat Nagar"
   - "Best rates in Delhi"
2. **Create Google Business Profile post** linking to your site
3. **Internal linking**: Add links from other pages to cornerstone

### Weekly Tasks:
1. Check GSC for new coverage issues
2. Monitor search performance
3. Update sitemap if you add new pages
4. Request indexing for new blog posts

## 📊 Key Metrics to Track

### In Google Search Console:
- **Impressions**: How often your pages appear in search
- **Clicks**: Actual traffic from Google
- **CTR**: Click-through rate (aim for 3%+)
- **Position**: Average ranking position
- **Coverage**: Pages indexed vs. submitted

### Target Keywords to Monitor:
1. "Cash for Gold Lajpat Nagar"
2. "Best Gold Buyer in Lajpat Nagar"
3. "Sell Gold in Lajpat Nagar"
4. "Gold Buyer Delhi"
5. "Authorized SBI Approver"

## 🔍 Troubleshooting

### If sitemap shows errors:
1. Check `https://virajjewellers.com/sitemap.xml` loads
2. Validate XML format
3. Ensure all URLs return 200 status

### If pages not indexing:
1. Check robots.txt allows crawling
2. Verify pages have proper meta tags
3. Request indexing manually
4. Check for duplicate content issues

### If ranking drops:
1. Check for manual actions in GSC
2. Monitor Core Web Vitals
3. Ensure mobile-friendliness
4. Check for broken links

## 📞 Next Steps After Setup

1. **Deploy your site** with the fixed sitemap/robots
2. **Submit sitemap** in GSC
3. **Request indexing** for priority pages
4. **Monitor daily** for first week
5. **Get reviews** mentioning target keywords
6. **Share content** on social media

## 🎯 Success Metrics (30 Days)

- **Indexed pages**: 30+ pages in GSC
- **Search impressions**: 1000+ monthly
- **Average position**: Top 10 for target keywords
- **CTR**: 3%+ for branded searches
- **Coverage errors**: 0 critical issues

---

**Note**: It typically takes 1-7 days for new pages to appear in search results after proper GSC setup and indexing requests.
