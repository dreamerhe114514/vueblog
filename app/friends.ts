import type { FeedGroup } from '~/types/feed'
import { getGhAvatar } from './utils/img'

export default [{
    name: '超级好朋友',
    desc: '',
    entries: [{
        author: '王九弦SZ·Ninty',
        sitenick: '汐塔魔法屋',
        title: '汐塔魔法屋',
        desc: '种下一颗有故事的种子，让它带着魔法和奇迹生根发芽',
        link: 'https://blog.storical.space/',
        feed: 'https://gug.thisis.host/atom.xml',
        icon: 'https://blog.storical.space/images/icon.png',
        avatar: 'https://blog.storical.space/images/icon.png',
        archs: ['博客', 'Vue'],
        date: '2025-06-15',
        comment: '超级好朋友，技术好友，爱好折腾。',
    }, {
        author: '何星梦',
        desc: '我自己',
        link: 'https://blog.20097747.xyz/',
        feed: 'https://blog.20097747.xyz/feed.xml',
        icon: 'https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/20250510/梦霞云阴都.9rjm7vhbgu.webp 1x, https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/20250510/梦霞云阴都.9rjm7vhbgu.webp',
        avatar: 'https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/20250510/梦霞云阴都.9rjm7vhbgu.webp 1x, https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/20250510/梦霞云阴都.9rjm7vhbgu.webp',
        archs: ['Vue', '博客'],
        date: '2025-06-01',
        comment: '我自己',
    }], 
}] satisfies FeedGroup[]
