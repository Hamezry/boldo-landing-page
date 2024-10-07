import { useState, useRef } from "react";
import { products } from "../dummyData";

const BlogContainer = () => {
  const totalBlogsToDisplay = 9;
  const blogsPerPage = 3;

  const displayedBlogs = Array.from(
    { length: totalBlogsToDisplay },
    (_, index) => products[index % products.length]
  );

  const [currentVisibleCount, setCurrentVisibleCount] = useState(blogsPerPage);

  const maxVisibleCount = Math.min(
    currentVisibleCount + blogsPerPage,
    displayedBlogs.length
  );

  const isAllBlogssVisible = currentVisibleCount === maxVisibleCount;
  const firstBlogRef = useRef(null);

  const handleToggleBlogsVisibility = () => {
    if (isAllBlogssVisible) {
      setCurrentVisibleCount(blogsPerPage);
      if (firstBlogRef.current) {
        firstBlogRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setCurrentVisibleCount(maxVisibleCount);
    }
  };

  return (
    <section id="blog" className="px-5 sm:px-10 md:px-14" ref={firstBlogRef}>
      <BlogHeaderSection />
      <div className="md:container mx-auto mt-14 grid ss:grid-cols-2 [@media(min-width:825px)]:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center">
        {displayedBlogs.slice(0, currentVisibleCount).map((product) => (
          <BlogPostCard key={product.id} product={product} />
        ))}
      </div>
      <LoadMoreButton
        onToggleVisibility={handleToggleBlogsVisibility}
        isAllVisible={isAllBlogssVisible}
      />
    </section>
  );
};

export default BlogContainer;

const BlogHeaderSection = () => (
  <div className="mb-5 space-y-3 text-center sm:mb-10">
    <p className="sm:text-lg opacity-60">Our Blog</p>
    <h1 className="max-w-4xl mx-auto leading-9 sm:leading-[50px] md:leading-[60px] tracking-tight text-gray-900 text-[26px] xs:text-[36px] sm:text-[40px] md:text-5xl">
      Value proposition accelerator product management venture
    </h1>
  </div>
);

const BlogPostCard = ({ product }) => (
  <div className="flex flex-col justify-between rounded-xl transition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500">
    <div>
      <img src={product.imgProduct} className="h-auto" alt="" />
      <div className="flex space-x-2 mt-5 mb-2.5">
        <h4 className="font-bold">{product.type}</h4>
        <p className="text-gray-500">{product.date}</p>
      </div>
      <p className="max-w-[300px] text-lg">{product.content}</p>
    </div>
    <div className="mt-6 flex items-center space-x-3">
      <img src={product.img} alt="" />
      <p>{product.person}</p>
    </div>
  </div>
);

const LoadMoreButton = ({ onToggleVisibility, isAllVisible }) => (
  <div className="container mx-auto mt-12 mb-20 flex justify-center">
    <button
      onClick={onToggleVisibility}
      className="ring-2 ring-[#0A2640] rounded-full px-7 py-1.5 font-semibold text-[#0A2640] hover:bg-[#0A2640] hover:text-white duration-300"
    >
      {isAllVisible ? "Show Less" : "Load More"}
    </button>
  </div>
);

