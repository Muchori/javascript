const http = new easyHTTP()

/**
 * Get Posts
 */
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

/**
 * Get Single Post
 */
http.get(
  'https://jsonplaceholder.typicode.com/posts/100',
  function (err, post) {
    if (err) {
      console.log(err)
    } else {
      console.log(post)
    }
  }
)

/**
 * create data
 */
const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
}

/**
 * create post
 */
http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  function (err, post) {
    if (err) {
      console.log(err)
    } else {
      console.log(post)
    }
  }
)

/**
 * put/update post
 */

http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  data,
  function (err, post) {
    if (err) {
      console.log(err)
    } else {
      console.log(post)
    }
  }
)

/**
 * Delete Posts
 */
http.delete(
  'https://jsonplaceholder.typicode.com/posts/1',
  function (err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log(response)
    }
  }
)
