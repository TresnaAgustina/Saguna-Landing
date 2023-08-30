import React, { useState } from "react";
import clsx from "clsx";
import { projectItems } from "@/data/local-data";
import Card from "@/components/Card";
import BgImage from "@/svg/BgImage";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function Portfolio() {
  // project Filter
  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "Dekstop App",
    "IoT",
    "AI",
  ]; // Daftar kategori

  const [selectedCategory, setSelectedCategory] = useState("All"); // Kategori yang dipilih
  const filteredProjects =
    selectedCategory === "All"
      ? projectItems
      : projectItems.filter((project) => project.category === selectedCategory);

  // dynamic routing
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
      <div className="container mx-auto my-32">
        {/* bg img */}
        <BgImage />
        {/* header */}
        <div className="relative w-full h-auto flex flex-col items-center z-20">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-4xl text-primary font-bold">Portfolio</h1>
            <p className="w-4/5 mx-auto text-lg font-normal text-p">
              Saguna Sigma Tech telah mengerjakan lebih dari 400 proyek yang
              berhasil selama 6 tahun di industri. Berikut ini beberapa hasil
              proyek terbaru kami
            </p>
          </div>

          {/* FilterButton */}
          <div
            className={clsx("container my-8 mx-auto relative z-20")}
            id="buttonGroup"
          >
            <label htmlFor="category" className="mr-2">
              Filter by Category:
            </label>
            <select
              id="category"
              className="border rounded px-2 py-1"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* project img */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-4">
          {filteredProjects.map((project, index) => {
            return (
              <Card
                key={index}
                img_link={project.cardImg}
                title={project.title}
                category={project.category}
                link={`/portfolio/${formatterSlug(project.title)}`}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
