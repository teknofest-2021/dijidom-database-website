export function tableSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
