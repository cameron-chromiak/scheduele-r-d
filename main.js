


let rowCount = 1

myObj = [{name: "Jim", start: 1 , end: 9},
{name: "Bob", start: 2 , end: 9},
  {name: "Skeeter", start: 3 , end: 7},
  {name: "Jennylee", start: 8 , end: 12}
]

function main(){
  myObj.forEach(function (person) {
    // console.log(person.name, person.start, person.end);
        jQuery('<div/>',{
          id: `row-${rowCount}`,
          class: 'd-block',
        }).appendTo('#scheduele-container')
        addHourDivs(rowCount, person)
        rowCount +=1
  })
}


  function addHourDivs(rowCount, person){
    let start = person.start
    let end = person.end
    let rowDivs
      for(let i=0; i<18; i++){
        if(i == 0){
          jQuery('<div/>',{
            id: `row${rowCount}-cell${i}`,
            class: `d-inline-block generated-div border `,
            text: person.name
          }).appendTo(`#row-${rowCount}`)
        }else{
          jQuery('<div/>',{
            id: `row${rowCount}-cell${i}`,
            class: `d-inline-block generated-div border px-4 py-2`
          }).appendTo(`#row-${rowCount}`)
        }
      }
      changeCellColor(start, end)
  }


function changeCellColor(start, end){
  rowDivs = document.querySelectorAll(`#row${rowCount}-cell${start}`)
  rowDivs.forEach(cell =>{
    $(cell).toggleClass('bg-green')
  })
  rowDivs = document.querySelectorAll(`#row${rowCount}-cell${end}`)
  rowDivs.forEach(cell =>{
    $(cell).toggleClass('bg-green')
  })
}

main()









// let rows = document.querySelectorAll('.generated-div')
// let nameCells = []
// rows.forEach(cell =>{
//   // console.log(cell);
//   if ($(cell).attr('id').includes('cell0')){
//     nameCells.push(cell)







// let idCount = 1
//
// $('#addRowBtn').click(generateRow)
//
// function generateRow(){
//   var newName = document.getElementById("nameInput").value;
//   for(let i=0; i<17; i++){
//     jQuery('<div/>',{
//       id: `row-${idCount}-cell${i}`,
//       class: `d-inline-block border px-4 py-2 generated-div row${idCount}`,
//     }).appendTo('#scheduele-container')
//   }
//   document.getElementById(`row-${idCount}-cell0`).innerHTML = newName
//   jQuery('<br>').appendTo('#scheduele-container')
//   idCount +=1
// }
//
//
//
//
// $('#scheduele-container').on("click", "div", function(){
//   if($(this).attr('id').includes('cell0') ){
//     let thisRow = $(this).attr('id')[4]
//     thisRow = document.querySelectorAll(`.row${thisRow}`)
//     thisRow.forEach(item =>{
//       //need to remove br
//       item.remove()
//     })
//   }else{
//   $(this).toggleClass('bg-green')
// }
// });

////////
// let rowCount = 1
//
// myObj = [{name: "Joe", start: 2 , end: 9},
// {name: "Joe", start: 2 , end: 9},
//   {name: "bob", start: 8 , end: 12}
// ]
//   myObj.forEach(function (person) {
//     // console.log(person.name, person.start, person.end);
//         jQuery('<div/>',{
//           id: `row-${rowCount}`,
//           class: 'd-block border',
//         }).appendTo('#scheduele-container')
//         addHourDivs(rowCount)
//         rowCount +=1
//   })
//
//   function addHourDivs(rowCount){
//       for(let i=0; i<18; i++){
//         jQuery('<div/>',{
//           id: `row${rowCount}-cell${i}`,
//           class: `d-inline-block row generated-div border px-4 py-2`,
//         }).appendTo(`#row-${rowCount}`)
//       }
//       fillNames()
//   }
// function fillNames(){
//   let rows = document.querySelectorAll('.row')
