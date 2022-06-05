import os
import sys

from environments import environment_configs

def change_kubernetes_context(env):
    print('Changing Kubernetes Context')
    #cmd = 'kubectl config use-context {}'.format(environment_configs[env].kubernetes_context)
    cmd = 'kubectl config get-contexts'
    cmd_result = os.system(cmd)
    if cmd_result != 0:
        print('Failed to change kubernetes context')
        sys.exit(1)


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
