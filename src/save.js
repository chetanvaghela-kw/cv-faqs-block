/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	//const blockId = attributes.blockId;
	return (
		<div {...useBlockProps.save({ class: `cv-faqs-blocks-section-wrapper section-${attributes.blockId}` })}  >
	
			<div class="cv-container">
				<div class="cv-faqs-blocks-heading">
					<RichText.Content	
							tagName={attributes.headingTag}
							value={ attributes.blockHeading }	
							class={`heading-${attributes.blockId}`}
						/>
				</div>
				{
					attributes.listData && (
						<div x-data="{selected: 1}" class="space-y-4">
							<ul class={`cv-faqs-block-faq-section cv-faqs-block-faq-id-${attributes.blockId}`}>
							{ attributes.listData?.map((item, index) => (

								<li
									key={index}
									class="cv-faqs-block-faq-item"
									>
								<button
								type="button"
								class={`cv-faqs-block-faq-item-heading`}
								aria-expanded="false"
								aria-controls={`cv-faqs-accordion-content-${index}`}
								data-index={index}
								>
								<div class="cv-faqs-block-faq-item-title">
									<RichText.Content tagName="span" value={item.heading} />
									<span>
										<svg width="32" height="32" class={`w-8 h-8 hover-transition lg:w-6 lg:h-6 toggle-icon-svg`}>
											<use xlinkHref={`${SETTING?.themePath}assets/images/sprite.svg#menu-arrow`}>
									</use>
								</svg>  
									</span>
								</div>
								</button>
								<div
								id={`cv-faqs-accordion-content-${index}`}
								class="cv-faq-block-accordion-content"
								>
								<div class="cv-faq-block-accordion-content-inner">
									{
										item.description && (
											<RichText.Content class="cv-faq-item-content" tagName="div" value={item.description} />
										)
									}
									{
											Array.isArray(item?.listItems) && item.listItems.length > 0 && (
												<ul>
													{
														item.listItems?.map((list) => (
															list && (
																<RichText.Content
																	tagName='li'
																	class={`cv-faq-block-accordion-content-list-item`}
																	value={list}
																/>
															)
														) )
													}
												</ul>
											) 
										}
								</div>
								</div>
								</li>
								))
							}
							</ul>
						</div>
					)
				}
			</div>
	
		</div>
	);
}
