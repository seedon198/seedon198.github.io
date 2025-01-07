// Blog post configuration
const POSTS_PER_PAGE = 6;

class BlogManager {
    constructor() {
        this.blogPosts = [];
        this.currentPage = 1;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.expandedPost = null; 
        this.init();
        this.md = window.markdownit({
            html: true,
            linkify: true,
            typographer: true
        });
    }

    async init() {
        await this.loadBlogPosts();
        this.setupEventListeners();
        this.renderCategories();
        this.renderPosts();
        
        // Handle direct blog post URLs using hash
        const hash = window.location.hash;
        if (hash) {
            // Remove any trailing hyphens and properly decode the hash
            const postTitle = decodeURIComponent(hash.slice(1).replace(/-+$/, ''));
            // Find post by normalized title
            const post = this.blogPosts.find(p => this.normalizeTitle(p.title) === this.normalizeTitle(postTitle));
            if (post) {
                setTimeout(() => {
                    const postElement = document.querySelector(`.blog-box h2[data-title="${post.title}"]`)?.closest('.blog-box');
                    if (postElement) this.expandPost(postElement);
                }, 100);
            }
        }
    }

    async loadBlogPosts() {
        const blogPosts = [
            { 
                title: 'Thick Client Pentesting: Breaking Down the Big Boned Apps',
                filename: 'thickclient.md',
                image: 'static/media/img/thick-client.png',
                category: 'Thick Client',
                date: '2024-11-10',
                author: 'Fazalu R.',
                readTime: '8 min read'
            },
            { 
                title: 'Advanced Lock Picking Techniques',
                filename: 'advanced_lockpicking.md',
                image: 'static/media/img/advanced-lockpicking.png',
                category: 'Physical Security',
                date: '2024-11-11',
                author: 'Minhaj',
                readTime: '15 min read'
            },
            { 
                title: 'Flipper Zero',
                filename: 'flipper-zero.md',
                image: 'static/media/img/flipper.jpeg',
                category: 'Flipper Zero',
                date: '2024-11-22',
                author: 'Monica',
                readTime: '8 min read'
            },
            { 
                title: 'Momentum Firmware',
                filename: 'Momentum-Firmware.md',
                image: 'static/media/img/flipper.jpeg',
                category: 'Flipper Zero',
                date: '2024-11-22',
                author: 'Monica',
                readTime: '6 min read'
            },
            { 
                title: 'Introduction To WiFi Hacking',
                filename: 'wifi.md',
                image: 'static/media/img/wifi.png',
                category: 'Wifi Hacking',
                date: '2024-11-23',
                author: 'Vishnu Narayanan',
                readTime: '5 min read'
            },
            { 
                title: 'The Psychology of Entry',
                filename: 'psy.md',
                image: 'static/media/img/psy.png',
                category: 'Physical Security',
                date: '2024-12-03',
                author: 'Anon',
                readTime: '8 min read'
            },
            { 
                title: 'HAM Radio: When All Other Communication Fails, Hams Save the Day',
                filename: 'ham.md',
                image: 'static/media/img/ham.png',
                category: 'HAM Radio',
                date: '2024-12-08',
                author: 'Rageeth',
                readTime: '8 min read'
            },
            { 
                title: 'WiFi Security: How to Stop Hackers from Turning Your Network into Their Personal Playground',
                filename: 'secwifi.md',
                image: 'static/media/img/secwifi.png',
                category: 'Wireless Security',
                date: '2024-12-12',
                author: 'Rageeth',
                readTime: '5 min read'
            },
            { 
                title: 'Top Social Engineering Techniques Used by Cybercriminals: The Human Hacking Playbook',
                filename: 'social.md',
                image: 'static/media/img/social.png',
                category: 'Physical Security',
                date: '2024-12-12',
                author: 'Anon',
                readTime: '5 min read'
            },
            { 
                title: 'Deepfakes and AI in Social Engineering: Welcome to the Matrix of Madness',
                filename: 'ai.md',
                image: 'static/media/img/ai.png',
                category: 'Physical Security',
                date: '2024-12-13',
                author: 'Anon',
                readTime: '5 min read'
            },
            { 
                title: 'Flipper Zero: Your Pocket-Sized Cybersecurity Swiss Army Knife',
                filename: 'flip.md',
                image: 'static/media/img/flip.png',
                category: 'Flipper Zero',
                date: '2024-12-13',
                author: 'Secret69',
                readTime: '5 min read'
            },
            { 
                title: 'SCADA Systems: The Nervous System of Machines',
                filename: 'scada.md',
                image: 'static/media/img/scada.png',
                category: 'ICS',
                date: '2024-12-13',
                author: 'Rishabh Soni',
                readTime: '8 min read'
            },
            // Add more blog posts here
        ];

        for (const post of blogPosts) {
            try {
                const response = await fetch(`static/md/${post.filename}?t=${new Date().getTime()}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const markdown = await response.text();
                post.content = DOMPurify.sanitize(this.md.render(markdown));
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

        // Close expanded post when clicking outside
        document.addEventListener('click', (e) => {
            if (this.expandedPost && !e.target.closest('.blog-box')) {
                this.collapsePost(this.expandedPost);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const hash = window.location.hash;
            if (this.expandedPost) {
                this.collapsePost(this.expandedPost);
            }
            if (hash) {
                const postTitle = decodeURIComponent(hash.slice(1));
                const post = this.blogPosts.find(p => this.normalizeTitle(p.title) === this.normalizeTitle(postTitle));
                if (post) {
                    const postElement = document.querySelector(`.blog-box h2[data-title="${post.title}"]`)?.closest('.blog-box');
                    if (postElement) this.expandPost(postElement, true);
                }
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
                <h2 class="blog-title" data-title="${post.title}">${post.title}</h2>
                <div class="blog-metadata">
                    <span class="author">${post.author}</span>
                    <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                    <span class="read-time">${post.readTime}</span>
                </div>
                <div class="blog-excerpt">${this.truncateContent(post.content)}</div>
                <div class="blog-content" style="display: none;">
                    ${post.content}
                    <button class="close-button">Close</button>
                </div>
            </div>
        `;

        // Handle post expansion
        postElement.addEventListener('click', (e) => {
            // Don't trigger if clicking the close button
            if (e.target.classList.contains('close-button')) {
                e.stopPropagation();
                this.collapsePost(postElement);
                return;
            }

            // If another post is expanded, collapse it
            if (this.expandedPost && this.expandedPost !== postElement) {
                this.collapsePost(this.expandedPost);
            }

            const isExpanded = postElement.classList.contains('expanded');
            if (isExpanded) {
                this.collapsePost(postElement);
            } else {
                this.expandPost(postElement);
            }
        });

        return postElement;
    }

    expandPost(postElement, skipPushState = false) {
        const content = postElement.querySelector('.blog-content');
        const excerpt = postElement.querySelector('.blog-excerpt');
        const title = postElement.querySelector('.blog-title').getAttribute('data-title');
        
        // Store current grid position
        const rect = postElement.getBoundingClientRect();
        postElement.style.setProperty('--original-top', `${rect.top}px`);
        postElement.style.setProperty('--original-left', `${rect.left}px`);
        postElement.style.setProperty('--original-width', `${rect.width}px`);
        
        // Update URL using hash with normalized title
        const urlTitle = this.normalizeTitle(title);
        if (!skipPushState) {
            const newUrl = `${window.location.pathname}#${urlTitle}`;
            history.pushState({ postTitle: urlTitle }, '', newUrl);
        }
        
        // Expand the post
        postElement.classList.add('expanded');
        content.style.display = 'block';
        excerpt.style.display = 'none';
        
        // Apply syntax highlighting to code blocks
        if (window.Prism) {
            postElement.querySelectorAll('pre code').forEach((block) => {
                Prism.highlightElement(block);
            });
        }

        this.expandedPost = postElement;

        // Scroll to top of expanded post
        postElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    collapsePost(postElement) {
        const content = postElement.querySelector('.blog-content');
        const excerpt = postElement.querySelector('.blog-excerpt');
        
        // Remove hash from URL while preserving the base URL
        if (window.location.hash) {
            const newUrl = window.location.href.split('#')[0];
            history.pushState({}, '', newUrl);
        }
        
        postElement.classList.remove('expanded');
        content.style.display = 'none';
        excerpt.style.display = 'block';
        this.expandedPost = null;
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

    normalizeTitle(title) {
        return title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace special chars with hyphens
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    }
}

// Initialize blog
window.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});
