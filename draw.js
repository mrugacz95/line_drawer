(function () {
    var input = document.getElementById("input");
    var error = document.getElementById("output");
    var draw = document.getElementById("draw");
    input.addEventListener('input',function () {

        try {
            error.innerHTML = parser.parse(input.value);
        }
        catch (err) {
            error.innerHTML = err.message;
        }
    });
}());