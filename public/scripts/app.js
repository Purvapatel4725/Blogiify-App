function confirmDelete(blogPostId) {
    let isConfirmed = confirm('Are you sure you want to delete this blog post?');
    if (isConfirmed) {
        window.location.href = '/blog/delete/' + blogPostId;
    }
}
