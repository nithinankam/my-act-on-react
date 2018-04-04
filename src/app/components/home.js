import React from "react";

export class Home extends React.Component {
    render() {
        let content = "";
        if(true){
            content = <p>Hello!</p>
        }
        return(
            <div>
                <p>new component</p>
                { 2 + 2 }
                { content }
                { "hello" }
                { 5===2 ? 'yes' : 'no' }
            </div>
        )
    }
}