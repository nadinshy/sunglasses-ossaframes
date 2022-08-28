function Sunglasses({listSunglasses}) {
    return(
        <div className="products">
            {listSunglasses.map((item => {
                const {id, name, price, image} = item;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width='350px' height='350px' alt='glasses'/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}

        </div>
    )
}

export default Sunglasses;
