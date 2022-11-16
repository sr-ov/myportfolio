import * as basicScroll from 'basicscroll'

const $els = document.querySelectorAll('#technologies, #hero, #education')
const TRANSLATE_Y_TO = ['100%', '60%', '30%']
const CSS_VAR = '--translateY'

$els.forEach(($el, i) => {
	basicScroll
		.create({
			elem: $el,
			from: 'middle-middle',
			to: 'bottom-top',
			direct: true,
			props: {
				[CSS_VAR]: {
					from: '0%',
					to: TRANSLATE_Y_TO[i],
				},
			},
		})
		.start()
})
