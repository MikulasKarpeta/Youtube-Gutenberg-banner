<?php
/**
 * Plugin Name:       Youtube Banner - Minimalio.org
 * Description:       Youtube banner with play and mute buttons covering whole viewport
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Minimalio.org
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       minimalio
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function youtube_banner_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'youtube_banner_block_init' );