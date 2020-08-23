function getnum(num) {


    var result = document.getElementById('Cal');

    result.value += num;

}

function CLear() {

    var result = document.getElementById('Cal')
    var result2 = document.getElementById('Result')


    result.value = ''
    result2.value = ''



}

function getResult() {

    var Result = document.getElementById('Result')

    var result = document.getElementById("Cal")

    Result.value = eval(result.value)

}

function remove() {


    var rekensom = document.getElementById('Cal').value;
    document.getElementById('Cal').value = rekensom.substring(0, rekensom.length - 1);





}