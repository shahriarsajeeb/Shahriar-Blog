import Image from "next/image";
import Link from "next/link";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

const BlogCard = ({ data }: { data: IProductsEntity }) => {
  return (
    <Link className="shadow p-3 my-2" href={`/article/${data.id}`}>
      <Image
        src={data?.attributeValues["blog-thumbnail"]?.value?.downloadLink}
        alt=""
        width={300}
        height={250}
        className="w-full min-h-[200px] h-min rounded-lg object-contain"
      />
      <h1 className="text-xl pt-1 font-medium">
        {data?.attributeValues["blog-title"]?.value?.header}
      </h1>
      <br />
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <Image
            src={data?.attributeValues["blog-user-avatar"]?.value.downloadLink}
            alt=""
            width={40}
            height={40}
            className="rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="pl-2">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data?.attributeValues["blog-user-name"]?.value.htmlValue,
              }}
            />
            <span>
              {data?.attributeValues["blog-created-at"]?.value?.formattedValue}
            </span>{" "}
            ∙
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
