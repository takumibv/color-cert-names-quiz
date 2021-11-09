export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const existsGaId = GA_ID !== ''

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
  value: string
}

type BookmarkEvent = {
  action: 'click'
  category: 'bookmark'
  label: string
  value: string
}

type FilterEvent = {
  action: 'click'
  category: 'filter'
  label: string
  value: string
}

type AnswerEvent = {
  action: 'click'
  category: 'answer'
  label: string
  value: string
}

export type Event = ClickEvent | BookmarkEvent | FilterEvent | AnswerEvent;

// PVを測定する
export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({
  action, category, label, value = ''
}: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}