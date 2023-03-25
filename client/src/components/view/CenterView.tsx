import React from 'react';

export const CenterView =()=>{
    document.getElementById("books_list")!.scrollIntoView({block: "nearest", behavior: "smooth"})
}