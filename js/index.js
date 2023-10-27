import popupWork from "./popupWork";
import hideProductListWork from "./hideProductListWork";
import addMissingProductList from "./addMissingProductList";
import addProductList from "./addProductList";
import buttonDeliveryPopupWork from "./buttonDeliveryPopupWork";
import deleteProductsBtnWork from "./deleteProductsBtnWork";
import counterProductsWork from "./counterProductsWork";
import cartTotalCalculation from "./cartTotalCalculation";
document.addEventListener('DOMContentLoaded', () => {
    addProductList();
    addMissingProductList();
    popupWork();
    hideProductListWork();
    deleteProductsBtnWork();
    buttonDeliveryPopupWork();
    counterProductsWork();
    cartTotalCalculation();
});