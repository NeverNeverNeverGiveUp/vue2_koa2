export function toMoney(money=0) {
    // let newMoney=money;
    // if (newMoney) {
    //     newMoney=newMoney.toFixed(2);
    // }else{
    //     newMoney=0;
        // newMoney=newMoney.toFixed(2);
    // };
    return money.toFixed(2);
    // 代码优化：利用es6赋默认值的功能让moner=0;之后直接在return后处理，而不需要判断
}