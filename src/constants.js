export const swiggy_api = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6172666&lng=85.1018964&page_type=DESKTOP_WEB_LISTING";

export const swiggy_menu_api = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6172666&lng=85.1018964&submitAction=ENTER&restaurantId="

// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";


export const shimmer_card_unit = 10;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 5;

// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";