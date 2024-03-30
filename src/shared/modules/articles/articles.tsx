import { getBlogs } from "@/actions/getBlogs";
import BlogCard from "@/shared/components/cards/blog.card";

const Articles = async () => {
  const res = await getBlogs();
  const blogs = res?.data.items;
  return (
    <div className="pb-10 pt-5 md:pt-0 w-[90%] m-auto">
      <div className="flex items-center">
        <h5 className="text-3xl inline-block pr-3">Featured Articles</h5>
        <span className="w-7 h-[3px] mt-1 bg-[#000000c8]" />
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px] mb-12 border-0">
        {blogs.map((i: any, index: number) => (
          <>
            <BlogCard data={i} key={index} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Articles;
