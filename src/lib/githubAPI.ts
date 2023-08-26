export async function getUserStarredHotRepo (githubToken: string): Promise<boolean> {
  const result = await fetch("https://api.github.com/user/starred/khulnasoft-opensource/hot", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
    },
  });

  return result.status === 204;
}
