(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(circle.radius, 2);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === false) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            } else if (doRounding === true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()))
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();