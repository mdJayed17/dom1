function purchase(product){
    var price=product.parentNode.children[2].innerText
    var title=product.parentNode.children[1].innerText

    const cart=document.getElementById("cart-container")

    const selectedItem=`${title} ${price}`
    console.log(selectedItem)

    const p=document.createElement("p")
    p.innerText=selectedItem
    cart.appendChild(p)
}