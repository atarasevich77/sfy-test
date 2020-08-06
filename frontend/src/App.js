import React from 'react';
import Table from "./components/Table";
import Paper from "@material-ui/core/Paper";
import {Container} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <Container style={{
            paddingTop: "5%",
            paddingBottom: "5%",
        }}>
            <Paper>
                <Table />
            </Paper>
        </Container>
    </div>
  );
}

export default App;
