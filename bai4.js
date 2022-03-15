function tamGiac(){
    var a = document.getElementById("txt-canh-a").value*1;
    var b = document.getElementById("txt-canh-b").value*1;
    var c = document.getElementById("txt-canh-c").value*1;

    if((a==b && a!=c) || (b==c && b!=a) || (a==c && a!=b)){
        console.log("Tam giac can");
        document.getElementById("tam-giac").innerText="Tam giac can";
    }else if(a==b && b==c){
        console.log("Tam giac deu");
        document.getElementById("tam-giac").innerText="Tam giac deu";
    }else if((a*a+b*b==c*c) || (a*a+c*c==b*b) || (c*c+b*b==a*a)){
        console.log("Tam giac vuong");
        document.getElementById("tam-giac").innerText="Tam giac vuong";
    }
}