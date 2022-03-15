function kiemTra(){
    var a = document.getElementById("txt-a").value*1;
    var b = document.getElementById("txt-b").value*1;
    var c = document.getElementById("txt-c").value*1;

    if (a%2==0 && b%2==0 && c%2==0){
        // console.log("3 so chan va 0 so le");
        document.getElementById("check").innerText= "3 so chan va 0 so le";
    }else if (a%2==1 && b%2==1 && c%2==1){
        // console.log("0 so chan va 3 so le");
        document.getElementById("check").innerText= "0 so chan va 3 so le";
    }else if ((a%2==0 && b%2==0 && c%2==1)||(a%2==0 && b%2==1 && c%2==0)||(a%2==1 && b%2==0 && c%2==0)){
        document.getElementById("check").innerText= "2 so chan va 1 so le";
    }else if ((a%2==0 && b%2==1 && c%2==1)||(a%2==1 && b%2==0 && c%2==1)||(a%2==1 && b%2==1 && c%2==0)){
        document.getElementById("check").innerText= "1 so chan va 2 so le";
    }
}