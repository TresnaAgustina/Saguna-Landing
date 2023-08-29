import React from "react";
import { useRouter } from "next/router";
import { projectItems } from "@/data/local-data";
import Card from "@/components/Card";
import Navbar from "@/components/layouts/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = projectItems.find(
    (project) => project.title.toLowerCase().replace(/\s/g, "-") === id
  );

  if (!selectedProject) {
    return <div></div>;
  }

  // if project 1 is displayed, hide project 1 from other projects
  const otherProjects = projectItems.filter(
    (project) => project.title !== selectedProject.title
  );

  const formatterSlug = (title) => {
    return title ? title?.toLowerCase().replace(/\s/g, "-") : "";
  };
  const links = [
    { href: "/account-settings", label: "Account settings" },
    { href: "/support", label: "Support" },
    { href: "/license", label: "License" },
    { href: "/sign-out", label: "Sign out" },
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="section mt-32 md:mt-46 w-[90%] m-auto">
          <div className="">
            <h1 className="text-2xl md:text-4xl text-primary font-bold bg-none md:w-4/6 capitalize">
              {selectedProject.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:gap-12 gap-6 md:gap-0 mt-4 items-center">
              {/* single */}
              <div className="flex flex-col">
                <h5 className="text-text text-md font-medium">
                  Kategori Projek
                </h5>
                <p className="text-p text-base font-regular">
                  {selectedProject.category}
                </p>
              </div>

              <div className="flex flex-col">
                <h5 className="text-text text-md font-medium">Klien</h5>
                <p className="text-p text-base font-regular">
                  {selectedProject.client}
                </p>
              </div>

              <div className="flex flex-col">
                <h5 className="text-text text-md font-medium">Tahun</h5>
                <p className="text-p text-base font-regular">
                  {selectedProject.year}
                </p>
              </div>

              <div className="text-text text-md font-medium hover:underline hover:underline-offset-3 hover:text-primary mt-6 lg:mt-0">
                <Link href={selectedProject.projectUrl} target="blank">
                  Lihat Projek
                  <i className="fa-solid fa-up-right-from-square ml-2 text-primary"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative w-full h-auto md:h-[26rem] flex items-center overflow-hidden rounded-md group-hover:cursor-pointer imgContainer">
            <Image
              className="relative z-30 m-auto w-auto h-full py-4 hover:scale-[1.3] duration-200 projectImage"
              src={selectedProject.projectImg}
              alt=""
              width={500}
              height={500}
            />
            <Image
              src="/assets/img/ImgContainerBg.svg"
              className="absolute w-full object-cover z-0"
              alt=""
              srcSet=""
              layout="fill"
            />
          </div>
          <p className="text-lg text-p font-regular mt-2  px-4 sm:px-0">
            {selectedProject.desc}
          </p>
        </div>

        <div class="flex flex-col w-full m-auto">
          <h2 class="text-text text-2xl font-semibold mt-14">Projek Lain</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-28">
            {otherProjects.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  category={item.category}
                  img_link={item.cardImg}
                  link={`/portfolio/${formatterSlug(item.title)}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
