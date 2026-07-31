import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import App from '/home/cortes/the-history-of-compton-FIXED/the history of compton/src/App'
import { events, people, eras, allTags, categories } from '/home/cortes/the-history-of-compton-FIXED/the history of compton/src/data'

const routes = [
  '/',
  '/timeline',
  '/people',
  '/categories',
  '/sources',
  '/random',
  ...eras.filter(e => e.era).map(e => `/era/${e.era}`),
  ...categories.map(c => `/category/${c.toLowerCase()}`),
  ...allTags.map(t => `/category/${t.toLowerCase()}`),
  ...events.map(e => `/event/${e.slug}`),
  ...people.map(p => `/person/${p.slug}`),
  '/era/does-not-exist',
  '/category/does-not-exist',
  '/event/does-not-exist',
  '/person/does-not-exist',
  '/totally/unknown/path',
]

let failures = 0
const warnings: Record<string, string[]> = {}
const origError = console.error
console.error = (...args: any[]) => {
  const msg = String(args[0])
  if (msg.includes('Warning')) {
    const route = (globalThis as any).__route || '?'
    ;(warnings[route] ??= []).push(args.map(String).join(' ').slice(0, 200))
  } else {
    origError(...args)
  }
}

for (const path of routes) {
  (globalThis as any).__route = path
  try {
    renderToString(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    )
  } catch (e) {
    failures++
    console.log(`RENDER ERROR on ${path}:`, (e as Error).message)
  }
}
console.error = origError

const warnRoutes = Object.entries(warnings)
for (const [route, ws] of warnRoutes) {
  console.log(`WARNINGS on ${route}:`)
  for (const w of [...new Set(ws)]) console.log('  -', w)
}

console.log(`\n${routes.length} routes rendered, ${failures} failures, ${warnRoutes.length} routes with warnings`)
