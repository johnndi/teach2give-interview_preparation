for(i=0 ; i<=100; i++) {
    if (i % 3 ==0 && i % 5 == 0){
        console.log(i + ": fizzbuzz");
    }
    else if (i % 5 == 0){
        console.log(i + ": buzz");
    }
    else if (i % 3 == 0){
        console.log(i + ": fizz");
    }
    else{
        console.log(i);
    }
}