import { getSingleBlog } from "@/actions/getSingleBlog";
import Image from "next/image";

const Page = async ({ params }: any) => {
  const articleId = params.id;
  const res = await getSingleBlog({ id: articleId });

  return (
    <>
      {res?.data && (
        <div className="w-full border-b mb-5">
          <div className="w-[80%] m-auto">
            <Image
              src={
                res?.data?.attributeValues?.en_US["blog-thumbnail"]?.value[0]
                  ?.downloadLink
              }
              alt=""
              width={500}
              height={500}
              className="w-full object-contain my-5"
            />
            <h1 className="text-4xl text-center">
              {res?.data.attributeValues.en_US["blog-title"].value[0].header}
            </h1>
            <br />
            <br />
            <div className="w-full flex justify-between items-center">
              <div className="flex">
                <Image
                  src={
                    res?.data?.attributeValues.en_US["blog-user-avatar"]
                      ?.value[0].downloadLink
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
                        res?.data?.attributeValues.en_US["blog-user-name"]
                          ?.value[0].htmlValue,
                    }}
                  />
                  <span>
                    {
                      res?.data?.attributeValues.en_US["blog-created-at"]?.value
                        ?.formattedValue
                    }
                  </span>{" "}
                  ∙
                </div>
              </div>
            </div>
            <br />
            <p
              dangerouslySetInnerHTML={{
                __html:
                  res?.data.attributeValues.en_US["blog-content"]?.value[0]
                    ?.htmlValue,
              }}
              className="w-full overflow-hidden"
            />
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
