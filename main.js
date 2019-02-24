// let newRowButton = document.getElementById('add-btn')
//
// newRowButton.addEventListener('click', insertNewRow)
//
// function insertNewRow(){
//   let table = $('#table')
//   let row = table.insertRow(-1)
//
//   for(let i=0; i<15; i++){
//     i = row.insertCell(i)
//   }
// }

// let cellId = 0
//
// $("#addTableRow").click(function() {
//   var row = $("<tr>");
//
//   for (let i = 0; i < 16; i++) {
//     if (i == 0) {
//       row.append($("<td>Name.value</td>"))
//     } else {
//       row.append($("<td id=" + cellId + " >x</td>"))
//       cellId += 1
//     }
//   }
//
//   $("#myTable tbody").append(row);
// });
//
//
// var table = document.getElementById("myTable");
// if (table != null) {
//   for (var i = 0; i < table.rows.length; i++) {
//     for (var j = 0; j < table.rows[i].cells.length; j++)
//       table.rows[i].cells[j].onclick = function() {
//           console.log('run');
//       getval(this);
//     };
//   }
// }
  let idCount = 1
$('#addRowBtn').click(function(){
  jQuery('<div/>', {
    id: `row-${idCount}`,
    class: 'generated-row'
}).appendTo('#scheduele-container');
  for(let i=0; i<17; i++){
    jQuery('<div/>',{
      id: `row-${idCount}-cell${i}`,
      class: 'd-inline-block border px-4 py-2 generated-div',
      text: '0000'
    }).appendTo(`#row-${idCount}`)
  }
  $()
  idCount +=1
})
