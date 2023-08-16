/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const {
		attributes: { name, media, city },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		// <div {...blockProps}>
		<div className="dj milonga-item-night">
			<div className="dj_foto-container">
				{media?.sizes.thumbnail.url && <img src={media?.sizes.thumbnail.url} alt={name} />}
			</div>
			<div className="dj_description">
				<p className="dj_name">{name}</p>
				<p className="dj_city">{city}</p>
				<div className="dj_info"></div>
			</div>
		</div>
		// </div>
	);

}
