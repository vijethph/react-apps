export async function getAllQuotes() {
  const response = await fetch(`https://quotable.io/quotes?limit=10`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  console.log(data);

  for (const key of data.results) {
    const quoteObj = {
      id: key._id,
      author: key.author,
      text: key.content,
      tags: key.tags.join(),
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`https://quotable.io/quotes/${quoteId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    author: data.author,
    text: data.content,
    tags: data.tags.join(),
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(requestData.commentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: "some comment added" };
}

export async function getAllComments(quoteId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key of data) {
    const commentObj = {
      id: key.id,
      text: key.name,
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
