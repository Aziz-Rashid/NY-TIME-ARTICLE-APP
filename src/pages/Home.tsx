import React, { useEffect, useState } from "react";
import { fetchNYTArticles } from "../services/nytService";
import { ArticleList } from "../components/ArticleList";

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<any>([]);
  const [articleDays, setArticleDays] = useState<string>("1");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchNYTArticles(Number(articleDays)).then(setArticles);
  }, []);

  const handleSearch = async () => {
    if(articleDays === "") {
        setArticleDays('1')
    }
    const fetchedArticles = await fetchNYTArticles(Number(articleDays === "" ? "1" : articleDays));
    setArticles(fetchedArticles);
  };

  // Filter articles based on search input
  const filteredArticles = articles.results?.filter((article: any) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="Article_Heading">NY Times Most Popular Articles</h1>
        <input
        className="Article_Input_Search"
        value={search}
        type="text"
        placeholder="Search Article..."
        onChange={(e) => setSearch(e.target.value)}
        />
     
      <div className="Input_Container">
        <input
          value={articleDays}
          className="Article_Input"
          type="number"
          placeholder="Type article days"
          onChange={(e) => setArticleDays(e.target.value)}
        />
        <button className="Article_Search_Btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ArticleList articles={filteredArticles || []} />
    </div>
  );
};

