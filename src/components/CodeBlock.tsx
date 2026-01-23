type CodeBlockProps = {
    code: string
  }
  
  const CodeBlock = ({ code }: CodeBlockProps) => {
    return (
      <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>//this tag tells the browser to display the text in a fixed-width font and preserve whitespace and line breaks
    )
  }
  
  export default CodeBlock