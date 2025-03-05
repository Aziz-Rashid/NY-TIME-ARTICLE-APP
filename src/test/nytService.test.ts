// import { fetchNYTArticles } from "../services/nytService";

// describe("fetchNYTArticles", () => {
//   beforeEach(() => {
//     global.fetch = jest.fn();
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   it("should fetch articles successfully", async () => {
//     const mockResponse = { results: [{ title: "Sample Article" }] };

//     (global.fetch as jest.Mock).mockResolvedValue({
//       ok: true,
//       json: async () => mockResponse,
//     });

//     const data = await fetchNYTArticles(7);
//     expect(data).toEqual(mockResponse);
//   });

//   it("should return an empty array on API failure", async () => {
//     (global.fetch as jest.Mock).mockResolvedValue({
//       ok: false,
//       statusText: "Not Found",
//     });

//     const data = await fetchNYTArticles(7);
//     expect(data).toEqual([]); // Expect empty array instead of an error
//   });

//   it("should return an empty array on network error", async () => {
//     (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

//     const data = await fetchNYTArticles(7);
//     expect(data).toEqual([]); // Expect empty array on fetch failure
//   });
// });

import { fetchNYTArticles } from "../services/nytService";

describe("fetchNYTArticles", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.spyOn(console, "error").mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should fetch articles successfully", async () => {
    const mockResponse = { results: [{ title: "Sample Article" }] };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchNYTArticles(7);
    expect(data).toEqual(mockResponse);
  });

  it("should return an empty array on API failure", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: "Not Found",
    });

    const data = await fetchNYTArticles(7);
    expect(data).toEqual([]); // Expect empty array
  });

  it("should return an empty array on network error", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const data = await fetchNYTArticles(7);
    expect(data).toEqual([]); // Expect empty array
  });
});
