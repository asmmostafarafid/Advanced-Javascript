const num = [1,2,3,4,5,6,7];
for(let i=0; i < num.length; i++){
    if (num[i]>7){
        break;
    }
    console.log(num[i]);
}

// continue

for(let i = 0; i < num.length; i++){
    if (num[i]> 0){
        continue;
    }
    console.log(num[i]);
}