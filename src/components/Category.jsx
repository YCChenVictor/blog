import { useState, useEffect } from 'react';

function Category() {
  const [tags, setTags] = useState(null)
  useEffect(() => {
    const tagComponents = Array.from(document.querySelector('#tags').children)
    const tags = tagComponents.map(x => Tag(x.innerText.replace(/^\s+|\s+$/gm,'')));
    setTags(tags)
  })

  return(
    <div className="p-4">
      {tags}
    </div>
  )
}

function Tag(name) {
  return(
    <div
        class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-hard-drive mr-2"
      >
        <line x1="22" y1="12" x2="2" y2="12"></line>
        <path
          d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        ></path>
        <line x1="6" y1="16" x2="6.01" y2="16"></line>
        <line x1="10" y1="16" x2="10.01" y2="16"></line>
      </svg>
      <a href={`#${name}`}>
        {name}
      </a>
    </div>
  )
}

export default Category;
