import React from 'react'
import "../styles/Index.scss";
import Container from "react-bootstrap/Container";
import { Link, useRouteMatch } from 'react-router-dom'
// const indexlayout = (<h1>Bb</h1>);
const Index = () => {
    let match = useRouteMatch();
    return (
        <Container className="Index">
            <h1>Index</h1>
        <section>
        <h2>A</h2> 
        <dl>
        <dt>accordion,layouts</dt>
        <dd><Link to={`${match.url}/docs`}>about 128</Link></dd>
        <dd><a href="">movie form,adding 13</a>1</dd>
        <dd><a href="">nesting, in tab 128,12</a>9</dd>
        </dl>
        <dl>
            <dt>Adapters, Ext.</dt>
            <dd><a href="">about 18</a></dd>
            <dd><a href="">using 18, 20</a></dd>
        </dl>
        <h2>Z</h2>
        <dl>
        <dt>z-index,layouts</dt>
        <dd><a href="">about 328</a></dd>
        <dd><a href="">absolute, fixed, relative 403</a>1</dd>
        <dd><a href="">nesting, childs 142,144</a></dd>
                <dd><a href="">using 180,200</a>0</dd>
        </dl> 
        </section>
        </Container>
    )
}

export default Index;