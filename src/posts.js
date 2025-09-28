async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching posts", error.message);
  }
}
