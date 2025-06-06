import React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";

// import productsApi from "apis/products";
import { PageLoader } from "components/commons";
import Header from "components/commons/Header";
import { useFetchProducts } from "hooks/reactQuery/useProductsApi";
import useDebounce from "hooks/useDebounce";
import { Search } from "neetoicons";
import { Pagination, Input, NoData } from "neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constants";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_INDEX);
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce(searchKey);
  const { t } = useTranslation();

  const productsParams = {
    searchTerm: debouncedSearchKey,
    page: currentPage,
    pageSize: DEFAULT_PAGE_SIZE,
  };

  const { data: { products = [], totalProductsCount } = {}, isLoading } =
    useFetchProducts(productsParams);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header
        shouldShowBackButton={false}
        title={t("title")}
        actionBlock={
          <Input
            placeholder="Search Products"
            prefix={<Search />}
            type="search"
            value={searchKey}
            onChange={event => {
              setSearchKey(event.target.value);
              setCurrentPage(DEFAULT_PAGE_INDEX);
            }}
          />
        }
      />
      {isEmpty(products) ? (
        <NoData className="h-full w-full" title="No products to show" />
      ) : (
        <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <ProductListItem key={product.slug} {...product} />
          ))}
        </div>
      )}
      <div className="mb-5 self-end">
        <Pagination
          count={totalProductsCount}
          navigate={page => setCurrentPage(page)}
          pageNo={currentPage || DEFAULT_PAGE_INDEX}
          pageSize={DEFAULT_PAGE_SIZE}
        />
      </div>
    </div>
  );
};

export default ProductList;
