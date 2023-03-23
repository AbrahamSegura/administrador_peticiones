export default function addClassNames (location) {
  document.querySelectorAll('.element-list').forEach(e => {
    const name = e.textContent.replace('*', '/')
    const list = e.classList
    list.remove('hovered')
    if (name === location) list.add('hovered')
    if (location === '/' && name === '/DashBoard') list.add('hovered')
  })
}
