const product = [
    {
        id: 0,
        image: 'image/ss-1.jpg',
        title: 'Tshirt',
        price: 10,
    },
    {
        id: 1,
        image: 'image/qq-2.jpg',
        title: 'Tshirt',
        price: 15,
    },
    {
        id: 2,
        image: 'image/aaa.jpg',
        title: 'Tshirt',
        price: 8,
    },
    {
        id: 3,
        image: 'image/aaaa.jpg',
        title: 'Tshirt',
        price: 15,
    },
    {
        id: 4,
        image: 'image/jj-4.jpg',
        title: 'Tshirt',
        price: 18,
    },
    {
        id: 5,
        image: 'image/nn.jpg',
        title: 'Tshirt',
        price: 25,
    },{
        id: 6,
        image: 'image/n.jpg',
        title: 'Tshirt',
        price: 30,
    },{
        id: 7,
        image: 'image/qqq.jpg',
        title: 'Tshirt',
        price: 20,
    },{
        id: 8,
        image: 'image/qq.jpg',
        title: 'Tshirt',
        price: 8,
    },
    {
        id: 9,
        image: 'image/nnn.jpg',
        title: 'Tshirt',
        price: 12,
    },  {
        id: 10,
        image: 'image/nnnn.jpg',
        title: 'Tshirt',
        price: 14,
    },  {
        id: 11,
        image: 'image/bbb.jpg',
        title: 'Tshirt',
        price: 15,
    },
    {
        id: 12,
        image: 'image/nnnnn.jpg',
        title: 'Tshirt',
        price: 18,
    },  {
        id: 13,
        image: 'image/w.jpg',
        title: 'Tshirt',
        price: 10,
    },  {
        id: 14,
        image: 'image/ww.jpg',
        title: 'Tshirt',
        price: 20,
    },  {
        id: 15,
        image: 'image/www.jpg',
        title: 'Tshirt',
        price: 8,
    },
    {
        id: 16,
        image: 'image/tt-3.jpg',
        title: 'Tshirt',
        price: 12,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}