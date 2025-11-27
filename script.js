const posts = [
  {
    title: 'GitHub',
    body: '',
    link: '',
    tags: [],
    pinned: true
  },
  {
    title: 'LinkedIn',
    body: '',
    link: '',
    tags: [],
    pinned: true
  },
  {
    title: 'Resume',
    body: '',
    link: '',
    tags: [],
    pinned: true
  },
  {
    title: 'Spotify',
    body: '',
    link: '',
    tags: [],
    pinned: false
  },
  {
    title: 'Amazon Internship',
    body: '',
    link: '',
    tags: [],
    pinned: false
  },
  {
    title: 'Notre Dame Bengal Bouts',
    body: '',
    link: '',
    tags: [],
    pinned: false
  },
  {
    title: 'Strength Training',
    body: '',
    link: '',
    tags: [],
    pinned: false
  },
  {
    title: 'Notre Dame Men\'s Rowing',
    body: '',
    link: '',
    tags: [],
    pinned: false
  },
  {
    title: 'Gaming',
    body: '',
    link: '',
    tags: [],
    pinned: false
  }
];

const template = document.getElementById('post-template');
const grid = document.getElementById('post-grid');

function render() {
  grid.innerHTML = '';

  posts
    .slice()
    .sort((a, b) => Number(b.pinned) - Number(a.pinned))
    .forEach(post => {
      const clone = template.content.cloneNode(true);
      const article = clone.querySelector('article');

      clone.querySelector('[data-title]').textContent = post.title;
      clone.querySelector('[data-body]').textContent = post.body;
      clone.querySelector('[data-link]').href = post.link;
      clone.querySelector('[data-link]').textContent = post.link.includes('http') ? 'Open' : 'Read more';

      const tagWrap = clone.querySelector('[data-tags]');
      post.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagWrap.appendChild(span);
      });

      if (post.pinned) {
        article.classList.add('pinned');
      }

      grid.appendChild(clone);
    });
}

render();
