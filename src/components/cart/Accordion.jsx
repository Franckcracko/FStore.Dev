export const Accordion = ({ summary, children, title, open = false }) => {
  return (
    <div className='flex' >
      <h2 className='text-2xl font-bold mr-3 inline-block'>{title}</h2>
      <details className='mt-2 ' open={open}>
        <summary>{summary}</summary>
        <div className="pt-4">
          {children}
        </div>
      </details>
    </div>
  )
}
