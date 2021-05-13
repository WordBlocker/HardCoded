//Get all elements by tag * for all
var elements = document.getElementsByTagName('*');


//Begin a loop for all elements
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

//Begin a loop searching in element node  
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

//If the node is a text node
        if (node.nodeType === 3) {
           
//Create and set this variable text to be equal to the value of the node (the actual letters)
		   var text = node.nodeValue;

//Create and set the replaced text varriable equal to a text replace function looking for "cat" anywhere and with any capitalization and replacing with the square symmbol           
		   var replacedText = text.replace(/cat/gi, '■■■■■');

//If the replaced text is not equal to the text then replace the child element with a new node 
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}