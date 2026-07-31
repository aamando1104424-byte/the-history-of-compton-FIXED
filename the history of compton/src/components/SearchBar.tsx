interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-wrap">
      <input
        type="text"
        placeholder="Search events, people, eras…"
        aria-label="Search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
