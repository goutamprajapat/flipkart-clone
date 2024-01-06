import { useEffect } from "react";
//import ProductService from "../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCatagoriesproductSaga,
  getAllProductSaga,
} from "../redux/Product.slice";
import { useSearchParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useMemo } from "react";

const AllProduct = () => {
  const dispatch = useDispatch();
  const [getallparams] = useSearchParams();
  const categories = getallparams.get("categoriesName");
  const { productList, allproduct } = useSelector((state) => state.products);
  const productListMemo = useMemo(
    () => <ProductList data={categories != null ? productList : allproduct} />,
    [allproduct, categories, productList]
  );
  useEffect(() => {
    if (categories != null || "") {
      dispatch(getAllCatagoriesproductSaga(categories));
    } else {
      dispatch(getAllProductSaga());
    }
    return () => categories;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, categories]);

  return (
    <>
      <div className="container-fluid container-md " style={{ marginTop: 60 }}>
        <div className="py-3">
          <h5>products -{categories != null ? categories : " All Products"}</h5>
        </div>
        <div className="row mb-3">
          {/* call product List to print  */}
          {productListMemo}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
