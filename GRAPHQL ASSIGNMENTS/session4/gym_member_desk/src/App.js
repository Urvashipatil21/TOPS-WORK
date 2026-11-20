
import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";
import Task2 from "./task2";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Task2 />
      </div>
    </ApolloProvider>
  );
}

export default App;


