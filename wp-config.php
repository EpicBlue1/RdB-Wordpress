<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portfolio_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K/Q1+E+F;P}CR-RXu4)0dY`/@=.fhslb17((F;nF&%LbPuTeU%>]3JmR+`w $Kk7' );
define( 'SECURE_AUTH_KEY',  'W;1.vO7ltQu6+qBZ<SqZ&3aJlbo.)!l0</ld~DP4sF`-SRZ_{KFutyM[g/c{hkrM' );
define( 'LOGGED_IN_KEY',    'XyW2!Zv(_1y:#A3g*m4>9-/zZAfOK1=*XcK R/n%)cM3]t>/^2k4lYbh5|V7k(f[' );
define( 'NONCE_KEY',        'k0KN>*Vu|[d793c*bhI@LW$=*!4)(#-d3M?G|Sc6SJ>@.{BMUOW^%B.>y#i;% )8' );
define( 'AUTH_SALT',        'cS3fl(@}^6AW2u0-STbek>V;n8IUR>9-&xLddC/X_c?6W{y$E{zG[fc2{he8&?cI' );
define( 'SECURE_AUTH_SALT', 'fHF<<M(#{bK)e_0clOL}:U?=$(1Cen%IM=@y[x?C}D0Td6Z;hcXtC|(;Q9_?GN+}' );
define( 'LOGGED_IN_SALT',   '<}(0-tz=O<rvA0Gpk_-7sH^Gr#0z,ceR,;$}UQWr&m+>**v/_aSk=@gHMxI>3dby' );
define( 'NONCE_SALT',       'xVnqxP)9?5} k]TAIi.SF;aBJqKfvyQT1o/Kl8-57_e~/]SrXKStPdQ9Nnb,T{KS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
