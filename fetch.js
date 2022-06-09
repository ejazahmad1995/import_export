




async function getData(){

    

    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

    let res= await fetch(url);

    let data= await res.json();

    console.log(data.meals);
    
    
    return data.meals;
    
}

async function main(){

    let data = await getData();
    console.log(data);

    append(data);
};

function append(data){

    let container=document.getElementById("results");

    container.innerHTML=null;

    data.forEach(function(ele,i){
        let div = document.createElement("div");

        
        let img=document.createElement("img");
        img.src=ele.strMealThumb
        // img.addEventListener("click",function(){
        //     fooddetails(ele)
        // })

        // let btn = document.createElement("button");
        // btn.innerText="Delete";

        // btn.addEventListener("click",function(){
        //     deletedetails(ele,i);
        // })

        let h2 = document.createElement("h2");
        h2.innerText=ele.strMeal;
        console.log(h2);

        div.append(img,h2);

        container.append(div);


        

    });
    
}

// let fooddetails = (ele,i)=>{

//     let container = document.getElementById("results");

//     container.innerHTML = null;


//     let img = document.createElement("img");
//     img.src=ele.strMealThumb;

//     let h2 = document.createElement("h2");
//         h2.innerText=ele.strMeal;


    

//     let div = document.createElement("div");

//     div.append(img,h2);
//     container.append(div);



    
// }

// // let deletedetails = () =>{
//     data.splice(i,1);
// }
