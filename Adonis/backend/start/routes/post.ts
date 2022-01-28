import Route from '@ioc:Adonis/Core/Route'

//Route.get('/', 'PostsController.index')



Route.resource('/posts', 'PostController')
.apiOnly()
.middleware({
    store: [' acl: admin '],
    update: [' acl: admin '],
    destroy: [' acl: admin ']
})

