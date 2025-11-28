const brandThemes = {
  github: {
    background: '#000000',
    text: '#ffffff',
    border: '#30363d',
    linkBackground: '#ffffff',
    linkText: '#000000',
    tagBackground: '#161b22',
    tagText: '#ffffff'
  },
  linkedin: {
    background: '#0a66c2',
    text: '#ffffff',
    border: '#004182',
    linkBackground: '#ffffff',
    linkText: '#0a66c2',
    tagBackground: '#084f96',
    tagText: '#ffffff'
  },
  spotify: {
    background: '#1db954',
    text: '#191414',
    border: '#169c46',
    linkBackground: '#191414',
    linkText: '#1db954',
    tagBackground: '#191414',
    tagText: '#1db954'
  },
  steam: {
    background: '#171d25',
    text: '#c5c3c0',
    border: '#2a475e',
    linkBackground: '#c5c3c0',
    linkText: '#171d25',
    tagBackground: '#2a475e',
    tagText: '#c5c3c0'
  },
  youtube: {
    background: '#ff0000',
    text: '#ffffff',
    border: '#d00000',
    linkBackground: '#ffffff',
    linkText: '#ff0000',
    tagBackground: '#b30000',
    tagText: '#ffffff'
  },
};

const posts = [
  {
    title: 'GitHub',
    body: '',
    link: 'https://github.com/aaron-m-lewis',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'github'
  },
  {
    title: 'LinkedIn',
    body: '',
    link: 'https://www.linkedin.com/in/aaron-matthew-lewis/',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'linkedin'
  },
  {
    title: 'Spotify',
    body: '',
    link: 'https://open.spotify.com/user/h3fzh9y35elo0qy1fp7w99ftf?si=4fe9c342e05c4314',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'spotify'
  },
  {
    title: 'Steam',
    body: '',
    link: 'https://steamcommunity.com/profiles/76561199124729683/',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'steam'
  },
  {
    title: 'YouTube',
    body: '',
    link: 'https://www.youtube.com/@amlew',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'youtube'
  },
  {
    title: 'Teaching Assistant',
    body: '',
    link: '/teaching_assistant',
    linkText: 'Read more',
    target: '_self',
    tags: []
  },
  {
    title: 'Amazon SDE Intern',
    body: '',
    link: '/amazon_sde_intern',
    linkText: 'Read more',
    target: '_self',
    tags: []
  },
  {
    title: 'Freelance Developer',
    body: '',
    link: '/freelance_developer',
    linkText: 'Read more',
    target: '_self',
    tags: []
  },
];

const template = document.getElementById('post-template');
const grid = document.getElementById('post-grid');

function applyTheme(article, post) {
  if (!post.theme) return;

  const theme = brandThemes[post.theme];
  if (!theme) return;

  article.style.setProperty('--tile-bg', theme.background);
  article.style.setProperty('--tile-text', theme.text);
  article.style.setProperty('--tile-subtext', theme.subtext ?? theme.text);
  article.style.setProperty('--tile-border', theme.border ?? theme.background);
  article.style.setProperty('--tile-link-bg', theme.linkBackground ?? theme.text);
  article.style.setProperty('--tile-link-text', theme.linkText ?? theme.background);
  article.style.setProperty('--tag-bg', theme.tagBackground ?? theme.linkBackground ?? theme.text);
  article.style.setProperty('--tag-text', theme.tagText ?? theme.linkText ?? theme.background);
}

function render() {
  grid.innerHTML = '';

  posts.forEach(post => {
    const clone = template.content.cloneNode(true);
    const tile = clone.querySelector('[data-tile]');

    clone.querySelector('[data-title]').textContent = post.title;
    clone.querySelector('[data-body]').textContent = post.body;

    const linkTarget = post.target ?? '_self';
    tile.href = post.link;
    tile.target = linkTarget;
    tile.rel = linkTarget === '_blank' ? 'noreferrer noopener' : '';
    tile.setAttribute('aria-label', post.linkText ? `${post.title} - ${post.linkText}` : post.title);

    applyTheme(tile, post);

    const tagWrap = clone.querySelector('[data-tags]');
    post.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagWrap.appendChild(span);
    });

    grid.appendChild(clone);
  });
}

render();
