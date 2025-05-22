const sitemap = require( "@quasibit/eleventy-plugin-sitemap" )
const sass = require( "sass" )
const path = require( "path" )


module.exports = ( config ) => {
	config.addPassthroughCopy( 'src/assets' )
	config.addPassthroughCopy( 'src/pics' )
	config.addTemplateFormats( "scss" )
	config.addExtension( "scss", {
		outputFileExtension: "css",
		compile: async function ( inputContent, inputPath ) {
			let parsed = path.parse( inputPath )
			if ( parsed.name.startsWith( "_" ) ) return

			return async () => {
				let result = sass.compile( inputPath )
				return result.css
			}
		}
	} )


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
