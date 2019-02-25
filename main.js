


let rowCount = 1

myObj = [{name: "Joe", start: 2 , end: 9},
  {name: "bob", start: 8 , end: 12}
]
  myObj.forEach(function (person) {
    console.log(person.name, person.start, person.end);
        jQuery('<div/>',{
          id: `row-${rowCount}`,
          class: 'd-block border',
        }).appendTo('#scheduele-container')
        addHourDivs(rowCount)
        rowCount +=1
  })

  function addHourDivs(rowCount){
      for(let i=0; i<18; i++){
        jQuery('<div/>',{
          id: `row${rowCount}-cell${i}`,
          class: `d-inline-block generated-div border px-4 py-2`,
        }).appendTo(`#row-${rowCount}`)
      }
  }

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
