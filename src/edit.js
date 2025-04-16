/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import {
  Panel,
  PanelRow,
  PanelBody,
  Button,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
  setAttributes({ blockId: clientId });

  const addItem = () => {
    const newItems = [
      ...attributes.listData,
      {
        heading: "",
        description: "",
        listItems: [''],
      },
    ];
    setAttributes({ listData: newItems });
  };
  const removeItem = (index) => {
    const removeValues = [...attributes.listData];
    removeValues.splice(index, 1);
    setAttributes({ listData: removeValues });
  };

  const removeChild = (index, child) => {
		const removeValues = [...attributes.listData];
		const removeIn = removeValues[index]['listItems'];
		removeIn.splice(child, 1);
		removeValues[index]['listItems'] = removeIn;
		setAttributes({ listData: removeValues });
	};

  const handleInputfield = (value, index, fieldname) => {
    const updatedValues = [...attributes.listData];
    updatedValues[index][fieldname] = value;
    setAttributes({ listData: updatedValues });
  };

  const handleInputfieldchild = (value, index, child, fieldname) => {
		const updatedValues = [...attributes.listData];
		updatedValues[index][fieldname][child] = value;
		
    setAttributes({ listData: updatedValues });
	};

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <InspectorControls>
        <Panel header={__("Setting", "cv-faqs-block")}>
          <React.Fragment key=".0">
            <PanelBody
              className="cv-faqs-block-head"
              title={__("Genaral", "cv-faqs-block")}
            >	             
            </PanelBody>						
			
          </React.Fragment>
        </Panel>
      </InspectorControls>
     
      <div {...useBlockProps({ className: `cv-faqs-blocks-section-wrapper section-${attributes.blockId}` })} >
          <div class="cv-container">
            <div class="cv-faqs-blocks-heading">
               <RichText
                  tagName={attributes.headingTag}
                  value={attributes.blockHeading}
                  className={`heading-${attributes.blockId}`}
                  allowedFormats={[]}
                  placeholder={__("Heading")}
                  onChange={(blockHeading) => setAttributes({ blockHeading })}
                />		
            </div>

            <div x-data="{selected: 1}" class="space-y-4">

              <ul className={`cv-faqs-block-faq-section cv-faqs-block-faq-id-${attributes.blockId}`}>
                {attributes.listData?.map((data, index) => (

                  <li class="cv-faqs-block-faq-item" key={index}>                    
                    <button type="button" class="cv-faqs-block-faq-item-heading"  onClick={() =>
                        setSelectedIndex(selectedIndex === index ? null : index)
                      }
                     >
                      <div class="cv-faqs-block-faq-item-title">
                        <RichText
                          tagName="span"
                          value={data.heading}
                          allowedFormats={[]}
                          onChange={(event) =>
                            handleInputfield(event, index, "heading")
                          }
                          placeholder={__("Write Question..")}
                        />
                        <span>
                          <svg width="32" height="32" class={`cv-faqs-icons ${selectedIndex === index ? 'cv-rotate-180' : ''}`}>
                            <use xlinkHref={`${SETTING?.themePath}assets/images/sprite.svg#menu-arrow`}>
                            </use>
                          </svg>                      
                        </span>
                      </div>
                    </button>

                    <div class={`cv-faq-block-accordion-content  ${
                  selectedIndex === index ? "cv-max-h-screen" : "cv-max-h-0"
                }`} >
                      <div class="cv-faq-block-accordion-content-inner">
                      <RichText
                          tagName="div"
                          className="cv-faq-item-content"
                          value={data.description}
                          allowedFormats={[]}
                          onChange={(event) =>
                            handleInputfield(event, index, "description")
                          }
                          placeholder={__("Write Answer...")}
                        />
                    {
                            Array.isArray(data?.listItems) && data.listItems.length > 0 && (
                                <ul>
                                    {
										data.listItems?.map((list, child) => (
                                            <li className='cv-faq-block-accordion-content-list-item' key={child}>
                                                <Button isDestructive className='cv-list-item-delete-btn' variant="primary" onClick={(event) => removeChild(index, child)} >X</Button>
                                                <RichText
                                                    className="cv-faq-block-accordion-content-list-item-text"
                                                    value={list}
                                                    allowedFormats={['core/bold', 'core/italic']}
                                                    placeholder={ __( 'Add List Item Here...(optional)' ) }
                                                    onChange={ ( event) => handleInputfieldchild(event, index, child,'listItems' ) }
                                                />
                                            </li>
                                        ) )
                                    }
                                </ul>
                                ) 
                            }
                          <div className='cv-faq-block-accordion-content-list-item-btn'>
                            <Button isPressed variant="primary" onClick={( event) => handleInputfield([...data.listItems, '' ], index, 'listItems' )}>{__( 'Add List Item', 'pzd' )}</Button>
						              </div>
                      </div>
                    </div>
                    <Button
                          isDestructive
                          className="cv-delete-question-btn"
                          variant="primary"
                          onClick={() => removeItem(index)}
                        >
                         Delete Question
                        </Button>  
                  </li>

                ))}
              </ul>            
              </div>
              <div
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingBottom: "30px",
                  }}
                >
                  <Button isPressed variant="primary" onClick={addItem}>
                    {__("Add Question", "cv-faqs-block")}
                  </Button>
                </div>
          </div>

      </div>
    </>
  );
}