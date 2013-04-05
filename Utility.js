// Utility function which will return all the child
// elements of node with specific attribute and name
// if name is null or undefined it will return null 
// if value is * or not defined then it will return 
// all the elements which has that attribute
function getElementsByAttribute(name, value) {
	var result = [],
	    i =0,
	    temp,
	    att= null, 
	    children = this.getElementsByTagName("*"),
		value = value || "*";
	
	if (name ) {
		//if ()
		for (i=0; i < children.length; i++) {
			temp = children[i];
		//	if (temp.nodeType == 1) {
			if (temp.hasAttribute(name)) {
				if (value !== "*") {
					att = temp.getAttribute(name);
					if (att && att.toLowerCase() === value.toLowerCase()) {
						result.push(temp);					
					}	
				} else {
					result.push(temp);
				}
			}				
		//	}
		}
		return result;
	}
	// name attribute not provided 
	return null;	
}

(function add() {
	if ( !("getElementsByAttribute" in document)) {
	       document.getElementsByAttribute = getElementsByAttribute;
	}
	
	if ( !("getElementsByAttribute" in Element)) {
	       Element.prototype.getElementsByAttribute = getElementsByAttribute;
	}
}())
