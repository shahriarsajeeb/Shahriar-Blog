import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <Link className="shadow p-3 my-2" href={`/article/${data.id}`}>
      <Image
        src={
          data?.attributeValues.en_US["blog-thumbnail"]?.value[0]?.downloadLink
        }
        alt=""
        width={300}
        height={250}
        className="w-full min-h-[200px] h-min rounded-lg object-contain"
      />
      <h1 className="text-xl pt-1 font-medium">
        {data?.attributeValues.en_US["blog-title"]?.value[0]?.header}
      </h1>
      <br />
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <Image
            src={
              data?.attributeValues.en_US["blog-user-avatar"]?.value[0]
                .downloadLink
            }
            alt=""
            width={40}
            height={40}
            className="rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="pl-2">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data?.attributeValues.en_US["blog-user-name"]?.value[0]
                    .htmlValue,
              }}
            />
            <span>
              {
                data?.attributeValues.en_US["blog-created-at"]?.value
                  ?.formattedValue
              }
            </span>
            {" "}∙
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
