const APP_CONFIG = {
  // API_BASE_URL: 'http://localhost:1337',
    API_BASE_URL: 'https://my-personal-blog-areb.onrender.com',

};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.admin-link').forEach(link => {
    link.href = `${APP_CONFIG.API_BASE_URL}/admin`;
  });
});
