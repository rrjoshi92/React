import React from 'react'
import { render } from 'react-dom'
import { App } from "./componunts/app"
import "../style/css/style.scss"
import "../style/css/bootstrap.min.css"
import "../style/css/bootstrap-theme.min.css"


window.React = React;
render(
    //React.createElement(accountinfo, { name: "Lora Frye", gender: "female", balance:"$1,547.25"}),  
    //<Accountinfo name="Lora Frye" gender="female" balance="$1,547.25" />,
    <App/>,    
    document.getElementById('react-container')
)