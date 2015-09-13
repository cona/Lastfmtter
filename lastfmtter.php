<?php
require('simple_html_dom.php');
define('FM_USER','lastfm-username');
$d = file_get_html('http://www.last.fm/ja/user/'.FM_USER);
$name = $d->find('a.link-block-target',0);
$author = $d->find('span.chartlist-artists',0)->children(0);
$post = $name->innertext. ' - ' . $author->innertext;
header("Location: https://twitter.com/intent/tweet?text=".urlencode($post));
