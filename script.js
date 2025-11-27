const posts = [
  {
    title: 'GitHub',
    body: '',
    link: 'https://github.com/aaron-m-lewis',
    tags: [],
    pinned: true
  },
  {
    title: 'LinkedIn',
    body: '',
    link: 'https://www.linkedin.com/in/aaron-matthew-lewis/',
    tags: [],
    pinned: true
  },
  {
    title: 'Resume',
    body: '',
    link: 'media/resume_placeholder.pdf',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    pinned: true
  },
  {
    title: 'Spotify',
    body: '',
    link: 'https://open.spotify.com/user/h3fzh9y35elo0qy1fp7w99ftf?si=4fe9c342e05c4314',
    tags: [],
    pinned: true
  },
  {
    title: 'Steam',
    body: '',
    link: 'https://steamcommunity.com/profiles/76561199124729683/',
    tags: [],
    pinned: true
  },
  {
    title: 'YouTube',
    body: '',
    link: 'https://www.youtube.com/@amlew',
    tags: [],
    pinned: true
  },
  {
    title: 'Teaching Assistant',
    body: '',
    link: '/teaching_assistant',
    tags: [],
    pinned: false
  },
  {
    title: 'Amazon SDE Intern',
    body: '',
    link: '/amazon_sde_intern',
    tags: [],
    pinned: false
  },
  {
    title: 'Freelance Developer',
    body: '',
    link: '/freelance_developer',
    tags: [],
    pinned: false
  },
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
      const linkEl = clone.querySelector('[data-link]');
      const isExternal = /^https?:\/\//i.test(post.link);

      linkEl.href = post.link;
      const linkText = post.linkText ?? (isExternal ? 'Open' : 'Read more');
      const linkTarget = post.target ?? (isExternal ? '_blank' : '_self');

      linkEl.textContent = linkText;
      linkEl.target = linkTarget;

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
