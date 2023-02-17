export type Source = 'bilibili' | 'youtube'

const BILIBILI_SOURCE = '//player.bilibili.com/player.html?aid=821884862&bvid=BV1jG4y1P7cy&cid=1008865725&page=1'

const YOUTUBE_SOURCE = 'https://www.youtube.com/embed/JId_GqRjuP0'
export const resolveSource = (source: Source) => source === 'bilibili' ? BILIBILI_SOURCE : YOUTUBE_SOURCE
