
// //it always returns a promise
// async function getData()
// {
//     return "Namaste";
// }

// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resolved successfully Value")
// });
// async function getData(){
//     return p;
// }
// const dataPromise=getData();
// dataPromise.then(res =>console.log(res));


//handeling async and await

async function handlePromise(){
    const  val=await p;
    console.log(val);
}
handlePromise();


//await is the key that can be only used in inside an  async function
//difference between normally handeliing code and using async and await
const p=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Promise resolved successfully Value");
   },10000);  
});