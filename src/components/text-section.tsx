import React from 'react'
import slugify from '@sindresorhus/slugify'
import {
  Block,
  BLOCKS,
  Inline,
  INLINES,
  MARKS,
  Node,
  Text,
} from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ContentfulTextSection } from './models/contentful-text-section'

const createJumpLink = (children: {}) => {
  const slug = children[0].key
    ? children[0]?.props?.children.toString()
    : children[0].toString()

  return (
    <a href={`#${slugify(slug)}`} className="">
      {children}
    </a>
  )
}

type CommonNode = Node & {
  content: Text | Block | Inline
}
type NodeRenderer = {
  (
    node: Block | Inline | CommonNode,
    children: React.ReactNode | any
  ): React.ReactNode
}
type RenderNode = {
  [k: string]: NodeRenderer
}
type RenderMark = {
  [k: string]: (text: React.ReactNode) => React.ReactNode
}

type OptionsProps = {
  renderNode: RenderNode
  renderMark: RenderMark
}

const options: OptionsProps = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => <code className="code font-mono">{text}</code>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className=""
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h2 className="">{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="">{createJumpLink(children)}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="">{createJumpLink(children)}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="">{createJumpLink(children)}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="">{createJumpLink(children)}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="">{createJumpLink(children)}</h6>
    ),

    [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="">{children}</ul>,

    [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p className="">{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="">
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
          className=""
        />
      )
    },
  },
}

type TextSectionProps = {
  model: ContentfulTextSection
}

export const TextSection = ({
  model: {
    text: { json },
  },
}: TextSectionProps) => {
  return <>{documentToReactComponents(json, options)}</>
}
