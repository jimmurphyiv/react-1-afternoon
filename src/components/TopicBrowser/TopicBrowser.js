import React, { Component } from "react";
 
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterOblect from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render() {
        return(
            <div> 
                < EvenAndOdd />
                <FilterOblect />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>            
        )
    }
}