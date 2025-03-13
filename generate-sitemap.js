import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemap = new SitemapStream({ hostname: 'https://canonicalrealty.com' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/properties', changefreq: 'monthly', priority: 0.5 },
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