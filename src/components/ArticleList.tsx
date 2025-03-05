import React from "react";

interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
  published_date: string;
}

interface Props {
  articles: Article[];
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <ul className="Article_list">
      {articles?.length ? articles.map((article) => (
        <li key={article.id} className="Article">
          <p className="Article_date">{article.published_date}</p>
          <h3 className="Article_title">{article.title}</h3>
          <p className="Article_desc">{article.abstract}</p>
          <a className="Article_readMore" href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </li>
      )) : <h3 className="Article_title">No Data Found try 1 or 7.</h3>}
    </ul>
  );
};
