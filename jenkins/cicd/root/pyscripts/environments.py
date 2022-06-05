class Environment:
    kubernetes_context = ''
    kubernetes_namespace = ''
    chart_postfix = ''

    def __init__(self, _kubernetes_context, _kubernetes_namespace, _chart_post_fix):
        self.kubernetes_context = _kubernetes_context
        self.kubernetes_namespace = _kubernetes_namespace
        self.chart_postfix = _chart_post_fix

    def __str__(self):
        return 'Kubernetes Context: {} \nKubernetes Namespace: {} \nChart Postfix: {}'\
            .format(self.kubernetes_context, self.kubernetes_namespace, self.chart_postfix)


environment_comfigs = {
    'dev': Environment('ares-jenkins', 'ares', 'dev'),
    'test': Environment('ares-jenkins-test', 'ares', 'test'),
    'prep': Environment('ares-jenkins-prep', 'ares', 'test'),
    'prod': Environment('ares-jenkins-prop', 'ares', 'test')
}
