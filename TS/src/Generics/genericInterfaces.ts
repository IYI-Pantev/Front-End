// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: T): Result<T> {
  return { data: url, error: null };
}
