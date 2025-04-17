import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SEOView = ({ content }) => {
  return (
    <div className="prose max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default SEOView;
