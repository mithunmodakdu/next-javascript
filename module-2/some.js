const team = [
  { name: "Alice", role: "Developer" },
  { name: "Bob", role: "Admin" },
  { name: "Charlie", role: "Developer" }
];

const hasAdmin = team.some(member => member.role === "Admin" );
console.log(hasAdmin)