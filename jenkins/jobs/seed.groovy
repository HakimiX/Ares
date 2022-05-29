pipelineJob('deploy-applications') {
    parameters {
        choiceParam('PROJECTS', ['ares'])
        choiceParam('ENVIRONMENT', ['dev', 'test'])
        choiceParam('BRANCH', ['master', 'dev'])
    }
    definition {
        properties {
            disableConcurrentBuilds()
            buildDiscarder {
                strategy {
                    logRotator {
                        daysToKeepStr('100')
                        numToKeepStr('100')
                        artifactDaysToKeepStr('10')
                        artifactNumToKeepStr('10')
                    }
                }
            }
        }
        cpsScm {
            scm {
                git {
                    remote {
                        url('https://github.com/HakimiX/Ares.git')
                        credentials('GITHUB_ACCESS_TOKEN')
                    }
                    branch('master')
                }
            }
            scriptPath('jenkins/Jenkinsfile.deploy-applications')
            lightweight()
        }
    }
}
