function __priceComma(price){
    return price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}