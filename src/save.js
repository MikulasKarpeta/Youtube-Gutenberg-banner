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
 * @return {Element} Element to render.
 */

import "./style.scss";

export default function save({ attributes }) {
    let variableClass = "minimalio-video-banner " + attributes.width;

    return (
      <div {...useBlockProps}>
        <div
          class={variableClass}
          data-ratio={attributes.aspect}
          data-autoplay={attributes.autoplay}
          data-controls={attributes.controls}
          data-height={attributes.height}
          data-heightmobile={attributes.heightMobile}
          data-heighttablet={attributes.heightTablet}
          data-heightdesktop={attributes.heightDesktop}
          data-mobile={attributes.mobile}
          data-controls-color={attributes.controlsColor}
        >
          <div class="minimalio-video-banner__frame">
          
                    {attributes.mobile === true && (
                        <div class="mobile-image">
                            <figure className="mobile-image__image">
                                <img src={attributes.images.url} />
                            </figure>
                        </div>
                    )}

            <div
              id="ytbg3"
              data-ytbg-mute-button="true"
              data-ytbg-play-button="true"
              data-ytbg-resolution="16:9"
              data-youtube={"https://youtu.be/" + attributes.video}
            ></div>

          </div>
        </div>
      </div>
    );
  }