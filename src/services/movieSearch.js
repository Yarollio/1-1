import React, { Component } from "react";

export default class SearchMovie{

state = {
    stroka: '',
}

render () {
    
    return (

 <input class='searchInput' value={this.state.stroka}  type='text' placeholder="Что ищем?" ></input>




    )
}



}