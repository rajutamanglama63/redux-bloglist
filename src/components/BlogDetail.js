import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

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

      <Comment id={BlogInfo.id} />
    </>
  );
};

export default BlogDetail;
