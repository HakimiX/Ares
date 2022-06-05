import os


def initialize():
    """Initialize parameters and environment variables"""
    env_vars = ['PROJECTS', 'ENVIRONMENT', 'BRANCH']
    missing = set(env_vars) - set(os.environ)
    if missing:
        print('Environment variables do not exist: %s' % missing)
    projects = os.getenv('PROJECTS')
    env = os.getenv('ENVIRONMENT')
    branch = os.getenv('BRANCH')

    print('''
    Environment variables
    Projects: {}, Environment: {}, Branch: {} 
    '''.format(projects, env, branch))


initialize()
