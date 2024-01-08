import styles from './your-filter-styles.module.css'; // Update with your actual module styles
import { cn } from '../../../../../lib/utils';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export interface TypeCategory {
  label: string; // Update to be more generic
}

interface CategoryFilterProps {
  categories: TypeCategory[];
  paramName: string; // Added paramName prop to make it more flexible
}

const CategoryFilter = ({ categories, paramName }: CategoryFilterProps) => {
  const searchParams = useSearchParams();
  const categoryFilter: string = searchParams.get(paramName) || "";
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParam = useCallback(
    (name: string, value: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.set(name, value);
      if (currentParams === params.toString()) return;

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const deleteSearchParam = useCallback(
    (name: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.delete(name);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <div
          key={category?.label}
          className={`${styles.category} cursor-pointer ${
            categoryFilter !== "" &&
            categoryFilter !== category?.label &&
            "opacity-30"
          }`}
          onClick={() => setSearchParam(paramName, category?.label as string)}
        >
          {category?.label}
        </div>
      ))}
      {categoryFilter !== "" && (
        <div
          className={`${styles.resetCategory} cursor-pointer`}
          onClick={() => deleteSearchParam(paramName)}
        >
          Reset filter
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
