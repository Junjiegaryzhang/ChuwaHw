//Q1:
const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

const tableContainer = document.querySelector(".tableContainer");
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

table.className = "table";
tableContainer.append(table);

const newTable = tableInfo.map((x, index) => {
  if (index === 0) {
    const tableHeadRow = document.createElement("tr");

    table.append(tableHead);
    tableHead.append(tableHeadRow);

    Object.keys(x).map((th) => {
      const tableHeader = document.createElement("th");
      tableHeader.textContent = th;
      tableHeadRow.append(tableHeader);
    });

    table.append(tableBody);
  } else {
    const tableBodyRow = document.createElement("tr");

    tableBody.append(tableBodyRow);

    Object.values(x).map((td) => {
      const tableData = document.createElement("td");
      tableData.textContent = td;
      tableBodyRow.append(tableData);
    });
  }
});

//Q2:
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const orderListContainer = document.querySelector(".orderListContainer");
const orderList = document.createElement("ol");
const unorderList = document.createElement("ul");
const orderListHeader = document.createElement("h3");
const unorderListHeader = document.createElement("h3");

orderListContainer.append(orderListHeader);
orderListHeader.textContent = "An ordered technonlogies list:";
orderListContainer.append(orderList);

const newOrderList = list.map((x) => {
  const li = document.createElement("li");
  li.textContent = x;
  orderList.append(li);
});

orderListContainer.append(unorderListHeader);
unorderListHeader.textContent = "An unordered technonlogies list:";
orderListContainer.append(unorderList);

const newUnorderList = list.map((x) => {
  const li = document.createElement("li");
  li.textContent = x;
  unorderList.append(li);
});

//Q3:
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const dropdownListContainer = document.querySelector(".dropdownListContainer");
const dropdownListLabel = document.createElement("lable");
const dropDownListSelect = document.createElement("select");

dropdownListContainer.append(dropdownListLabel);
dropdownListLabel.setAttribute("for", "city");

dropdownListContainer.append(dropDownListSelect);
dropDownListSelect.id = "city";
dropDownListSelect.name = "city";

const newDropDownList = dropDownList.map((x) => {
  const option = document.createElement("option");
  option.textContent = x.content;
  option.value = x.value;
  dropDownListSelect.append(option);
});
