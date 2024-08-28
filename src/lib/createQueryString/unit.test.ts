import { createQueryString } from ".";

describe("Create query string", () => {
  it("should return query string from provided search params", () => {
    const searchParams = { page: "1", take: "10", search: "Oslo" };

    expect(createQueryString(searchParams)).to.equal(
      "page=1&take=10&search=Oslo",
    );
  });
});
