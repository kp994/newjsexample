
let btn =document.getElementById("sub")
let t1 =document.getElementById("item")
let t2 =document.getElementById("ul1")

btn.addEventListener("click", myfunc);
function myfunc()
{
    let test= document.getElementById("test").value;
    let inp= document.createElement("li")
    let f=document.createElement("form")
    let t=document.createElement("input")
    t.type="text"
    t.value=test
    let del = document.createElement("input")
    del.type="submit"
    del.value="delete"
    inp.append(t,del)
    t2.appendChild(inp)
    
    del.addEventListener("click", deleting)


}

function deleting(e)
{
    let l= e.target.parentNode
    t2.removeChild(l)
}
