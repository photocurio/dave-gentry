const sitemap = require( "@quasibit/eleventy-plugin-sitemap" )

module.exports = ( config ) => {
	config.addPassthroughCopy( 'src/assets' )
	config.addPassthroughCopy( 'src/pics' )

	// Add the sitemap plugin.
	config.addPlugin( sitemap, {
		sitemap: {
			hostname: "https://dave-gentry.info",
		},
	} )
	return {
		dir: {
			input: 'src',
		},
	}
}
