import ProductList from './Productlist';


export default function Category({companydata}){
    return(<>
        <h1>Category Page!!</h1>
        <ProductList companydata={companydata}/>
        </>)
};