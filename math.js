// function add(a,b){
//     console.log(a+b)
// }

// function sub(a,b){
//     console.log(a-b)
// }

//************************** for export one function */
// module.exports = add;
// module.exports = sub;

//***************************** export multiple function */
// module.exports = {
//     add,sub
// }

//***************** second way to export multiple function */
exports.add = (a,b)=>{
    console.log(a+b)
}

exports.sub = (a,b)=>{
    console.log(a-b)
}