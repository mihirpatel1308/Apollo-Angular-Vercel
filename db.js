module.exports = {
    posts: [
        { id: 1, title: "Lorem Ipsum", hours: 2, user_id: 123,department:"Angular",designation:"Junior Dev", type:"full time" },
        { id: 2, title: "Sic Dolor amet", hours: 6, user_id: 456,department:"DB",designation:"Sr. Dev",type:"part time" },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ]
}