# articles API
specification for articles API

* routes for articles api must begin with ```/api/articles/```

## Routes

### /api/articles/get
Get contents of articles given article_id

  - **Methods**
    - `POST`
  - **Data params** `* : required`
    - article_id = [alphanumeric] *
  - **Sucess Response**
    - **code**: `200` <br />
      **content**: `{title: [string], content: [string]}`
  - **Error Response**
    - **code**: `404` <br />
      **content**: `{error: "article not found"}`
    - OR
    - **code**: `404` <br />
      **content**: `{error: "file not found"}`
  - **Sample call**
    ``` shell
        curl -X POST  -F 'article_id=article1' http://soulsion.com/api/articles/get
    ```


### /api/articles/post
Post user article