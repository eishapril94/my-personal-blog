const API_BASE_URL = (typeof APP_CONFIG !== 'undefined') ? APP_CONFIG.API_BASE_URL : 'http://localhost:1337';

const demoPosts = [
    {
        id: 1,
        title: "The Future of Community Health Programs in Rural Indonesia",
        slug: "future-community-health-rural-indonesia",
        excerpt: "Exploring innovative approaches to delivering public health interventions in underserved communities, from mobile clinics to telemedicine solutions.",
        content: "<p>Community health programs in rural Indonesia face unique challenges that require innovative solutions. From geographic barriers to limited healthcare infrastructure, the path to equitable health outcomes demands creative thinking and evidence-based strategies.</p><h2>The Current Landscape</h2><p>Rural communities across Indonesia continue to experience disparities in healthcare access. Despite national health insurance coverage, many residents in remote areas struggle to reach healthcare facilities.</p><h2>Mobile Health Solutions</h2><p>One promising approach involves mobile health clinics that bring essential services directly to communities. These programs have shown remarkable success in increasing vaccination rates and prenatal care access.</p><blockquote>\"The most effective health interventions are those designed with the community, not just for the community.\"</blockquote><h2>Looking Forward</h2><p>As we move toward 2030, integrating technology with traditional community health worker models will be crucial for achieving universal health coverage goals.</p>",
        category: "Community Health",
        tags: ["Rural Health", "Community Programs", "Indonesia"],
        readTime: 8,
        publishedAt: "2026-05-15T08:00:00.000Z",
        featured: true,
        coverImage: {
            url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    },
    {
        id: 2,
        title: "Mastering Biostatistics: A Guide for Public Health Students",
        slug: "mastering-biostatistics-guide",
        excerpt: "A comprehensive guide to understanding statistical methods in public health research, from basic concepts to advanced analytical techniques.",
        content: "<p>Biostatistics forms the backbone of evidence-based public health practice. Understanding statistical methods is essential for interpreting research findings and making informed decisions.</p><h2>Foundational Concepts</h2><p>Before diving into complex analyses, it's crucial to understand basic statistical concepts: measures of central tendency, variability, and probability distributions.</p><h2>Regression Analysis</h2><p>Multiple regression analysis allows researchers to examine relationships between multiple independent variables and a dependent variable while controlling for confounding factors.</p>",
        category: "Education",
        tags: ["Biostatistics", "Research Methods", "Student Guide"],
        readTime: 12,
        publishedAt: "2026-04-20T10:00:00.000Z",
        featured: false,
        coverImage: {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    },
    {
        id: 3,
        title: "Citation Management with Mendeley: Best Practices",
        slug: "citation-management-mendeley",
        excerpt: "Learn how to efficiently manage your research references using Mendeley, from importing sources to generating bibliographies automatically.",
        content: "<p>Effective citation management is crucial for academic success. Mendeley offers a powerful suite of tools for organizing, annotating, and citing research sources.</p><h2>Getting Started</h2><p>Download and install Mendeley Desktop, then create your free account. The web importer browser extension makes saving sources from databases seamless.</p><h2>Organizing Your Library</h2><p>Create folders for different projects, use tags for cross-cutting themes, and leverage the built-in PDF annotation tools for efficient literature review.</p>",
        category: "Academic Writing",
        tags: ["Mendeley", "Research Tools", "Academic Writing"],
        readTime: 6,
        publishedAt: "2026-03-10T14:00:00.000Z",
        featured: false,
        coverImage: {
            url: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    },
    {
        id: 4,
        title: "Epidemiological Surveillance in the Digital Age",
        slug: "epidemiological-surveillance-digital-age",
        excerpt: "How digital tools and data analytics are transforming disease surveillance and outbreak response in modern public health practice.",
        content: "<p>The digital revolution has fundamentally changed how we monitor and respond to disease outbreaks. From real-time data dashboards to AI-powered prediction models, technology is reshaping epidemiological surveillance.</p><h2>Digital Surveillance Tools</h2><p>Modern surveillance systems leverage multiple data sources including electronic health records, social media monitoring, and environmental sensors.</p><h2>Challenges and Opportunities</h2><p>While digital surveillance offers unprecedented speed and scale, it also raises important questions about data privacy, algorithmic bias, and health equity.</p>",
        category: "Research",
        tags: ["Epidemiology", "Digital Health", "Surveillance"],
        readTime: 10,
        publishedAt: "2026-02-28T09:00:00.000Z",
        featured: false,
        coverImage: {
            url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    },
    {
        id: 5,
        title: "Building Effective Health Education Curricula",
        slug: "building-health-education-curricula",
        excerpt: "Strategies for designing health education programs that engage learners and produce lasting behavioral change in communities.",
        content: "<p>Effective health education goes beyond information delivery. It requires understanding learning theories, cultural contexts, and behavior change models.</p><h2>Adult Learning Principles</h2><p>Andragogy emphasizes self-directed learning, practical application, and respect for learners' prior experience. These principles are essential for community health education.</p><h2>Interactive Methods</h2><p>Role-playing, case studies, and participatory activities increase engagement and knowledge retention compared to traditional lecture-based approaches.</p>",
        category: "Education",
        tags: ["Health Education", "Curriculum Design", "Community"],
        readTime: 7,
        publishedAt: "2026-01-15T11:00:00.000Z",
        featured: false,
        coverImage: {
            url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    },
    {
        id: 6,
        title: "Data Visualization for Public Health Communication",
        slug: "data-visualization-public-health",
        excerpt: "Techniques for creating compelling data visualizations that effectively communicate public health findings to diverse audiences.",
        content: "<p>Data visualization transforms complex health data into accessible insights. The right visualization can make the difference between data that informs and data that overwhelms.</p><h2>Choosing the Right Chart</h2><p>Bar charts for comparisons, line charts for trends, maps for geographic data, and infographics for comprehensive storytelling—each serves a specific communication purpose.</p><h2>Accessibility Considerations</h2><p>Color blindness affects approximately 8% of men and 0.5% of women. Using patterns, labels, and accessible color palettes ensures your visualizations reach everyone.</p>",
        category: "Research",
        tags: ["Data Viz", "Communication", "Public Health"],
        readTime: 9,
        publishedAt: "2025-12-05T13:00:00.000Z",
        featured: false,
        coverImage: {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        author: {
            name: "Apri Yulda",
            avatar: {
                url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            }
        }
    }
];

async function fetchBlogPosts() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/posts?populate=*&sort[0]=publishedAt:desc`);
        if (!response.ok) throw new Error('API not available');
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.log('Using demo data (Strapi not connected):', error.message);
        return demoPosts;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getImageUrl(post) {
    if (post.coverImage?.url) {
        const url = post.coverImage.url;
        return url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
    }
    return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop';
}

function getAuthorInfo(post) {
    const defaultAuthor = {
        name: 'Apri Yulda',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
    };

    if (post.author) {
        const avatarUrl = post.author.avatar?.url;
        return {
            name: post.author.name || defaultAuthor.name,
            avatar: avatarUrl
                ? (avatarUrl.startsWith('http') ? avatarUrl : `${API_BASE_URL}${avatarUrl}`)
                : defaultAuthor.avatar
        };
    }
    return defaultAuthor;
}

function renderFeaturedPost(post) {
    const author = getAuthorInfo(post);
    const imageUrl = getImageUrl(post);

    return `
        <div class="featured-post-card" data-aos="fade-up">
            <div class="featured-image-wrapper">
                <img src="${imageUrl}" alt="${post.title}" class="featured-image" loading="lazy">
                <div class="featured-image-overlay"></div>
                <span class="featured-badge">⭐ Featured</span>
            </div>
            <div class="featured-content">
                <div class="featured-meta">
                    <span class="featured-category">${post.category || 'General'}</span>
                    <span class="featured-date">📅 ${formatDate(post.publishedAt)}</span>
                    <span class="featured-read-time">⏱️ ${post.readTime || 5} min read</span>
                </div>
                <h2>${post.title}</h2>
                <p class="featured-excerpt">${post.excerpt}</p>
                <div class="featured-author">
                    <img src="${author.avatar}" alt="${author.name}">
                    <span class="featured-author-name">${author.name}</span>
                </div>
                <a href="post.html?slug=${post.slug}" class="featured-read-more">
                    Read Full Article 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

function renderBlogCard(post, index) {
    const author = getAuthorInfo(post);
    const imageUrl = getImageUrl(post);
    const delay = (index % 3) * 100 + 100;

    return `
        <article class="blog-card" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="blog-card-image-wrapper">
                <img src="${imageUrl}" alt="${post.title}" class="blog-card-image" loading="lazy">
                <div class="blog-card-image-overlay"></div>
                <span class="blog-card-category">${post.category || 'General'}</span>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span>📅 ${formatDate(post.publishedAt)}</span>
                    <span>⏱️ ${post.readTime || 5} min</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <div class="blog-card-author">
                        <img src="${author.avatar}" alt="${author.name}">
                        <span class="blog-card-author-name">${author.name}</span>
                    </div>
                    <a href="post.html?slug=${post.slug}" class="blog-card-read-more">
                        Read →
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderSkeletonCards(count = 6) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += `
            <div class="skeleton-card">
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text short"></div>
                </div>
            </div>
        `;
    }
    return html;
}

function filterPosts(posts, category, searchQuery) {
    return posts.filter(post => {
        const matchesCategory = !category || category === 'All' || post.category === category;
        const matchesSearch = !searchQuery || 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.tags && post.tags.some(tag => 
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        return matchesCategory && matchesSearch;
    });
}

function getCategories(posts) {
    const categories = new Set(['All']);
    posts.forEach(post => {
        if (post.category) categories.add(post.category);
    });
    return Array.from(categories);
}

function renderFilterButtons(categories, activeCategory = 'All') {
    const container = document.getElementById('blog-filter');
    if (!container) return;

    container.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
            ${cat}
        </button>
    `).join('');

    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            window.currentCategory = category;
            refreshBlogGrid();
        });
    });
}

function refreshBlogGrid() {
    const searchQuery = document.getElementById('blog-search')?.value || '';
    const filtered = filterPosts(window.allPosts, window.currentCategory, searchQuery);

    const grid = document.getElementById('blog-grid');
    const featured = document.getElementById('featured-post');

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <div class="no-results-icon">🔍</div>
                <h3>No posts found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        if (featured) featured.style.display = 'none';
        return;
    }

    if (featured && !searchQuery && window.currentCategory === 'All') {
        const featuredPost = filtered.find(p => p.featured) || filtered[0];
        featured.innerHTML = renderFeaturedPost(featuredPost);
        featured.style.display = 'block';

        const gridPosts = filtered.filter(p => p.id !== featuredPost.id);
        grid.innerHTML = gridPosts.map((post, i) => renderBlogCard(post, i)).join('');
    } else {
        if (featured) featured.style.display = 'none';
        grid.innerHTML = filtered.map((post, i) => renderBlogCard(post, i)).join('');
    }

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

async function initBlogPage() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    grid.innerHTML = renderSkeletonCards(6);

    window.allPosts = await fetchBlogPosts();
    window.currentCategory = 'All';

    const categories = getCategories(window.allPosts);
    renderFilterButtons(categories);

    refreshBlogGrid();

    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(refreshBlogGrid, 300);
        });
    }
}

async function initBlogDetailPage() {
    const contentContainer = document.getElementById('blog-detail-content');
    if (!contentContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        contentContainer.innerHTML = '<div class="no-results"><h3>Post not found</h3></div>';
        return;
    }

    const posts = await fetchBlogPosts();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        contentContainer.innerHTML = '<div class="no-results"><h3>Post not found</h3></div>';
        return;
    }

    const author = getAuthorInfo(post);
    const imageUrl = getImageUrl(post);

    const heroImage = document.getElementById('detail-hero-image');
    if (heroImage) heroImage.src = imageUrl;

    const heroTitle = document.getElementById('detail-title');
    if (heroTitle) heroTitle.textContent = post.title;

    const heroCategory = document.getElementById('detail-category');
    if (heroCategory) heroCategory.textContent = post.category || 'General';

    const heroDate = document.getElementById('detail-date');
    if (heroDate) heroDate.textContent = formatDate(post.publishedAt);

    const heroReadTime = document.getElementById('detail-read-time');
    if (heroReadTime) heroReadTime.textContent = `${post.readTime || 5} min read`;

    const heroAuthorImg = document.getElementById('detail-author-img');
    if (heroAuthorImg) heroAuthorImg.src = author.avatar;

    const heroAuthorName = document.getElementById('detail-author-name');
    if (heroAuthorName) heroAuthorName.textContent = author.name;

    const contentDiv = document.getElementById('detail-content');
    if (contentDiv) contentDiv.innerHTML = marked.parse(post.content || post.excerpt);

    const tagsContainer = document.getElementById('detail-tags');
    if (tagsContainer && post.tags) {
        tagsContainer.innerHTML = post.tags.map(tag => 
            `<span class="blog-tag">#${tag}</span>`
        ).join('');
    }

    document.title = `${post.title} | Apri Yulda Blog`;

    const relatedContainer = document.getElementById('related-posts-grid');
    if (relatedContainer) {
        const relatedPosts = posts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 3);

        if (relatedPosts.length === 0) {
            const otherPosts = posts.filter(p => p.id !== post.id).slice(0, 3);
            relatedContainer.innerHTML = otherPosts.map((p, i) => renderBlogCard(p, i)).join('');
        } else {
            relatedContainer.innerHTML = relatedPosts.map((p, i) => renderBlogCard(p, i)).join('');
        }
    }
}

function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Subscribing...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = '✅ Subscribed!';
            btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
            form.querySelector('input[type="email"]').value = '';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

function initShareButtons() {
    const shareBtns = document.querySelectorAll('.share-btn');
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    shareBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            let shareUrl = '';

            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%20${url}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blog-grid')) {
        initBlogPage();
    }

    if (document.getElementById('blog-detail-content')) {
        initBlogDetailPage();
    }

    initNewsletterForm();
    initShareButtons();
});
