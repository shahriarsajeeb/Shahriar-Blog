import { API } from "@/libs/api";
import BlogCard from "@/shared/components/cards/blog.card";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

const Articles = async () => {
  const { Products } = API();
  const blogs = await Products.getProducts("en_US");

  return (
    <div className="pb-10 pt-5 md:pt-0 w-[90%] m-auto">
      <div className="flex items-center">
        <h5 className="text-3xl inline-block pr-3">Featured Articles</h5>
        <span className="w-7 h-[3px] mt-1 bg-[#000000c8]" />
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px] mb-12 border-0">
        {blogs.map((i: IProductsEntity, index: number) => (
          <>
            <BlogCard data={i} key={index} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Articles;
