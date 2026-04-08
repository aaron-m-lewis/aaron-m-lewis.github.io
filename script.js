const brandThemes = {
  github: {
    background: '#000000',
    text: '#ffffff',
    border: '#30363d',
    linkBackground: '#ffffff',
    linkText: '#000000',
    tagBackground: '#30363d',
    tagText: '#ffffff'
  },
  linkedin: {
    background: '#0a66c2',
    text: '#ffffff',
    border: '#004182',
    linkBackground: '#ffffff',
    linkText: '#0a66c2',
    tagBackground: '#004182',
    tagText: '#ffffff'
  },
  youtube: {
    background: '#ff0000',
    text: '#ffffff',
    border: '#d00000',
    linkBackground: '#ffffff',
    linkText: '#ff0000',
    tagBackground: '#d00000',
    tagText: '#ffffff'
  },
  spotify: {
    background: '#1ed760',
    text: '#191414',
    border: '#169c46',
    linkBackground: '#191414',
    linkText: '#1ed760',
    tagBackground: '#169c46',
    tagText: '#191414'
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
  bandcamp: {
    background: '#1da0c3',
    text: '#ffffff',
    border: '#4c8594',
    linkBackground: '#ffffff',
    linkText: '#1da0c3',
    tagBackground: '#4c8594',
    tagText: '#ffffff'
  },
  leetcode: {
    background: '#f8a222',
    text: '#080808',
    border: '#e59400',
    linkBackground: '#080808',
    linkText: '#f8a222',
    tagBackground: '#e59400',
    tagText: '#080808'
  },
  monkeytype: {
    background: '#2c2e31',
    text: '#e2b714',
    border: '#646669',
    linkBackground: '#e2b714',
    linkText: '#2c2e31',
    tagBackground: '#646669',
    tagText: '#e2b714'
  },
};

const posts = [
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
    title: 'GitHub',
    body: '',
    link: 'https://github.com/aaron-m-lewis',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'github'
  },
  {
    title: 'LeetCode',
    body: '',
    link: 'https://leetcode.com/u/aaron__lewis/',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'leetcode'
  },
  {
    title: 'Monkeytype',
    body: '',
    link: 'https://monkeytype.com/profile/amlew',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'monkeytype'
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
    title: 'Bandcamp',
    body: '',
    link: 'https://bandcamp.com/amlew',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'bandcamp'
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
    title: 'Steam',
    body: '',
    link: 'https://steamcommunity.com/profiles/76561199124729683/',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'steam'
  },
];

const template = document.getElementById('post-template');
const grid = document.getElementById('post-grid');

function coalesce() {
  for (let i = 0; i < arguments.length; i++) {
    const value = arguments[i];
    if (value !== null && value !== undefined) {
      return value;
    }
  }
  return undefined;
}

function applyTheme(article, post) {
  if (!post.theme) return;

  const theme = brandThemes[post.theme];
  if (!theme) return;

  article.style.setProperty('--tile-bg', theme.background);
  article.style.setProperty('--tile-text', theme.text);
  article.style.setProperty('--tile-subtext', coalesce(theme.subtext, theme.text));
  article.style.setProperty('--tile-border', coalesce(theme.border, theme.background));
  article.style.setProperty('--tile-link-bg', coalesce(theme.linkBackground, theme.text));
  article.style.setProperty('--tile-link-text', coalesce(theme.linkText, theme.background));
  article.style.setProperty('--tag-bg', coalesce(theme.tagBackground, theme.linkBackground, theme.text));
  article.style.setProperty('--tag-text', coalesce(theme.tagText, theme.linkText, theme.background));
}

function render() {
  grid.innerHTML = '';

  posts.forEach(function (post) {
    const clone = template.content.cloneNode(true);
    const tile = clone.querySelector('[data-tile]');

    clone.querySelector('[data-title]').textContent = post.title;
    clone.querySelector('[data-body]').textContent = post.body;

    const linkTarget = coalesce(post.target, '_self');
    tile.href = post.link;
    tile.target = linkTarget;
    tile.rel = linkTarget === '_blank' ? 'noreferrer noopener' : '';
    tile.setAttribute('aria-label', post.linkText ? `${post.title} - ${post.linkText}` : post.title);

    applyTheme(tile, post);

    const tagWrap = clone.querySelector('[data-tags]');
    post.tags.forEach(function (tag) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagWrap.appendChild(span);
    });

    grid.appendChild(clone);
  });
}

render();
