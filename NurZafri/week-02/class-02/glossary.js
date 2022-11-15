function GetGlossaryList() {
  let tableTag = document.querySelector("table");
  let table =
    "<table><tr><th>Term</th><th>Class</th><th>Definition</th><th>Tag</th></tr>";
  glossary.forEach((g) => {
    table += `<tr><td>${g.term}</td><td>${g.class}</td><td>${g.definition}</td><td>${g.tags}</td></tr>`;
  });
  table += "</table>";
  tableTag.innerHTML = table;

  let selectTag = document.querySelector("select");
  let select =
    '<select name="classes" id="classes" onchange="onChange()"><option value="">Choose a Class</option>';
  removeDupClass(glossary).forEach((c) => {
    select += `<option value="${c}">${c}</option>`;
  });
  select += "</select>";
  selectTag.innerHTML = select;

  let divTag = document.querySelector("div");
  let div = "";
  removeDupTag(glossary).forEach((t) => {
    div += `<input type="checkbox" id="tags" name="${t}" value="${t}" onchange="onChange()"><label for="${t}">${t}</label>`;
  });
  divTag.innerHTML = div;
}
GetGlossaryList();

function onChange() {
  var dropDownList, dropDownListVal, input, inputVal, table;

  let checkBox = document.querySelectorAll("div input");
  let arrCheckedVal = [];
  checkBox.forEach((c) => {
    if (c.checked) {
      arrCheckedVal.push(c.value.toUpperCase());
    }
  });

  input = document.getElementById("myInput");
  inputVal = input.value.toUpperCase();
  dropDownList = document.getElementById("gClass");
  dropDownListVal = dropDownList.value.toUpperCase();
  console.log(`arrCheckedVal:${arrCheckedVal}`);
  console.log(`Input:${inputVal}`);
  console.log(`DDList:${dropDownListVal}`);
  tableTag = document.querySelector("table");
  table =
    "<table><tr><th>Term</th><th>Class</th><th>Definition</th><th>Tag</th></tr>";
  table += inputClassFilter(glossary, inputVal, dropDownListVal, arrCheckedVal);
  table += "</table>";
  tableTag.innerHTML = table;
}

function removeDupClass(glossary) {
  let result = [];
  glossary.forEach((g) => {
    if (result.indexOf(g.class) === -1) result.push(g.class);
  });
  return result;
}

function removeDupTag(glossary) {
  let result = [];
  glossary.forEach((g) => {
    let arrTag = g.tags.toString().split(",");
    arrTag.forEach((tag) => {
      if (tag != "" && result.indexOf(tag) === -1) result.push(tag);
    });
  });
  return result;
}

function inputClassFilter(arr, inputVal, dropDownListVal, arrCheckedVal) {
  let table = "";
  console.log(`inputVal:${inputVal}`);
  console.log(`dropDownListVal:${dropDownListVal}`);
  arr
    .filter((g) => {
      return (
        g.term.toUpperCase().indexOf(inputVal) > -1 ||
        g.class.toString().toUpperCase().indexOf(inputVal) > -1 ||
        g.definition.toUpperCase().indexOf(inputVal) > -1 ||
        g.tags.toString().toUpperCase().indexOf(inputVal) > -1
      );
    })
    .filter((g) => {
      return g.class.toString().toUpperCase().indexOf(dropDownListVal) > -1;
    })
    .filter((g) => {
      return g.tags.toString().toUpperCase().includes(arrCheckedVal);
    })
    .forEach((g) => {
      table += `<tr><td>${g.term}</td><td>${g.class}</td><td>${g.definition}</td><td>${g.tags}</td>`;
    });
  return table;
}
