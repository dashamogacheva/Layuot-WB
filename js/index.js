import popupWork from "/popupWork";
import hideProductListWork from "/hideProductListWork";
import addMissingProductList from "/addMissingProductList";
import addProductList from "/addProductList";
import buttonDeliveryPopupWork from "/buttonDeliveryPopupWork";
import deleteProductsBtnWork from "/deleteProductsBtnWork";
import counterProductsWork from "/counterProductsWork";
import cartTotalCalculation from "/cartTotalCalculation";
import counterMissingProducts from "/counterMissingProducts";
import counterAvailableProducts from "/counterAvailableProducts";
import checkPayNowWork from "/checkPayNowWork";
import changePaymentCardWork from "/changePaymentCardWork";
import changeAddressDeliveryWork from "/changeAddressDeliveryWork";
import deleteDeliveryAddressWork from "/deleteDeliveryAddressWork";
import checkProductWork from "/checkProductWork";
import cartQuantityCountWork from "/cartQuantityCountWork";
import validationInputWork from "/validationInputWork";
document.addEventListener('DOMContentLoaded', () => {
    addProductList();
    addMissingProductList();
    popupWork();
    hideProductListWork();
    deleteProductsBtnWork();
    buttonDeliveryPopupWork();
    counterProductsWork();
    cartTotalCalculation();
    counterMissingProducts();
    counterAvailableProducts();
    checkPayNowWork();
    changePaymentCardWork();
    changeAddressDeliveryWork();
    deleteDeliveryAddressWork();
    checkProductWork();
    cartQuantityCountWork();
    validationInputWork();
});