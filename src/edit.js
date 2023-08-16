/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PlainText } from '@wordpress/block-editor';
import { MediaUpload } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: { name, media, city },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeName = (value) => {
		setAttributes({ name: value });
	};

	const onChangeCity = (value) => {
		setAttributes({ city: value });
	};

	const onSelectImage = (media) => {
		setAttributes({ media });
	};

	return (
		<div {...blockProps}>
			<div className="dj milonga-item-night">
				<div className="dj_foto-container">
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes="image"
						value={media}
						render={({ open }) => (
							<Button
								className={media ? 'image-button' : 'button button-large'}
								onClick={open}
							>
								{!media ? 'Загрузите фото' : <img src={media.sizes.thumbnail.url} alt='Upload Person Photo' />}
							</Button>
						)}
					/>
				</div>
				<div className="dj_description">
					<p className="dj_name">
						<PlainText
							onChange={onChangeName}
							value={name}
						/>
					</p>
					<p className="dj_city">
						<PlainText
							onChange={onChangeCity}
							value={city}
						/>
					</p>
					<div className="dj_info"></div>
				</div>
			</div>
		</div >
	);

}
