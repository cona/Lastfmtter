<?php
define('FM_USER','lastfm-username');
$d = simplexml_load_file('http://ws.audioscrobbler.com/1.0/user/'.FM_USER.'/recenttracks.rss');
$post = ' | ' .$d->channel->item[0]->title.'を再生中!';
header("Location: https://twitter.com/intent/tweet?text=".urlencode($post));
