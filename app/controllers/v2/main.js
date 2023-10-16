import { https } from "./service.js";
import { getInputData, render } from "./controller.js";
function fetchData(){
    https
    .get("/food")
    .then(res=>{
        render(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
fetchData();

window.deleteFood= (id)=>{
    https
    .delete(`/food/${id}`)
    .then(res=>{
        fetchData()
    })
    .catch(err=>{
        console.log(err)
    })
}

const monChay="loai1"
const monMan="loai2"
const conHang="1"
const hetHang="0"
let assignInput= (id, value)=> document.getElementById(id).value=value;
window.upDataToInput= (id)=>{
    $('#exampleModal').modal('show')
    document.getElementById("foodID").disabled=true;
    document.getElementById("btnThemMon").disabled=true
    document.getElementById("btnCapNhat").disabled=false
    https
    .get(`/food/${id}`)
    .then(res=>{
        let {ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa, ma}=res.data;
        assignInput("foodID", ma)
        assignInput("tenMon", ten)
        assignInput("loai", loai==true?monChay:monMan)
        assignInput("giaMon", gia)
        assignInput("khuyenMai", "10")
        assignInput("tinhTrang", tinhTrang==true?conHang:hetHang)
        assignInput("hinhMon", hinhAnh)
        assignInput("moTa", moTa)
    })
    .catch(err=>{
        console.log(err)
    })
}

window.update= ()=>{
    let food=getInputData();
    let id=food.ma;
    https
    .put(`/food/${id}`, food)
    .then(res=>{
        fetchData()
        $('#exampleModal').modal("hide")
    })
    .catch(err=>{
        console.log(err)
    })
}
document.getElementById("btnThem").onclick=()=>{
    document.getElementById("btnThemMon").disabled=false
    document.getElementById("btnCapNhat").disabled=true
    document.querySelectorAll('input').forEach(input=>{
        input.value=""
    })
    document.getElementById("moTa").value=""
    document.querySelectorAll('select').forEach(select=>{
        select.value=""
    })
}
window.add = ()=>{
    let food=getInputData()
    
    https
    .post("/food", food)
    .then(res=>{
        fetchData()
        $("#exampleModal").modal("hide")
    })
    .catch(err=>{
        console.log(err)
    })
}
