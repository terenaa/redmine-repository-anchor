// ==UserScript==
// @name         Redmine repository anchor
// @namespace    http://www.the-world.pl/
// @version      0.2
// @author       Krzysztof Janda <terenaa@the-world.pl>
// @match        *://*/issues/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var isRepositoryActive = (document.getElementsByClassName('repository').length == 1);

if (isRepositoryActive) {
    var taskNumberElement = document.getElementsByTagName('h2')[0],
        projectName = document.getElementsByTagName('h1')[0].innerText.toLowerCase(),
        categoryName = mapCategoryName(document.getElementsByClassName('category')[1].innerText),
        taskNumberElementParts = taskNumberElement.innerText.split('#'),
        anchor = document.createElement('a');
    
    anchor.title = 'Przejdź do repozytorium';
    anchor.href = '/projects/' + projectName + '/repository/show/' + categoryName + '/branches/' + taskNumberElementParts[1];
    anchor.innerText = '#' + taskNumberElementParts[1];
    taskNumberElement.innerText = taskNumberElementParts[0] + ' ';
    taskNumberElement.appendChild(anchor);
}

// For KV purpose only
function mapCategoryName(category)
{
    var actualCategory = 'krakvet.pl';
    
    if (category.indexOf('zoofast') !== -1) {
        actualCategory = 'zoofast.tld';
    } else if (category.indexOf('mobilna') !== -1) {
        actualCategory = 'm.krakvet.pl';
    } else if (category.indexOf('Hurt') !== -1) {
        actualCategory = 'hurtownia.krakvet.pl';
    }
    
    return actualCategory;
}
