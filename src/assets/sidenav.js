document.addEventListener( "DOMContentLoaded", () => {
	const dropdownButtons = document.querySelectorAll( ".dropdown-btn" )

	dropdownButtons.forEach( ( button ) => {
		button.addEventListener( "click", () => {
			// Close all dropdown containers instantly
			const allDropdowns = document.querySelectorAll( ".dropdown-container" )
			allDropdowns.forEach( ( dropdown ) => {
				if ( dropdown !== button.nextElementSibling ) {
					dropdown.style.maxHeight = null // Collapse instantly
				}
			} )

			// Toggle the dropdown container below the clicked button
			const dropdown = button.nextElementSibling
			if ( dropdown.style.maxHeight ) {
				dropdown.style.maxHeight = null // Collapse instantly
			} else {
				dropdown.style.maxHeight = dropdown.scrollHeight + "px" // Expand with animation
			}
		} )
	} )
} )
