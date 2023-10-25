import popupWork from "./popupWork";
import hideProductListWork from "./hideProductListWork";
import addMissingProductList from "./addMissingProductList";
import addProductList from "./addProductList";

document.addEventListener('DOMContentLoaded', () => {
    addProductList();
    addMissingProductList();
    popupWork();
    hideProductListWork();
});