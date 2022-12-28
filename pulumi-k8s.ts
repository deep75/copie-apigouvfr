import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const apigouvfrDeployment = new kubernetes.apps.v1.Deployment("apigouvfrDeployment", {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
        name: "apigouvfr",
        labels: {
            app: "apigouvfr",
        },
    },
    spec: {
        replicas: 4,
        selector: {
            matchLabels: {
                app: "apigouvfr",
            },
        },
        template: {
            metadata: {
                labels: {
                    app: "apigouvfr",
                },
            },
            spec: {
                containers: [{
                    name: "apigouvfr",
                    image: "mcas/apigouvfr:latest",
                    ports: [{
                        containerPort: 3000,
                    }],
                }],
            },
        },
    },
});
const apigouvfr_serviceService = new kubernetes.core.v1.Service("apigouvfr_serviceService", {
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name: "apigouvfr-service",
    },
    spec: {
        type: "ClusterIP",
        selector: {
            app: "apigouvfr",
        },
        ports: [{
            protocol: "TCP",
            port: 80,
            targetPort: 3000,
        }],
    },
});
const apigouvfr_ingressIngress = new kubernetes.networking.v1.Ingress("apigouvfr_ingressIngress", {
    apiVersion: "networking.k8s.io/v1",
    kind: "Ingress",
    metadata: {
        name: "apigouvfr-ingress",
    },
    spec: {
        defaultBackend: {
            service: {
                name: "apigouvfr-service",
                port: {
                    number: 80,
                },
            },
        },
    },
});
