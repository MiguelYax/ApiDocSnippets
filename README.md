# ApiDoc Snippets  
appidocsnippets  

  Inline Documentation for RESTful web APIs with ApiDoc - Snippets 
- [ApiDoc Api](#api)
- [ApiDoc Define](#apidefine)
- [ApiDoc Deprecated](#apideprecated)
- [ApiDoc Description](#apidescription)
- [ApiDoc Documentation](#apidocumentation)
- [ApiDoc Error Example](#apierrorexample)
- [ApiDoc Error Example](#apiexample)
- [ApiDoc Group](#apigroup)
- [ApiDoc Header](#apiheader)
- [ApiDoc Header Example](#apiheaderexample)
- [ApiDoc Name](#apiname)
- [ApiDoc Parameter](#apiparam)
- [ApiDoc Param Example](#apiparamexample)
- [ApiDoc Permission](#apipermission)
- [ApiDoc Sample Request](#apisamplerequest)
- [ApiDoc Success](#apisuccess)
- [ApiDoc Param Example](#apisuccessexample)
- [ApiDoc Use](#apiuse)
- [ApiDoc Version](#apiversion)
- [comment code](#comment)


### Example:  

### @api
#### `adApi + tab` 
```
@api {${method}} /${path} ${title}
``` 

### @apiDefine
#### `adDefine + tab` 
```
@apiDefine ${name} ${title}
    ${description} 
``` 

### @apiDeprecated
#### `adDeprecated + tab` 
```
@apiDeprecated ${text}
``` 

### @apiDescription
#### `adDescription + tab` 
```
@apiDescription ${text}
``` 

### @apiDocumentation
#### `adDocumentation + tab` 
```
/**
 * @api {${1:method}} /${2:path} ${3:title}
 * @apiName ${4:apiName}
 * @apiGroup ${5:group}
 * @apiVersion  ${6:major}.${7:minor}.${8:patch}
 * 
 * @apiParam  {${9:String}} ${10:paramName} ${11:description}
 * ${23}
 * 
 * @apiSuccess ${12:group:(${13:200})} {${14:String}} ${15:name} ${16:description}
 * 
 * @apiParamExample  {${17:type}} ${18:Request-Example:}
 * ${19:example}
 * 
 * 
 * @apiSuccessExample {${20:type}} ${21:Success-Response:}
 * ${22:example}
 * 
 */
``` 

### @apiErrorExample
#### `adErrorExample + tab` 
```
@apiErrorExample {${type}} ${title:Error-Response:}
    ${example}
``` 

### @apiExample
#### `adExample + tab` 
```
@apiExample {${type}} ${title:Example usage:}
    ${example}
``` 

### @apiGroup
#### `adGroup + tab` 
```
@apiGroup ${group}
``` 

### @apiHeader
#### `adHeader + tab` 
```
@apiHeader ${group:(${code:200})} {${type}} ${field} ${description}
``` 

### @apiHeaderExample
#### `adHeaderExample + tab` 
```
@apiHeaderExample {${type}} ${title:Request-Example:}
    ${example}
``` 

### @apiName
#### `adName + tab` 
```
@apiName ${name}
``` 

### @apiParam
#### `adParam + tab` 
```
@apiParam  {${String}} ${name} ${description}
``` 

### @apiParamExample
#### `adParamExample + tab` 
```
@apiParamExample  {${type}} ${title:Request-Example:}
    ${example}
``` 

### @apiPermission
#### `adPermission + tab` 
```
@apiPermission ${name}
``` 

### @apiSampleRequest
#### `adSampleRequest + tab` 
```
@apiSampleRequest ${url}
``` 

### @apiSuccess
#### `adSuccess + tab` 
```
@apiSuccess ${group:(${code:200})} {${type}} ${name} ${description}
``` 

### @apiSuccessExample
#### `adSuccessExample  + tab` 
```
@apiSuccessExample {${type}} ${title:Success-Response:}
    ${example}
``` 

### @apiUse
#### `adUse + tab` 
```
@apiUse ${name}
``` 

### @apiVersion
#### `adVersion + tab` 
```
@apiVersion  ${major}.${minor}.${patch}
``` 

### @comment
#### `cc + tab` 
```
/**
 * ${1}
 */
``` 

