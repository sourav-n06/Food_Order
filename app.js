import React from 'react';
import ReactDOM from 'react-dom';

// Core React
// const heading = React.createElement("div", {},[React.createElement("h1", {},"Namaste React "),React.createElement("h2", {},"This Course is Best for students")]);

//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading); 



// With JSX 
// React Element 
// const jsxHeading =(<h1 id = "101" className = "heading"> Namaste React From JSX </h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);



// React Functional Component 
// const ele = (<span> Hello World !! </span>);
// const jsxHeading =(<h1> {ele} Namaste React From JSX </h1>); // React Element
// // We Execute any JSX code and JS and React component in {} and Babel will understand it.

// const Title = () => (<h1> Namaste React Component Composition </h1>)

// const HeadingComponent = () => (<div className="heading">
//                                     <Title/> 
//                                     {jsxHeading} 
//                                     <h1> Namaste React from Functional Component</h1>
//                                 </div>)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Shimmer from './src/components/Shimmer';
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Home from './src/components/Home';
import ResMenu from './src/components/ResMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

    const AppLayout = () =>{
        return (<div className ="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>)
    }

    const appRouter = createBrowserRouter([
        {   path : "/",
            element : <AppLayout />,
            children : [
                {
                    path : "/",
                    element : <Body/>
                },
                {
                    path : "/home",
                    element :< Home/>
                },
                {
                    path : "/about",
                    element :< About/>
                },
                {
                    path : "/contact",
                    element :< Contact/>
                },
                {
                    path : "/restaurants/:resId",
                    element :< ResMenu/>
                }
            ],
            errorElement : <Error />
        },
        

    ])

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router ={appRouter} />);