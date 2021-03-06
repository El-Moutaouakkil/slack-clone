import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <div className='app'>
            <Router>
                <>
                    <Header />
                    <AppBody>
                        <Sidebar />
                        <Switch>
                            <Route path='/' exact>
                                <Chat />
                            </Route>
                        </Switch>
                    </AppBody>
                </>
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    height: 100vh;
    display: flex;
`;
