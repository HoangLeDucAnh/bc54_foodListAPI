export let render = (foodList)=>{
    let result="";
    foodList.forEach(food => {
    let {ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang}=food;
    let giaKM=Number(gia)*(1-Number(khuyenMai)/100);
        result+=`<tr>
        <td>${ma}</td>
        <td>${ten}</td>
        <td>${loai}</td>
        <td>${gia}</td>
        <td>${khuyenMai}</td>
        <td>0</td>
        <td>${tinhTrang}</td>
        <td>
        <button class="btn btn-success" onclick="upDataToInput(${ma})">Chỉnh sửa</button>
        <button class="btn btn-danger" onclick="deleteFood(${ma})">Xóa</button>
        </td>
        </tr>`
    });
    document.getElementById("tbodyFood").innerHTML=result;
}
let get=id=>document.getElementById(id).value;
export let getInputData=()=>{
    let ma=get("foodID")
    let ten=get("tenMon")
    let loai=get("loai")
    let gia=get("giaMon")
    let khuyenMai=get("khuyenMai")
    let tinhTrang=get("tinhTrang")
    let hinhAnh=get("hinhMon")
    let moTa=get("moTa")
    return {
        ma,
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa,
    }
}