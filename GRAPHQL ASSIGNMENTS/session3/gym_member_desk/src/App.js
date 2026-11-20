
import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";
import Task4 from "./task4";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>My Gym Member Desk</h1>
        <Task4 />
      </div>
    </ApolloProvider>
  );
}

export default App;

