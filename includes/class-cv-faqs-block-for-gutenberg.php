<?php
/**
 * Checking class_exists or not.
 *
 * @package CV_FAQS_Block_For_Gutenberg
 * @subpackage WordPress
 */

if ( ! class_exists( 'CV_FAQS_Block_For_Gutenberg' ) ) {
	/**
	 * Declare CV-FAQs block for gutenberg class.
	 */
	class CV_FAQS_Block_For_Gutenberg {
		/**
		 * Calling class construct.
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'gutenberg_cv_faqs_block_register' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'gutenberg_cv_faqs_block_enqueue_script' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'gutenberg_cv_faqs_block_editor_enqueue_script' ) );
		}

		/**
		 * CV-FAQs block for gutenber register block and script.
		 */
		public function gutenberg_cv_faqs_block_register() {

			// Register style.
			wp_register_style( 'cv-faqs-block', plugin_dir_url( __FILE__ ) . '../assets/css/cv-faqs-block.css', array(), true );

			// Register block.
			$build_dir = CV_FAQS_BLOCK_FOR_GUTENBERG_DIR . 'build';
			register_block_type( $build_dir );
		}

		/**
		 * Enqueue script & style.
		 */
		public function gutenberg_cv_faqs_block_enqueue_script() {
			global $post;
			if ( function_exists( 'has_block' ) && has_block( 'cv-blocks/faqs-section', $post ) ) {
				// Enqueue public script.
				wp_register_script( 'cv-faqs-block', plugin_dir_url( __FILE__ ) . '../assets/js/cv-faqs-block.js', array(), true, true );
				wp_enqueue_script( 'cv-faqs-block' );

				// Enqueue style.
				wp_enqueue_style( 'cv-faqs-block' );
			}
		}

		/**
		 * Enqueue script & style.
		 */
		public function gutenberg_cv_faqs_block_editor_enqueue_script() {

			// Localize the script with the theme URL.
			wp_localize_script(
				'wp-blocks',
				'SETTING',
				array(
					'themePath' => CV_FAQS_BLOCK_FOR_GUTENBERG_URI,
				)
			);
		}
	}
}
