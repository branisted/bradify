// src/components/SearchBar/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
            <input
                type="text"
                placeholder="Search for a song, artist, or album"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{ width: 300, padding: 8 }}
            />
            <button type="submit" style={{ marginLeft: 8 }}>Search</button>
        </form>
    );
}