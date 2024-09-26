interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();

    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;

    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
