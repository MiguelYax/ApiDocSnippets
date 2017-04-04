# ApiDoc Snippets  
appidocsnippets  

  # Inline Documentation for RESTful web APIs with ApiDoc - Snippets 
### Basic documetation example: 

![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/basic.gif) 
### Custom documentation example: 

![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/custom.gif) 
### Content:  

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
#### `apiApi + tab` 
```
@api {${method}} /${path} ${title}
``` 

### @apiDefine
#### `apiDefine + tab` 
```
@apiDefine ${name} ${title}
    ${description} 
``` 

### @apiDeprecated
#### `apiDeprecated + tab` 
```
@apiDeprecated ${text}
``` 

### @apiDescription
#### `apiDescription + tab` 
```
@apiDescription ${text}
``` 

### @apiDocumentation
#### `apiDocumentation + tab` 
```
/**
 * 
 * @api {${1:method}} /${2:path} ${3:title}
 * @apiName ${4:apiName}
 * @apiGroup ${5:group}
 * @apiVersion  ${6:major}.${7:minor}.${8:patch}
 * 
 * 
 * @apiParam  {${9:String}} ${10:paramName} ${11:description}
 * 
 * @apiSuccess ${12:(${13:200})} {${14:type}} ${15:name} ${16:description}
 * 
 * @apiParamExample  {${17:type}} ${18:Request-Example:}
   {
       ${19:property} : ${20:value}
   }
 * 
 * 
 * @apiSuccessExample {${21:type}} ${22:Success-Response:}
   {
       ${23:property} : ${24:value}
   }
 * 
 * 
 */
``` 

### @apiErrorExample
#### `apiErrorExample + tab` 
```
@apiErrorExample {${type}} ${title:Error-Response:}
    ${example}
``` 

### @apiExample
#### `apiExample + tab` 
```
@apiExample {${type}} ${title:Example usage:}
    ${example}
``` 

### @apiGroup
#### `apiGroup + tab` 
```
@apiGroup ${group}
``` 

### @apiHeader
#### `apiHeader + tab` 
```
@apiHeader ${group:(${code:200})} {${type}} ${field} ${description}
``` 

### @apiHeaderExample
#### `apiHeaderExample + tab` 
```
@apiHeaderExample {${type}} ${title:Request-Example:}
    ${example}
``` 

### @apiName
#### `apiName + tab` 
```
@apiName ${name}
``` 

### @apiParam
#### `apiParam + tab` 
```
@apiParam  {${String}} ${name} ${description}
``` 

### @apiParamExample
#### `apiParamExample + tab` 
```
@apiParamExample  {${type}} ${title:Request-Example:}
    ${example}
``` 

### @apiPermission
#### `apiPermission + tab` 
```
@apiPermission ${name}
``` 

### @apiSampleRequest
#### `apiSampleRequest + tab` 
```
@apiSampleRequest ${url}
``` 

### @apiSuccess
#### `apiSuccess + tab` 
```
@apiSuccess ${group:(${code:200})} {${type}} ${name} ${description}
``` 

### @apiSuccessExample
#### `apiSuccessExample  + tab` 
```
@apiSuccessExample {${type}} ${title:Success-Response:}
    ${example}
``` 

### @apiUse
#### `apiUse + tab` 
```
@apiUse ${name}
``` 

### @apiVersion
#### `apiVersion + tab` 
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

