import React, { useState } from "react";
import { searchPhoto, useGalleryContext } from "../../contexts";
import { SearchContainerStyles, SearchInputStyles } from "./Search.style";

export default function Search() {
  const { dispatch } = useGalleryContext();
  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") dispatch(searchPhoto(query));
  };

  return (
    <SearchContainerStyles>
      <SearchInputStyles
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by name"
      />
    </SearchContainerStyles>
  );
}
