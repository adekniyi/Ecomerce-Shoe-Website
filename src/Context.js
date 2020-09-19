import React,{useState, useEffect} from 'react'
import {storeProducts,detailProduct} from './Data';



const ProductContext = React.createContext();


function ProductProvider(props) {
    const [product, setproduct] = useState([]);
    const [detail, setdetail] = useState(detailProduct);
    const [cart, setcart] = useState(storeProducts);
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalProduct, setmodalProduct] = useState(detailProduct);
    const [subTotal, setsubTotal] = useState(0);
    const [cartTax, setcartTax] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    useEffect(() => {
        setMethod();
        //setproduct();
    }, [])

    const setMethod=()=>
    {
        let temProduct = [];
        storeProducts.forEach(item => {
            const singleProduct = {...item};
            temProduct = [...temProduct, singleProduct];
        })
       return setproduct(temProduct);
    }

    const handleDetail = ()=>
    {
        console.log("this will handle the detail");
    }

    const getItem = id=>
    {
        const temProduct = product.find(item => item.id === id);
        return temProduct;
    }

    const addToCart = id =>
    {
       let tempProduct = [...product];
       const index = tempProduct.indexOf(getItem(id));
       const newProduct = tempProduct[index];
       newProduct.inCart = true;
       newProduct.count = 1;
       const price = newProduct.price;
       newProduct.total = price;


       return(
        setproduct(tempProduct),
        setcart([...cart,newProduct])
       )
    }

    const openModal = id=>
    {
        const temProduct = getItem(id);
        return(
            setmodalProduct(temProduct),
            setmodalOpen(true)
        )
    }

    const closeModal = id=>
    {
        const temProduct = getItem(id);
        
        return setmodalOpen(false)
    }

    const increment = id =>{

    }

    const decrement = id =>{
        
    }

    const removeItem = id =>{
        
    }
    const clearCart = id =>{
        
    }

    return (
        <ProductContext.Provider value={
            {
                product:product,
                detail:detail,
                cart: cart,
                modalOpen:modalOpen,
                modalProduct:modalProduct,
                subTotal:subTotal,
                cartTax:cartTax,
                cartTotal:cartTotal,
                handleDetail:handleDetail,
                addToCart:addToCart,
                openModal:openModal,
                closeModal:closeModal,
                increment:increment,
                decrement:decrement,
                removeItem:removeItem,
                clearCart:clearCart
            }
        }>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
