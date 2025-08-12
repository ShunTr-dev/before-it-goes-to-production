;[
    {
        type: 'performance',
        name: 'Page weight',
        description: 'The weight of each page is between 0 and 500 KB.',
        tags: ['Performance'],
    },
    {
        type: 'performance',
        name: 'Minified HTML',
        description: 'Your HTML is minified.',
        tags: ['Performance'],
    },
    {
        type: 'performance',
        name: 'Lazy loading',
        description: 'Images, scripts and CSS need to be lazy loaded to improve the response time of the current page.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'Cookie size',
        description: 'Each cookie doesn’t exceed 4096 bytes and the domain doesn’t use more than 20 cookies.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'Third party components',
        description:
            'Third party iframes or components relying on external JS are replaced by static components when possible, to limit calls to external APIs.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'DNS resolution',
        description:
            'DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Preconnection',
        description:
            'DNS lookup, TCP handshake and TLS negotiation with services needed soon are done in advance during idle time using preconnect.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Prefetching',
        description: 'Resources that will be needed soon are requested in advance during idle time using prefetch.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Preloading',
        description: 'Resources needed in the current page are requested in advance using preload.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Google PageSpeed',
        description: 'All your pages have a Google PageSpeed score of at least 90/100.',
        tags: ['Testing'],
    },
]
