const sitemap = require( '@quasibit/eleventy-plugin-sitemap' )
const sass = require( 'sass' )
const path = require( 'path' )

module.exports = ( config ) => {
	config.addPassthroughCopy( 'src/images' )
	config.addPassthroughCopy( 'src/admin' )
	config.addPassthroughCopy( 'src/favicon.jpg' )
	config.addTemplateFormats( 'scss' )
	config.addExtension( 'scss', {
		outputFileExtension: 'css',
		useLayouts: false,
		compile: function ( inputContent, inputPath ) {
			let parsed = path.parse( inputPath )
			if ( parsed.name.startsWith( '_' ) ) return

			let result = sass.compileString( inputContent, {
				loadPaths: ['src/assets']
			} )
			this.addDependencies( inputPath, result.loadedUrls )
			return () => result.css
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
