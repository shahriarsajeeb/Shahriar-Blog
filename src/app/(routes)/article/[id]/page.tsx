import { API } from "@/libs/api";
import Image from "next/image";

const Page = async ({ params }: any) => {
  const { Products } = API();
  const articleId = params.id;
  const value = await Products.getProductById(articleId, "en_US");
  
  return (
    <>
      {value && (
        <div className="w-full border-b mb-5">
          <div className="w-[80%] m-auto">
            <Image
              src={
                value?.attributeValues["blog-thumbnail"]?.value?.downloadLink
              }
              alt=""
              width={500}
              height={500}
              className="w-full object-contain my-5"
            />
            <h1 className="text-4xl text-center">
              {value?.attributeValues["blog-title"].value.header}
            </h1>
            <br />
            <br />
            <div className="w-full flex justify-between items-center">
              <div className="flex">
                <Image
                  src={
                    value?.attributeValues["blog-user-avatar"]?.value
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
                        value?.attributeValues["blog-user-name"]?.value
                          .htmlValue,
                    }}
                  />
                  <span>
                    {
                      value?.attributeValues["blog-created-at"]?.value
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
                __html: value.attributeValues["blog-content"]?.value?.htmlValue,
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
