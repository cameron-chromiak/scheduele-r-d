

let idCount = 1

$('#addRowBtn').click(generateRow)



function generateRow(){
  var newName = document.getElementById("nameInput").value;
  for(let i=0; i<17; i++){
    jQuery('<div/>',{
      id: `row-${idCount}-cell${i}`,
      class: `d-inline-block border px-4 py-2 generated-div row${idCount}`,
    }).appendTo('#scheduele-container')
  }
  document.getElementById(`row-${idCount}-cell0`).innerHTML = newName
  jQuery('<br>').appendTo('#scheduele-container')
  idCount +=1
}

//make first cell not clickable and delete on click



$('#scheduele-container').on("click", "div", function(){
  if($(this).attr('id').includes('0')){
    let thisRow = $(this).attr('id')[4]
    thisRow = document.querySelectorAll(`.row${thisRow}`)
    thisRow.forEach(item =>{
      item.remove()
    })
  }else{
  $(this).toggleClass('bg-green')
}
  // if not a time cell or cell 0 in any row
});
