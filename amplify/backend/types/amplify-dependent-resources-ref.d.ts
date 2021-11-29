export type AmplifyDependentResourcesAttributes = {
    "api": {
        "Barfly": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "barflystorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "CreateUser": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}