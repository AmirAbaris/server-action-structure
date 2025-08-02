type PageProps = {
  params: Promise<{ category: string[] }>;
  searchParams: Promise<{ brand?: string | string[] | undefined }>;
};

// the [...category] route captures all segments of the URL path as an array
// e.g., /shop/electronics/phones will result in category = ['electronics', 'phones']
export default async function Page(props: PageProps) {
  const { category } = await props.params;
  const brands = Array.isArray((await props.searchParams).brand)
    ? (await props.searchParams).brand
    : [(await props.searchParams).brand];

    console.log(category)

  return (
    <div>
      <h1>Category: {category.join(" / ")}</h1>
      <p>This page displays products in the category: {category.join(" > ")}</p>
      <div>
        Category: {category.join(" > ")} <br />
        Brands: {brands}
      </div>
    </div>
  );
}
