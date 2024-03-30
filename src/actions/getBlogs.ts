export const getBlogs = async () => {
  try {
    const params = new URLSearchParams({
      offset: "0",
      limit: "6",
      langCode: "en_US",
      sortOrder: "ASC",
      sortKey: "id",
    });

    const response = await fetch(
      `${process.env.API_URL}/api/content/products/page/url/articles?${params}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-app-token": process.env.API_TOKEN!,
        },
      }
    );
    const data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
};
