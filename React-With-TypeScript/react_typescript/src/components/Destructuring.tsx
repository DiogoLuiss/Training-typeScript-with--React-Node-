import React from "react"

interface IProps {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

function Destructuring({ title, content, commentsQty, tags }: IProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p> {content} </p>
      <p> Quantidade de comentários: {commentsQty} </p>
      <div>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Destructuring
