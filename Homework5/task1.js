let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
    function propsCount(currentObj) {
        return Object.keys(currentObj).length;
}


console.log(propsCount(mentor));

