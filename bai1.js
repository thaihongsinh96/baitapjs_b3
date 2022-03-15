function xuatSo () {
    var so1 = document.getElementById("txt-mot").value*1;
    var so2 = document.getElementById("txt-hai").value*1;
    var so3 = document.getElementById("txt-ba").value*1;

    if(so1<so2 && so2<so3){
        console.log(so1, so2, so3);
    }else if(so1<so3 && so3<so2){
        console.log(so1, so3, so2);  
    }else if(so2<so1 && so1<so3){
        console.log(so2, so3, so1);  
    }else if(so2<so3 && so3<so1){
        console.log(so2, so3, so1);  
    }else if(so3<so2 && so2<so1){
        console.log(so3, so2, so1);  
    }else if(so3<so1 && so1<so2){
        console.log(so3, so1, so2);  
    }
}