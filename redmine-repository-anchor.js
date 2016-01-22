// ==UserScript==
// @name         Redmine repository anchor
// @namespace    http://www.the-world.pl/
// @version      0.1
// @author       Krzysztof Janda <terenaa@the-world.pl>
// @match        http://redmine.*/issues/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var isRepositoryActive = (document.getElementsByClassName('repository').length == 1);

if (isRepositoryActive) {
    var taskNumberElement = document.getElementsByTagName('h2')[0],
        projectName = document.getElementsByTagName('h1')[0].innerText.toLowerCase(),
        categoryName = document.getElementsByClassName('category')[1].innerText,
        taskNumberElementParts = taskNumberElement.innerText.split('#'),
        anchor = document.createElement('a');
    
    anchor.title = 'Przejdź do repozytorium';
    anchor.href = '/projects/' + projectName + '/repository/show/' + categoryName + '/branches/' + taskNumberElementParts[1];
    anchor.innerText = '#' + taskNumberElementParts[1];
    
    taskNumberElement.innerText = taskNumberElementParts[0] + ' ';
    taskNumberElement.appendChild(anchor);
}
