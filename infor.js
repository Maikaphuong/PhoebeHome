function information(event)
{
    event.preventDefault();
    var name = document.getElementById('yourName').value;
    var divOut1 = document.getElementById('divOutput');
    var formBe = document.getElementById('formBefore');
    var petName = document.getElementById('PetName').value;
    var detail = document.getElementById('discriptions').value;
    if(name === "")
    {
        alert("Vui lòng nhập tên của bạn");
        return;
    }
    var Email = document.getElementById('email').value;
    var gender;
    if(document.getElementById('male').checked)
    {
        gender="Nam";
    }
    else if(document.getElementById('female').checked)
    {
        gender="Nữ";
    }
    else if(document.getElementById('other').checked)
    {
        gender="Khác";
    }
   var checkAllbox = document.querySelectorAll('input[type="checkbox"]');
   //truy suất các phần tử có thuộc tính input checkbox
   var check = false;
   var animal = [];
   for( var i = 0; i < checkAllbox.length;i++)
   {
    if(checkAllbox[i].checked)//trả về true nếu đc chọn
    {
        check = true;
        animal.push(checkAllbox[i].value);
    }
   }
   if(check === false)
   {
    alert("Hãy chọn ít nhất một thú cưng");
    return;
   }

   formBe.style.display = "none";
   divOut1.style.display ="block";
    document.getElementById('output1').innerHTML 
    = "Tên của bạn: " + name + "<br>" + 
    "Giới tính: " + gender + "<br>" +
    "Email: " + Email + "<br>" + 
    "Thú cưng: " + animal.join(", ")+"<br>"+
    "Tên thú cưng: " + petName + "<br>" +
    "Chi tiết: " + detail + "<br>";
}

