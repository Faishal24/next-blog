export default async function blogPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const { docs } = await response.json();
    return docs;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}