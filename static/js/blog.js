// Blog post configuration
const POSTS_PER_PAGE = 6;

class BlogManager {
    constructor() {
        this.blogPosts = [];
        this.currentPage = 1;
        this.currentCategory = 'all';
        this.searchTerm = '';
        
        this.init();
    }

    async init() {
        await this.loadBlogPosts();
        this.setupEventListeners();
        this.renderCategories();
        this.renderPosts();
    }

    async loadBlogPosts() {
        const blogPosts = [
            { 
                title: 'Introduction to Thick Client Pentesting',
                filename: 'thickclient.md',
                image: 'static/media/blog/thickclient.png',
                category: 'Thick Client',
                date: '2024-11-10',
                author: 'Fazalu R.',
                readTime: '8 min read'
            },
            // Add more blog posts here
        ];

        for (const post of blogPosts) {
            try {
                const response = await fetch(`static/md/${post.filename}?t=${new Date().getTime()}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const markdown = await response.text();
                post.content = marked.parse(markdown);
                this.blogPosts.push(post);
            } catch (error) {
                console.error(`Error loading ${post.filename}:`, error);
            }
        }
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('blog-search');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.currentPage = 1;
            this.renderPosts();
        });

        // Category filtering
        document.getElementById('blog-categories').addEventListener('click', (e) => {
            if (e.target.classList.contains('category-tag')) {
                this.currentCategory = e.target.dataset.category;
                this.currentPage = 1;
                this.updateActiveCategory();
                this.renderPosts();
            }
        });
    }

    renderCategories() {
        const categories = ['all', ...new Set(this.blogPosts.map(post => post.category))];
        const categoriesContainer = document.getElementById('blog-categories');
        
        categories.forEach(category => {
            const categoryElement = document.createElement('button');
            categoryElement.classList.add('category-tag');
            categoryElement.dataset.category = category;
            categoryElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            if (category === 'all') categoryElement.classList.add('active');
            categoriesContainer.appendChild(categoryElement);
        });
    }

    updateActiveCategory() {
        const categories = document.querySelectorAll('.category-tag');
        categories.forEach(cat => {
            cat.classList.toggle('active', cat.dataset.category === this.currentCategory);
        });
    }

    getFilteredPosts() {
        return this.blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(this.searchTerm) ||
                                post.content.toLowerCase().includes(this.searchTerm);
            const matchesCategory = this.currentCategory === 'all' || post.category === this.currentCategory;
            return matchesSearch && matchesCategory;
        });
    }

    renderPosts() {
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = '';

        const filteredPosts = this.getFilteredPosts();
        const startIndex = (this.currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);

        postsToShow.forEach(post => {
            const postElement = this.createPostElement(post);
            blogContainer.appendChild(postElement);
        });

        this.renderPagination(filteredPosts.length);
    }

    createPostElement(post) {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-box');
        
        postElement.innerHTML = `
            <img class="blog-thumbnail" src="${post.image}" alt="${post.title}">
            <div class="blog-preview">
                <h2 class="blog-title">${post.title}</h2>
                <div class="blog-metadata">
                    <span class="author">${post.author}</span>
                    <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                    <span class="read-time">${post.readTime}</span>
                </div>
                <div class="blog-content">${this.truncateContent(post.content)}</div>
            </div>
        `;

        postElement.addEventListener('click', () => {
            // Implement blog post expansion or navigation
            const contentElement = postElement.querySelector('.blog-content');
            const isExpanded = contentElement.style.maxHeight;
            contentElement.style.maxHeight = isExpanded ? null : `${contentElement.scrollHeight}px`;
        });

        return postElement;
    }

    truncateContent(content) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const text = tempDiv.textContent;
        return text.length > 200 ? text.slice(0, 200) + '...' : text;
    }

    renderPagination(totalPosts) {
        const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('page-button');
            if (i === this.currentPage) button.classList.add('active');
            button.textContent = i;
            button.addEventListener('click', () => {
                this.currentPage = i;
                this.renderPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(button);
        }
    }
}

// Initialize blog
window.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});