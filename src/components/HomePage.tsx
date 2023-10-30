"use client";

import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/config";
import { ExtendedProduct } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";
import ProductsList from "./products/ProductsList";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface HomePageProps {
  initialProducts: ExtendedProduct[];
  categories?: string;
}

const HomePage: React.FC<HomePageProps> = ({ initialProducts, categories }) => {
  const fetchProduct = async ({ pageParam = 1 }) => {
    const query =
      `/api/products?limit=${INFINITE_SCROLL_PAGINATION_RESULTS}&page=${pageParam}` +
      (!!categories ? `&categories=${categories}` : "");

    const { data } = await axios.get(query);
    return data as ExtendedProduct[];
  };

  const { data } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
    initialPageParam: 0,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialData: { pages: [initialProducts], pageParams: [1] },
  });

  const products = data?.pages.flatMap((page) => page) ?? initialProducts;

  const renderProducts = () => {
    return products?.map((product) => {
      const { id, name, image, price, slug } = product;
      return (
        <ProductsList
          key={id}
          name={name}
          image={image}
          price={price}
          slug={slug}
        />
      );
    });
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-row md:gap-[15px] gap-3">
        <div className="flex flex-col w-full lg:w-[calc(70%-7.5px)]">
          <div className="relative w-full h-[55vh] lg:h-[calc(60vh+15px)] transition-transform duration-200 hover:scale-[1.01] ease-in-out  overflow-hidden">
            <span className="box-border block opacity-100 p-0 m-0 border-none absolute inset-0 ">
              <img
                src="https://i.ytimg.com/vi/jxKvLoj2vhE/maxresdefault.jpg"
                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover rounded-2xl "
                alt=""
              />
            </span>

            <div className="absolute h-full flex flex-col justify-between items-start p-[15px] w-full bg-gradient-to-t from-[rgba(0,0,0,.35)] via-transparent to-[rgba(0,212,255,0)] rounded-2xl">
              <div className="flex items-center justify-center">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-white mr-[10px] lg:w-[35px] lg:h-[35px]"></div>
                <span className="relative flex overflow-hidden text-white font-bold text-2xl">
                  KT8 Sky lines
                </span>
              </div>
              <div className="flex flex-col items-end w-full text-white text-2xl font-bold">
                <h2>KT8 X Sky Lines</h2>
                <p>October 23 - October 24</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-end mb-[15px] mt-[10px] lg:mt-[20px]">
            <Button variant="custom" className="text-extralight">
              View KT8 Sky lines
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[calc(30%-7.5px)]">
          <div className="flex gap-[10px] w-full lg:flex-col lg:gap-[15px]">
            <div className="relative w-[calc(50%-5px)] h-[30vh] lg:w-full transition-transform duration-200 hover:scale-[1.01] ease-in-out  overflow-hidden">
              <span className="box-border block opacity-100 p-0 m-0 border-none absolute inset-0">
                <img
                  src="https://giaybongro.vn/upload/images/1003510800/86/6693_1665834051.jpg"
                  className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover rounded-2xl"
                  alt=""
                />
              </span>

              <div className="absolute h-full flex flex-col justify-between items-start p-[15px] w-full bg-gradient-to-t from-[rgba(0,0,0,.35)] via-transparent to-[rgba(0,212,255,0)] rounded-2xl">
                <div className="flex items-center justify-center">
                  <div className="w-[25px] h-[25px] rounded-[50%] bg-white mr-[10px] lg:w-[35px] lg:h-[35px]" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="relative w-[calc(50%-5px)] h-[30vh] lg:w-full transition-transform duration-200 hover:scale-[1.01] ease-in-out  overflow-hidden">
              <span className="box-border block opacity-100 p-0 m-0 border-none absolute inset-0">
                <img
                  src="https://th.bing.com/th/id/OIP.hEK8RcxvfHsfsm4gH2m3IQHaHa?pid=ImgDet&rs=1"
                  className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover rounded-2xl"
                  alt=""
                />
              </span>

              <div className="absolute h-full flex flex-col justify-between items-start p-[15px] w-full bg-gradient-to-t from-[rgba(0,0,0,.35)] via-transparent to-[rgba(0,212,255,0)] rounded-2xl">
                <div className="flex items-center justify-center">
                  <div className="w-[25px] h-[25px] rounded-[50%] bg-white mr-[10px] lg:w-[35px] lg:h-[35px]" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-end mb-[15px] mt-[10px] lg:mt-[20px]">
            <Button variant="custom" className="text-extralight">
              View KT8 The bay 
            </Button>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="flex flex-row gap-4 text-xl">
          <span>Product</span>
          <span>|</span>
          <span>Sale</span>
        </div>

        <div className="relative py-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {renderProducts()}
      </div>
    </>
  );
};

export default HomePage;
