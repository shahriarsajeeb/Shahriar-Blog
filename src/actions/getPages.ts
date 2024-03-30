export const getPages = async () => {
  try {
    const params = new URLSearchParams({
      langCode: "en_US",
    });

    const response = await fetch(
      `${process.env.API_URL}/api/content/pages?${params}`,
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
