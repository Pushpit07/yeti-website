// components/BlogContentClient.tsx
'use client'
import { useState, useMemo } from 'react'
import ReactMarkdown from 'react-markdown' 
// 💡 New imports for robust formatting:
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw' 

const MAX_PREVIEW_HEIGHT = 160 

export function BlogContentClient({
  markdownContent,
  isInitiallyCollapsed = true
}: {
  markdownContent: string,
  isInitiallyCollapsed?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(!isInitiallyCollapsed)

  // Use a transition height large enough for expanded blogs
  const maxHeightStyle = useMemo(() => ({
    maxHeight: isExpanded ? '5000px' : `${MAX_PREVIEW_HEIGHT}px`
  }), [isExpanded])

  const handleToggle = () => {
    setIsExpanded(prev => !prev)
  }

  const isContentAvailable = markdownContent && markdownContent.length > 0
  if (!isContentAvailable) return null

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div 
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={maxHeightStyle}
        >
            {/* Renders the markdown content from the sheet cell */}
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <ReactMarkdown
                    // 💡 USE PLUGINS HERE for GFM features and raw HTML (line breaks)
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    // Force the Markdown parser to recognize double spaces at the end of a line as a <br/>
                    // This often helps with single line breaks in simple lists.
                    components={{
                        // You can customize HTML elements here if needed, 
                        // e.g., to ensure h2 is always black
                        h2: ({node, ...props}) => <h2 className="text-black" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-black" {...props} />,
                        ul: ({node, ...props}) => <ul className="pl-5 list-disc" {...props} />,
                        // Add automatic line breaks for better formatting control
                        br: ({node, ...props}) => <br {...props} />
                    }}
                >
                    {/* Replace double space line breaks with two line breaks to force a paragraph break in standard Markdown */}
                    {markdownContent.replace(/ {2}\n/g, '\n\n')}
                </ReactMarkdown>
            </div>
        </div>

        {/* Gradient Overlay */}
        {!isExpanded && markdownContent.length > 200 && ( 
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {(markdownContent.length > 300 || markdownContent.includes('\n\n')) && ( // Better logic: check if content is long OR has forced paragraphs
        <button 
          onClick={handleToggle}
          className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide transition-colors self-start"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  )
}