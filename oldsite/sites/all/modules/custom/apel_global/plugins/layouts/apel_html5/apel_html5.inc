<?php

// Plugin definition
$plugin = array(
  'title' => 'Apel HTML5 layout',
  'category' => 'Apel',
  'icon' => 'apel_html5.png',
  'theme' => 'panels_apel_html5',
  'css' => 'apel_html5.admin.css',
  'regions' => array(
    'top' => t('Header (<header>)'),
    'main' => t('Main (<main>)'),
    'bottom' => t('Bottom (<footer>)'),
  ),
);