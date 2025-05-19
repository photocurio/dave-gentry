const SitemapGenerator = require( 'sitemap-generator' )

// create generator
const generator = SitemapGenerator( 'http://mackeral.local:5757', {
	stripQuerystring: true,
	filepath: '../dist/sitemap.xml',
} )

// register event listeners
generator.on( 'done', () => {
	console.log( 'Sitemap generated successfully!' )
} )

// start the crawler
generator.start()
