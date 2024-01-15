let productsContainer = document.querySelector(".productsContainer");
let cartContainer = document.querySelector(".cartContainer");

let productArray = [
    {id: 1, name: "Product-1", price:100},
    {id: 2, name: "Product-2", price:200},
    {id: 3, name: "Product-3", price:300},
    {id: 4, name: "Product-4", price:500},

];

window.onload= ()=>{
    productArray.forEach((prodductCart)=>{
        let proRow = document.createElement("div");
        proRow.classList.add("prodductsRow");  
       // console.log(proRow);
        proRow.innerHTML = `<div class="productName">${prodductCart.name}</div>
        <div class="prodductRupee">${prodductCart.price}</div>
        <div class="btn">
            <button class="innerBtn">-</button>
            <div class="productCount innerBtn">0</div>
            <button class="innerBtn">+</button>
        </div>`
        productsContainer.appendChild(proRow);
    });
};
//console.log(productsContainer);
 
function renderCart(e, count){
    e.target.parentNode.children[1].innerText = count;
    let prodectName = e.target.parentNode.parentNode.children[0].innerText;
    productArray.forEach((arr)=>{
        if(arr.name === prodectName){
            arr.count = count;
            //console.log(arr);
        }
    });
    let innerCartRow = document.querySelector(".innerCartRow");
    innerCartRow.innerHTML = "";
    let totalPrice = 0;
    productArray.forEach((arr)=>{
        if(arr.count > 0){
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("cartRow");
            cardContainer.innerHTML = `
            <div class="cartName">${arr.name}</div>
            <div class="cartRupee"><span>${arr.count}</span><span>x</span>${arr.price}</div>
        `
        totalPrice += arr.count*arr.price;
        innerCartRow.appendChild(cardContainer);
        console.log(cardContainer);
        }
    })
    let total = document.querySelector("#total");
    total.innerText = totalPrice;
}
productsContainer.addEventListener("click" , (e)=>{
    //console.log(e.target.innerText === "+");
    if(e.target.innerText === "+"){
        let countVal = parseInt(e.target.parentNode.children[1].innerText);
        countVal++;
        renderCart(e, countVal);
    }
    else if(e.target.innerText === "-"){

        let countVal = parseInt(e.target.parentNode.children[1].innerText);
        if(countVal>0){
            countVal--;
            renderCart(e, countVal);
        }
        else {
            alert("You hanen't add any prodduct yet");
            return;
        }
    }
});

//cart

