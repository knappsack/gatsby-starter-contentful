import * as React from "react"
import * as styles from "./text-section.styles"

import {
  documentToReactComponents,
  RenderMark,
  RenderNode,
  RenderText,
} from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

import type {
  ContentfulLinks,
  ContentfulTextSection,
} from "../contentful/contentful-text-section"

import { Analytics } from "../layout/analytics"
import { createJumpLink } from "../../lib/create-jump-link"
import { GridTemplate } from "../layout/grid-template"
import { createUuid } from "../../lib/create-uuid"
import { Heading } from "../elements/heading"

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
      [MARKS.BOLD]: text => <b css={styles.boldStyles}>{text}</b>,
      [MARKS.ITALIC]: text => <i css={styles.italicStyles}>{text}</i>,
      [MARKS.UNDERLINE]: text => <u css={styles.underlineStyles}>{text}</u>,
      [MARKS.CODE]: text => <code css={styles.codeStyles}>{text}</code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            css={styles.anchorStyles}
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
          <a css={styles.anchorStyles} href={entry.slug}>
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading variant="large">{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading variant="large">{createJumpLink({ node, children })}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading variant="large">{createJumpLink({ node, children })}</Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading variant="large">{createJumpLink({ node, children })}</Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading variant="large">{createJumpLink({ node, children })}</Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading variant="large">{createJumpLink({ node, children })}</Heading>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol css={styles.listStyles}>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul css={styles.listStyles}>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li css={styles.listItemStyles}>{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // @ts-ignore: value is not defined as type
        if (node.content[0].value === "") {
          return null
        } else {
          return <p css={styles.paragraphStyles}>{children}</p>
        }
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote css={styles.blockquoteStyles}>{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr css={styles.hrStyles} />,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = contentfulAssetMap.get(node.data.target.sys.id)
        return <img src={asset.url + `?q=90&w=1360`} alt={asset.description} />
      },
    },
    renderText: text => {
      return text
        .split("\n")
        .reduce((children: React.ReactNode[], textSegment, index) => {
          return [
            ...children,
            index > 0 && <br key={createUuid(`${index}`)} />,
            textSegment,
          ]
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
      <GridTemplate variant="text">
        {documentToReactComponents(json, options(links))}
      </GridTemplate>
    </Analytics>
  )
}
