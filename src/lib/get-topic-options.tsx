export type TopicOptions =
  | 'Hide icon'
  | 'Hide media'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'
  | 'Preview mode'

type TopicOptionsKeys =
  | 'abstract'
  | 'action'
  | 'heading'
  | 'icon'
  | 'media'
  | 'reversed'

type TopicOptionsList = Record<TopicOptionsKeys, string | boolean>

const topicOptionsList: TopicOptionsList = {
  abstract: 'Hide abstract',
  action: 'Hide action',
  heading: 'Hide heading',
  icon: 'Hide icon',
  media: 'Hide media',
  reversed: 'Reversed order',
}

export const getTopicOptions = (array: TopicOptions[]) => {
  const topicOptions = array || []
  const options: TopicOptionsList = {
    abstract: true,
    action: true,
    heading: true,
    icon: true,
    media: true,
    reversed: false,
  }

  Object.keys(topicOptionsList).forEach(key => {
    const getOption = topicOptions.includes(topicOptionsList[key])
    options[key] = !getOption
  })

  return options
}
