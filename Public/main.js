document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/blogposts')
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.getElementById('blog-posts');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                `;
                blogPostsContainer.appendChild(postElement);
            });
        });
});
