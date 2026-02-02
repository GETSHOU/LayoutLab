/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard-scss'],
	rules: {
		'block-no-empty': true,
		'no-empty-source': false,
		'comment-empty-line-before': 'never',
	},
};
