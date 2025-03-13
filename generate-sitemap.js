// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://canonicalrealty.com' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/properties', changefreq: 'monthly', priority: 0.5 },
  // Add more routes as needed
];

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    const writeStream = createWriteStream(resolve(__dirname, 'dist/sitemap.xml'));
    writeStream.write(data.toString());
    writeStream.end();
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  });