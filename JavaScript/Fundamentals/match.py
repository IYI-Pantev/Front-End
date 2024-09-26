role = 'moderator'

match role:
    case 'guest':
        print('Welcome guest')
    case 'moderator':
        print('welcome Moderator')
    case _:
        print('Welcome Unknown')