function validate(event){
    var total=document.getElementById("input_value").value;
    alert("Total number of subjects "+total);
    var array1=new Array(total);
    var array2=new Array(total);
    for(let i=1;i<=total;i++){
     array1[i-1]=Number(prompt("Enter subject "+i+" grades"));
     array2[i-1]=Number(prompt("Enter subject "+i+" credits"));
    }
    var sum=0;
    var product=0;
    for(let i=1;i<=total;i++){
       sum=array2[i-1]+sum;
       product=product+(array1[i-1]*array2[i-1]);
    }
    var div;
    var percent;
    div=product/sum;
    percent=div*10;
    alert("Your Points is "+div.toFixed(2));
    alert("Your Percentage is "+percent.toFixed(2));
    document.getElementById("p").innerHTML="Your Pecentage is  "+percent.toFixed(2)+" %";
    document.getElementById("po").innerHTML="Your Points is   "+div.toFixed(2);
    event.preventDefault()
    
}