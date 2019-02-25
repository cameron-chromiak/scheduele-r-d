


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
