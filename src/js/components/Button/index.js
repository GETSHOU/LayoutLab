import styles from './Button.module.scss';

export default () => {
	return ` 
    <button class="${styles.button}">
			<span class="${styles.button__text}">Кнопка</span>
    </button>
	`;
};
