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

### api
#### `adApi + tab` 
```
@api {${method}} /${path} ${title}
``` 

### apiDefine
#### `adDefine + tab` 
```
@apiDefine ${name} ${title}
    ${description} 
``` 

### apiDeprecated
#### `adDeprecated + tab` 
```
@apiDeprecated ${text}
``` 

### apiDescription
#### `adDescription + tab` 
```
@apiDescription ${text}
``` 

### apiDocumentation
#### `adDocumentation + tab` 
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
 * ${18:example}
 * 
 * 
 * @apiSuccessExample {${19:type}} ${20:Success-Response:}
 * ${21:example}
 * 
 */
``` 

### apiErrorExample
#### `adErrorExample + tab` 
```
@apiErrorExample {${type}} ${title:Error-Response:}
    ${example}
``` 

### apiExample
#### `adExample + tab` 
```
@apiExample {${type}} ${title:Example usage:}
    ${example}
``` 

### apiGroup
#### `adGroup + tab` 
```
@apiGroup ${group}
``` 

### apiHeader
#### `adHeader + tab` 
```
@apiHeader ${group:(${code:200})} {${type}} ${field} ${description}
``` 

### apiHeaderExample
#### `adHeaderExample + tab` 
```
@apiHeaderExample {${type}} ${title:Request-Example:}
    ${example}
``` 

### apiName
#### `adName + tab` 
```
@apiName ${name}
``` 

### apiParam
#### `adParam + tab` 
```
@apiParam  {${String}} ${name} ${description}
``` 

### apiParamExample
#### `adParamExample + tab` 
```
@apiParamExample  {${type}} ${title:Request-Example:}
    ${example}
``` 

### apiPermission
#### `adPermission + tab` 
```
@apiPermission ${name}
``` 

### apiSampleRequest
#### `adSampleRequest + tab` 
```
@apiSampleRequest ${url}
``` 

### apiSuccess
#### `adSuccess + tab` 
```
@apiSuccess ${group:(${code:200})} {${type}} ${name} ${description}
``` 

### apiSuccessExample
#### `adSuccessExample  + tab` 
```
@apiSuccessExample {${type}} ${title:Success-Response:}
    ${example}
``` 

### apiUse
#### `adUse + tab` 
```
@apiUse ${name}
``` 

### apiVersion
#### `adVersion + tab` 
```
@apiVersion  ${major}.${minor}.${patch}
``` 

### comment
#### `cc + tab` 
```
/**
 * ${1}
 */
``` 

