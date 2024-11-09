async function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-container');
    
    
    const blogPosts = [
        { 
            title: 'Introduction to Thick Client Pentesting', 
            filename: 'thickclient.md',
            image: 'static/media/blog/thickclient.png' 
        },
    ];

    for (const post of blogPosts) {
        try {
            const response = await fetch(`blog_posts/${post.filename}?t=${new Date().getTime()}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const markdown = await response.text();
            const htmlContent = marked.parse(markdown);

            const postElement = document.createElement('div');
            postElement.classList.add('blog-box');

           
            const titleElement = document.createElement('div');
            titleElement.classList.add('blog-title');
            titleElement.innerText = post.title;

            const imgElement = document.createElement('img');
            imgElement.src = post.image; 
            imgElement.alt = 'Thumbnail'; 
            imgElement.classList.add('blog-thumbnail'); 

            
            imgElement.style.width = '50px !important'; 
            imgElement.style.height = '50px !important'; 
            imgElement.style.objectFit = 'contain';  

            
            postElement.appendChild(titleElement);
            postElement.appendChild(imgElement);

            
            const contentElement = document.createElement('div');
            contentElement.classList.add('blog-content');
            contentElement.innerHTML = htmlContent;

            
            postElement.appendChild(contentElement);

            
            postElement.onclick = () => {
                const isVisible = contentElement.style.display === 'block';
                contentElement.style.display = isVisible ? 'none' : 'block';
            };

            blogContainer.appendChild(postElement);
        } catch (error) {
            console.error(`Error loading ${post.filename}:`, error);
        }
    }
}

window.onload = loadBlogPosts;
