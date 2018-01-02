let a = 1;
let b = 2;
export default 100;
export let c = 400;
export let d = 300;
export function fn(){
    
}

///////////////////////////////////////////////

// import a from './ceshi';
import * as aaa from './ceshi';
// console.log(a);
console.log(aaa);
import a,{c,d} from './ceshi';
console.log(a,c,d)

