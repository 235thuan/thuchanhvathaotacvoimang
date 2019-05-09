let x=0;
let A=[];
function padd() {
    A[x]=document.getElementById("txttext").value;
    alert("Element " + x + "=" + "Add at index " + x);
    x++;
    document.getElementById("txttext").value="";
}
function pdisplay() {
    let e="<hr/>";
    for (let i=0; i<A.length; i++) {
        e+= "Element " + i + "=" + A[i] + "<br/>";
    }
    document.getElementById("result").innerHTML=e;
}