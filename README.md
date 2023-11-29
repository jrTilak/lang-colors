# Lang-colors 

This is simple api that returns the color of language as shown in github repo card.

# Using 
`https://lang-colors.jrtilak.me/api/v1/lang/<your_language>`

# Examples
 - 200
  `https://lang-colors.jrtilak.me/api/v1/lang/javascript`

```json
{
    "status": 200,
    "color": "#f1e05a"
}
```
 - 404
   `https://lang-colors.jrtilak.me/api/v1/lang/abcd`
   
```json
{
    "status": 404,
    "message": "Language not found!"
}
```
