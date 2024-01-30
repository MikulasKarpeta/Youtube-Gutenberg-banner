<?php
/**
 * Plugin Name:       Youtube Banner - Minimalio.org
 * Description:       Youtube banner with play and mute buttons covering whole viewport
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:           Minimalio.org
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       minimalio
 *
 * @package           create-block
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

add_action( 'wp_enqueue_scripts', 'block_stylesheet', 99 );
function block_stylesheet() {
    wp_enqueue_style( 'block-style', plugins_url('/build/style-index.css', __FILE__), false, '1.0', 'all' );
}

//Add block scripts to child theme
add_action( 'wp_enqueue_scripts', 'my_scripts_block' );
function my_scripts_block() {
    wp_enqueue_script(
        'block-script',
		plugins_url('/build/view.js', __FILE__),
        array( 'jquery' )
    );
}
