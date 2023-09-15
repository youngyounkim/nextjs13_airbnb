"use client";

import Container from "../Container";
import { IconType } from "react-icons";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";

type categoryType = {
  label: string;
  icon: IconType;
  description: string;
};

export const categories: categoryType[] = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is Modern",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((el) => (
          <CategoryBox
            key={el.label}
            icon={el.icon}
            label={el.label}
            selected={category === el.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
