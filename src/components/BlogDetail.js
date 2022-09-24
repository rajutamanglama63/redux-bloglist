import React from "react";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const BlogInfo = useSelector((state) => state.blogDetail);
  return (
    <>
      {BlogInfo ? (
        <div>
          <h2>{BlogInfo.title}</h2>
          <p>{BlogInfo.url}</p>
          <p>likes: {BlogInfo.likes}</p>
          <p>added by {BlogInfo.author}</p>
        </div>
      ) : (
        <>Loading..</>
      )}
    </>
  );
};

export default BlogDetail;
