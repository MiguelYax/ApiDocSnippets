# ApiDocSnippets
Api Doc Snippets for Visual Studio Code

- [api](#api)
- [apiDefine](#apidefine)
- [apiDeprecated](#apideprecated)
- [apiDescription](#apidescription)
- [apiDocumentation](#apidocumentation)
- [apiErrorExample](#apierrorexample)
- [apiExample](#apiexample)
- [apiGroup](#apigroup)
- [apiHeader](#apiheader)
- [apiHeaderExample](#apiheaderexample)
- [apiName ](#apiname-)
- [apiParam](#apiparam)
- [apiParamExample](#apiparamexample)
- [apiPermission](#apipermission)
- [apiSampleRequest](#apisamplerequest)
- [apiSuccess](#apisuccess)
- [apiSuccessExample](#apisuccessexample)
- [apiUse](#apiuse)
- [apiVersion ](#apiversion-)
- [comment](#comment)


### Example:  

### api
#### `adApi+tab` 
```
@api {${method}} /${path} ${title}
``` 

### apiDefine
#### `adDefine+tab` 
```
@apiDefine ${name} ${title}
	${description}
``` 

### apiDeprecated
#### `adDeprecated+tab` 
```
@apiDeprecated ${text}
``` 

### apiDescription
#### `adDescription+tab` 
```
@apiDescription ${text}
``` 

### apiDocumentation
#### `adDocumentation+tab` 
```
/**
 * @api {${0:method}} /${1:path} ${2:title}
 * @apiName ${3:apiName}
 * @apiGroup ${4:group}
 * @apiVersion  ${5:major}.${6:minor}.${7:patch}
 * 
 * @apiParam  {${8:String}} ${9:paramName} ${10:description}
 * ${20}
 * 
 * @apiSuccess ${11:group:(${12:200})} {${13:String}} ${14:name} ${15:description}
 * 
 * @apiParamExample  {${16:type}} ${17:Request-Example:}
	${18:example}
 * 
 * 
 * @apiSuccessExample {${19:type}} ${20:Success-Response:}
	${21:example}
 * 
 */
``` 

### apiErrorExample
#### `adErrorExample+tab` 
```
@apiErrorExample {${type}} ${title:Error-Response:}
	${example}
``` 

### apiExample
#### `adExample+tab` 
```
@apiExample {${type}} ${title:Example usage:}
	${example}
``` 

### apiGroup
#### `adDescription+tab` 
```
@apiGroup ${group}
``` 

### apiHeader
#### `adHeader+tab` 
```
@apiHeader ${group:(${code:200})} {${type}} ${field} ${description}
``` 

### apiHeaderExample
#### `adHeaderExample+tab` 
```
@apiHeaderExample {${type}} ${title:Request-Example:}
	${example}
``` 

### apiName 
#### `adName+tab` 
```
@apiName ${name}
``` 

### apiParam
#### `adParameter+tab` 
```
@apiParam  {${String}} ${name} ${description}
``` 

### apiParamExample
#### `adParamExample+tab` 
```
@apiParamExample  {${type}} ${title:Request-Example:}
	${example}
``` 

### apiPermission
#### `adPermission+tab` 
```
@apiPermission ${name}
``` 

### apiSampleRequest
#### `adSampleRequest+tab` 
```
@apiSampleRequest ${url}
``` 

### apiSuccess
#### `adSuccess+tab` 
```
@apiSuccess ${group:(${code:200})} {${type}} ${name} ${description}
``` 

### apiSuccessExample
#### `adSuccessExample +tab` 
```
@apiSuccessExample {${type}} ${title:Success-Response:}
	${example}
``` 

### apiUse
#### `adUse+tab` 
```
@apiUse ${name}
``` 

### apiVersion 
#### `adVersion+tab` 
```
@apiVersion  ${major}.${minor}.${patch}
``` 

### comment
#### `cc+tab` 
```
/**
 * ${1}
 */
``` 