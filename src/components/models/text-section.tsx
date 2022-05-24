import * as React from "react"

import {
  documentToReactComponents,
  RenderMark,
  RenderNode,
  RenderText,
} from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

import {
  ContentfulLinks,
  ContentfulTextSection,
} from "../contentful/contentful-text-section"

import { Analytics } from "../analytics"
import { createJumpLink } from "../../lib/create-jump-link"
import { GridTemplate } from "../layout/grid-template"
import { createUuid } from '../../lib/create-uuid'

type Options = {
  renderNode?: RenderNode
  renderMark?: RenderMark
  renderText?: RenderText
}

type OptionsProps = (links: ContentfulLinks) => Options

const options: OptionsProps = links => {
  // Create map of Assets
  const contentfulAssetMap = new Map()
  for (const asset of links.assets.block) {
    contentfulAssetMap.set(asset.sys.id, asset)
  }
  // Create map of Hyperlinks
  const contentfulEntryMap = new Map()
  for (const entry of links.entries.hyperlink) {
    contentfulEntryMap.set(entry.sys.id, entry)
  }

  return {
    renderMark: {
      [MARKS.BOLD]: text => <b data-style="bold">{text}</b>,
      [MARKS.ITALIC]: text => <i data-style="italic">{text}</i>,
      [MARKS.UNDERLINE]: text => <u data-style="underline">{text}</u>,
      [MARKS.CODE]: text => <code data-style="code">{text}</code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            data-style="a"
            href={node.data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const entry = contentfulEntryMap.get(node.data.target.sys.id)
        return (
          <a data-style="a" href={entry.slug}>
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 data-style="h1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 data-style="h2">{createJumpLink({ children })}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 data-style="h3">{createJumpLink({ children })}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 data-style="h4">{createJumpLink({ children })}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 data-style="h5">{createJumpLink({ children })}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 data-style="h6">{createJumpLink({ children })}</h6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => <ol data-style="ol">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul data-style="ul">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li data-style="li">{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // @ts-ignore: value is not defined as type
        if (node.content[0].value === "") {
          return null
        } else {
          return <p data-style="p">{children}</p>
        }
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote data-style="blockquote">{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr data-style="hr" />,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = contentfulAssetMap.get(node.data.target.sys.id)
        return (
          <img
            data-style="img"
            src={asset.url + `?q=90&w=1360`}
            alt={asset.description}
          />
        )
      },
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={createUuid(`${index}`)} />, textSegment]
      }, [])
    },
  }
}

type TextSectionProps = {
  model: ContentfulTextSection
}

export const TextSection = ({ model }: TextSectionProps) => {
  const {
    text: { json, links },
    variant,
    eventId,
  } = model

  return (
    <Analytics area="section" eventId={eventId} variant={variant}>
      <GridTemplate variant={variant}>
        {documentToReactComponents(json, options(links))}
      </GridTemplate>
    </Analytics>
  )
}
