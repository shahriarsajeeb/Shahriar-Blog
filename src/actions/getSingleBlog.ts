export const getSingleBlog = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/content/products/${id}`,
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
