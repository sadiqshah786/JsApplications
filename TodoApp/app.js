const List = document.getElementById('list')
const Input = document.getElementById('inputs');
Input.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {

        addItems()
    }
})

function addItems() {



    if (Input.value == "") {
        alert("Please Enter task ! ")
    } else {

        li = document.createElement('li');
        li.setAttribute('class', 'li')




        input = document.createElement('input');

        input.setAttribute('class', 'innerInput')
        input.setAttribute('disabled', 'disabled')
        input.value = Input.value;
        li.appendChild(input)




        Deli = document.createElement('i')

        Deli.setAttribute("class", 'fa fa-trash')
        Deli.setAttribute("id", 'delete')
        Deli.addEventListener('click', DelList)
            //  Deli.setAttribute('onclick', 'DelList(this)')


        li.appendChild(Deli)




        Edli = document.createElement('i')

        Edli.setAttribute("class", 'fa fa-edit')
        Edli.setAttribute("id", 'edit')
            //  Edli.setAttribute('onclick', 'EditItem(this)')
        Edli.addEventListener('click', EditItem)

        li.appendChild(Edli)




        //  input.value = Input.value;



        List.appendChild(li)

        Input.value = "";
        Input.focus();


    }


}

function DelList() {
    //  console.log('delete', this, event)
    const e = this;
    let ele = e.parentNode
    console.log(ele, 'delete')
    ele.parentNode.removeChild(ele);
    // e.parentNode.remove()
}



function DelALL() {
    List.innerHTML = "";

}

function EditItem() {

    const e = this;
    const Edit = e.parentNode.firstChild;
    if (Edit.hasAttribute('disabled')) {
        Edit.removeAttribute('disabled')
        e.setAttribute("class", 'fa fa-refresh')
        Edit.focus();
    } else {
        Edit.setAttribute('disabled', 'fa fa-refresh')
        e.setAttribute("class", 'fa fa-edit')

    }


















}