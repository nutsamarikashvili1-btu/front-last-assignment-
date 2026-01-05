"use strict";
import createArticle from "./createArticle.js";

let showBtn = document.querySelector(".show");
let getData = async () =>{
    let mainSection = document.querySelector(".main__section");
        
    try{
        let data;
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(response.ok){
            data = await response.json();
            // console.log(data)
        }
        for(let i = 0;i < data.length;i++){
            let{name,username,email} = data[i];
            // console.log(name,username,email);
            mainSection.innerHTML += createArticle(name,username,email);
            
        }
        console.log(mainSection)
    }

    catch{
        console.log("error");
    }
    finally{
        console.log("fetch attempt finished");
    }

}
// getData();

showBtn.addEventListener("click",getData);