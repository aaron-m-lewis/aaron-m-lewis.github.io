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
  youtube: {
    background: '#ff0000',
    text: '#ffffff',
    border: '#d00000',
    linkBackground: '#ffffff',
    linkText: '#ff0000',
    tagBackground: '#b30000',
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
  leetcode: {
    background: '#ffa116',
    text: '#1a1a1a',
    border: '#e59400',
    linkBackground: '#1a1a1a',
    linkText: '#ffa116',
    tagBackground: '#2f2f2f',
    tagText: '#ffffff'
  },
  monkeytype: {
    background: '#323437',
    text: '#d1d0c5',
    border: '#646669',
    linkBackground: '#e2b714',
    linkText: '#323437',
    tagBackground: '#e2b714',
    tagText: '#323437'
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
    title: 'YouTube',
    body: '',
    link: 'https://www.youtube.com/@amlew',
    linkText: 'Open',
    target: '_blank',
    tags: [],
    theme: 'youtube'
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
