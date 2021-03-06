const cards = [
  {
    id: 1,
    name: "Kyu",
    company: "Google",
    theme: "light",
    title: "Software developer",
    email: "kyu@email.com",
    text: "go for it",
    fileName: "kyu",
    fileURL: "https://i.imgur.com/LIRHSsi.jpg",
  },
  {
    id: 2,
    name: "Chloe",
    company: "Samsung",
    theme: "dark",
    title: "Admin",
    email: "chloe@email.com",
    text: "let's go",
    fileName: "chloe",
    fileURL:
      "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
  },
  {
    id: 3,
    name: "Mike",
    company: "Coles",
    theme: "colorful",
    title: "Sales",
    email: "mike@email.com",
    text: "oh no~!",
    fileName: "mike",
    fileURL:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const functions = {
  findIndex: (input) => {
    const index = cards.findIndex((card) =>
      card.name.toLowerCase().includes(input.toLowerCase())
    );
    return index;
  },

  searchInputFromData: (input) => {
    const result = cards.filter((card) =>
      card.name.toLowerCase().includes(input.toLowerCase())
    ).map(card => card.name)
    return result.pop().toLowerCase()
  },
};

module.exports = functions;

