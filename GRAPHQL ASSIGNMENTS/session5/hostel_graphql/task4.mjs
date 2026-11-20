
const endpoint = "https://graphqlzero.almansi.me/api";

const query = `
  {
    __schema {
      queryType {
        fields {
          name
        }
      }
    }
  }
`;

async function main() {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    const result = await response.json();

    if (result.errors) {
      console.log(result.errors);
      return;
    }

    console.log("Root Query Fields:");

    result.data.__schema.queryType.fields.forEach((field) => {
      console.log(field.name);
    });

  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();
