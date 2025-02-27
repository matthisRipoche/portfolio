<?php

include_once('header.php');

$page = $_GET['nav'];

if (!isset($page)) {
    include_once('template-part/infos.php');
}

switch ($page) {
    case 'entreprise-section':
        include_once('template-part/entreprise.php');
        break;
    case 'veille-section':
        include_once('template-part/veille.php');
        break;
    case 'skills-section':
        include_once('template-part/skills.php');
        break;
    case 'projects-section':
        include_once('template-part/projects.php');
        break;
    case 'travaux-section':
        include_once('template-part/travaux.php');
        break;
    case 'contact-section':
        include_once('template-part/contact.php');
        break;
}

include_once('footer.php');
