import React from "react";

const CreateBlog = () => {
  return (
    <div>
      <h2>Create new</h2>
      <form>
        <p>
          title: <input type="text" />
        </p>
        <p>
          author: <input type="text" />
        </p>

        <p>
          url: <input type="text" />
        </p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
