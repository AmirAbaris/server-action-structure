import Link from "next/link";

type searchParams = "title";
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key in searchParams]: string | string[] | undefined;
  }>;
};

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  
  const newSearchParams = new URLSearchParams();
  newSearchParams.set("title", "new title");

  return (
    <div>
      Post {slug} {searchParams?.title}
      <Link
        href={`/${slug}?${newSearchParams.toString()}`}
        className="bg-red-600 p-2"
      >
        Edit title
      </Link>
    </div>
  );
}
