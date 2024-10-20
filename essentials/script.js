// //CONCEPT-1 || OBJECT CASE
// const obj = {
//   firstName: "Prabesh",
//   secondName: "Bhandari",
//   social: {
//     facebook: "SystemPrabesh",
//     instagram: "prabesh.don27",
//   },
// };
// const { instagram } = obj.social;
// //yeti garepaxi harek thau ma instagram vanne keyword use garda hunxa, hoina vane ta harek choti obj.social.instagram use garna parne hunthyo

// // CONCEPT-2 || ARRAY CASE
// const arr = [11, function () {}, 18];
// // const [elem1, elem2, elem3] = arr; //1st,2nd ra 3rd - yo 3 otai element bahira nikalnu parda
// const [elem1, , elem3] = arr; //1st ra 3rd element matra  bahira nikalnu parda

// //CONCEPT-3 || ARROW FUNCTIONS
// const abcd = () => {
//   console.log("Hello Sir");
// };
// abcd();

// //Fat-Arrow Function with one parameter
// const efgh = (val) => {
//   //single parameter(i.e. val) ma bracket hatauna milxa, (val) ko satta ma val matra lekhna ni milyo
//   console.log(val);
// };
// efgh(12);

// //CONCEPT-4 || ARROW FUNCTIONS WITH IMPLICIT RETURN
// const demofunc = () => 12; //implicit return vaneko {} bina function directly return garnu ho
// console.log(demofunc());
// console.log(demofunc() + 2);

// const abcd = () => "Prabesh";
// console.log("Hey " + abcd());

// //for object case
// const newfunc = () => ({ country: "Nepal", continent: "Asia" });
// console.log(newfunc());

//CONCEPT-5 || MAP FILTER
// map filter - duitai array ma chalxa, ra array ma kei perform garne ra "euta naya array return garne" duitai ko kaam ho

// var arr = [1, 2, 3, 4];
// // map - harek element ma kei gara ra naya array ma rakha
// // map ko vitra euta function aauxa, ra function ko vitra aauxa value
// const ans = arr.map((val) => val * 12); // implicit return vako xa, alternatively we can also write in normal function as : (val)=> {return val*12;}
// // map ko vitra return vayeko karan le garda nai elements naya array ma place hunxan
// console.log(ans);

//map ra filter ma euta matra farak xa, map le sabai elements lai return garxa, size kam hudaina; tara filter le array ko size kam garna sakxa

// var state = [11, 22, 3, 4, 5, 6, 9, 7, 12, 13, 14, 15, 33, 28];
// //add 5 to elements greater than 5, other elements remaining the same
// const ans = state.map((elem) => (elem > 5 ? elem + 5 : elem));
// console.log(ans);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ans = arr.filter((elem) => elem > 4);
// console.log(ans);

var arr = [
  { product: "Classic", price: 450000 },
  { product: "Honda", price: 120000 },
  { product: "Pulsar", price: 250000 },
  { product: "Splendor", price: 450000 },
  { product: "Electra", price: 475000 },
];
const ans = arr.filter((elem) => elem.price > 250000);
console.log(ans);
