/* exported move_array*/
/*eslint-evn browser*/
/*eslint no-console:0*/

function move_array(a,index1,index2){
    var temp,k,i,j;
    if(index2>index1){
        k=index2-index1;
        temp=a[index1];
        for(i=0;i<k;i++){
        a[index1+i]=a[index1+i+1];
    }
        a[index2]=temp;
    }
    else{
        k=index1-index2;
        temp=a[index2];
        for(j=0;j<k;j++){
            a[index2+j]=a[index2+j+1];
        }
         a[index1]=temp;
    }
    return a;
}
