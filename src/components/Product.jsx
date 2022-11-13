//rfce

function Product(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    /*     <article className="Product">
      <h2>PRODUCTNAME</h2>
      <p>1213213,-</p>
      <img src="" alt="SOMENAME" />
      <button>Add to basket</button>
    </article> */
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price},-</p>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`}
        alt={props.data.productdisplayname}
      />
      {/*     <button onClick={props.addToCart()}>Add to basket</button> */}
      <button onClick={add}>Add to basket</button>
    </article>
  );
}
/*

{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}*/

export default Product;
