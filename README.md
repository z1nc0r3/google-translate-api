# google-translate-api

## The API from the official Google Translate Chrome extension.

- Change the source language from the URL parameter - **sl**
- Change the translated language from the URL query parameter - **tl**

- To run the script: ```node app.js```

_eg: Translation of the word "**mother**" from **EN** to **SI**_

_Result:_
```
{
  sentences: [ { trans: 'මව', orig: 'mother', backend: 1 } ],
  src: 'en',
  confidence: 1,
  spell: {},
  ld_result: {
    srclangs: [ 'en' ],
    srclangs_confidences: [ 1 ],
    extended_srclangs: [ 'en' ]
  }
}
```
