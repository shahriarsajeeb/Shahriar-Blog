import { getPages } from "@/actions/getPages";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
  const res = await getPages();
  const data = res?.data.find((i: PageType) => i.pageUrl === "home")
    ?.attributeValues.en_US;
  return (
    <div>
      {data && (
        <div className="md:w-[90%] w-[95%] m-auto md:h-[90vh] md:flex items-center">
          <div className="md:w-[50%] w-full">
            <h1
              className="pt-5 md:pt-0 text-3xl md:text-6xl 2xl:text-7xl font-semibold font-Poppins"
              dangerouslySetInnerHTML={{
                __html: data?.title?.value[0]?.htmlValue,
              }}
            />
            <br />
            <p
              className="pl-1"
              dangerouslySetInnerHTML={{
                __html: data?.subtitle?.value[0]?.htmlValue,
              }}
            />
            <br />
            <Button
              as={Link}
              href="/articles"
              className="rounded px-4 bg-[#6246ea] text-white text-lg"
            >
              <span className="text-2xl">{ICONS.update}</span>
              Latest Articles
            </Button>
          </div>
          <div className="md:w-[50%] w-full flex justify-center">
            <Image
              src={data?.banner?.value[0].downloadLink}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
