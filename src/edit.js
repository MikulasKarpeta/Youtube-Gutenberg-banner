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
// import { useBlockProps } from '@wordpress/block-editor';

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
 * @return {Element} Element to render.
 */
// const { registerBlockType } = wp.blocks;
import { View } from "@wordpress/primitives";
const {
  MediaPlaceholder,
  InspectorControls,
  MediaUploadCheck,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  TextControl,
  PanelRow,
  Button,
  RadioControl,
} = wp.components;

  export default function edit({ attributes, setAttributes }) {
    const hasImages = attributes.images.id !== undefined;
    
    const blockProps = useBlockProps({
      className: "minimalio",
    });

    return (
      <>
        <InspectorControls style={{ marginBottom: "0px" }}>
          <PanelBody title={"Video banner options:"}>
            <PanelRow>
              <TextControl
                label="Youtube video ID"
                labelPosition="top"
                value={attributes.video}
                type="text"
                onChange={(newVideo) => setAttributes({ video: newVideo })}
              />
            </PanelRow>
            <PanelRow>
              <RadioControl
                label="Video Aspect ratio"
                selected={attributes.aspect}
                options={[
                  { label: "16/9", value: "16-9" },
                  { label: "4/3", value: "4-3" },
                  { label: "2.39/1", value: "239-1" },
                ]}
                onChange={(value) => setAttributes({ aspect: value })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title={"Hide on mobile"}>
            <ToggleControl
              checked={attributes.mobile}
              label={"Hide video on mobile"}
              style={{ marginTop: "0px" }}
              onChange={() =>
                setAttributes({
                  mobile: !attributes.mobile,
                })
              }
            />

            {attributes.mobile === true && (
              <MediaUploadCheck>
                <MediaPlaceholder
                  allowedTypes={["image"]}
                  labels={{
                    title: "Select image for mobile devices",
                  }}
                  multiple={false}
                  value={attributes.images ? attributes.images.id : ""}
                  onSelect={(newImages) => setAttributes({ images: newImages })}
                />
              </MediaUploadCheck>
            )}
          </PanelBody>

          <PanelBody>
            <ToggleControl
              checked={attributes.autoplay}
              label={"Enable autoplay"}
              style={{ marginTop: "0px" }}
              onChange={() =>
                setAttributes({
                  autoplay: !attributes.autoplay,
                })
              }
            />
            <ToggleControl
              checked={attributes.controls}
              label={"Enable controls"}
              onChange={() =>
                setAttributes({
                  controls: !attributes.controls,
                })
              }
            />
            {attributes.controls && (
              <TextControl
                label={"Controls color"}
                labelPosition="top"
                value={attributes.controlsColor}
                type="text"
                onChange={(value) => setAttributes({ controlsColor: value })}
              />
            )}
            <PanelRow>
              <RadioControl
                label="Container width"
                help="Choose 'Full width' to overwrite theme settings"
                selected={attributes.width}
                options={[
                  { label: "Current theme container", value: "container" },
                  { label: "Full width", value: "full" },
                ]}
                onChange={(value) => setAttributes({ width: value })}
              />
            </PanelRow>

            <PanelRow>
              <RadioControl
                label="Container height"
                help="Choose container height"
                selected={attributes.height}
                options={[
                  { label: "Full height", value: "full" },
                  { label: "Custom height", value: "custom" },
                ]}
                onChange={(value) => setAttributes({ height: value })}
              />
            </PanelRow>

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on mobile (vh)"
                  labelPosition="top"
                  value={attributes.heightMobile}
                  type="string"
                  onChange={(newHeightMobile) =>
                    setAttributes({ heightMobile: newHeightMobile })
                  }
                />
              </PanelRow>
            )}

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on tablet (vh)"
                  labelPosition="top"
                  value={attributes.heightTablet}
                  type="string"
                  onChange={(newHeightTablet) =>
                    setAttributes({ heightTablet: newHeightTablet })
                  }
                />
              </PanelRow>
            )}

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on desktop (vh)"
                  labelPosition="top"
                  value={attributes.heightDesktop}
                  type="string"
                  onChange={(newHeightDesktop) =>
                    setAttributes({ heightDesktop: newHeightDesktop })
                  }
                />
              </PanelRow>
            )}
          </PanelBody>
        </InspectorControls>

        <View {...blockProps}>
        <div
          class="minimalio-video-banner"
          style={{
            background: "#232323",
            color: "white",
            height: "auto",
            padding: "20px",
          }}
          data-autoplay={attributes.autoplay}
          data-controls={attributes.controls}
        >
          <h2>Minimalio Youtube banner</h2>{" "}
          <p>Edit the block from the right sidebar</p>
          {attributes.mobile === true && (
            <div className="image">
              <figure>
                <p>Image for mobile:</p>
                <img style={{ height: "50px" }} src={attributes.images.url} />
              </figure>
              <div>
                {hasImages && (
                    <Button
                    onClick={() => setAttributes({ images: "" })}
                    className="button"
                    style={{ color: "white",
					background: "#727272",
					lineHeight: "15px",
					borderColor: "white",
					boxShadow: "none", }}
                  >
                    Remove image
                  </Button>
                )}
              </div>
            </div>
          )}
          </div>
          </View>
      </>
  
    );
  }