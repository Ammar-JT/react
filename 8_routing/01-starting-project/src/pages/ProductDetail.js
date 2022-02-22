import { useParams } from "react-router-dom";
const ProductDetail = () => {
    //this hook is used to receive the url path parameters:
    const params = useParams();

    console.log(params.productId);

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail;