import HomePageScreen from "../pages/HomePage/HomePageScreen";
import OrderPageScreen from "../pages/OrderPage/OrderPageScreen";
import ProductsPageScreen from "../pages/ProductsPage/ProductsPageScreen";
import NotFoundPage from "../pages/PageNotFound/NotFoundScreen";

export const routes = [
  {
    path: "/",
    page: HomePageScreen,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPageScreen,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductsPageScreen,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
