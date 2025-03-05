import { render, screen } from "@testing-library/react";
import { ArticleList } from "../components/ArticleList";

const mockArticles = [
  { id: 1, title: "Article 1", abstract: "Summary 1", url: "https://example.com/1",published_date: "2025-02-27"},
  { id: 2, title: "Article 2", abstract: "Summary 2", url: "https://example.com/2",published_date: "2025-03-27"},
];

describe("ArticleList Component", () => {
  it("renders articles correctly", () => {
    render(<ArticleList articles={mockArticles} />);

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Summary 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });
});
