import Route from '@ioc:Adonis/Core/Route'


Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.Show')
Route.put('/users/register', 'Users/Register.Update')

Route.post('/users/register', 'Users/ForgotPassword.store')
Route.get('/users/register/:key', 'Users/ForgotPassword.Show')
Route.put('/users/register', 'Users/ForgotPassword.Update')

Route.get('/users', 'Users/Main.show').middleware('auth')
Route.put('/users', 'Users/Main.update').middleware('auth')

Route.get('/users/avatar', 'Users/Avatar.update').middleware('auth')
