function Buttons({filteredSunglasses}) {
    return (
        <div className="glasses-buttons">
            <button className="change" onClick={() => filteredSunglasses("gucci")}>GUCCI</button>
            <button className="change" onClick={() => filteredSunglasses("versace")}>VERSACE</button>
            <button className="change" onClick={() => filteredSunglasses("dior")}>DIOR</button>
            <button className="change" onClick={() => filteredSunglasses("prada")}>PRADA</button>
           
        </div>
    )
}


export default Buttons;