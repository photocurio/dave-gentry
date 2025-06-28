const sitemap = require( '@quasibit/eleventy-plugin-sitemap' )
const sass = require( 'sass' )
const path = require( 'path' )

module.exports = function ( config ) {
	config.addPassthroughCopy( 'src/images' )
	config.addPassthroughCopy( 'src/favicon.jpg' )
	config.addTemplateFormats( 'scss' )
	config.addExtension( 'scss', {
		outputFileExtension: 'css',
		useLayouts: false,
		compile: function ( inputContent, inputPath ) {
			let parsed = path.parse( inputPath )
			if ( parsed.name.startsWith( '_' ) ) return

			// Eleventy expects a function that returns the compiled content
			// This allows for deferred compilation and caching
			return () => {
				let result = sass.compileString( inputContent, {
					loadPaths: [parsed.dir]
				} )

				return result.css
			}
		}
	} )

	// Add the sitemap plugin.
	config.addPlugin( sitemap, {
		sitemap: {
			hostname: 'https://dave-gentry.info',
		},
	} )
	return {
		dir: {
			input: 'src',
		},
	}
}
