let arr = ['raghad', 'majd', 'ahmad'];

function rect(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    
    let res1 = '';
    for(let i = 0; i < max+4; i++) {
        res1 = res1 + '*';
    }
    console.log(res1);
    
    let res3 = '';
    for(let i=0 ; i< arr.length ; i++){
        res3 ='* ' + arr[i];
    
        for(let j=0 ; j<max -arr[i].length ; j++){
            res3 = res3 + ' ';
        }
        console.log(res3 + ' *');
    }
    
    
    let res2 = '';
    for(let i = 0; i < max+4; i++) {
        res2 = res2 + '*';
    }
    console.log(res2);
}

rect(arr);