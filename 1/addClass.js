function AddClass(element, NameClass) {
    console.time('timer');
    var elem = document.querySelector(element);
    var classList = elem.className;
    var pattern = new RegExp(NameClass);
    
    if (!pattern.test(classList)) {
        elem.className = elem.className + " " + NameClass;
        
    } 
    console.timeEnd('timer');
}


AddClass(".myDiv", "close");

