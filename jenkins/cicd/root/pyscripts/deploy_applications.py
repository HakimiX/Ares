import os


def change_kubernetes_context(env):
    print('Changing Kubernetes Context')


def handler(projects, env, branch):
    """Main pipeline handler"""
    print('Running main flow')
    change_kubernetes_context(env)


def initialize():
    """Initialize parameters and environment variables"""
    env_vars = ['PROJECTS', 'ENVIRONMENT', 'BRANCH']
    missing = set(env_vars) - set(os.environ)
    if missing:
        print('Environment variables do not exist: %s' % missing)
    projects = os.getenv('PROJECTS')
    env = os.getenv('ENVIRONMENT')
    branch = os.getenv('BRANCH')

    print("Initializing environment variables \nProjects: {} \nEnvironment: {} \nBranch: {}"
          .format(projects, env, branch))
    handler(projects, env, branch)

initialize()
