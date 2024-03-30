import { getPages } from "@/actions/getPages";
import { logo } from "@/app/configs/constants";
import { ICONS } from "@/utils/icons";
import Link from "next/link";

const Footer = async () => {
  const res = await getPages();
  const data = res?.data?.find((i: PageType) => i?.pageUrl === "home")
    ?.attributeValues.en_US;

  return (
    <div>
      <div className="w-[90%] text-center md:text-left m-auto md:flex justify-between border-b mb-8">
        <div className="w-full md:w-[unset] text-center md:text-left">
          <Link href={"/"} className="flex items-center justify-center md:justify-start">
            <h5 className="text-3xl text-[#001858] font-[500] font-Poppins">
              {logo}
            </h5>
            <span className="text-blue-800 font-medium font-Poppins">
              .Blog
            </span>
          </Link>
          <span className="font-Poppins text-lg pt-8">
            Becodemy by Shahriar Sajeeb
          </span>
          <div className="flex items-center justify-center md:justify-start my-3 gap-3 text-xl">
            <Link href={"/"}>
              <span>{ICONS.medium}</span>
            </Link>
            <Link href={"/"}>
              <span>{ICONS.twitter}</span>
            </Link>
            <Link href={"/"}>
              <span>{ICONS.instagram}</span>
            </Link>
            <Link href={"/"}>
              <span>{ICONS.linkedin}</span>
            </Link>
          </div>
        </div>
        {data?.footer?.value?.map((i: footerValueType, index: number) => (
          <div key={index} className="pb-8">
            <h5 className="text-xl font-Poppins font-[500] pb-3">{i.header}</h5>
            <div dangerouslySetInnerHTML={{ __html: i?.htmlValue }} />
          </div>
        ))}
      </div>
      <p className="font-Poppins text-sm text-center pb-4">
        © 2024 copyright by Becodemy
      </p>
    </div>
  );
};

export default Footer;
